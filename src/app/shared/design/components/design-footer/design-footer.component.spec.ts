import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { DesignFooterComponent } from './design-footer.component';

describe('DesignFooterComponent', () => {
  let component: DesignFooterComponent;
  let fixture: ComponentFixture<DesignFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignFooterComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(DesignFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
