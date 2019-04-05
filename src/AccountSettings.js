import React, { Component } from 'react';
import './App.css';
import validator from 'validator';
import axios from "axios";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      admin : '1',
      accountState: 1,
      bookingState: 0,
      usersState : 0,
    }

    this.accountPage = () => {
      console.log(this.props.data);
      this.setState({
      accountState: 1,
      bookingState: 0,
      usersState : 0,
    });
  }

    this.bookingPage = () => {
      this.setState({
        accountState: 0,
        bookingState: 1,
        usersState : 0,
      });
    }

    this.usersState = () => {
      console.log(this.props.data);
      this.setState({
      accountState: 0,
      bookingState: 0,
      usersState : 1,
    });
  }
  }



  render() {
    if (this.state.admin == 1)
    {
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
          <button className={'swapButton' + this.state.usersState} onClick={this.usersState}>
              Users
          </button>
          </div>
          <div className={"adminvis" + this.state.accountState} >
          <p>{this.props.data}</p>
          </div>
          <div className={"adminvis" + this.state.bookingState}>
            Booking Info
          </div>
          <div className={"adminvis" + this.state.usersState}>
            All Users
          </div>
        </div>
      </div>
    );
  }
  else 
  {
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
          <p>{this.props.data}</p>
          </div>
          <div className={"vis" + this.state.bookingState}>
            Booking Info
          </div>
        </div>
      </div>
    );
  }
}
}

export default App;