import React, { Component } from 'react';
import './App.css';
import ImageMapper from 'react-image-mapper';
import Floor_4 from "./Floor_4.PNG";
import RoomBooking from "./RoomBooking";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      floornumber: '',

      infosize: '0',

      imagesize: 750,

      email: 'Example@qa.com',
      roomname: '',
      numberOfSeats: '',
      numberOfComputer: '',

      activName: '',

      roomBookingVis: '0',
    };

    this.clicked = (e) => {
      this.setState({
        roomBookingVis: '1',
      });
    }

    this.enterArea = (e) => {
      this.setState({
        roomname: e.name,
        numberOfSeats: e.seatcount,
        numberOfComputer: e.computers,
        infosize: 250,
      });
    }

    this.reduceArea = (e) => {
      this.setState({
        imagesize: this.state.imagesize - 50,
      });
    }

    this.smallArea = (e) => {
      this.setState({
        imagesize: 500,
      });
    }
    this.mediumArea = (e) => {
      this.setState({
        imagesize : 750,
      });
    }
    this.largeArea = (e) => {
      this.setState({
        imagesize : 1000,
      });
    }

    this.leaveArea = (e) => {
      this.setState({
        infosize: 0,
      });
    }

    this.enlargeArea = (e) => {
      this.setState({
        imagesize: this.state.imagesize + 50,
      });
    }

    this.showMap = () => {
      this.setState({
        roomBookingVis: '0',
      });
    }
  }

  render() {
    let MAP = {
      name: "my-map",
      areas: [
        { computers: 20, seatcount: 52, name: "Floor 4 Room 8", shape: "poly", coords: [60, 130, 60, 10, 610, 10, 610, 130], preFillColor: "#", fillColor: "lightblue" },
        { computers: 30, seatcount: 35, name: "Floor 4 Room 5", shape: "poly", coords: [730, 330, 730, 180, 980, 180, 980, 330], preFillColor: "#", fillColor: "lightblue" },
        { computers: 0, seatcount: 10, name: "Floor 4 Consultant Hub", shape: "poly", coords: [610, 130, 610, 10, 700, 10, 700, 130], preFillColor: "#", fillColor: "lightblue" },
        { computers: 52, seatcount: 48, name: "Floor 4 Room 6", shape: "poly", coords: [700, 130, 700, 10, 980, 10, 980, 130], preFillColor: "#", fillColor: "lightblue" },
      ]
    }
    return (
      <div className="App">
<div className="App-header">
        <div className={"floorPlan" + this.state.roomBookingVis}>
          <p>Welcome</p>To Floor 4
          <br/>
          Change Floor View 
          <br/>
          <button onClick={this.reduceArea}>
            Reduce
          </button>
          <button onClick={this.smallArea}>
            Small
          </button>
          <button onClick={this.mediumArea}>
            Medium
          </button>
          <button onClick={this.largeArea}>
            Large
          </button>
          <button onClick={this.enlargeArea}>
            Enlarge
          </button>
          <div className="imagecontainer">
            <ImageMapper src={Floor_4} map={MAP} width={this.state.imagesize} imgWidth={1000}
              onClick={area => this.clicked(area)}
              onMouseEnter={area => this.enterArea(area)}
              onMouseLeave={area => this.leaveArea(area)}
            />
            {
              this.state.hoveredArea &&
              <span className="tooltip"
                style={{ ...this.getTipPosition(this.state.hoveredArea) }}>
                {this.state.hoveredArea && this.state.hoveredArea.name}
              </span>
            }
          </div>
        </div>

        <div className={"info" + this.state.infosize} style={{ width: this.state.infosize }}>
          Extra Info
<br />
          {this.state.roomname}
          <br />
          Seats : {this.state.numberOfSeats}
          <br />
          Computers : {this.state.numberOfComputer}
        </div>

        <div className={"bookingForm" + this.state.roomBookingVis}>
          <button onClick={this.showMap}>
            Show Map
            </button>
          <RoomBooking activName={this.state.activName} email={this.state.email} roomname={this.state.roomname} />
        </div>
      </div>
      </div>
    );
  }
}

export default App;