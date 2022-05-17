export default class Vars {
  static appName;

  static env;

  static theme = {
    defaultTheme: '',
  };

  static rapidApi = {
    apiKey: '',
    bingNews: {
      url: '',
      host: '',
    },
    coinsRanking: {
      url: '',
      host: '',
    },
  };

  static setupVars(environmentVariables) {
    Vars.appName = environmentVariables.VITE_APP_NAME;
    Vars.env = environmentVariables.VITE_ENV;
    Vars.theme = { defaultTheme: environmentVariables.VITE_DEFAULT_THEME };
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
