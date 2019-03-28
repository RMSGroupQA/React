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
        { name: "Main", shape: "poly", coords: [220,80,220,140,280,140,280,80], preFillColor: "#" , fillColor: "lightblue"  },
        { name: "Side", shape: "poly", coords: [150,80,150,140,220,140,220,80], preFillColor: "#" , fillColor: "lightblue"  },
      ]
    }
    return (
      <div className="App">
        <p>Welcome</p>
          This Is The Page For Floor 
          {this.props.floornumber}
          <div className="imagecontainer">
    <ImageMapper src={Floor_5} map={MAP} width={200}
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