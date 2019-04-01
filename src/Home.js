import React, { Component } from 'react';
import './App.css';
import ImageMapper from 'react-image-mapper';
import HomeTest from "./HomeTest";

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <div className="buttonlargecontainer">
        <button className="buttonlarge">Floor 4 </button> 
        <button className="buttonlarge">Floor 5</button>
        <button className="buttonlarge">All Floors</button> 
        </div>
          <div className="calander">
        <HomeTest />
          </div>
        </div>
      </div>
    );
  }
}

export default App;