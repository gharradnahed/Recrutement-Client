import '../App.css'
import avatar from '../image/avatar.png';
import { Form, Container, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect,useHistory  } from 'react-router-dom';
import Profile from '../Profile';

import React, { Component } from 'react';
import axios from 'axios';

 export class LoginPage extends Component {
    constructor(props) {

        super();

        //const token = localStorage.getItem("token")
    
        this.state = {
            email: '',
            password: '',
         
            loggedIn: false,
            showError: false,
            showNullError: false,
        }

        this.onChange = this.onChange.bind(this);

        this.loginUser = this.loginUser.bind(this);

    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    loginUser = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        if (email === '' || password === '') {
          this.setState({
            showError: false,
            showNullError: true,
            loggedIn: false,
          });
        } else {
          try {
            const response = await axios.post('http://localhost:5000/auth/login', {
              email,
              password,
            });
            localStorage.setItem('JWT', response.data.token);
            this.setState({
              loggedIn: true,
              showError: false,
              showNullError: false,
            });
          } catch (error) {
            console.error(error.response.data);
            if (
              error.response.data === 'bad username'
              || error.response.data === 'passwords do not match'
            ) {
              this.setState({
                showError: true,
                showNullError: false,
              });
            }
          }
        }
      };
    
    
            

    render() {
        const {
            email,
            password,
            showError,
            loggedIn,
            showNullError,
          } = this.state;
          if (!loggedIn) {
   
        return (
            

            <div className='baground-image' >
                             <BrowserRouter>
    <Switch>
      <Route exact path="/Profile">
        <Profile/>
      </Route>
      </Switch>
      </BrowserRouter>
                <Container className='loginbox'>

                    <img src={avatar} alt="avatar" className='avatar' />
                    <Form onSubmit={this.loginUser} >
                        <FormGroup className='recruitement-form'>
                            Recruitement
      </FormGroup>
                        <FormGroup >
                            <Label className='h1' for="exampleEmail" >Email</Label>

                            <Input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange} />
                        </FormGroup>

                        <FormGroup >
                            <Label className='h1' for="examplePassword">Password</Label>
                            <Input input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChange} />
                        </FormGroup>
                        <FormGroup>
                        <Button  variant="primary" type="submit"  >
                    Submit</Button>

                        </FormGroup>
                        {showNullError && (
            <div>
              <p>The username or password cannot be null.</p>
            </div>
          )}
          {showError && (
            <div>
              <p>That username or password is not recognized. Please try
                again or register now.</p>
            </div>
          )}
                        <ul>
                            <li>
                                <Link to={{ pathname: "https://www.google.com" }}>Lost your password?</Link>
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
        )
    }
    return <Redirect to={`/Profile ${email}`} />;

}}
export default LoginPage