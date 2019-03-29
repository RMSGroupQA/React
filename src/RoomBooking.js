import React, { Component } from 'react';
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import addMonths from "date-fns/setHours";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      roomName: '',
      email:'',
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange1(date) {
    console.log(date);
    let newDate = new Date();
    this.setState({
      startDate: date
    });
  }

  handleChange2(date) {
    let newDate = new Date();
    this.setState({
      endDate: date
    });
  }

  render() {
    return (
      <div className="App">
        <div className="app-header">
          <br />
          <div className="bookingtitle">
            Booking Form
            </div>
          <br />
          <div className="paddingtest">
            <input readOnly placeholder="Email" defaultValue={this.props.email} />
            <br />
            <input readOnly type={Text} placeholder="Room Name" defaultValue={this.props.roomname} />
            <br />
            <input placeholder="Activity Name" />
            <br />
            Start Time
        <br />
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange1}
              showTimeSelect
              timeIntervals={15}
              minDate={new Date()}
              maxDate={addMonths(this.state.startDate, 2000)}
              minTime={new Date()}
              maxTime={setHours(setMinutes(new Date(), 45), 18)}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
            <br />
            End Time
        <br />
            <DatePicker

              placeholderText="test"
              placeholder="Test"
              selected={this.state.endDate}
              onChange={this.handleChange2}
              showTimeSelect
              timeIntervals={15}
              minDate={new Date()}
              minDate={this.state.startDate}
              maxDate={addMonths(this.state.startDate, 300)}
              minTime={this.state.startDate}
              maxTime={setHours(setMinutes(new Date(), 0), 19)}
              dateFormat="MMMM d, yyyy h:mm aa"
              showDisabledMonthNavigation
            />
            <br/>
            <br/>
            <textarea type={Text} className="inputlarge" placeholder="Activity Desc" />
            <br />
            <button>
              Book Room
            </button>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;