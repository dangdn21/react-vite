import { Link } from 'react-router-dom';

import i18n from 'i18next';
import clsx from 'clsx';

export default function LinkButton(properties) {
  const dir = i18n.dir();

  return (
    <Link {...properties}>
      <div
        className="px-6
                  block
                  text-sm
                  font-semibold
                  dark:text-white
                  dark:hover:(bg-gray-100/[0.1])
                  dark:focus:bg-gray-600
                  dark:focus:text-gray-100
                  dark:hover:text-gray-200
                  hover:text-gray-500
                  focus:text-gray-400
                  hover:(bg-gray-100/[0.1])
                  focus:bg-gray-200
                  focus:outline-none
                  focus:shadow-outline"
      >
        <div
          className={clsx(
            dir === 'ltr' && 'hover:translate-x-2',
            dir === 'rtl' && 'hover:(-translate-x-2)',
            'px-4 py-2 mt-2 transform transition-transform ease-in duration-200 opacity-100',
          )}
        >
          {properties.children}
        </div>
      </div>
    </Link>
  );
}
