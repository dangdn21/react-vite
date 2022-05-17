export default function Col(properties) {
  return (
    <div {...properties} className={`flex flex-col ${properties.className ? properties.className : ''}`}>
      {properties.children}
    </div>
  );
}
