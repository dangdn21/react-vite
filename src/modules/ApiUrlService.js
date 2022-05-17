export default class ApiUrlService {
  apiRootUrl;

  apiCurrentVersion;

  apiFullRootUrl;

  constructor(api) {
    this.apiRootUrl = api.apiRootUrl;
    this.apiCurrentVersion = api.apiCurrentVersion ?? '';
    this.apiFullRootUrl = this.apiRootUrl + this.apiCurrentVersion;
  }

  /**
	 * build url params by object, can also join to an existing url params string
	 * @param params
	 * @param encodedUrlParameters
	 */
  buildUrlParams(parameters, encodedUrlParameters) {
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

  static encodeQueryData(data) {
    const returnValue = [];
    // eslint-disable-next-line no-unused-vars
    for (const key of Object.keys(data)) {
      if (data[key]) {
        returnValue.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`);
      }
    }
    return returnValue.join('&');
  }
}
