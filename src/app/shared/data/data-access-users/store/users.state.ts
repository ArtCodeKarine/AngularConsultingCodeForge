import { HttpErrorResponse } from '@angular/common/http';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { StateStatus } from '@shared-utils/data';
import { User } from '../api/models/users';

export interface UsersState {
  usersEntities: EntityState<User>;
  usersStatus: StateStatus;
  httpErrors?: HttpErrorResponse;
}

export const usersAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UsersState = {
  usersEntities: usersAdapter.getInitialState(),
  usersStatus: StateStatus.INIT,
  httpErrors: undefined,
};
