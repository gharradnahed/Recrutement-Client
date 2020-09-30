import "../App.css";
import avatar from "../image/avatar.png";
import { Form, Container, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect, useHistory } from "react-router-dom";
import Profile from "../Profile";
import { withRouter } from "react-router-dom";

import React, { Component } from "react";
import axios from "axios";

export class LoginPage extends Component {
  constructor(props) {
    super();

    this.state = {
      email: "",
      password: "",
      

      loggedIn: localStorage.getItem("Token"),
      showError: false,
      showNullError: false,
      
    };

    var token = localStorage.getItem("token");

    this.onChange = this.onChange.bind(this);

    this.loginUser = this.loginUser.bind(this);
  }

  onChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (email === "" || password === "") {
      this.setState({
        showError: false,
        showNullError: true,
        loggedIn: false,
      });
    } else {
      try {
        const response =  axios
          .post("http://localhost:5000/auth/login", {
            username: this.state.email,
            password: this.state.password,
            
          })
          .then((res) => {
            localStorage.setItem("Token", res.data.access_token);
            this.setState( {loggedIn: true,})
            localStorage.setItem("Email",this.state.email)
            localStorage.setItem("Type",res.data.type )
           // this.props.history.go('/Profile')
            
          });
          
      }
      catch{

      }
    }
  };

  render() {
    const { email, password, showError, loggedIn, showNullError } = this.state;
    if(loggedIn){return (<Redirect to="/Profile"/>)}
      return (
        <div className="baground-image">
<BrowserRouter>
  <Switch>
    <Route exact path="/Profile">
      <Profile />
    </Route>
  </Switch>
</BrowserRouter>
          <Container className="loginbox">
            <img src={avatar} alt="avatar" className="avatar" />
            <Form onSubmit={this.loginUser}>
              <FormGroup className="recruitement-form">Recruitement</FormGroup>
              <FormGroup>
                <Label className="h1" for="exampleEmail">
                  Email
                </Label>

                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </FormGroup>

              <FormGroup>
                <Label className="h1" for="examplePassword">
                  Password
                </Label>
                <Input
                  input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </FormGroup>
              {showNullError && (
                <div>
                  <p>The username or password cannot be null.</p>
                </div>
              )}
              {showError && (
                <div>
                  <p>
                    That username or password is not recognized. Please try
                    again or register now.
                  </p>
                </div>
              )}
             
              <ul>
                <li>
                  <a href="/ForgotPassword">Lost your password?</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/Register">Don't have an account?</a>
                </li>
              </ul>
            </Form>
            <br />
            <br />
          </Container>
          
        </div>
      );
    
     
  }
}
export default LoginPage;
