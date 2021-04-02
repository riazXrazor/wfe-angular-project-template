import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfeAccessDeniedComponent } from './wfe-access-denied.component';

describe('WfeAccessDeniedComponent', () => {
  let component: WfeAccessDeniedComponent;
  let fixture: ComponentFixture<WfeAccessDeniedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfeAccessDeniedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfeAccessDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
