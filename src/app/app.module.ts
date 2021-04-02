import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import {
  NgCeeCoreModule,
  CeeInitServiceService,
  ModalRendererComponent,
  AlertModalComponent,
  LoaderInterceptorService
} from "@ng/cee-core";

import { APP_INITIALIZER } from "@angular/core";
import { WfeStepComponent } from "./wfe-step/wfe-step.component";
import { WfeStepNotFoundComponent } from "./wfe-step-not-found/wfe-step-not-found.component";
import { WfeAccessDeniedComponent } from "./wfe-access-denied/wfe-access-denied.component";
import { LoaderComponent } from "./loader/loader/loader.component";


import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    WfeStepComponent,
    WfeStepNotFoundComponent,
    WfeAccessDeniedComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgCeeCoreModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: ceeinitProviderFactory,
      deps: [CeeInitServiceService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  entryComponents: [ModalRendererComponent, AlertModalComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
export function ceeinitProviderFactory(ceeInitProvider: CeeInitServiceService) {
  return () => ceeInitProvider.initConfigurationJSON();
}

