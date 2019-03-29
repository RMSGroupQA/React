import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import Login from "./Login"
import FloorPlan from "./FloorPlan";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedin: '0',
    };

    this.changeToMain = () => {
      this.setState({
        loggedin:1,
      });
    }
  }

  render() {
    return (
      <div>
        <div className={"logindis" + this.state.loggedin}>
		<button onClick={this.changeToMain}>Login</button>
        <Login/>
        </div>
        <div className={"navBardis" + this.state.loggedin}>
        <NavBar />
        </div>
    </div> )
    }
  }

export default App;
