import { useQuery } from 'react-query';
import ApiUrlService from '~/modules/ApiUrlService';

const defaultQueryConfig = {};

export default class CoinRankingApi extends ApiUrlService {
  config;

  constructor(coinRankingApi) {
    super(coinRankingApi);

    this.config = coinRankingApi.config;
  }

  coins() {
    return {
      endpoint: `${this.apiFullRootUrl}/coins`,
      list: (limit = 20, queryConfig = defaultQueryConfig) => useQuery('coins', async () => http.get(`${this.coins().endpoint}?limit=${limit}`, this.config), queryConfig),
    };
  }

  coin() {
    return {
      endpoint: `${this.apiFullRootUrl}/coin`,
      get: (id, queryConfig = defaultQueryConfig) => useQuery(`coin-${id}`, async () => http.get(`${this.coin().endpoint}/${id}`, this.config), queryConfig),
    };
  }
}
