import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import ProfilePic from './ProfilePic';

export const ProfileView = ({settings}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <ProfilePic settings={settings} />
    <Typography variant="title">
      {settings.firstName} {settings.lastName}
    </Typography>
  </div>
);

export default ProfileView;
