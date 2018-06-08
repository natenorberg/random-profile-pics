import React from 'react';
import {render} from 'react-dom';
import Hello from './Hello';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import teal from '@material-ui/core/colors/teal';
import './app.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: purple,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <div style={styles}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Profile Pic Playground
          </Typography>
        </Toolbar>
      </AppBar>

      <Hello name="CodeSandbox" />
      <h2>Start editing to see some magic happen {'\u2728'}</h2>
    </div>
  </MuiThemeProvider>
);

render(<App />, document.getElementById('root'));
