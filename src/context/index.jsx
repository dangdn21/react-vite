import React from 'react';
import ThemeProvider from '../components/UI/Theme/ThemeProvider';
import MainProvider from '../components/UI/Main/MainProvider';
import CombineComponents from './CombineComponents';



const providers = [
  ThemeProvider,
  MainProvider,
];

export const AppContextProvider = CombineComponents(...providers);

export default function (properties) {
  return (
    <AppContextProvider>
      {properties.children}
    </AppContextProvider>
  );
}
