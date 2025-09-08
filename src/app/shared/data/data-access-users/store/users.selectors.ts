import { HttpErrorResponse } from '@angular/common/http';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { StateStatus } from '@shared-utils/data';

import { DataAccessUsersState, usersDataAccessKey } from '.';
import { User } from '../api/models/users';
import { usersAdapter, UsersState } from './users.state';

export const selectUsersState: MemoizedSelector<DataAccessUsersState, UsersState> =
  createFeatureSelector<UsersState>(usersDataAccessKey);

export const selectUsers: MemoizedSelector<DataAccessUsersState, User[]> = createSelector(
  selectUsersState,
  (state: UsersState): User[] => usersAdapter.getSelectors().selectAll(state.usersEntities),
);

export const selectUsersByIds = (id: string[]) =>
  createSelector(selectUsers, (users: User[]): User[] =>
    users.filter((user: User) => id.includes(user.id)),
  );

export const selectUserById = (id: string) =>
  createSelector(selectUsers, (users: User[]): User => users.find((user: User) => user.id === id));

export const selectUsersStatus: MemoizedSelector<DataAccessUsersState, StateStatus> =
  createSelector(selectUsersState, (state: UsersState): StateStatus => state?.usersStatus);

export const selectUsersHttpError: MemoizedSelector<DataAccessUsersState, HttpErrorResponse> =
  createSelector(selectUsersState, (state: UsersState): HttpErrorResponse => state.httpErrors);
