import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { LoginPage } from "../src/Component/LoginPage";
import "../src/App";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import CompanyProf from "../src/CompanyProf";
import axios from "axios";
import jwt_decode from "jwt-decode";
import UserProf from './UserProf';
export default class Profile extends Component {
  constructor(props) {
    super();
 
    this.state = {
    type:localStorage.getItem("Type"),
    token :localStorage.getItem("Token"),
    email:localStorage.getItem("Email"),

      
    };
    console.log(this.state)
  }



    
  

  componentDidMount() {

    
   

    axios
      .post(`http://localhost:5000/api/byemail`, {
        
      email:this.state.email},{
        headers: { Authorization: `Bearer ${this.state.token}` },
      } )
      .then((res) => {
        const user = res.data;
        

       
        // console.log(decoded)

        console.log(user);
     
      })
      .catch((error) => {
        console.log(error.response);
      });

     

  }
   handleLogout(){
    localStorage.clear()
return(<Link to ="/"/>)
  }

  render() {
  
    
    const entreprise=()=>{
      const z=this.state.type
      console.log(z)
      if (z==="Entreprise"){
        
       return <CompanyProf/>;
      }else{return <UserProf/>;}
    
    }
    const handleSelect = (eventKey) => `selected ${eventKey}`;
 


    return (
      <div>
        <BrowserRouter>
  <Switch>
    <Route exact path="/">
      <LoginPage />
    </Route>
  </Switch>
</BrowserRouter>
        <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
          <NavDropdown
            title="Settings"
            id="nav-dropdown"
            className="ajustement"
          >
            <NavDropdown.Item eventKey="4.1" href="/">
              Profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <li>
              <NavDropdown.Item eventKey="4.4" onClick={this.handleLogout }>Logout</NavDropdown.Item>
            </li>
          </NavDropdown>
        </Nav>
        {entreprise()}
      </div>
    );
  }


  
}
