export default function Row(properties) {
  return (
    <div {...properties} className={`flex flex-row ${properties.className ? properties.className : ''}`}>
      {properties.children}
    </div>
  );
}
