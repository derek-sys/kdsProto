import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import NavBar from './components/SubPage.jsx';
import SubContainer from './components/SubContainer.jsx';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#282828',
    },
    secondary: {
      main: '#7CEAD1',
    },
    text: {
      primary: '#7CEAD1',
    },
  },
});

export default function App(props) {
  return (
    <Router>
      <div id='main'>
        <ThemeProvider theme={darkTheme}>
          <NavBar />
          <SubContainer />
        </ThemeProvider>
      </div>
    </Router>
  );
}
