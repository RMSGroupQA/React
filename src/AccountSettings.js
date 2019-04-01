import React, { Component } from 'react';
import './App.css';
import validator from 'validator';
import axios from "axios";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accountState: 1,
      bookingState: 0,
    }

    this.accountPage = () => {
      this.setState({
        accountState: 1,
        bookingState: 0,
      });
    }

    this.bookingPage = () => {
      this.setState({
        accountState: 0,
        bookingState: 1,
      });
    }
  }

  render() {
    return (
      <div className="App">
      <div className="App-header">
            <div>
            <br />
            <button className={'swapButton' + this.state.accountState} onClick={this.accountPage}>
              Account Info
          </button>
            <button className={'swapButton' + this.state.bookingState} onClick={this.bookingPage}>
              Bookings 
          </button>
          </div>

          <div className={"vis" + this.state.accountState}>
          Account Info
          <br/>
          Email : 
          <br/>
          Forename : 
          <br/>
          Surname : 
          <br/>
          Password : 
          </div>

          <div className={"vis" + this.state.bookingState}>
           Booking Info
          </div>
          </div>
          </div>
    );
  }
}

export default App;