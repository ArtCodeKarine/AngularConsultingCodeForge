import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DesignNotificationsComponent } from '../design-notifications.component';
import { DesignNotification } from '../models/notifications.interface';

@Injectable({
  providedIn: 'root',
})
export class DesignNotificationsService {
  private readonly _snackBar = inject(MatSnackBar);

  durationInSeconds = 5;

  openSnackBar(options: DesignNotification) {
    options.timeOut = options.timeOut || this.durationInSeconds * 1000;
    this._snackBar.openFromComponent(DesignNotificationsComponent, {
      duration: options.timeOut,
      data: options,
      panelClass: [this._getPanelClass(options.type)],
    });
  }

  closeSnackBar() {
    this._snackBar.dismiss();
  }

  private _getPanelClass(type: string) {
    switch (type) {
      case 'success':
        return 'snack-bar-success';
      case 'error':
        return 'snack-bar-error';
      case 'warning':
        return 'snack-bar-warning';
      case 'info':
        return 'snack-bar-info';
      default:
        return 'snack-bar-info';
    }
  }
}
