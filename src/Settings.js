import * as React from 'react';
import TextField from '@material-ui/core/TextField';

const valueFrom = e => e.target.value;

export const Settings = ({settings, setField}) => (
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch'}}>
    <div style={{marginTop: 16}}>
      <TextField
        id="firstName"
        label="First Name"
        value={settings.firstName}
        onChange={e => setField('firstName', valueFrom(e))}
        fullWidth
      />
    </div>
    <div style={{marginTop: 16}}>
      <TextField
        id="lastName"
        label="Last Name"
        value={settings.lastName}
        onChange={e => setField('lastName', valueFrom(e))}
        fullWidth
      />
    </div>
    <div style={{marginTop: 16}}>
      <TextField
        id="username"
        label="Username"
        value={settings.username}
        onChange={e => setField('username', valueFrom(e))}
        fullWidth
      />
    </div>
  </div>
);

export default Settings;
