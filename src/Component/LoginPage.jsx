import '../App.css'
import avatar from '../image/avatar.png';
import { Form, Container, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link} from 'react-router-dom';
import { BrowserRouter,Route } from 'react-router-dom';
import {Redirect} from 'react-router-dom';


import React, { Component } from 'react';

export class LoginPage extends Component {
    constructor(props) {

        super();
        
        const token= localStorage.getItem("token")
        
        let loggedIn = false ;
            this.state= {
            email:'',
            password:'',
            loggedIn  
                }

        this.onChange=this.onChange.bind(this);
        
        this.submitForm=this.submitForm.bind(this);
        
        }
        onChange = e => {
            this.setState ({
                [e.target.name]: e.target.value
            }) }
            submitForm= e => {
                e.preventDefault(); 
                const  {email,password} =this.state;
                if(email==='A'&& password==='B')
                 {
                     
                    // localStorage.setItem("token","aaaa");
        
                    this.setState({loggedIn:true})
                  }
        
                }
    render() {
        if (this.state.loggedIn==true) 
        { 
       return <Redirect to ='/ Profil'>

       </Redirect>    
       }
        return (
           /* <BrowserRouter>
            
            <Route path="/" component={LoginPage}>
             </Route>*/
            
                <div className='baground-image' >
                    <Container className='loginbox'>

                        <img src={avatar} alt="avatar" className='avatar' />
                        <Form onSubmit={this.submitForm} >
                            <FormGroup className='recruitement-form'>
                                Recruitement
      </FormGroup>
                            <FormGroup >
                                <Label className='h1' for="exampleEmail">Email</Label>

                                <Input type="email"  name="username" placeholder="Email" value={this.state.username} onChange={this.onChange} />
                            </FormGroup>

                            <FormGroup >
                                <Label className='h1' for="examplePassword">Password</Label>
                                <Input input type="password" name="password"  placeholder="password" value={this.state.password} onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Button >Login</Button>
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
                        <br/>
                        <br/>
                    </Container>
                </div>
        )
    }
}
export default LoginPage;