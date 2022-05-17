import nProgress from './nprogress';
import i18nInstall from './i18n';
// import './pwa';

export default () => {
  i18nInstall();
  nProgress();
};
