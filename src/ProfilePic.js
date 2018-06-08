import * as React from 'react';
import ColorHash from 'color-hash';

const getInitials = settings =>
  settings.firstName.charAt(0).toUpperCase() + settings.lastName.charAt(0).toUpperCase();

const colorHash = new ColorHash();

const getBackground = settings => {
  return colorHash.hex(settings.username);
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
      {getInitials(settings)}
    </div>
  </div>
);

export default ProfilePic;
