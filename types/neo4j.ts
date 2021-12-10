import { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
};

export type Query = {
  __typename?: "Query";
  podcastSearch?: Maybe<Array<Maybe<PodcastSearchResult>>>;
  podcasts: Array<Podcast>;
  podcastsCount: Scalars["Int"];
  podcastsAggregate: PodcastAggregateSelection;
  users: Array<User>;
  usersCount: Scalars["Int"];
  usersAggregate: UserAggregateSelection;
  podcastSearchResults: Array<PodcastSearchResult>;
  podcastSearchResultsCount: Scalars["Int"];
  podcastSearchResultsAggregate: PodcastSearchResultAggregateSelection;
  authTokens: Array<AuthToken>;
  authTokensCount: Scalars["Int"];
  authTokensAggregate: AuthTokenAggregateSelection;
};

export type QueryPodcastSearchArgs = {
  searchTerm: Scalars["String"];
};

export type QueryPodcastsArgs = {
  where?: Maybe<PodcastWhere>;
  options?: Maybe<PodcastOptions>;
};

export type QueryPodcastsCountArgs = {
  where?: Maybe<PodcastWhere>;
};

export type QueryPodcastsAggregateArgs = {
  where?: Maybe<PodcastWhere>;
};

export type QueryUsersArgs = {
  where?: Maybe<UserWhere>;
  options?: Maybe<UserOptions>;
};

export type QueryUsersCountArgs = {
  where?: Maybe<UserWhere>;
};

export type QueryUsersAggregateArgs = {
  where?: Maybe<UserWhere>;
};

export type QueryPodcastSearchResultsArgs = {
  where?: Maybe<PodcastSearchResultWhere>;
  options?: Maybe<PodcastSearchResultOptions>;
};

export type QueryPodcastSearchResultsCountArgs = {
  where?: Maybe<PodcastSearchResultWhere>;
};

export type QueryPodcastSearchResultsAggregateArgs = {
  where?: Maybe<PodcastSearchResultWhere>;
};

export type QueryAuthTokensArgs = {
  where?: Maybe<AuthTokenWhere>;
  options?: Maybe<AuthTokenOptions>;
};

export type QueryAuthTokensCountArgs = {
  where?: Maybe<AuthTokenWhere>;
};

export type QueryAuthTokensAggregateArgs = {
  where?: Maybe<AuthTokenWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  register?: Maybe<AuthToken>;
  login?: Maybe<AuthToken>;
  subscribeToPodcast?: Maybe<Podcast>;
  createPodcasts: CreatePodcastsMutationResponse;
  deletePodcasts: DeleteInfo;
  updatePodcasts: UpdatePodcastsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
  createPodcastSearchResults: CreatePodcastSearchResultsMutationResponse;
  deletePodcastSearchResults: DeleteInfo;
  updatePodcastSearchResults: UpdatePodcastSearchResultsMutationResponse;
  createAuthTokens: CreateAuthTokensMutationResponse;
  deleteAuthTokens: DeleteInfo;
  updateAuthTokens: UpdateAuthTokensMutationResponse;
};

export type MutationRegisterArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationSubscribeToPodcastArgs = {
  itunesId: Scalars["String"];
};

export type MutationCreatePodcastsArgs = {
  input: Array<PodcastCreateInput>;
};

export type MutationDeletePodcastsArgs = {
  where?: Maybe<PodcastWhere>;
  delete?: Maybe<PodcastDeleteInput>;
};

export type MutationUpdatePodcastsArgs = {
  where?: Maybe<PodcastWhere>;
  update?: Maybe<PodcastUpdateInput>;
  connect?: Maybe<PodcastConnectInput>;
  disconnect?: Maybe<PodcastDisconnectInput>;
  create?: Maybe<PodcastRelationInput>;
  delete?: Maybe<PodcastDeleteInput>;
  connectOrCreate?: Maybe<PodcastConnectOrCreateInput>;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteUsersArgs = {
  where?: Maybe<UserWhere>;
  delete?: Maybe<UserDeleteInput>;
};

export type MutationUpdateUsersArgs = {
  where?: Maybe<UserWhere>;
  update?: Maybe<UserUpdateInput>;
  connect?: Maybe<UserConnectInput>;
  disconnect?: Maybe<UserDisconnectInput>;
  create?: Maybe<UserRelationInput>;
  delete?: Maybe<UserDeleteInput>;
};

export type MutationCreatePodcastSearchResultsArgs = {
  input: Array<PodcastSearchResultCreateInput>;
};

export type MutationDeletePodcastSearchResultsArgs = {
  where?: Maybe<PodcastSearchResultWhere>;
};

export type MutationUpdatePodcastSearchResultsArgs = {
  where?: Maybe<PodcastSearchResultWhere>;
  update?: Maybe<PodcastSearchResultUpdateInput>;
};

export type MutationCreateAuthTokensArgs = {
  input: Array<AuthTokenCreateInput>;
};

export type MutationDeleteAuthTokensArgs = {
  where?: Maybe<AuthTokenWhere>;
};

export type MutationUpdateAuthTokensArgs = {
  where?: Maybe<AuthTokenWhere>;
  update?: Maybe<AuthTokenUpdateInput>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type AuthToken = {
  __typename?: "AuthToken";
  token: Scalars["String"];
};

export type AuthTokenAggregateSelection = {
  __typename?: "AuthTokenAggregateSelection";
  count: Scalars["Int"];
  token: StringAggregateSelection;
};

export type CreateAuthTokensMutationResponse = {
  __typename?: "CreateAuthTokensMutationResponse";
  info: CreateInfo;
  authTokens: Array<AuthToken>;
};

export type CreateInfo = {
  __typename?: "CreateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
};

export type CreatePodcastSearchResultsMutationResponse = {
  __typename?: "CreatePodcastSearchResultsMutationResponse";
  info: CreateInfo;
  podcastSearchResults: Array<PodcastSearchResult>;
};

export type CreatePodcastsMutationResponse = {
  __typename?: "CreatePodcastsMutationResponse";
  info: CreateInfo;
  podcasts: Array<Podcast>;
};

export type CreateUsersMutationResponse = {
  __typename?: "CreateUsersMutationResponse";
  info: CreateInfo;
  users: Array<User>;
};

export type DeleteInfo = {
  __typename?: "DeleteInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesDeleted: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type IdAggregateSelection = {
  __typename?: "IDAggregateSelection";
  shortest?: Maybe<Scalars["ID"]>;
  longest?: Maybe<Scalars["ID"]>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
};

export type Podcast = {
  __typename?: "Podcast";
  itunesId: Scalars["ID"];
  title?: Maybe<Scalars["String"]>;
  link?: Maybe<Scalars["String"]>;
  feedURL?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
  users?: Maybe<Array<Maybe<User>>>;
  usersAggregate?: Maybe<PodcastUserUsersAggregationSelection>;
  usersConnection: PodcastUsersConnection;
};

export type PodcastUsersArgs = {
  where?: Maybe<UserWhere>;
  options?: Maybe<UserOptions>;
};

export type PodcastUsersAggregateArgs = {
  where?: Maybe<UserWhere>;
};

export type PodcastUsersConnectionArgs = {
  where?: Maybe<PodcastUsersConnectionWhere>;
  sort?: Maybe<Array<PodcastUsersConnectionSort>>;
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
};

export type PodcastAggregateSelection = {
  __typename?: "PodcastAggregateSelection";
  count: Scalars["Int"];
  itunesId: IdAggregateSelection;
  title: StringAggregateSelection;
  link: StringAggregateSelection;
  feedURL: StringAggregateSelection;
  description: StringAggregateSelection;
  image: StringAggregateSelection;
};

export type PodcastSearchResult = {
  __typename?: "PodcastSearchResult";
  itunesId: Scalars["String"];
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  feedURL?: Maybe<Scalars["String"]>;
  artwork?: Maybe<Scalars["String"]>;
  categories?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type PodcastSearchResultAggregateSelection = {
  __typename?: "PodcastSearchResultAggregateSelection";
  count: Scalars["Int"];
  itunesId: StringAggregateSelection;
  title: StringAggregateSelection;
  description: StringAggregateSelection;
  feedURL: StringAggregateSelection;
  artwork: StringAggregateSelection;
};

export type PodcastUsersConnection = {
  __typename?: "PodcastUsersConnection";
  edges: Array<PodcastUsersRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type PodcastUsersRelationship = {
  __typename?: "PodcastUsersRelationship";
  cursor: Scalars["String"];
  node: User;
};

export type PodcastUserUsersAggregationSelection = {
  __typename?: "PodcastUserUsersAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<PodcastUserUsersNodeAggregateSelection>;
};

export type PodcastUserUsersNodeAggregateSelection = {
  __typename?: "PodcastUserUsersNodeAggregateSelection";
  id: IdAggregateSelection;
  email: StringAggregateSelection;
  hashedPassword: StringAggregateSelection;
};

export type StringAggregateSelection = {
  __typename?: "StringAggregateSelection";
  shortest?: Maybe<Scalars["String"]>;
  longest?: Maybe<Scalars["String"]>;
};

export type UpdateAuthTokensMutationResponse = {
  __typename?: "UpdateAuthTokensMutationResponse";
  info: UpdateInfo;
  authTokens: Array<AuthToken>;
};

export type UpdateInfo = {
  __typename?: "UpdateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  nodesDeleted: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type UpdatePodcastSearchResultsMutationResponse = {
  __typename?: "UpdatePodcastSearchResultsMutationResponse";
  info: UpdateInfo;
  podcastSearchResults: Array<PodcastSearchResult>;
};

export type UpdatePodcastsMutationResponse = {
  __typename?: "UpdatePodcastsMutationResponse";
  info: UpdateInfo;
  podcasts: Array<Podcast>;
};

export type UpdateUsersMutationResponse = {
  __typename?: "UpdateUsersMutationResponse";
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  email: Scalars["String"];
  hashedPassword: Scalars["String"];
  podcast?: Maybe<Array<Maybe<Podcast>>>;
  podcastAggregate?: Maybe<UserPodcastPodcastAggregationSelection>;
  podcastConnection: UserPodcastConnection;
};

export type UserPodcastArgs = {
  where?: Maybe<PodcastWhere>;
  options?: Maybe<PodcastOptions>;
};

export type UserPodcastAggregateArgs = {
  where?: Maybe<PodcastWhere>;
};

export type UserPodcastConnectionArgs = {
  where?: Maybe<UserPodcastConnectionWhere>;
  sort?: Maybe<Array<UserPodcastConnectionSort>>;
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelection;
  email: StringAggregateSelection;
  hashedPassword: StringAggregateSelection;
};

export type UserPodcastConnection = {
  __typename?: "UserPodcastConnection";
  edges: Array<UserPodcastRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type UserPodcastPodcastAggregationSelection = {
  __typename?: "UserPodcastPodcastAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<UserPodcastPodcastNodeAggregateSelection>;
};

export type UserPodcastPodcastNodeAggregateSelection = {
  __typename?: "UserPodcastPodcastNodeAggregateSelection";
  itunesId: IdAggregateSelection;
  title: StringAggregateSelection;
  link: StringAggregateSelection;
  feedURL: StringAggregateSelection;
  description: StringAggregateSelection;
  image: StringAggregateSelection;
};

export type UserPodcastRelationship = {
  __typename?: "UserPodcastRelationship";
  cursor: Scalars["String"];
  node: Podcast;
};

export type AuthTokenCreateInput = {
  token: Scalars["String"];
};

export type AuthTokenOptions = {
  /** Specify one or more AuthTokenSort objects to sort AuthTokens by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<AuthTokenSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

/** Fields to sort AuthTokens by. The order in which sorts are applied is not guaranteed when specifying many fields in one AuthTokenSort object. */
export type AuthTokenSort = {
  token?: Maybe<SortDirection>;
};

export type AuthTokenUpdateInput = {
  token?: Maybe<Scalars["String"]>;
};

export type AuthTokenWhere = {
  OR?: Maybe<Array<AuthTokenWhere>>;
  AND?: Maybe<Array<AuthTokenWhere>>;
  token?: Maybe<Scalars["String"]>;
  token_NOT?: Maybe<Scalars["String"]>;
  token_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  token_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  token_CONTAINS?: Maybe<Scalars["String"]>;
  token_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  token_STARTS_WITH?: Maybe<Scalars["String"]>;
  token_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  token_ENDS_WITH?: Maybe<Scalars["String"]>;
  token_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
};

export type PodcastConnectInput = {
  users?: Maybe<Array<PodcastUsersConnectFieldInput>>;
};

export type PodcastConnectOrCreateInput = {
  users?: Maybe<Array<PodcastUsersConnectOrCreateFieldInput>>;
};

export type PodcastConnectWhere = {
  node: PodcastWhere;
};

export type PodcastCreateInput = {
  itunesId: Scalars["ID"];
  title?: Maybe<Scalars["String"]>;
  link?: Maybe<Scalars["String"]>;
  feedURL?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
  users?: Maybe<PodcastUsersFieldInput>;
};

export type PodcastDeleteInput = {
  users?: Maybe<Array<PodcastUsersDeleteFieldInput>>;
};

export type PodcastDisconnectInput = {
  users?: Maybe<Array<PodcastUsersDisconnectFieldInput>>;
};

export type PodcastOptions = {
  /** Specify one or more PodcastSort objects to sort Podcasts by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<PodcastSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type PodcastRelationInput = {
  users?: Maybe<Array<PodcastUsersCreateFieldInput>>;
};

export type PodcastSearchResultCreateInput = {
  itunesId: Scalars["String"];
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  feedURL?: Maybe<Scalars["String"]>;
  artwork?: Maybe<Scalars["String"]>;
  categories?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type PodcastSearchResultOptions = {
  /** Specify one or more PodcastSearchResultSort objects to sort PodcastSearchResults by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<PodcastSearchResultSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

/** Fields to sort PodcastSearchResults by. The order in which sorts are applied is not guaranteed when specifying many fields in one PodcastSearchResultSort object. */
export type PodcastSearchResultSort = {
  itunesId?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  description?: Maybe<SortDirection>;
  feedURL?: Maybe<SortDirection>;
  artwork?: Maybe<SortDirection>;
};

export type PodcastSearchResultUpdateInput = {
  itunesId?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  feedURL?: Maybe<Scalars["String"]>;
  artwork?: Maybe<Scalars["String"]>;
  categories?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type PodcastSearchResultWhere = {
  OR?: Maybe<Array<PodcastSearchResultWhere>>;
  AND?: Maybe<Array<PodcastSearchResultWhere>>;
  itunesId?: Maybe<Scalars["String"]>;
  itunesId_NOT?: Maybe<Scalars["String"]>;
  itunesId_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  itunesId_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  itunesId_CONTAINS?: Maybe<Scalars["String"]>;
  itunesId_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  itunesId_STARTS_WITH?: Maybe<Scalars["String"]>;
  itunesId_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  itunesId_ENDS_WITH?: Maybe<Scalars["String"]>;
  itunesId_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  title_NOT?: Maybe<Scalars["String"]>;
  title_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  title_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  title_CONTAINS?: Maybe<Scalars["String"]>;
  title_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  title_STARTS_WITH?: Maybe<Scalars["String"]>;
  title_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  title_ENDS_WITH?: Maybe<Scalars["String"]>;
  title_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_NOT?: Maybe<Scalars["String"]>;
  description_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_CONTAINS?: Maybe<Scalars["String"]>;
  description_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  description_STARTS_WITH?: Maybe<Scalars["String"]>;
  description_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  description_ENDS_WITH?: Maybe<Scalars["String"]>;
  description_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  feedURL?: Maybe<Scalars["String"]>;
  feedURL_NOT?: Maybe<Scalars["String"]>;
  feedURL_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  feedURL_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  feedURL_CONTAINS?: Maybe<Scalars["String"]>;
  feedURL_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  feedURL_STARTS_WITH?: Maybe<Scalars["String"]>;
  feedURL_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  feedURL_ENDS_WITH?: Maybe<Scalars["String"]>;
  feedURL_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  artwork?: Maybe<Scalars["String"]>;
  artwork_NOT?: Maybe<Scalars["String"]>;
  artwork_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  artwork_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  artwork_CONTAINS?: Maybe<Scalars["String"]>;
  artwork_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  artwork_STARTS_WITH?: Maybe<Scalars["String"]>;
  artwork_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  artwork_ENDS_WITH?: Maybe<Scalars["String"]>;
  artwork_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  categories?: Maybe<Array<Maybe<Scalars["String"]>>>;
  categories_NOT?: Maybe<Array<Maybe<Scalars["String"]>>>;
  categories_INCLUDES?: Maybe<Scalars["String"]>;
  categories_NOT_INCLUDES?: Maybe<Scalars["String"]>;
};

/** Fields to sort Podcasts by. The order in which sorts are applied is not guaranteed when specifying many fields in one PodcastSort object. */
export type PodcastSort = {
  itunesId?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  link?: Maybe<SortDirection>;
  feedURL?: Maybe<SortDirection>;
  description?: Maybe<SortDirection>;
  image?: Maybe<SortDirection>;
};

export type PodcastUpdateInput = {
  itunesId?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  link?: Maybe<Scalars["String"]>;
  feedURL?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
  users?: Maybe<Array<PodcastUsersUpdateFieldInput>>;
};

export type PodcastUsersAggregateInput = {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<PodcastUsersAggregateInput>>;
  OR?: Maybe<Array<PodcastUsersAggregateInput>>;
  node?: Maybe<PodcastUsersNodeAggregationWhereInput>;
};

export type PodcastUsersConnectFieldInput = {
  where?: Maybe<UserConnectWhere>;
  connect?: Maybe<Array<UserConnectInput>>;
};

export type PodcastUsersConnectionSort = {
  node?: Maybe<UserSort>;
};

export type PodcastUsersConnectionWhere = {
  AND?: Maybe<Array<PodcastUsersConnectionWhere>>;
  OR?: Maybe<Array<PodcastUsersConnectionWhere>>;
  node?: Maybe<UserWhere>;
  node_NOT?: Maybe<UserWhere>;
};

export type PodcastUsersConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: PodcastUsersConnectOrCreateFieldInputOnCreate;
};

export type PodcastUsersConnectOrCreateFieldInputOnCreate = {
  node: UserCreateInput;
};

export type PodcastUsersCreateFieldInput = {
  node: UserCreateInput;
};

export type PodcastUsersDeleteFieldInput = {
  where?: Maybe<PodcastUsersConnectionWhere>;
  delete?: Maybe<UserDeleteInput>;
};

export type PodcastUsersDisconnectFieldInput = {
  where?: Maybe<PodcastUsersConnectionWhere>;
  disconnect?: Maybe<UserDisconnectInput>;
};

export type PodcastUsersFieldInput = {
  create?: Maybe<Array<PodcastUsersCreateFieldInput>>;
  connect?: Maybe<Array<PodcastUsersConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<PodcastUsersConnectOrCreateFieldInput>>;
};

export type PodcastUsersNodeAggregationWhereInput = {
  AND?: Maybe<Array<PodcastUsersNodeAggregationWhereInput>>;
  OR?: Maybe<Array<PodcastUsersNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  email_EQUAL?: Maybe<Scalars["String"]>;
  email_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  email_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  email_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  email_GT?: Maybe<Scalars["Int"]>;
  email_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  email_LONGEST_GT?: Maybe<Scalars["Int"]>;
  email_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  email_GTE?: Maybe<Scalars["Int"]>;
  email_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  email_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  email_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  email_LT?: Maybe<Scalars["Int"]>;
  email_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  email_LONGEST_LT?: Maybe<Scalars["Int"]>;
  email_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  email_LTE?: Maybe<Scalars["Int"]>;
  email_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  email_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  email_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  hashedPassword_EQUAL?: Maybe<Scalars["String"]>;
  hashedPassword_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  hashedPassword_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  hashedPassword_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  hashedPassword_GT?: Maybe<Scalars["Int"]>;
  hashedPassword_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  hashedPassword_LONGEST_GT?: Maybe<Scalars["Int"]>;
  hashedPassword_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  hashedPassword_GTE?: Maybe<Scalars["Int"]>;
  hashedPassword_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  hashedPassword_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  hashedPassword_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  hashedPassword_LT?: Maybe<Scalars["Int"]>;
  hashedPassword_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  hashedPassword_LONGEST_LT?: Maybe<Scalars["Int"]>;
  hashedPassword_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  hashedPassword_LTE?: Maybe<Scalars["Int"]>;
  hashedPassword_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  hashedPassword_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  hashedPassword_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
};

export type PodcastUsersUpdateConnectionInput = {
  node?: Maybe<UserUpdateInput>;
};

export type PodcastUsersUpdateFieldInput = {
  where?: Maybe<PodcastUsersConnectionWhere>;
  update?: Maybe<PodcastUsersUpdateConnectionInput>;
  connect?: Maybe<Array<PodcastUsersConnectFieldInput>>;
  disconnect?: Maybe<Array<PodcastUsersDisconnectFieldInput>>;
  create?: Maybe<Array<PodcastUsersCreateFieldInput>>;
  delete?: Maybe<Array<PodcastUsersDeleteFieldInput>>;
  connectOrCreate?: Maybe<Array<PodcastUsersConnectOrCreateFieldInput>>;
};

export type PodcastWhere = {
  OR?: Maybe<Array<PodcastWhere>>;
  AND?: Maybe<Array<PodcastWhere>>;
  itunesId?: Maybe<Scalars["ID"]>;
  itunesId_NOT?: Maybe<Scalars["ID"]>;
  itunesId_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  itunesId_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  itunesId_CONTAINS?: Maybe<Scalars["ID"]>;
  itunesId_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  itunesId_STARTS_WITH?: Maybe<Scalars["ID"]>;
  itunesId_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  itunesId_ENDS_WITH?: Maybe<Scalars["ID"]>;
  itunesId_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  title_NOT?: Maybe<Scalars["String"]>;
  title_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  title_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  title_CONTAINS?: Maybe<Scalars["String"]>;
  title_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  title_STARTS_WITH?: Maybe<Scalars["String"]>;
  title_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  title_ENDS_WITH?: Maybe<Scalars["String"]>;
  title_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  link?: Maybe<Scalars["String"]>;
  link_NOT?: Maybe<Scalars["String"]>;
  link_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  link_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  link_CONTAINS?: Maybe<Scalars["String"]>;
  link_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  link_STARTS_WITH?: Maybe<Scalars["String"]>;
  link_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  link_ENDS_WITH?: Maybe<Scalars["String"]>;
  link_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  feedURL?: Maybe<Scalars["String"]>;
  feedURL_NOT?: Maybe<Scalars["String"]>;
  feedURL_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  feedURL_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  feedURL_CONTAINS?: Maybe<Scalars["String"]>;
  feedURL_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  feedURL_STARTS_WITH?: Maybe<Scalars["String"]>;
  feedURL_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  feedURL_ENDS_WITH?: Maybe<Scalars["String"]>;
  feedURL_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_NOT?: Maybe<Scalars["String"]>;
  description_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_CONTAINS?: Maybe<Scalars["String"]>;
  description_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  description_STARTS_WITH?: Maybe<Scalars["String"]>;
  description_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  description_ENDS_WITH?: Maybe<Scalars["String"]>;
  description_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
  image_NOT?: Maybe<Scalars["String"]>;
  image_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  image_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  image_CONTAINS?: Maybe<Scalars["String"]>;
  image_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  image_STARTS_WITH?: Maybe<Scalars["String"]>;
  image_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  image_ENDS_WITH?: Maybe<Scalars["String"]>;
  image_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  users?: Maybe<UserWhere>;
  users_NOT?: Maybe<UserWhere>;
  usersAggregate?: Maybe<PodcastUsersAggregateInput>;
  usersConnection?: Maybe<PodcastUsersConnectionWhere>;
  usersConnection_NOT?: Maybe<PodcastUsersConnectionWhere>;
};

export type UserConnectInput = {
  podcast?: Maybe<Array<UserPodcastConnectFieldInput>>;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  email: Scalars["String"];
  hashedPassword: Scalars["String"];
  podcast?: Maybe<UserPodcastFieldInput>;
};

export type UserDeleteInput = {
  podcast?: Maybe<Array<UserPodcastDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  podcast?: Maybe<Array<UserPodcastDisconnectFieldInput>>;
};

export type UserOptions = {
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<UserSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type UserPodcastAggregateInput = {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<UserPodcastAggregateInput>>;
  OR?: Maybe<Array<UserPodcastAggregateInput>>;
  node?: Maybe<UserPodcastNodeAggregationWhereInput>;
};

export type UserPodcastConnectFieldInput = {
  where?: Maybe<PodcastConnectWhere>;
  connect?: Maybe<Array<PodcastConnectInput>>;
};

export type UserPodcastConnectionSort = {
  node?: Maybe<PodcastSort>;
};

export type UserPodcastConnectionWhere = {
  AND?: Maybe<Array<UserPodcastConnectionWhere>>;
  OR?: Maybe<Array<UserPodcastConnectionWhere>>;
  node?: Maybe<PodcastWhere>;
  node_NOT?: Maybe<PodcastWhere>;
};

export type UserPodcastCreateFieldInput = {
  node: PodcastCreateInput;
};

export type UserPodcastDeleteFieldInput = {
  where?: Maybe<UserPodcastConnectionWhere>;
  delete?: Maybe<PodcastDeleteInput>;
};

export type UserPodcastDisconnectFieldInput = {
  where?: Maybe<UserPodcastConnectionWhere>;
  disconnect?: Maybe<PodcastDisconnectInput>;
};

export type UserPodcastFieldInput = {
  create?: Maybe<Array<UserPodcastCreateFieldInput>>;
  connect?: Maybe<Array<UserPodcastConnectFieldInput>>;
};

export type UserPodcastNodeAggregationWhereInput = {
  AND?: Maybe<Array<UserPodcastNodeAggregationWhereInput>>;
  OR?: Maybe<Array<UserPodcastNodeAggregationWhereInput>>;
  itunesId_EQUAL?: Maybe<Scalars["ID"]>;
  title_EQUAL?: Maybe<Scalars["String"]>;
  title_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  title_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  title_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  title_GT?: Maybe<Scalars["Int"]>;
  title_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  title_LONGEST_GT?: Maybe<Scalars["Int"]>;
  title_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  title_GTE?: Maybe<Scalars["Int"]>;
  title_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  title_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  title_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  title_LT?: Maybe<Scalars["Int"]>;
  title_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  title_LONGEST_LT?: Maybe<Scalars["Int"]>;
  title_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  title_LTE?: Maybe<Scalars["Int"]>;
  title_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  title_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  title_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  link_EQUAL?: Maybe<Scalars["String"]>;
  link_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  link_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  link_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  link_GT?: Maybe<Scalars["Int"]>;
  link_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  link_LONGEST_GT?: Maybe<Scalars["Int"]>;
  link_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  link_GTE?: Maybe<Scalars["Int"]>;
  link_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  link_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  link_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  link_LT?: Maybe<Scalars["Int"]>;
  link_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  link_LONGEST_LT?: Maybe<Scalars["Int"]>;
  link_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  link_LTE?: Maybe<Scalars["Int"]>;
  link_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  link_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  link_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  feedURL_EQUAL?: Maybe<Scalars["String"]>;
  feedURL_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  feedURL_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  feedURL_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  feedURL_GT?: Maybe<Scalars["Int"]>;
  feedURL_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  feedURL_LONGEST_GT?: Maybe<Scalars["Int"]>;
  feedURL_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  feedURL_GTE?: Maybe<Scalars["Int"]>;
  feedURL_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  feedURL_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  feedURL_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  feedURL_LT?: Maybe<Scalars["Int"]>;
  feedURL_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  feedURL_LONGEST_LT?: Maybe<Scalars["Int"]>;
  feedURL_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  feedURL_LTE?: Maybe<Scalars["Int"]>;
  feedURL_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  feedURL_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  feedURL_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  description_EQUAL?: Maybe<Scalars["String"]>;
  description_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  description_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  description_GT?: Maybe<Scalars["Int"]>;
  description_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  description_LONGEST_GT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  description_GTE?: Maybe<Scalars["Int"]>;
  description_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  description_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  description_LT?: Maybe<Scalars["Int"]>;
  description_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  description_LONGEST_LT?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  description_LTE?: Maybe<Scalars["Int"]>;
  description_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  description_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  description_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  image_EQUAL?: Maybe<Scalars["String"]>;
  image_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  image_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  image_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  image_GT?: Maybe<Scalars["Int"]>;
  image_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  image_LONGEST_GT?: Maybe<Scalars["Int"]>;
  image_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  image_GTE?: Maybe<Scalars["Int"]>;
  image_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  image_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  image_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  image_LT?: Maybe<Scalars["Int"]>;
  image_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  image_LONGEST_LT?: Maybe<Scalars["Int"]>;
  image_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  image_LTE?: Maybe<Scalars["Int"]>;
  image_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  image_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  image_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
};

export type UserPodcastUpdateConnectionInput = {
  node?: Maybe<PodcastUpdateInput>;
};

export type UserPodcastUpdateFieldInput = {
  where?: Maybe<UserPodcastConnectionWhere>;
  update?: Maybe<UserPodcastUpdateConnectionInput>;
  connect?: Maybe<Array<UserPodcastConnectFieldInput>>;
  disconnect?: Maybe<Array<UserPodcastDisconnectFieldInput>>;
  create?: Maybe<Array<UserPodcastCreateFieldInput>>;
  delete?: Maybe<Array<UserPodcastDeleteFieldInput>>;
};

export type UserRelationInput = {
  podcast?: Maybe<Array<UserPodcastCreateFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  id?: Maybe<SortDirection>;
  email?: Maybe<SortDirection>;
  hashedPassword?: Maybe<SortDirection>;
};

export type UserUniqueWhere = {
  id?: Maybe<Scalars["ID"]>;
  email?: Maybe<Scalars["String"]>;
};

export type UserUpdateInput = {
  email?: Maybe<Scalars["String"]>;
  hashedPassword?: Maybe<Scalars["String"]>;
  podcast?: Maybe<Array<UserPodcastUpdateFieldInput>>;
};

export type UserWhere = {
  OR?: Maybe<Array<UserWhere>>;
  AND?: Maybe<Array<UserWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  email?: Maybe<Scalars["String"]>;
  email_NOT?: Maybe<Scalars["String"]>;
  email_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  email_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  email_CONTAINS?: Maybe<Scalars["String"]>;
  email_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  email_STARTS_WITH?: Maybe<Scalars["String"]>;
  email_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  email_ENDS_WITH?: Maybe<Scalars["String"]>;
  email_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  hashedPassword?: Maybe<Scalars["String"]>;
  hashedPassword_NOT?: Maybe<Scalars["String"]>;
  hashedPassword_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  hashedPassword_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  hashedPassword_CONTAINS?: Maybe<Scalars["String"]>;
  hashedPassword_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  hashedPassword_STARTS_WITH?: Maybe<Scalars["String"]>;
  hashedPassword_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  hashedPassword_ENDS_WITH?: Maybe<Scalars["String"]>;
  hashedPassword_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  podcast?: Maybe<PodcastWhere>;
  podcast_NOT?: Maybe<PodcastWhere>;
  podcastAggregate?: Maybe<UserPodcastAggregateInput>;
  podcastConnection?: Maybe<UserPodcastConnectionWhere>;
  podcastConnection_NOT?: Maybe<UserPodcastConnectionWhere>;
};

export interface IdAggregateInput {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInput {
  shortest?: boolean;
  longest?: boolean;
}
export interface PodcastAggregateInput {
  count?: boolean;
  itunesId?: IdAggregateInput;
  title?: StringAggregateInput;
  link?: StringAggregateInput;
  feedURL?: StringAggregateInput;
  description?: StringAggregateInput;
  image?: StringAggregateInput;
}

export declare class PodcastModel {
  public find(args?: {
    where?: PodcastWhere;

    options?: PodcastOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Podcast[]>;
  public count(args?: { where?: PodcastWhere }): Promise<number>;
  public create(args: {
    input: PodcastCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreatePodcastsMutationResponse>;
  public update(args: {
    where?: PodcastWhere;
    update?: PodcastUpdateInput;
    connect?: PodcastConnectInput;
    disconnect?: PodcastDisconnectInput;
    create?: PodcastCreateInput;
    connectOrCreate?: PodcastConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdatePodcastsMutationResponse>;
  public delete(args: {
    where?: PodcastWhere;
    delete?: PodcastDeleteInput;
    context?: any;
    rootValue: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: PodcastWhere;

    aggregate: PodcastAggregateInput;
    context?: any;
    rootValue?: any;
  }): Promise<PodcastAggregateSelection>;
}

export interface IdAggregateInput {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInput {
  shortest?: boolean;
  longest?: boolean;
}
export interface UserAggregateInput {
  count?: boolean;
  id?: IdAggregateInput;
  email?: StringAggregateInput;
  hashedPassword?: StringAggregateInput;
}

export declare class UserModel {
  public find(args?: {
    where?: UserWhere;

    options?: UserOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<User[]>;
  public count(args?: { where?: UserWhere }): Promise<number>;
  public create(args: {
    input: UserCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateUsersMutationResponse>;
  public update(args: {
    where?: UserWhere;
    update?: UserUpdateInput;
    connect?: UserConnectInput;
    disconnect?: UserDisconnectInput;
    create?: UserCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUsersMutationResponse>;
  public delete(args: {
    where?: UserWhere;
    delete?: UserDeleteInput;
    context?: any;
    rootValue: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: UserWhere;

    aggregate: UserAggregateInput;
    context?: any;
    rootValue?: any;
  }): Promise<UserAggregateSelection>;
}

export interface IdAggregateInput {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInput {
  shortest?: boolean;
  longest?: boolean;
}
export interface PodcastSearchResultAggregateInput {
  count?: boolean;
  itunesId?: StringAggregateInput;
  title?: StringAggregateInput;
  description?: StringAggregateInput;
  feedURL?: StringAggregateInput;
  artwork?: StringAggregateInput;
}

export declare class PodcastSearchResultModel {
  public find(args?: {
    where?: PodcastSearchResultWhere;

    options?: PodcastSearchResultOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<PodcastSearchResult[]>;
  public count(args?: { where?: PodcastSearchResultWhere }): Promise<number>;
  public create(args: {
    input: PodcastSearchResultCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreatePodcastSearchResultsMutationResponse>;
  public update(args: {
    where?: PodcastSearchResultWhere;
    update?: PodcastSearchResultUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdatePodcastSearchResultsMutationResponse>;
  public delete(args: {
    where?: PodcastSearchResultWhere;

    context?: any;
    rootValue: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: PodcastSearchResultWhere;

    aggregate: PodcastSearchResultAggregateInput;
    context?: any;
    rootValue?: any;
  }): Promise<PodcastSearchResultAggregateSelection>;
}

export interface IdAggregateInput {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInput {
  shortest?: boolean;
  longest?: boolean;
}
export interface AuthTokenAggregateInput {
  count?: boolean;
  token?: StringAggregateInput;
}

export declare class AuthTokenModel {
  public find(args?: {
    where?: AuthTokenWhere;

    options?: AuthTokenOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<AuthToken[]>;
  public count(args?: { where?: AuthTokenWhere }): Promise<number>;
  public create(args: {
    input: AuthTokenCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateAuthTokensMutationResponse>;
  public update(args: {
    where?: AuthTokenWhere;
    update?: AuthTokenUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateAuthTokensMutationResponse>;
  public delete(args: {
    where?: AuthTokenWhere;

    context?: any;
    rootValue: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: AuthTokenWhere;

    aggregate: AuthTokenAggregateInput;
    context?: any;
    rootValue?: any;
  }): Promise<AuthTokenAggregateSelection>;
}

export interface ModelMap {
  Podcast: PodcastModel;
  User: UserModel;
  PodcastSearchResult: PodcastSearchResultModel;
  AuthToken: AuthTokenModel;
}
