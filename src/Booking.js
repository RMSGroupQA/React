import React, { Component } from 'react';
import './App.css';
import ImageMapper from 'react-image-mapper';
import HomeTest from "./HomeTest";
import CustomTimeline from "./CustomTimeline";
import axios from "axios";

let all

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      alltext: '',
    };

    this.displaybooking = (e) => {
      for (let i = 0; i < 10; i++) {
        axios.get(`http://localhost:8082/readBooking/${i}`).then(response => {
          this.setState({
            data: response.data,
            all: this.state.all + response.data
          });

          let wordnice = JSON.stringify(response.data);
          wordnice = wordnice.replace('[', " ");
          wordnice = wordnice.replace(']', " ");
          wordnice = wordnice.replace(/{/g, " <divdis>");
          wordnice = wordnice.replace(/}/g, " </divdis> </br> <br/>");
          wordnice = wordnice.replace(/\"/g, "");
          wordnice = wordnice.replace(/,/g, "<br/>");

          all = all + wordnice;

          document.getElementById('testid').innerHTML = all
        });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <br />
          <button onClick={this.displaybooking}>
            Display All Bookings
            </button>
            <br/>
          <h5 id='testid'> </h5>
        </div>
      </div>
    );
  }
}

export default App;