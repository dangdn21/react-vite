import { createContext } from 'react';

export const defaultMainData = {
  sideBarState: false,
  sideBarOpts: {
    width: 260,
    shrinkPoint: 1300,
  },
  overlayState: false,
  overlays: [],
};

export const MainContext = createContext({});
