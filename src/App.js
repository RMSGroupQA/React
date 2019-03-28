import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import Login from "./Login"
let loggedin = true;


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedin: '1',
    };
  }
  
  render() {
    if (this.state.loggedin == '1') {
      return (
        <Login />)
    } else {
      return (
        <NavBar />)
    }
  }
}

export default App;
