import jwt from 'jsonwebtoken';
import { JWT_MAX_AGE } from 'constants/domainLogic';

import type { LoggedInUser } from '@app/core';
import type { NextApiRequest } from 'next';

const { JWT_SECRET } = process.env;

function createJwt(user: LoggedInUser) {
  const token = jwt.sign(
    {
      ...user,
      tokenCreatedAt: new Date(),
    },
    JWT_SECRET as string,
    {
      expiresIn: JWT_MAX_AGE,
    }
  );

  return token;
}

function decodeJwt(req: NextApiRequest): LoggedInUser | null {
  const token = req?.headers?.authorization?.split(' ')[1];

  if (!token) {
    return null;
  }

  try {
    const user = jwt.verify(token, JWT_SECRET as string, {
      algorithms: ['HS256'],
    });
    return user as LoggedInUser;
  } catch (e) {
    return null;
  }
}

const jwtModule = {
  createJwt,
  decodeJwt,
};

export default jwtModule;
