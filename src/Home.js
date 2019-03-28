import React, { Component } from 'react';
import './App.css';
import ImageMapper from 'react-image-mapper';

class App extends Component {

  render() {
    return (
      <div className="App">
        <br /><br />
        <h2>Welcome
        </h2>
        <div className="imagecontainer">
          <ImageMapper src={"https://www.vertex42.com/calendars/images/2020-calendar-with-holidays.png"} width={500} />
        </div>
        <br /><br />
      </div>
    );
  }
}

export default App;