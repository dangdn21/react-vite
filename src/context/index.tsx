import type { FC, ReactElement } from 'react';
import ThemeProvider from '../components/UI/Theme/ThemeProvider';
import MainProvider from '../components/UI/Main/MainProvider';
import CombineComponents from './CombineComponents';

export interface ProvidersProperties {
  children: ReactElement;
}

const providers = [
  ThemeProvider,
  MainProvider,
];

export const AppContextProvider = CombineComponents(...providers as FC[]);

export default function (properties: ProvidersProperties) {
  return (
    <AppContextProvider>
      {properties.children}
    </AppContextProvider>
  );
}
