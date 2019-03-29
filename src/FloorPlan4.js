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


      email: 'Example@qa.com',
      roomname: '',
      activName: '',

      roomBookingVis: '0',
    };

    this.clicked = (e) => {
      this.setState({
        roomname: e.name,
        roomBookingVis: '1',
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
        { name: "Floor 4 Room 2", shape: "poly", coords: [60, 130, 60, 10, 610, 10, 610, 130], preFillColor: "#", fillColor: "lightblue" },
        { name: "Floor 4 Room 5", shape: "poly", coords: [730, 330, 730, 180, 980, 180, 980, 330], preFillColor: "#", fillColor: "lightblue" },
        { name: "Floor 4 Room 6", shape: "poly", coords: [610, 130, 610, 10, 700, 10, 700, 130], preFillColor: "#", fillColor: "lightblue" },
        { name: "Floor 4 Room 7", shape: "poly", coords: [700, 130, 700, 10, 980, 10, 980, 130], preFillColor: "#", fillColor: "lightblue" },
      ]
    }
    return (
      <div className="App">

        <div className={"floorPlan" + this.state.roomBookingVis}>
          <p>Welcome</p>
          This Is The Page For Floor 4
          {this.props.floornumber}
          <div className="imagecontainer">
            <ImageMapper src={Floor_4} map={MAP} width={1000}
              onClick={area => this.clicked(area)}
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