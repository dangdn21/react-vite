import type { CSSProperties } from 'react';
import { useEffect, useState, useRef } from 'react';
import type { ReactComponentProps as ReactComponentProperties } from '../../../types';

export default function (properties: ReactComponentProperties) {
  const [tabsIndex, setTabsIndex] = useState<number | null>(1);
  const [style, setStyle] = useState<CSSProperties>({});
  const tabsReference = useRef<HTMLDivElement>(null);
  let tabs: NodeListOf<HTMLElement>;
  const { i18n } = useTranslation();
  const dir = properties.dir ?? i18n.dir();

  useEffect(() => {
    if (tabsIndex && properties.children && tabsReference.current) {
      tabs = tabsReference.current.querySelectorAll('a');

      for (const [index, tab] of tabs.entries()) {
        tab.addEventListener('click', () => {
          setTabsIndex(index + 1);
        });
      }
    }
  }, []);

  useEffect(() => {
    if (tabsIndex && properties.children && tabsReference.current) {
      tabs = tabsReference.current.querySelectorAll('a');
      let distance = 0;

      for (const [index, tab] of tabs.entries()) {
        if (dir === 'ltr') {
          if (index < tabsIndex - 1) {
            distance += tab.offsetWidth;
          }
        } else if (index < tabsIndex - 1) {
          distance -= tab.offsetWidth;
        }
        tab.classList.remove('tab-active');
      }

      tabs[tabsIndex - 1].classList.add('tab-active');

      const style = {
        width: tabs[tabsIndex - 1].clientWidth,
        transform: `translate(${distance}px)`,
      };
      setStyle(style);
    }
  }, [tabsIndex]);

  return (
    <div className="tabs tabs-boxed inline-block z-1">
      <span
        className="absolute bg-sky-800 h-8 transform transition-all ease-in-out duration-400 transform rounded"
        style={style}
      />

      <div ref={tabsReference}>
        {properties.children}
      </div>
    </div>
  );
}
