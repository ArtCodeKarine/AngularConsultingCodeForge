import { UsersState } from './users.state';

export * as usersEffects from './users.effects';

export const usersDataAccessKey = 'usersDataAccessKey';

export interface DataAccessUsersState {
  usersDataAccessKey?: UsersState;
}
