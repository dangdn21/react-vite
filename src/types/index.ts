import type {
  CSSProperties, ReactNode, HTMLAttributes, DetailedHTMLProps,
} from 'react';

export interface ReactComponentProperties {
  children: ReactNode;
  dir?: 'ltr' | 'rtl';
}

export type ReactElementProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type StyleObject = Record<string, CSSProperties>;
