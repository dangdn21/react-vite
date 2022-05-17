import clsx from 'clsx';

export default function Divider(properties) {
  return (
    <div
      {...properties}
      className={`h-0 mx-4 my-2 border border-solid border-blueGray-100 ${clsx(properties.className)}`}
    />
  );
}
