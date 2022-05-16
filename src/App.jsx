import { useRoutes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import routes from '~react-pages';

import ReloadPrompt from './components/ReloadPrompt';
import Plugins from './plugins';
import Providers from './context';

function Pages() {
  return useRoutes(routes);
}

export default function () {
  Plugins();
  return (
    <Providers>
      <RecoilRoot>
        <ReloadPrompt />
        <Pages />
      </RecoilRoot>
    </Providers>
  );
}
