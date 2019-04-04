import React, { Component } from 'react';
import './App.css';
import ImageMapper from 'react-image-mapper';
import Floor_52 from "./Floor_52.PNG";
import RoomBooking from "./RoomBooking";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      floornumber: '',


      infosize: '0',

      email: 'Example@qa.com',
      roomname: '',
      numberOfSeats: '',
      numberOfComputer: '',

      activName: '',

      roomBookingVis: '0',
    };

    this.clicked = (e) => {
      this.setState({
        roomname: e.name,
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

    this.leaveArea = (e) => {
      this.setState({
        infosize: 0,
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
        { computers: 18, seatcount: 23, name: "Floor 5 Room 1", shape: "poly", coords: [50, 10, 50, 150, 250, 150, 250, 10], preFillColor: "#", fillColor: "lightblue" },
        { computers: 18, seatcount: 23, name: "Floor 5 Room 2", shape: "poly", coords: [250, 150, 250, 10, 430, 10, 430, 150], preFillColor: "#", fillColor: "lightblue" },
        { computers: 0, seatcount: 13, name: "Floor 5 Boardroom", shape: "poly", coords: [430, 150, 430, 10, 610, 10, 610, 150], preFillColor: "#", fillColor: "lightblue" },
        { computers: 18, seatcount: 23, name: "Floor 5 Room 3", shape: "poly", coords: [610, 150, 610, 10, 800, 10, 800, 150], preFillColor: "#", fillColor: "lightblue" },
        { computers: 18, seatcount: 23, name: "Floor 5 Room 4", shape: "poly", coords: [800, 150, 800, 10, 980, 10, 980, 150], preFillColor: "#", fillColor: "lightblue" },
        { computers: 0, seatcount: 6, name: "Floor 5 M2", shape: "poly", coords: [50, 280, 50, 225, 110, 225, 110, 280], preFillColor: "#", fillColor: "lightblue" },
        { computers: 0, seatcount: 6, name: "Floor 5 M1", shape: "poly", coords: [50, 335, 50, 280, 110, 280, 110, 335], preFillColor: "#", fillColor: "lightblue" },
      ]
    }
    return (
      <div className="App">

        <div className={"floorPlan" + this.state.roomBookingVis}>
          <p>Welcome</p>To Floor 5
          {this.props.floornumber}
          <div className="imagecontainer">
            <ImageMapper src={Floor_52} map={MAP} width={1000}
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
    );
  }
}

export default App;