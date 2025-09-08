import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StateStatus } from '@shared-utils/data';
import { Observable } from 'rxjs';
import { NewUser, User } from '../api/models/users';
import { createUser, deleteUser, loadUsers, updateUser } from './users.actions';
import {
  selectUserById,
  selectUsers,
  selectUsersByIds,
  selectUsersHttpError,
  selectUsersStatus,
} from './users.selectors';

@Injectable({ providedIn: 'root' })
export class UsersFacade {
  private readonly _store: Store = inject(Store);

  readonly users$: Observable<User[] | undefined> = this._store.select(selectUsers);
  readonly selectUsersStatus$: Observable<StateStatus> = this._store.select(selectUsersStatus);
  readonly httpErrors$: Observable<HttpErrorResponse | undefined> =
    this._store.select(selectUsersHttpError);

  loadUsers(): void {
    this._store.dispatch(loadUsers());
  }

  createUser(newUser: NewUser): void {
    this._store.dispatch(createUser({ newUser }));
  }

  updateUser(user: User): void {
    this._store.dispatch(updateUser({ user }));
  }

  deleteUser(userId: string): void {
    this._store.dispatch(deleteUser({ userId }));
  }

  getUsersByIds(ids: string[]): Observable<User[]> {
    return this._store.select(selectUsersByIds(ids));
  }

  getUserById(ids: string): Observable<User> {
    return this._store.select(selectUserById(ids));
  }

  getUsers(): Observable<User[]> {
    return this._store.select(selectUsers);
  }
}
