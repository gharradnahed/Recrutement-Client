import React, { Component } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import { LoginPage } from '../src/Component/LoginPage'
import '../src/App'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CompanyProf from '../src/CompanyProf';

export default class Profile extends Component {
    render() {


        const handleSelect = (eventKey) => (`selected ${eventKey}`);
        return (
            <div>
                <BrowserRouter>
          <Switch>

          
          <Route path="/CompanyView" component={CompanyProf}></Route>
           
            

             </Switch>
            
          </BrowserRouter>

                <Nav variant="pills" activeKey="1" onSelect={handleSelect}>

                    <NavDropdown title="Settings" id="nav-dropdown" className='ajustement'>
                        <NavDropdown.Item eventKey="4.1" href="/">Profile
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <li>

                            <NavDropdown.Item eventKey="4.4" href="/">Logout</NavDropdown.Item >

                        </li>

                    </NavDropdown>
                </Nav>

            </div>
        )
    }

}