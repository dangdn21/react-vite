import { useRoutes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import routes from '../router.config';

import Plugins from './modules/plugins';
import Providers from './context';

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
