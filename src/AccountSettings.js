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
      axios.get('http://52.142.151.160:8001/getters/readEmployee' + this.props.email).then(response => {
        console.log(response.data);
        this.setState({
          data: response.data
        });
        let wordnice = JSON.stringify(response.data);
        wordnice = wordnice.replace('[', " ");
        wordnice = wordnice.replace(']', " ");
        wordnice = wordnice.replace(/{/g, " <divdis>");
        wordnice = wordnice.replace(/}/g, " </divdis> </br>");
        wordnice = wordnice.replace(/\"/g, "");
        wordnice = wordnice.replace(/,/g, "<br/>");

        document.getElementById('testid').innerHTML = wordnice;
      });
    }
    this.setState({
      accountState: 1,
      bookingState: 0,
    });

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
            <div id="testid">
              Account Info
          <br />
              Email : Example@qa.com
          <br />
              Forename : Example
          <br />
              Surname : Example
          <br />
              Password : *******
          </div>
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