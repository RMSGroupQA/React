import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import validator from 'validator';
import axios from "axios";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      data: '',

      loggedin: '1',

      email: '',
      emaillogin: '',
      forename: '',
      surname: '',
      password: '',
      confimPassword: '',

      loginState: 1,
      signupState: 0,

      errorMessage: '',
    };

    this.signupValidate = () => {
      if (this.state.email == '') {
        this.setState({
          errormessage: 'Missing Email',
        });
      }
      else if ((this.state.email).endsWith('com') == false) {
        this.setState({
          errormessage: 'Email Needs To End In .com',
        });
      }
      else if (validator.isAlpha(this.state.forename) == false) {
        this.setState({
          errormessage: 'Invalid forename',
        });
      }
      else if (validator.isAlpha(this.state.surname) == false) {
        this.setState({
          errormessage: 'Invalid Surname',
        });
      }
      else if (this.state.password == '') {
        this.setState({
          errormessage: 'Password Missing',
        });
      }
      else if (this.state.password !== this.state.confimPassword) {
        this.setState({
          errormessage: 'Both Passwords Are Not The Same',
        });
      }
      else {
        this.setState({
          errormessage: '',
        });
        axios.post(`http://localhost:8081/getters/createEmployee`, {
          "email": this.state.email,
          "forename": this.state.forename,
          "lastname": this.state.surname,
          "password": this.state.password,
        })
          .then(response => {
            this.setState({
              errormessage: response.data,
            });
            console.log(response.data);
            console.log(this.state.forename + ' ' + this.state.surname + ", you now have an account.")
            if (response.data == this.state.forename + ' ' + this.state.surname + ", you now have an account.") {
              window.history.go(0);
              console.log("LOGG IN")
            }
          });
      };
    }

    this.setEmail = (e) => {
      this.setState({
        email: e.target.value
      });
    }

    this.setloginEmail = (e) => {
      this.setState({
        emaillogin: e.target.value
      });
    }

    this.setforename = (e) => {
      this.setState({
        forename: e.target.value
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

    this.changeToMain = () => {
      axios.get(`http://localhost:8081/getters/readEmployee/${this.state.emaillogin}`).then(response => {
        console.log(response.data);
        this.setState({
          data: response.data
        });

        let wordnice = JSON.stringify(response.data);
        wordnice = wordnice.replace('[', " ");
        wordnice = wordnice.replace(']', " ");
        wordnice = wordnice.replace(/\=/g, " : ");
        wordnice = wordnice.replace(/\"/g, " ");
        wordnice = wordnice.replace(/\,/g, "\n");
        wordnice = wordnice.replace(/,/g, "<br/>");

        this.setState({
          data: response.data,
        });
        if (response.data != "No such employee.") {
          this.setState({
            data: wordnice + ".com",
            loggedin: '1',
          });
        }
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
      <div>
        <div className={"logindis" + this.state.loggedin}>
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
            <input onChange={this.setloginEmail} />
                Password
            <input type="password" />
                <br />
                <button onClick={this.changeToMain}>
                  Login
                  <br />
                </button>
                <br />
                {this.state.data}
                <br />
                <br />
              </div>

              <div className={"signup" + this.state.signupState}>
                Email
            <input id="email" onChange={this.setEmail} placeholder="example@example.qa.com" />
                Forename
            <input onChange={this.setforename} />
                Surname
            <input onChange={this.setSurname} />
                Password
            <input onChange={this.setPassword} type="password" />
                Confirm Password
            <input onChange={this.setConfimPassword} type="password" />
                <br />
                <div className="invalid">
                  {this.state.errormessage}
                </div>
                <button onClick={this.signupValidate}>
                  SignUp
            </button>
                <br />
              </div>
            </header>
          </div>
        </div>
        <div className={"navBardis" + this.state.loggedin}>
          <NavBar data={this.state.data} />
        </div>
      </div>)
  }
}

export default App;
