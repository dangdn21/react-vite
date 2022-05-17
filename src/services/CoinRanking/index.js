import CoinRankingApi from './CoinRanking';
import Variables from '~/modules/vars';

const COINRANKING_RAPIAPI_URL = Variables.rapidApi.coinsRanking.url;
const COINRANKING_RAPIAPI_HOST = Variables.rapidApi.coinsRanking.host;
const RAPIAPI_KEY = Variables.rapidApi.apiKey;

const coinRankingApiData = {
  apiRootUrl: COINRANKING_RAPIAPI_URL,
  apiCurrentVersion: '',
  config: {
    headers: {
      'x-rapidapi-host': COINRANKING_RAPIAPI_HOST,
      'x-rapidapi-key': RAPIAPI_KEY,
    },
  },
};

export default new CoinRankingApi(coinRankingApiData);
