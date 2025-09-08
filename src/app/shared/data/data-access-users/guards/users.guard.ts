import { Injectable, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

import { StateStatus } from '@shared-utils/data';
import { Observable, catchError, map, of, switchMap, tap } from 'rxjs';
import { UsersFacade } from '../store/users.facade';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly _usersFacade: UsersFacade = inject(UsersFacade);

  checkStore(): Observable<boolean> {
    return this._usersFacade.selectUsersStatus$.pipe(
      tap((status) => {
        if (status === StateStatus.INIT) {
          this._usersFacade.loadUsers();
        }
      }),
      map(() => true),
      catchError(() => of(false)),
    );
  }

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false)),
    );
  }
}

export const UsersGuard: CanActivateFn = (): Observable<boolean> => {
  return inject(UsersService).canActivate();
};
