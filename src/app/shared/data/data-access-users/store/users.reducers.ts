import { ActionReducer, createReducer, on } from '@ngrx/store';
import { StateStatus } from '@shared-utils/data';
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
import { initialState, usersAdapter, UsersState } from './users.state';

export const usersReducer: ActionReducer<UsersState> = createReducer(
  initialState,

  on(loadUsers, () => ({
    ...initialState,
  })),

  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    usersEntities: usersAdapter.setAll(users, state.usersEntities),
    usersStatus: StateStatus.SUCCESS,
  })),

  on(loadUsersFailure, () => ({
    ...initialState,
    usersStatus: StateStatus.ERROR,
  })),

  on(createUser, (state) => ({
    ...state,
    usersStatus: StateStatus.LOADING,
  })),

  on(createUserSuccess, (state, { user }) => ({
    ...state,
    usersEntities: usersAdapter.upsertOne(user, state.usersEntities),
    usersStatus: StateStatus.SUCCESS,
  })),

  on(createUserFailure, (state) => ({
    ...state,
    usersStatus: StateStatus.ERROR,
  })),

  on(updateUser, (state) => ({
    ...state,
    usersStatus: StateStatus.LOADING,
  })),

  on(updateUserSuccess, (state, { user }) => ({
    ...state,
    usersEntities: usersAdapter.upsertOne(user, state.usersEntities),
    usersStatus: StateStatus.SUCCESS,
  })),

  on(updateUserFailure, (state) => ({
    ...state,
    usersStatus: StateStatus.ERROR,
  })),

  on(deleteUser, (state) => ({
    ...state,
    usersStatus: StateStatus.LOADING,
  })),

  on(deleteUserSuccess, (state, { userId }) => ({
    ...state,
    usersEntities: usersAdapter.removeOne(userId, state.usersEntities),
    usersStatus: StateStatus.SUCCESS,
  })),

  on(deleteUserFailure, (state) => ({
    ...state,
    usersStatus: StateStatus.ERROR,
  })),
);
