import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Settings from './Settings';
import ProfileView from './ProfileView';

export class Playground extends React.Component {
  state = {
    firstName: 'Nate',
    lastName: 'Norberg',
    username: 'natenorberg',
  };

  setField = (name, value) => {
    this.setState(() => ({[name]: value}));
  };

  render() {
    return (
      <div style={{display: 'flex'}}>
        <div style={{flex: '1 1 50%', margin: 20}}>
          <Card>
            <CardContent>
              <Typography variant="title">User Settings</Typography>
              <Settings settings={this.state} setField={this.setField} />
            </CardContent>
          </Card>
        </div>
        <div style={{flex: '1 1 50%', margin: 20}}>
          <Card>
            <CardContent>
              <Typography variant="title">Profile</Typography>
              <ProfileView settings={this.state} />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
