import { useQuery } from 'react-query';
import type { UseQueryOptions } from 'react-query/types/react/types';
import type { AxiosRequestConfig } from 'axios';
import type { CoinEndpointType, CoinRankingProps as CoinRankingProperties, CoinsEndpointType } from './types';
import ApiUrlService from '../../modules/ApiUrlService';

const defaultQueryConfig: UseQueryOptions = {};

export default class CoinRankingApi extends ApiUrlService {
  config: AxiosRequestConfig;

  constructor(coinRankingApi: CoinRankingProperties) {
    super(coinRankingApi);

    this.config = coinRankingApi.config;
  }

  coins(): CoinsEndpointType {
    return {
      endpoint: `${this.apiFullRootUrl}/coins`,
      list: (limit = 20, queryConfig: UseQueryOptions = defaultQueryConfig) => useQuery('coins', async () => http.get(`${this.coins().endpoint}?limit=${limit}`, this.config), queryConfig as object),
    };
  }

  coin(): CoinEndpointType {
    return {
      endpoint: `${this.apiFullRootUrl}/coin`,
      get: (id: string, queryConfig: UseQueryOptions = defaultQueryConfig) => useQuery(`coin-${id}`, async () => http.get(`${this.coin().endpoint}/${id}`, this.config), queryConfig as object),
    };
  }
}
