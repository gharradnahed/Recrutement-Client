import '../App.css'
import avatar from '../image/avatar.png';
import { Form, Container, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect,useHistory  } from 'react-router-dom';
import Profile from '../Profile';

import React, { Component } from 'react';
import Axios from 'axios';

export class LoginPage extends Component {
    constructor(props) {

        super();

        const token = localStorage.getItem("token")
      
        let loggedIn = false;
        this.state = {
            email: '',
            password: '',
            loggedIn
        }

        this.onChange = this.onChange.bind(this);

        this.submitForm = this.submitForm.bind(this);

    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    
     submitForm = e => {
         e.preventDefault();
         const data = {
              username:this.state.email,
             password:this.state.password,
            };
       
             Axios.post('http://localhost:5000/auth/login',data)
             .then(res=>{
                localStorage.setItem("token",res.data);

                 console.log(res);
             }).catch(err=>{
                 console.log(err)
             } )
         
  if (data && data.accessToken) {
    this.state.loggedIn=true;
    return { Authorization: 'Bearer ' + data.accessToken,
    };
    
  } else {
    return {};
  }
            
             
         }
    

   /* authHeader() {
            const data = JSON.parse(localStorage.getItem('user'));
          
            if (data && user.accessToken) {
              return { Authorization: 'Bearer ' + user.accessToken };
            } else {
              return {};
            }
          }*/
    render() {
       if (this.state.loggedIn==true) 
        { 
       return <a href= "/Profile"></a>
       }
   
        return (
            

            <div className='baground-image' >
                <Container className='loginbox'>

                    <img src={avatar} alt="avatar" className='avatar' />
                    <Form onSubmit={this.submitForm} >
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
                        <Button  variant="primary" type="submit" onClick= {this.submitForm} >
                    Submit
                    
                        
                      
 
  </Button>

                        </FormGroup>
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
                <BrowserRouter>
    <Switch>
      <Route exact path="/Profile">
        <Profile/>
      </Route>
      </Switch>
      </BrowserRouter>
            </div>
        )
    }
}
export default LoginPage;
