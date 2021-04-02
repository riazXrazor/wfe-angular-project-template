import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WfeStepComponent } from "./wfe-step/wfe-step.component";
import { WfeStepNotFoundComponent } from "./wfe-step-not-found/wfe-step-not-found.component";
import { WfeAccessDeniedComponent } from "./wfe-access-denied/wfe-access-denied.component";

const routes: Routes = [
  { path: '', redirectTo: 'DEFAULT_ROUTE', pathMatch: 'full' },
  {
    path: "wfe/step/404",
    component: WfeStepNotFoundComponent,
    pathMatch: "full",
  },
  {
    path: "wfe/step/403",
    component: WfeAccessDeniedComponent,
    pathMatch: "full",
  },
  { path: ":stepId", component: WfeStepComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled", // Add options right here
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
