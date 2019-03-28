import React, { Component } from 'react';
import './App.css';
import ImageMapper from 'react-image-mapper';
import Floor_5 from "./Floor_5.PNG";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      floornumber: '',
    };

  this.clicked = (e) =>
  {
    console.log(e.name)
  }
}

  render() {
    let MAP = {
      name: "my-map",
      areas: [
        { name: "Room2", shape: "poly", coords: [220,150,220,10,410,10,410,150], preFillColor: "#" , fillColor: "lightblue"  },
        { name: "Room1", shape: "poly", coords: [20,10,20,150,220,150,220,10], preFillColor: "#" , fillColor: "lightblue"  },
      ]
    }
    return (
      <div className="App">
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
    	    style={{ ...this.getTipPosition(this.state.hoveredArea)}}>
    		{ this.state.hoveredArea && this.state.hoveredArea.name}
    	</span>
    }
</div>

        <br /><br />
      </div>
    );
  }
}

export default App;