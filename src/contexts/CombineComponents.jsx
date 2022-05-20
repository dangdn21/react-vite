export default (...components) => (components || []).reduce((AccumulatedComponents, CurrentComponent) => function CombineComponents({ children }) {
  return (
    <AccumulatedComponents>
      <CurrentComponent>
        {children}
      </CurrentComponent>
    </AccumulatedComponents>
  );
}, ({ children }) => children);
