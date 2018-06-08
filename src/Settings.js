import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

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

    <div style={{marginTop: 16}}>
      <FormControlLabel
        control={
          <Switch
            checked={settings.showInitials}
            onChange={(e, checked) => setField('showInitials', checked)}
          />
        }
        label="Show Initials"
      />
    </div>

    <div style={{marginTop: 16}}>
      <FormControl fullWidth>
        <InputLabel htmlFor="style">Background Style</InputLabel>
        <Select
          value={settings.backgroundStyle}
          onChange={e => setField('backgroundStyle', valueFrom(e))}
          input={<Input name="style" />}
        >
          <MenuItem value="solid">Solid</MenuItem>
          <MenuItem value="gradient">Gradient</MenuItem>
          <MenuItem value="topo">Topography</MenuItem>
        </Select>
      </FormControl>
    </div>
  </div>
);

export default Settings;
