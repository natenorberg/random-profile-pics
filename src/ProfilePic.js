import * as React from 'react';
import toMaterialStyle from 'material-color-hash';
import ColorHash from 'color-hash';
import Topo from './Topo';
import Triangles from './Triangles';
import {lighten} from 'polished';

const getInitials = settings =>
  settings.firstName.charAt(0).toUpperCase() + settings.lastName.charAt(0).toUpperCase();

const colorHash = new ColorHash();

const getBgColorHash = (seed: string) => toMaterialStyle(seed, 800).backgroundColor;
const getFgColorHash = (seed: string) => toMaterialStyle(seed, 300).backgroundColor;

const getBackground = settings => {
  const seed = settings.username;
  switch (settings.backgroundStyle) {
    case 'gradient':
      return `linear-gradient(to bottom right, ${getBgColorHash(seed)} 0%, ${getBgColorHash(
        seed + '-alt',
      )} 100%)`;
    case 'solid':
    default:
      return getBgColorHash(seed);
  }
};

const ProfilePic = ({settings}) => {
  const [startX, startY, bgSize] = colorHash.rgb(settings.username + '-topo');

  return (
    <div
      id="bigProfilePic"
      style={{
        width: 150,
        height: 150,
        borderRadius: '100%',
        background: getBackground(settings),
        margin: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {settings.backgroundStyle === 'topo' && (
        <Topo
          fill={getFgColorHash(settings.username)}
          startX={startX}
          startY={startY}
          bgSize={bgSize * 2}
        />
      )}
      {settings.backgroundStyle === 'triangles' && (
        <Triangles
          color1={getBackground(settings)}
          color2={getBgColorHash(settings.username + '-alt')}
          startX={startX / 4}
          startY={startY / 4}
          bgSize={bgSize * 4}
        />
      )}
      <div style={{fontSize: 70, fontFamily: 'Roboto', color: '#fff', zIndex: 10}}>
        {settings.showInitials && getInitials(settings)}
      </div>
    </div>
  );
};

export default ProfilePic;
