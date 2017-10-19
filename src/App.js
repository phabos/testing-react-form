import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Form />
      </MuiThemeProvider>
    );
  }
}

export default App;
