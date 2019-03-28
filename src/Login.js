import React, { Component } from 'react';
import './App.css';
import validator from 'validator';
import axios from "axios";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      forname: '',
      surname: '',
      password: '',
      confimPassword: '',

      loginState: 1,
      signupState: 0,

      errorMessage: '',
    }

    this.signupValidate = () => {
      console.log(this.state.email);
      if (this.state.email == ''){
        this.setState({
          errormessage: 'Missing Email',
        });
      }
      else if ((this.state.email).endsWith('@qa.com') == false ){
        this.setState({
          errormessage: 'Invalid Email',
        });
      }
      else if (validator.isAlpha(this.state.forname) == false){
        this.setState({
          errormessage: 'Invalid Forname',
        });
      }
      else if (validator.isAlpha(this.state.surname) == false){
        this.setState({
          errormessage: 'Invalid Surname',
        });
      }
      else if (this.state.password == ''){
        this.setState({
          errormessage: 'Password Missing',
        });
      }
      else if (this.state.password !== this.state.confimPassword){
        this.setState({
          errormessage: 'Both Passwords Are Not The Same',
        });
      }
      else {
        

      }
    }



    this.setEmail = (e) => {
      this.setState({
        email: e.target.value
      });
    }

    this.setForname = (e) => {
      this.setState({
        forname: e.target.value
      });
    }
    this.setSurname = (e) => {
      this.setState({
        surname: e.target.value
      });
    }

    this.setPassword = (e) => {
      this.setState({
        password: e.target.value
      });
    }

    this.setConfimPassword = (e) => {
      this.setState({
        confimPassword: e.target.value
      });
    }

    this.loginPage = () => {
      console.log("loginpage");
      this.setState({
        loginState: 1,
        signupState: 0,
      });
    }

    this.signupPage = () => {
      console.log("signuppage");
      this.setState({
        loginState: 0,
        signupState: 1,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <br />
            <button className={'loginButton' + this.state.loginState} onClick={this.loginPage}>
              Login
          </button>
            <button className={'loginButton' + this.state.signupState} onClick={this.signupPage}>
              SignUp
          </button>
          </div>

          <div className={"login" + this.state.loginState}>
            <br />
            Email
            <input />
            Password
            <input />
            <br />
            <button onClick={this.loginvalidate}>
              Login
            </button>
            <br />
          </div>

          <div className={"signup" + this.state.signupState}>
            Email
            <input onChange={this.setEmail} placeholder="example@example.qa.com" />
            Forename
            <input onChange={this.setForname} />
            Surname
            <input onChange={this.setSurname} />
            Password
            <input onChange={this.setPassword} type="password"/>
            Confirm Password
            <input onChange={this.setConfimPassword} type="password" />
            <br />
            <div className="invalid">
              {this.state.errormessage}
            </div>
            <br/>
            <button onClick={this.signupValidate}>
              SignUp
            </button>
            <br/>
          </div>

        </header>
      </div>
    );
  }
}

export default App;