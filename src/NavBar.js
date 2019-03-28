import React, { Component } from 'react';
import logo_qa from './logo_qa.png';
import qa from './qa.png';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import RoomBooking from "./RoomBooking";
import Home from "./Home";
import AccountSettings from "./AccountSettings";
import FloorPlan from "./FloorPlan";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      forename: 'John',
      surname: 'Richards',
      email: 'JohnRichards@qa.com',
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
        <div>
          <div className="grid-container">

            <div className="padding">
            </div>
            <br />
            <div className="logo">
              <img style={{ width: '80px', height: '80px' }} src={logo_qa} alt="Logo" />
            </div>

            <div className="header">
              <img style={{ width: '60px', height: '60px'}} src={qa} alt="Logo" />
              Consulting Rooms
            </div>

            <div className="profile">

              <button>
                <Link to={this.state.forename + this.state.surname + '_account_settings'}>{this.state.forename} {this.state.surname}
                </Link>
              </button>
              <button>
                <NavLink to="/">Logout</NavLink>
              </button>
            </div>

            <div className="main">
              <Route exact path="/Home" component={Home} />
              <Route exact path="/CheckRooms" />
              <Route exact path="/Floor4" component={FloorPlan} floornumber='4' />
              <Route exact path="/Floor5" component={FloorPlan} floornumber='5'/>
              <Route exact path="/RoomBooking" component={RoomBooking} />
              <Route exact path={"/" + this.state.forename + this.state.surname + '_account_settings'} forename={this.state.forename} surname={this.state.surname} email={this.state.email} component={AccountSettings} />
            </div>

            <div className="menu">
              <div className="topnav">
                <NavLink to="/Home">Home</NavLink>
                <br /><br />
                <NavLink to="/CheckRooms">Check Rooms</NavLink>
                <br /><br />
                <NavLink to="/Floor4">Floor 4</NavLink>
                <br /><br />
                <NavLink to="/Floor5">Floor 5</NavLink>
                <br /><br />
                <NavLink to="/RoomBooking">Room Booking</NavLink>
              </div>
            </div>
          </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;