import { ImpulseSpinner } from 'react-spinners-kit';
import clsx from 'clsx';

export default function ProgressSpinner(properties) {
  return (
    <div className="relative h-full">
      <div {...properties} className={`absolute top-[50%] left-[50%] ${clsx(properties.className)}`}>
        <ImpulseSpinner size={75} backColor="#626262" frontColor="#536473" />
      </div>
    </div>
  );
}
