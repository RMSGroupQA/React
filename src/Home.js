import React, { Component } from 'react';
import './App.css';
import ImageMapper from 'react-image-mapper';
import HomeTest from "./HomeTest";

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <div>
        <button>Floor 4 </button> 
        <button>Floor 5</button>
        <button>All Floors</button> 
        <button>Floor 5</button>
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