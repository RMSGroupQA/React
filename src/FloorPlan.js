import React, { Component } from 'react';
import './App.css';
import ImageMapper from 'react-image-mapper';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      floornumber: ' 4',
    };

  this.clicked = (e) =>
  {
    console.log(e.name)
  }
}

  render() {
    let URL = "https://i.pinimg.com/originals/69/87/bc/6987bcc2297415a9b10c483c701842b6.jpg"
    let MAP = {
      name: "my-map",
      areas: [
        { name: "Main", shape: "poly", coords: [220,80,220,140,280,140,280,80], preFillColor: "#" , fillColor: "lightblue"  },
        { name: "Side", shape: "poly", coords: [150,80,150,140,220,140,220,80], preFillColor: "#" , fillColor: "lightblue"  },
      ]
    }
    return (
      <div className="App">
        <br/><br/>
        <h2>Welcome</h2>
        <h3>
          This Is The Page For Floor 
          {this.state.floornumber}
          </h3>

          <div className="imagecontainer">
    <ImageMapper src={URL} map={MAP} width={500}
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