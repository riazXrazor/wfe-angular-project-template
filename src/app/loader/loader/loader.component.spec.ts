import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';
import { LoaderService } from '@ng/cee-core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let service: LoaderService;

  beforeEach(async(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule, platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      declarations: [ LoaderComponent ],
      providers: [
        LoaderService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('showing loader', () => {
    service = TestBed.get(LoaderService);
    service.isLoading.next(true);
    expect(component.isLoading).toBeTruthy();
  });
  it('removeing loader', () => {
    service = TestBed.get(LoaderService);
    service.isLoading.next(false);
    expect(component.isLoading).toBeDefined();
  });
});
