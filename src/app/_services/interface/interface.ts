/**
 * ApiConfigurator
 * api configuration interface, use in api methods
 */
export interface ApiConfigurator {
  endpoint: string;
  paylodType: string;
  ceeEmitter: string;
  responseValidator: RespValidator;
  respKey: string;
  ds?: boolean;
  dsInfo?: DataStoreInfo;
  resCustomOperators?: {
    onSuccess?: string;
    onFailure?: string;
  };
  payloadKey?: string;
  reqCustomOperator?: string;
  method?: number;
  complexPayload?: boolean;
  tokenKey: string;
}

/**
 * StepOperator
 * interface for any on step load operation which directly call from route subscription
 */
export interface StepOperator {
  customOperator: string;
}

/**
 * CustomOperator
 * interface for any custom operation, used in non api method
 */
export interface CustomOperator {
  ceeEmitter?: string;
  customOperator: string;
}

/**
 * DataStoreInfo
 */
export interface DataStoreInfo {
  pkey: string;
  pToken: string;
  pAmt: string;
}

/**
 * RespValidator
 */
export interface RespValidator {
  key: string;
  value: any;
}

/**
 * PageData
 * interface to consume complete application data from wfe
 */
export interface PageData {
  formData: any;
  globalData: any;
}

/**
 * PayloadKeys
 */
export interface PayloadKeys {
  parent: string;
  key: string;
  dataType: string;
}

/**
 * countryStateDisplayControllerMapper
 */
export interface countryStateDisplayControllerMapper {
  country: string;
  state: string[];
  controller?: string;
}
