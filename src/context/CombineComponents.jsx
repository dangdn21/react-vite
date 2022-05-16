// combineComponents.tsx
import React from 'react';

export default (...components) => components.reduce((AccumulatedComponents, CurrentComponent) => function ({ children }) {
  return (
    <AccumulatedComponents>
      <CurrentComponent>
        {children}
      </CurrentComponent>
    </AccumulatedComponents>
  );
}, ({ children }) => <>{children}</>);
