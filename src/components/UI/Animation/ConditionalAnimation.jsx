import { useState, useEffect } from 'react';


export default function ConditionalAnimation(properties) {
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
