import { TestBed } from '@angular/core/testing';

import { UtilityService } from './utility.service';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UtilityService', () => {
  let service: UtilityService;
  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule, platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UtilityService]
    });
    service = TestBed.get(UtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('set and get environment local data', () => {
    service.setLocalData('item', 'item1');
    expect(service.getLocalData('item')).toBe('item1');
  });
  it('step URL by step id', () => {
    const CEE_ROUTE_MAP = {
      "8932":"dashboard-8932",
      "8933":"overview-8933"
    };
    localStorage.setItem('CEE_ROUTE_MAP', JSON.stringify(CEE_ROUTE_MAP));
    expect(service.getStepUrl('')).toBe('');
    expect(service.getStepUrl('8932')).toBe('dashboard-8932');
    expect(service.getStepUrl('8933')).toBe('overview-8933');
  });
  it('step URL by step id without storage', () => {
    localStorage.setItem('CEE_ROUTE_MAP', null);
    expect(service.getStepUrl('')).toBe('');
  });
});
