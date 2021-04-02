import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class UtilityService {
  constructor() {}
  setLocalData(key, value) {
    localStorage.setItem(environment.app_name + "_" + key, value);
  }
  getLocalData(key) {
    return localStorage.getItem(environment.app_name + "_" + key);
  }
  getStepUrl(stepId) {
    console.log(stepId);
    const URLObj = localStorage.getItem("CEE_ROUTE_MAP")
      ? JSON.parse(localStorage.getItem("CEE_ROUTE_MAP"))
      : {};
    return stepId && URLObj[stepId] ? URLObj[stepId] : "";
  }
  /* istanbul ignore next */
  removeAlert() {
    document
      .getElementsByTagName("body")[0]
      .removeChild(document.getElementById("ngxdialog-0"));
  }
}
