import { useRoutes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

// using vite-plugin-pages
// eslint-disable-next-line import/no-unresolved
import routes from '~react-pages';

import Plugins from './modules/plugins';
import Providers from './contexts';

function Pages() {
  return useRoutes(routes);
}

export default function App() {
  Plugins();
  return (
    <Providers>
      <RecoilRoot>
        <Pages />
      </RecoilRoot>
    </Providers>
  );
}
