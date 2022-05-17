import { useQuery } from 'react-query';
import ApiUrlService from '~/modules/ApiUrlService';

const defaultQueryConfig = {};

export default class BingNewsApi extends ApiUrlService {
  config;

  constructor(bingNewsApi) {
    super(bingNewsApi);

    this.config = bingNewsApi.config;
  }

  news() {
    return {

      urlParams: this.buildUrlParams({
        safeSearch: 'off',
        textFormat: 'Raw',
      }),

      endpoint: '/news',

      get: (parameters = { count: 20 }, queryConfig = defaultQueryConfig) => {
        const url = this.apiFullRootUrl + this.news().endpoint + this.buildUrlParams(parameters, this.news().urlParams);
        const { config } = this;

        return useQuery('news', async () => http.get(url, config), queryConfig);
      },
    };
  }
}
