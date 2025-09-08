import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-design-popup-confirm',
  imports: [MatDialogModule, MatButtonModule, TranslateModule, MatIconModule],
  templateUrl: './design-popup-confirm.component.html',
  styleUrl: './design-popup-confirm.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignPopupConfirmComponent {}
