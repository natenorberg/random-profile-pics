import React from 'react';
import {render} from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import teal from '@material-ui/core/colors/teal';
import './app.css';
import {Playground} from './Playground';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: purple,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Profile Pic Playground
          </Typography>
        </Toolbar>
      </AppBar>
      <Playground />
    </div>
  </MuiThemeProvider>
);

render(<App />, document.getElementById('root'));
