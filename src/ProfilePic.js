import * as React from 'react';
import ColorHash from 'color-hash';

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
        seed + '-',
      )}) 100%`;

    case 'solid':
    default:
      return colorHash.hex(seed);
  }
};

const ProfilePic = ({settings}) => (
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
    }}
  >
    <div style={{fontSize: 70, fontFamily: 'Roboto', color: 'rgba(255,255,255,0.9'}}>
      {settings.showInitials && getInitials(settings)}
    </div>
  </div>
);

export default ProfilePic;
