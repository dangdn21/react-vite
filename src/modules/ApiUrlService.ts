export interface ApiUrlServiceProperties {
  apiRootUrl: string;
  apiCurrentVersion?: string;
  apiFullUrlRootUrl?: string;
}

export type QueryDataProps = Record<string, boolean | number | string>;

export default class ApiUrlService {
  apiRootUrl: string;

  apiCurrentVersion: string;

  apiFullRootUrl: string;

  constructor(api: ApiUrlServiceProperties) {
    this.apiRootUrl = api.apiRootUrl;
    this.apiCurrentVersion = api.apiCurrentVersion ?? '';
    this.apiFullRootUrl = this.apiRootUrl + this.apiCurrentVersion;
  }

  /**
	 * build url params by object, can also join to an existing url params string
	 * @param params
	 * @param encodedUrlParameters
	 */
  buildUrlParams(parameters: QueryDataProps, encodedUrlParameters?: string) {
    if (Object.keys(parameters).length > 0) {
      if (encodedUrlParameters) {
        return `${encodedUrlParameters}&${ApiUrlService.encodeQueryData(parameters)}`;
      }
      return `?${ApiUrlService.encodeQueryData(parameters)}`;
    }
    if (encodedUrlParameters) {
      return encodedUrlParameters;
    }
    return '';
  }

  private static encodeQueryData(data: QueryDataProps) {
    const returnValue: string[] = [];
    for (const key of Object.keys(data)) {
      if (data[key]) {
        returnValue.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`);
      }
    }
    return returnValue.join('&');
  }
}
