import React, { Component } from 'react';
import logo_qa from './logo_qa.png';
import qa from './qa.png';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import RoomBooking from "./RoomBooking";
import Home from "./Home";
import AccountSettings from "./AccountSettings";
import FloorPlan5 from "./FloorPlan5";
import FloorPlan4 from "./FloorPlan4";
import RoomList from "./RoomList";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      forename: 'John',
      surname: 'Richards',
      email: 'JohnRichards@qa.com',
    };
    this.rmsClick = () => {
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <div className="grid-container">

              <div className="padding">
              </div>
              <br />
              <div className="logo">
                <img style={{ width: '80px', height: '80px' }} src={logo_qa} onClick={this.rmsClick} />
              </div>

              <div className="header">
                <img style={{ width: '90px', height: '90px' }} src={qa} />
                <Link to="/Home">
                <h1>
                  Consulting Rooms
                  </h1>
                </Link>
              </div>

              <div className="profile">
                <button>
                  <Link to={this.state.forename + this.state.surname + '_account_settings'}>{this.state.forename} {this.state.surname}
                  </Link>
                </button>
                <button>
                  <a href="/Home">Logout</a>
                </button>
              </div>

              <div className="main">
                <Route exact path="/Home" component={Home} />
                <Route exact path="/RoomsList" component={RoomList} />
                <Route exact path="/Floor4" component={FloorPlan4} floornumber='4' />
                <Route exact path="/Floor5" component={FloorPlan5} floornumber='5' />
                <Route exact path={"/" + this.state.forename + this.state.surname + '_account_settings'} forename={this.state.forename} surname={this.state.surname} email={this.state.email} component={AccountSettings} />
              </div>

              <div className="menu">
                <div className="topnav">
                  <h3>
                    <NavLink to="/Home">Home</NavLink>
                  </h3>
                  <br/>
                  <br/>
                  <h3>
                    <NavLink to="/Floor4">Floor 4</NavLink>
                  </h3>
                  <br />
                  <br/>
                  <h3>
                    <NavLink to="/Floor5">Floor 5</NavLink>
                  </h3>
                  <br/>
                  <br/>
                  <h3>
                    <NavLink to="/RoomsList">Room List</NavLink>
                  </h3>
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