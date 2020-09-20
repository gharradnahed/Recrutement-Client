import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FormulaireEntreprise } from './FormulaireEntreprise'
import { FormulaireOthers } from './FormulaireOthers'
export class RegisterPage extends Component {
 
    render() {
        return (
            <Tabs>
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
            </Tabs>
        )
    }
}

export default RegisterPage
