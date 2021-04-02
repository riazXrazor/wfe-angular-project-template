// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  environment: "DEV",
  version: "0.0",
  app_name: "MYPERMITS",
  grant_type: "password",
  DEV: {
    loginURL: "http://localhost:4200/",
    api_url: "https://accela-dev.azure-api.net", //"https://accela-dev-backend.azurewebsites.net", //'https://accela-dev.azure-api.net',
    okta_org_base_url: "https://dcra-poc.okta.com",
    okta_org_issuer: "https://dcra-poc.okta.com/oauth2/default",
    okta_client_id: "0oa3l82somk4foZkE357",
    redirectUri: "http://localhost:4200/implicit/callback",
  },
  QA: {
    loginURL: "https://sfv2-pivs-qa.inadev.net/",
    api_url: "https://accela-qa.azure-api.net",
    accela_api_url: "https://accela-qa.azure-api.net/v4",
    okta_org_base_url: "https://dcraqa.oktapreview.com",
    okta_org_issuer: "https://dcraqa.oktapreview.com/oauth2/default",
    okta_client_id: "0oatmzjc84cg4Lwwc0h7",
    redirectUri: "https://accela-qa.azurewebsites.net/implicit/callback",
  },
  PROD: {
    loginURL: "https://scout.dcra.dc.gov/",
    api_url: "https://scout.dcra.dc.gov/api/",
    okta_org_base_url: "https://accessdc.dcra.dc.gov",
    okta_org_issuer: "https://accessdc.dcra.dc.gov/oauth2/default",
    okta_client_id: "0oalap8cQntIs0b1N4h5",
    redirectUri: "https://scout.dcra.dc.gov/implicit/callback",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
