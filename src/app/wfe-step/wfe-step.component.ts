/* tslint:disable */
import { Component, OnInit } from "@angular/core";
import {
  CeeApiService
} from '@ng/cee-core';
import { ActivatedRoute, Router } from "@angular/router";
import { UtilityService } from "../_services/utility.service";
import { LoaderService } from "@ng/cee-core";
import { HttpBackend, HttpClient } from '@angular/common/http';
@Component({
  selector: "app-wfe-step",
  templateUrl: "./wfe-step.component.html",
  styleUrls: ["./wfe-step.component.scss"],
})
export class WfeStepComponent implements OnInit {
  stepId: any;
  isLoading: boolean;
  httpClient: any;
  constructor(
    private route: ActivatedRoute,
    private ceeApiService: CeeApiService,
    public utilityService: UtilityService,
    public router: Router,
    private loaderService: LoaderService,
    public httpBackend: HttpBackend,


  ) {
    this.httpClient = new HttpClient(httpBackend);
  }
  ngOnInit() {
    /* istanbul ignore next */
    this.route.paramMap.subscribe((params) => {
      const URL = params.get("stepId");
      const stepId = URL ? URL.split("-")[URL.split("-").length - 1] : "";
      this.stepId = stepId;

      this.ceeApiService.setStepId(this.stepId);
    });

     /* istanbul ignore next */
    this.loaderService.loader.subscribe((isLoading) => {
      setTimeout(() => {
        this.isLoading = isLoading;
      }, 0);
    });
  }
}
