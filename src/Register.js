import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {RegisterPage} from './Component/RegisterPage'

import { BrowserRouter,Route,Switch } from 'react-router-dom';
import {LoginPage} from './Component/LoginPage';
export class Register extends Component {
    render() {
        return (
            <div>
                <Link to ="./Register"/>

                <RegisterPage/>
                <BrowserRouter>
             <Switch>
             
                <Route path="./LoginPage" component={LoginPage}></Route>
                
                </Switch>
             </BrowserRouter>

            </div>
            
        )
    }
}

export default Register;



