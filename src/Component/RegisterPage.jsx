import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Container } from 'reactstrap';
import { FormulaireEntreprise } from './FormulaireEntreprise'
import { FormulaireOthers } from './FormulaireOthers'
import avatar from "../image/user.png";
import {  FormGroup} from "reactstrap";
export class RegisterPage extends Component {
 
    render() {
        return (
            <div className="baground-image">
                 
            <Tabs>
                <Container className="Registrebox">
                <img src={avatar} alt="avatar" className="avatar" />
                
                <FormGroup className="recruitement-form">Register</FormGroup>
                <TabList>
                    <Tab>Company</Tab>
                    <Tab>Others</Tab>
                </TabList>
               
                <TabPanel>
                <FormulaireEntreprise />
                </TabPanel>
                <TabPanel>
                    <FormulaireOthers/>
                </TabPanel>
                </Container>
            </Tabs>
            </div>
        )
    }
}

export default RegisterPage
