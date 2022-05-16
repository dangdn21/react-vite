import { useContext } from 'react';
import Overlay from '../Overlay/Overlay';
import type { ReactElementProps as ReactElementProperties } from '../../../types';
import { defaultMainData, MainContext } from '../Main/MainContext';
import windowVariables from '../../../hooks/WindowVars';

const { sideBarOpts: defaultSideBarOptions } = defaultMainData;
const { shrinkPoint: defaultShrinkPoint } = defaultSideBarOptions;

export default function (properties: ReactElementProperties) {
  const { children, ...restProperties } = properties;

  const { removeOverlay } = Overlay();
  const { sideBarState, sideBarOpts, setSideBarState } = useContext(MainContext);

  const { windowWidth } = windowVariables();

  const { shrinkPoint } = { shrinkPoint: defaultShrinkPoint, ...sideBarOpts };

  const action = () => {
    if (sideBarState && shrinkPoint && shrinkPoint > windowWidth) {
      setSideBarState(false);
      removeOverlay();
    }
  };

  return (
    <div
      {...restProperties}
      role="presentation"
      onClick={action}
    >
      {children}
    </div>
  );
}
