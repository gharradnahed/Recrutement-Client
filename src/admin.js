import React, { Component } from 'react';
import {Link,Redirect} from "react-router-dom";
import { NavigationBar} from './Navbar';
import Maps from './Maps';
import Chart from './Chart';
import Sidebar from './Sidebar/Sidebar';
import {Navbar} from './Navbar';
import AdminNavbar from './Navbars/AdminNavbar';
export default class Admin extends Component {
    
    constructor(props) {
        super(props);
        //const token= localStorage.getItem("token ")
    
        let loggedIn = true;
        //if(token===null) {
         // loggedIn= false
        //}
        // this.state = {
          //   loggedIn
    
        // }


        }


    render() {
        //if ( this.state.loggedIn == false)  {
          //  return<Redirect to="/"/>
        //}
        return (
            <div>
               <NavigationBar/>     
              <Maps/>
                
            </div>
        )
    }
}