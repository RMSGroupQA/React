import React, { Component } from 'react';
import './App.css';
import ImageMapper from 'react-image-mapper';
import HomeTest from "./HomeTest";
import CustomTimeline from "./CustomTimeline";

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <CustomTimeline/>
          </div>
      </div>
    );
  }
}

export default App;