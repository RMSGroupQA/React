import React, { Component } from 'react';
import './App.css';



class App extends Component {

constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="App">
        <h2>Account Settings</h2>
        <br />
        Forename : {this.props.forename} 
        <br/>
        Surname : {this.props.surname}
        <br/>
        Email : {this.props.surname}
        <br/>
        <br />
      </div>
    );
  }
}

export default App;