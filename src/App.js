import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import Login from "./Login"


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedin: '0',
    };

    this.changeToMain = () => {
      this.state = {
        loggedin: '0',
      };
    }

    this.changeToLoggedOut = () => {
      this.state = {
        loggedin: '1',
      };
    }

  }

  render() {
    if (this.state.loggedin == '0') {
      return (
        <Login />)
    } else {
      return (
        <NavBar />)
    }
  }
}

export default App;
