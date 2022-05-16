import {
  useRoutes,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import type * as React from 'react';
import routes from '~react-pages';

import ReloadPrompt from './components/ReloadPrompt';
import Plugins from './plugins';
import Providers from './context';

function Pages(): React.ReactElement | null {
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
