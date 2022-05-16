// combineComponents.tsx
import type { FC } from 'react';
import React from 'react';
import type { ReactComponentProps as ReactComponentProperties } from '../types';

export default (...components: FC[]) => components.reduce((AccumulatedComponents, CurrentComponent) => function ({ children }: ReactComponentProperties) {
  return (
    <AccumulatedComponents>
      <CurrentComponent>
        {children}
      </CurrentComponent>
    </AccumulatedComponents>
  );
}, ({ children }: ReactComponentProperties) => <>{children}</>);
