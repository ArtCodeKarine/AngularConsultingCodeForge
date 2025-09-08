import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { NewUser, User } from '../api/models/users';

export const usersKey = '[usersDataAccess]';

export const loadUsers = createAction(`${usersKey} Load Users`);
export const loadUsersSuccess = createAction(
  `${usersKey} Load Users Success`,
  props<{ users: User[] }>(),
);
export const loadUsersFailure = createAction(
  `${usersKey} Load Users Fail`,
  props<{ error: HttpErrorResponse }>(),
);

export const createUser = createAction(`${usersKey} Create Users`, props<{ newUser: NewUser }>());
export const createUserSuccess = createAction(
  `${usersKey} Create Users Success`,
  props<{ user: User }>(),
);
export const createUserFailure = createAction(
  `${usersKey} Create Users Fail`,
  props<{ error: HttpErrorResponse }>(),
);

export const updateUser = createAction(`${usersKey} Update Users`, props<{ user: User }>());
export const updateUserSuccess = createAction(
  `${usersKey} Update Users Success`,
  props<{ user: User }>(),
);
export const updateUserFailure = createAction(
  `${usersKey} Update Users Fail`,
  props<{ error: HttpErrorResponse }>(),
);

export const deleteUser = createAction(`${usersKey} Delete Users`, props<{ userId: string }>());
export const deleteUserSuccess = createAction(
  `${usersKey} Delete Users Success`,
  props<{ userId: string }>(),
);
export const deleteUserFailure = createAction(
  `${usersKey} Delete Users Fail`,
  props<{ error: HttpErrorResponse }>(),
);
