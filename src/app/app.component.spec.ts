import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader/loader.component';
import { AppDataService, ApiDataService, DynamicComponentHandlerService } from '@ng/cee-core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './_services/auth.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule
      ],
      declarations: [
        AppComponent, LoaderComponent
      ],
      providers: [AppDataService, ApiDataService, DynamicComponentHandlerService, AuthService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
