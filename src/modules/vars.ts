import type { ThemeName } from '../components/UI/Theme/types';

export interface EnvironmentFileProperties {
  VITE_APP_NAME: string;
  VITE_ENV: string;
  VITE_DEFAULT_THEME: string;
  VITE_X_RAPIDAPI_KEY: string;
  VITE_BING_NEWS_RAPIDAPI_URL: string;
  VITE_COINRANKING_RAPIDAPI_URL: string;
  VITE_COINRANKING_RAPIDAPI_HOST: string;
  VITE_BING_NEWS_RAPIDAPI_HOST: string;
}

export class Vars {
  static appName: string;

  static env: string;

  static theme: {
    defaultTheme: ThemeName;
  };

  static rapidApi: {
    apiKey: string;
    bingNews: {
      url: string;
      host: string;
    };
    coinsRanking: {
      url: string;
      host: string;
    };
  };

  static setupVars(environmentVariables: EnvironmentFileProperties) {
    Vars.appName = environmentVariables.VITE_APP_NAME;
    Vars.env = environmentVariables.VITE_ENV;
    Vars.theme = { defaultTheme: environmentVariables.VITE_DEFAULT_THEME as ThemeName };
    Vars.rapidApi = {
      apiKey: environmentVariables.VITE_X_RAPIDAPI_KEY,
      bingNews: {
        url: environmentVariables.VITE_BING_NEWS_RAPIDAPI_URL,
        host: environmentVariables.VITE_BING_NEWS_RAPIDAPI_HOST,
      },
      coinsRanking: {
        url: environmentVariables.VITE_COINRANKING_RAPIDAPI_URL,
        host: environmentVariables.VITE_COINRANKING_RAPIDAPI_HOST,
      },
    };
  }
}
