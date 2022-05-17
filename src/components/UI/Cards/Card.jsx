import clsx from 'clsx';

export default function Card(properties) {
  return (
    <div
      {...properties}
      className={`right-0 w-full origin-top-right rounded-md shadow-lg p-2 overflow-hidden
		  bg-white dark:bg-dark-300 rounded-md shadow dark:bg-dark-400 ${clsx(properties.className)}`}
    >
      {properties.children}
    </div>
  );
}
