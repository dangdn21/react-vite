import './Tooltip.css';
import clsx from 'clsx';

export default function Tooltip(properties) {
  return (
    <div className="flex w-fit">
      <div {...properties} className="has-tooltip relative">
        <span className={`transition-opacity duration-300 tooltip invisible inline-block absolute text-center
								rounded shadow-xl text-semibold p-1 bg-gray-100 dark:bg-dark-200 text-blue-500 dark:text-white opacity-100
								${clsx(properties.className)}`}
        >
          {properties.tooltip}
        </span>
        {properties.children}
      </div>
    </div>
  );
}
