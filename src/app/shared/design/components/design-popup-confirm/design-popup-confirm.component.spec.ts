import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { DesignPopupConfirmComponent } from './design-popup-confirm.component';

describe('DesignPopupConfirmComponent', () => {
  let component: DesignPopupConfirmComponent;
  let fixture: ComponentFixture<DesignPopupConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignPopupConfirmComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(DesignPopupConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
