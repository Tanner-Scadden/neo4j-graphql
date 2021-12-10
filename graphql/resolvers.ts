import ogm from 'graphql/ogm';
import axios from 'axios';
import crypto from 'crypto';
import jwtUtils from 'utils/server/jwt';
import authenticationUtils from 'utils/server/authentication';

import type { IResolvers } from '@graphql-tools/utils';

const hash = crypto.createHash('sha1');
const User = ogm.model('User');

const { PODCAST_KEY = '', PODCAST_SECRET = '' } = process.env;

const resolvers: IResolvers = {
  Query: {
    podcastSearch: async (_source, { searchTerm }) => {
      const timestamp = Date.now() / 1000;
      try {
        const { data } = await axios.get(
          `https://api.podcastindex.org/api/1.0/search/byterm?q=${searchTerm}`,
          {
            headers: {
              'User-Agent': 'grandstack-fm-tanner',
              // @ts-ignore
              'X-Auth-Date': timestamp,
              'X-Auth-Key': PODCAST_KEY,
              Authorization: hash
                .update(PODCAST_KEY + PODCAST_SECRET + timestamp)
                .digest('hex'),
            },
          }
        );

        return data.feeds.map((feed: any) => ({
          itunesId: feed.itunesId,
          title: feed.title,
          description: feed.description,
          feedURL: feed.url,
          artwork: feed.artwork,
          categories: Object.values(feed.categories || {}),
        }));
      } catch (e) {
        return e;
      }
    },
  },
  Mutation: {
    register: async (_source, { email, password }) => {
      const [existing] = await User.find({
        where: {
          email,
        },
      });

      if (existing) {
        throw new Error('User already exists with that email');
      }

      const hashedPassword = authenticationUtils.hashPassword(password);

      const {
        users: [user],
      } = await User.create({
        input: {
          email,
          hashedPassword,
        },
      });

      return {
        token: jwtUtils.createJwt(user),
      };
    },
    login: async (_source, { email, password }) => {
      const [user] = await User.find({
        where: {
          email,
        },
      });

      if (!user) {
        throw new Error('User with that email does not exists');
      }

      const isCorrectPassword = authenticationUtils.verifyPassword(
        password,
        user.hashedPassword
      );

      if (!isCorrectPassword) {
        throw new Error('Incorrect password');
      }

      return {
        token: jwtUtils.createJwt(user),
      };
    },
    subscribeToPodcast: async (_source, { itunesId }, ctx) => {
      if (!ctx.jwt) {
        throw new Error('You must be logged in to subscribe to a podcast');
      }

      const timestamp = Date.now() / 1000;
      const {
        data: { feed },
      } = await axios.get(
        `https://api.podcastindex.org/api/1.0/podcasts/byitunesid?id=${itunesId}`,
        {
          headers: {
            'User-Agent': 'grandstack-fm-tanner',
            // @ts-ignore
            'X-Auth-Date': timestamp,
            'X-Auth-Key': PODCAST_KEY,
            Authorization: hash
              .update(PODCAST_KEY + PODCAST_SECRET + timestamp)
              .digest('hex'),
          },
        }
      );

      const session = ctx.driver.session();

      const { records } = await session.run(
        `
          MATCH (u:User {id: $userId})
          MERGE (p:Podcast {itunesId: $itunesId})
          MERGE (u)-[:SUBSCRIBES_TO]->(p)

          SET p += $fields
          
          RETURN p
        `,
        {
          userId: ctx.jwt.id,
          itunesId: feed.itunesId,
          fields: {
            title: feed.title,
            link: feed.link,
            description: feed.description,
            feedURL: feed.url,
            image: feed.artwork,
          },
        }
      );

      session.close();
      return records[0].get('p').properties;
    },
  },
};

export default resolvers;
