import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-design-footer',
  imports: [TranslateModule],
  templateUrl: './design-footer.component.html',
  styleUrl: './design-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignFooterComponent {
  get year(): number {
    return new Date().getFullYear();
  }

  version = '1.0.0-SNAPSHOT';
}
