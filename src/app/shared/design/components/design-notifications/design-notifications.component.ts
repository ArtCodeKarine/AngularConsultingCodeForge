import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  inject,
  Signal,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { timer } from 'rxjs';
import { DesignNotification, DesignNotificationType } from './models/notifications.interface';

@Component({
  selector: 'app-design-notifications',
  imports: [
    MatButtonModule,
    MatSnackBarLabel,
    MatSnackBarActions,
    MatSnackBarAction,
    TranslateModule,
    MatProgressBarModule,
    MatIconModule,
  ],
  templateUrl: './design-notifications.component.html',
  styleUrl: './design-notifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DesignNotificationsComponent {
  readonly data: DesignNotification = inject<DesignNotification>(MAT_SNACK_BAR_DATA);
  @ViewChild(MatProgressBar, { static: true }) progressBar: MatProgressBar;
  @HostBinding('class') class =
    'snack-bar-container-' + (this.data.type ? `${this.data.type}` : '');
  snackBarRef = inject(MatSnackBarRef);
  $progressTimer: Signal<number>;

  notificationTypes: DesignNotificationType[] = ['success', 'error', 'warning', 'info'];
  iconMap: Record<DesignNotificationType, string> = {
    success: 'check_circle',
    error: 'error',
    warning: 'warning',
    info: 'info',
  };

  constructor() {
    this.$progressTimer = toSignal(timer(0, this.data.timeOut / 100));
  }
}
