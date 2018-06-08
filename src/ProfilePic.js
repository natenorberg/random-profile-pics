import * as React from 'react';
import ColorHash from 'color-hash';
import Topo from './Topo';
import Triangles from './Triangles';
import {lighten} from 'polished';

const getInitials = settings =>
  settings.firstName.charAt(0).toUpperCase() + settings.lastName.charAt(0).toUpperCase();

const colorHash = new ColorHash({hue: 8, lightness: 0.45, saturation: 0.65});

const getBackground = settings => {
  const seed = settings.username;
  // .split()
  // .reverse()
  // .join('');
  switch (settings.backgroundStyle) {
    case 'gradient':
      return `linear-gradient(to bottom right, ${colorHash.hex(seed)} 0%, ${colorHash.hex(
        seed + '-alt',
      )}) 100%`;

    case 'solid':
    default:
      return colorHash.hex(seed);
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
          fill={lighten(0.2, colorHash.hex(settings.username + '-alt'))}
          startX={startX}
          startY={startY}
          bgSize={bgSize * 2}
        />
      )}
      {settings.backgroundStyle === 'triangles' && (
        <Triangles
          color1={getBackground(settings)}
          color2={lighten(0.2, colorHash.hex(settings.username + '-alt'))}
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
