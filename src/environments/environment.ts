// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//Environment configuration for aca

//okta_client_id: "0oarfd84upQaKbxU80h7",
export let environment = {
  production: false,
  environment: "DEV",
  version: "0.0",
  app_name: "MYPERMITS",
  environment_url: {
    api_url: "https://accela-dev.azure-api.net",
    accela_api_url: "http://accela-dev.azure-api.net/v4",
    okta_org_base_url: "https://dcraqa.oktapreview.com",
    okta_org_issuer: "https://dcraqa.oktapreview.com/oauth2/default",
    okta_client_id: "0oarfd84upQaKbxU80h7",
    redirectUri: "http://localhost:4200/implicit/callback"
  },
};
