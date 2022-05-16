export default function (properties) {
  return (
    <div {...properties} className={`flex mx-auto ${properties.className ? properties.className : ''}`}>
      {properties.children}
    </div>
  );
}
