import React from "react";
import Routes from "./routes";
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core';
/* Cores */
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

import './App.css';

let theme = createMuiTheme(
  {
    palette: {
      primary: blue,
      secondary: red,
    },
  }

);
theme = responsiveFontSizes(theme);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Routes />;
    </MuiThemeProvider>

  )
}

export default App;
