import i18n from 'i18next';
import { useContext, useEffect } from 'react';
import clsx from 'clsx';
import Col from '../Grid/Col';
import IconButton from '../Buttons/IconButton';
import { MainContext, defaultMainData }  from '~/components/UI/Main';
import windowVariables from '~/hooks/WindowVars';
import Overlay from '../Overlay/Overlay';

const { sideBarOpts: defaultSideBarOptions } = defaultMainData;
const { width: defaultWidth, shrinkPoint: defaultShrinkPoint } = defaultSideBarOptions;

const defaultProps = { width: defaultWidth, shrinkPoint: defaultShrinkPoint };

/**
 * SideBar.
 * @param props - {
 *  shrinkPoint: number | false (default - 1300) - if number, then the sidebar will shrink when the window width is less than this number.
 *  width: number (default - 260) - sidebar width.
 * }
 */
function SideBar(properties = defaultProps) {
  const dir = i18n.dir();
  const {
		      addOverlay,
		      removeOverlay,
	      } = Overlay();
  const { windowWidth } = windowVariables();

  const {
		      children,
		      width,
		      className,
		      shrinkPoint,
		      ...restProperties
	      } = {
    width: defaultWidth,
    shrinkPoint: defaultShrinkPoint,
    ...properties,
  };

  const {
		      sideBarState: state,
		      setSideBarState: setState,
		      setSideBarOpts,
		      overlays,
	      } = useContext(MainContext);

  const setOpenState = (newSate) => {
    setState(newSate);

    if (shrinkPoint && windowWidth < shrinkPoint) {
      if (newSate) {
        addOverlay({
          onClick: () => {
            setOpenState(false);
            removeOverlay();
          },
        });
      } else if (overlays.length > 0) {
        removeOverlay();
      }
    }
  };

  useEffect(() => {
    setSideBarOpts({
      shrinkPoint,
      width,
    });
  }, [shrinkPoint, width]);
  useEffect(() => {
    if (shrinkPoint && windowWidth > shrinkPoint) {
      setOpenState(true);
    } else if (shrinkPoint && windowWidth < shrinkPoint) {
      setOpenState(false);
    }
  }, [windowWidth]);

  const style = {
    width: `${width}px`,
  };

  return (
    <div>
      <div
        id="sideBar"
        {...restProperties}
        className={`fixed h-full overflow-x-hidden text-gray-700 bg-white dark:bg-dark-500
                              ${state ? 'translate-x-0' : ((dir === 'ltr' ? '-translate-x-full' : 'translate-x-full'))} transform z-30 shadow-lg
                              transition-transform ease-in-out duration-400 ${clsx(className)}`}
        style={style}
      >
        <nav className="h-full">
          {children}
        </nav>
      </div>

      <Col
        className={`self-center fixed mt-10  text-gray-700 bg-white dark:bg-dark-500
	                    transform transition-transform ease-in-out duration-400 z-30 shadow-lg`}
        style={{
				     marginLeft: `${width}px`,
				     transform: dir === 'rtl' ? (state ? `translate(-${width}px)` : '') : (state ? '' : `translate(-${width}px)`),
			     }}
      >
        <IconButton
          className={`${state ? 'rotate-0' : 'rotate-180'} transform transition-transform ease-out-in duration-500`}
          onClick={() => { setOpenState(!state); }}
        >
          {dir === 'ltr' ? <IconCarbonChevronLeft /> : <IconCarbonChevronRight />}
        </IconButton>
      </Col>
    </div>
  );
}

SideBar.defaultProps = defaultProps;

export default SideBar;
