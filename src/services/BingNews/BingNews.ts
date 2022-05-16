import { useQuery } from 'react-query';
import type { UseQueryOptions } from 'react-query/types/react/types';
import type { AxiosRequestConfig } from 'axios';
import ApiUrlService from '../../modules/ApiUrlService';
import type { QueryDataProps as QueryDataProperties } from '../../modules/ApiUrlService';
import type { BingNewsProps as BingNewsProperties, NewsEndpointType, NewsGetProps as NewsGetProperties } from './types';

const defaultQueryConfig: UseQueryOptions = {};

export default class BingNewsApi extends ApiUrlService {
  config: AxiosRequestConfig;

  constructor(bingNewsApi: BingNewsProperties) {
    super(bingNewsApi);

    this.config = bingNewsApi.config;
  }

  news(): NewsEndpointType {
    return {

      urlParams: this.buildUrlParams({
        safeSearch: 'off',
        textFormat: 'Raw',
      }),

      endpoint: '/news',

      get: (parameters: NewsGetProperties = { count: 20 }, queryConfig = defaultQueryConfig) => {
        const url = this.apiFullRootUrl + this.news().endpoint + this.buildUrlParams(parameters as QueryDataProperties, this.news().urlParams);
        const { config } = this;

        return useQuery('news', async () => http.get(url, config), queryConfig as object);
      },
    };
  }
}
