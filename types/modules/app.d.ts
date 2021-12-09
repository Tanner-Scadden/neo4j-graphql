declare module '@app/core' {
  export type ID = number;
  export type LoggedInUser = {
    id: string;
    firstName: string;
    lastName: string;
  };
}

declare module '@app/api' {
  export type MessageResponse = {
    message: string;
  };
}
