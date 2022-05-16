import BingNewsApi from './BingNews';
import { Vars as Variables } from '../../modules/vars';

const BING_NEWS_RAPIAPI_URL: string = Variables.rapidApi.bingNews.url;
const BING_NEWS_RAPIAPI_HOST: string = Variables.rapidApi.bingNews.host;
const RAPIAPI_KEY: string = Variables.rapidApi.apiKey;

const bingNewsApiData = {
  apiRootUrl: BING_NEWS_RAPIAPI_URL,
  apiCurrentVersion: '',
  config: {
    headers: {
      'x-bingapis-sdk': 'true',
      'x-rapidapi-host': BING_NEWS_RAPIAPI_HOST,
      'x-rapidapi-key': RAPIAPI_KEY,
    },
  },
};

export default new BingNewsApi(bingNewsApiData);
