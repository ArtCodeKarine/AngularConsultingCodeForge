import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { USERS_API_CONFIG, UsersApiConfigKeys } from '../models/api-config';
import { NewUser, User } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  private readonly _http = inject(HttpClient);

  loadUsersList(): Observable<User[]> {
    return this._http.get<User[]>(`${USERS_API_CONFIG[UsersApiConfigKeys.loadUsersListUrl]}`);
  }

  createUser(newUser: NewUser): Observable<User> {
    return this._http.post<User>(`${USERS_API_CONFIG[UsersApiConfigKeys.crudUserUrl]}`, newUser);
  }

  updateUser(user: User): Observable<User> {
    return this._http.put<User>(`${USERS_API_CONFIG[UsersApiConfigKeys.crudUserUrl]}`, user);
  }

  deleteUser(userId: string): Observable<string> {
    return this._http
      .delete<void>(`${USERS_API_CONFIG[UsersApiConfigKeys.crudUserUrl]}/${userId}`)
      .pipe(map(() => userId));
  }
}
