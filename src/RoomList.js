import React, { Component } from 'react';
import './App.css';
import axios from "axios"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }

    this.getall = () => {
      axios.get('http://35.189.101.154:8888/individual_Project/api/Player/getAllPlayers').then(response => {
        console.log(response.data);
        this.setState({
          data: response.data
        });

        let wordnice = JSON.stringify(response.data);
        wordnice = wordnice.replace('[', " ");
        wordnice = wordnice.replace(']', " ");
        wordnice = wordnice.replace(/{/g, " <div>");
        wordnice = wordnice.replace(/}/g, " </div> </br>");
        wordnice = wordnice.replace(/\"/g, "");
        wordnice = wordnice.replace(/,/g, "<br/>");

        document.getElementById('testid').innerHTML = wordnice;
      });
    }
  }

  render() {
    return (
      <div className="App">
        <br /><br />
        <button onClick={this.getall}>
          Show All Rooms
          </button>
<div>
  
  </div>
<div id="testid">
  </div>
  <br/>
        <p>
          Floor 4 Room 2 Number Of Chairs : 20 Number Of Computers : 48
        </p>

        <p>
          Floor 5 Room M1 Number Of Chairs : 31 Number Of Computers : 23
        </p>
        <p>
          Floor 4 Room 4 Number Of Chairs : 16 Number Of Computers : 21
        </p>
        <br /><br />
      </div>
    );
  }
}

export default App;