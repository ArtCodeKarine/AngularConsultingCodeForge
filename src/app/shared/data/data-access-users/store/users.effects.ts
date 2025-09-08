import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DesignNotificationsService } from '@shared-design';
import { catchError, map, of, repeat, switchMap } from 'rxjs';
import { UsersApiService } from '../api/services/users.service';
import {
  createUser,
  createUserFailure,
  createUserSuccess,
  deleteUser,
  deleteUserFailure,
  deleteUserSuccess,
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
  updateUser,
  updateUserFailure,
  updateUserSuccess,
} from './users.actions';

export const loadUsersList$ = createEffect(
  (
    actions$: Actions = inject(Actions),
    userApiService: UsersApiService = inject(UsersApiService),
  ) => {
    return actions$.pipe(
      ofType(loadUsers),
      switchMap(() => {
        return userApiService.loadUsersList().pipe(
          map((users) => {
            return loadUsersSuccess({ users });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(loadUsersFailure({ error: errorResponse.error }));
          }),
        );
      }),
      repeat(),
    );
  },
  { functional: true },
);

export const createUsersList$ = createEffect(
  (
    actions$: Actions = inject(Actions),
    userApiService: UsersApiService = inject(UsersApiService),
    designNotificationsService: DesignNotificationsService = inject(DesignNotificationsService),
  ) => {
    return actions$.pipe(
      ofType(createUser),
      switchMap(({ newUser }) => {
        return userApiService.createUser(newUser).pipe(
          map((user) => {
            designNotificationsService.openSnackBar({
              message: 'users.notifications.create.success',
              type: 'success',
            });
            return createUserSuccess({ user });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(createUserFailure({ error: errorResponse.error }));
          }),
        );
      }),
      repeat(),
    );
  },
  { functional: true },
);

export const updateUsersList$ = createEffect(
  (
    actions$: Actions = inject(Actions),
    userApiService: UsersApiService = inject(UsersApiService),
    designNotificationsService: DesignNotificationsService = inject(DesignNotificationsService),
  ) => {
    return actions$.pipe(
      ofType(updateUser),
      switchMap(({ user }) => {
        return userApiService.updateUser(user).pipe(
          map((user) => {
            designNotificationsService.openSnackBar({
              message: 'users.notifications.update.success',
              type: 'success',
            });
            return updateUserSuccess({ user });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(updateUserFailure({ error: errorResponse.error }));
          }),
        );
      }),
      repeat(),
    );
  },
  { functional: true },
);

export const deleteUsersList$ = createEffect(
  (
    actions$: Actions = inject(Actions),
    userApiService: UsersApiService = inject(UsersApiService),
    designNotificationsService: DesignNotificationsService = inject(DesignNotificationsService),
  ) => {
    return actions$.pipe(
      ofType(deleteUser),
      switchMap(({ userId }) => {
        return userApiService.deleteUser(userId).pipe(
          map(() => {
            designNotificationsService.openSnackBar({
              message: 'users.notifications.delete.success',
              type: 'success',
            });
            return deleteUserSuccess({ userId });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(deleteUserFailure({ error: errorResponse.error }));
          }),
        );
      }),
      repeat(),
    );
  },
  { functional: true },
);
