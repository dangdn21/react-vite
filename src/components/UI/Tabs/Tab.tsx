import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx';

export default function (properties: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
  return (
    <a {...properties} className={`tab cursor-pointer z-2 !bg-transparent ${clsx(properties.className)}`}>
      {properties.children}
    </a>
  );
}
