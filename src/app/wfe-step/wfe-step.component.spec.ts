import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WfeStepComponent } from './wfe-step.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { NgCEEStoreService } from '@ng/cee-core';

describe('WfeStepComponent', () => {
	let component: WfeStepComponent;
	let fixture: ComponentFixture<WfeStepComponent>;

	beforeEach(
		async(() => {
			TestBed.resetTestEnvironment();
			TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
			
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(WfeStepComponent);
		component = fixture.componentInstance;
		privateComponent = fixture.componentInstance;
		ngCEEStoreService = TestBed.get(NgCEEStoreService);
		fixture.detectChanges();
	});

	it('should create', (done) => {
		expect(component).toBeTruthy();
		done();
	});
	
});

