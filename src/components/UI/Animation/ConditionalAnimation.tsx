import type { ReactElement } from 'react';
import { useState, useEffect } from 'react';
import type { ReactElementProps as ReactElementProperties } from '../../../types';

interface ConditionalAnimationProperties extends ReactElementProperties {
  children: ReactElement;
  condition: boolean;
  timeout: number;
}

export default function (properties: ConditionalAnimationProperties): JSX.Element {
  const [render, setRender] = useState(false);

  const { condition, timeout, children } = properties;

  useEffect(() => {
    if (condition) {
      setTimeout(() => {
        setRender(true);
      }, timeout);
    } else {
      setTimeout(() => {
        setRender(false);
      }, timeout);
    }
  }, [condition]);

  return render ? children : <div />;
}
