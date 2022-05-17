import Particles from 'react-tsparticles';
import { Link } from 'react-router-dom';
import astronaut from '../../../assets/astronaut.svg';
import planet from '../../../assets/planet.svg';
import Variables from '~/modules/vars';
import './404.css';
import clsx from 'clsx';
import particles from './Particles';

export default function NotFoundError(properties) {
  const appName = (Variables.appName || 'VITERECT').toString().toUpperCase();

  return (
    <div {...properties} className={`permission_denied ${clsx(properties.className)}`} dir="ltr">
      <Particles id="tsparticles" options={particles} />
      <div className="denied__wrapper">
        <h1>404</h1>
        <h3>
          LOST IN
          {' '}
          <span>SPACE</span>
          {' '}
          {appName}
          ? Hmm, looks like that page doesn&apos;t exist.
        </h3>
        <img id="astronaut" src={astronaut} alt="" />
        <img id="planet" src={planet} alt="" />
        <Link to="/">
          <button className="denied__link" type="button">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}
