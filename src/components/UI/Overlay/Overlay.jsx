import { useContext } from 'react';
import { MainContext } from '../Main/MainContext';

const defaultOverlay = {
  onClick: () => null,
};

export default () => {
  const { overlays, setOverlays } = useContext(MainContext);

  const addOverlay = (overlay = defaultOverlay) => {
    const transformedOverlays = [...overlays, overlay];
    setOverlays(transformedOverlays);
  };

  const removeOverlay = () => {
    setOverlays(overlays.slice(0, -1));
    // else throw "No Overlays exists, You have tried to removeOverlay but no overlays found in stack."
  };

  return { addOverlay, removeOverlay };
};
