export enum UsersApiConfigKeys {
  loadUsersListUrl,
  crudUserUrl,
}

const apiUsersUrl: string = document.baseURI + 'api/users';

export const USERS_API_CONFIG: Record<string, string> = {
  [UsersApiConfigKeys.loadUsersListUrl]: apiUsersUrl,
  [UsersApiConfigKeys.crudUserUrl]: apiUsersUrl,
};
