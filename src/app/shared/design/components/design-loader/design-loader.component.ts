import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  input,
  InputSignal,
} from '@angular/core';

@Component({
  selector: 'app-design-loader',
  imports: [CommonModule],
  templateUrl: './design-loader.component.html',
  styleUrl: './design-loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignLoaderComponent {
  $width: InputSignal<string> = input<string>('140px');
  $height: InputSignal<string> = input<string>('20px');

  private _host: ElementRef<HTMLElement> = inject(ElementRef);

  constructor() {
    effect(() => {
      if (this.$width() && this.$height()) {
        this._updateSize(this.$width(), this.$height());
      }
    });
  }

  private _updateSize(width: string, height: string): void {
    this._host.nativeElement.style.setProperty('--skeleton-rect-width', width);
    this._host.nativeElement.style.setProperty('--skeleton-rect-height', height);
  }
}
