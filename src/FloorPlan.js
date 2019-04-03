import React, { Component } from 'react';
import './App.css';
import ImageMapper from 'react-image-mapper';
import Floor_5 from "./Floor_5.PNG";
import RoomBooking from "./RoomBooking";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      floornumber: '',


      email:'Example@qa.com',
      roomname: '',
      activName:'',

      roomBookingVis:'0',
    };

    this.clicked = (e) => {
      this.setState({
        roomname:e.name,
        roomBookingVis:'1',
      });
    }

    this.showMap = () => {
      this.setState({
        roomBookingVis:'0',
      });
    }
  }

  render() {
    let MAP = {
      name: "my-map",
      areas: [
        { name: "Room1", shape: "poly", coords: [20, 10, 20, 150, 220, 150, 220, 10], preFillColor: "#", fillColor: "lightblue" },
        { name: "Room2", shape: "poly", coords: [220, 150, 220, 10, 410, 10, 410, 150], preFillColor: "#", fillColor: "lightblue" },
        { name: "Room3", shape: "poly", coords: [410, 150, 410, 10, 600, 10, 600, 150], preFillColor: "#", fillColor: "lightblue" },
        { name: "Room4", shape: "poly", coords: [600, 150, 600, 10, 790, 10, 790, 150], preFillColor: "#", fillColor: "lightblue" },
        { name: "Room5", shape: "poly", coords: [790, 150, 790, 10, 980, 10, 980, 150], preFillColor: "#", fillColor: "lightblue" },
        { name: "M2", shape: "poly", coords: [20, 290, 20, 230, 80, 230, 80, 290], preFillColor: "#", fillColor: "lightblue" },
        { name: "M1", shape: "poly", coords: [20, 350, 20, 290, 80, 290, 80, 350], preFillColor: "#", fillColor: "lightblue" },
      ]
    }
    return (
      <div className="App">

        <div className={"floorPlan" +this.state.roomBookingVis}>
          <p>Welcome</p>
          This Is The Page For Floor
          {this.props.floornumber}
          <div className="imagecontainer">
            <ImageMapper src={Floor_5} map={MAP} width={1000}
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
        <RoomBooking  activName={this.state.activName} email={this.state.email} roomname={this.state.roomname}/>
        </div>
        </div>
    );
  }
}

export default App;