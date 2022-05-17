import clsx from 'clsx';

export default function Subtitle(properties) {
  return (
    <span {...properties} className={`text-gray-500 dark:text-true-gray-300 ${clsx(properties.className)}`}>
      {properties.children}
    </span>
  );
}
