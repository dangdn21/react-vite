import clsx from 'clsx';

export default function Tab(properties) {
  return (
    <a {...properties} className={`tab cursor-pointer z-2 !bg-transparent ${clsx(properties.className)}`}>
      {properties.children}
    </a>
  );
}
