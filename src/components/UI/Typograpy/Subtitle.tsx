import clsx from 'clsx';
import type { ReactElementProps as ReactElementProperties } from '../../../types';

export default function (properties: ReactElementProperties) {
  return (
    <span {...properties} className={`text-gray-500 dark:text-true-gray-300 ${clsx(properties.className)}`}>
      {properties.children}
    </span>
  );
}
