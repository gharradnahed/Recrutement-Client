import React, { Component,useState,setShow ,show,handleClose,handleShow} from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import axios from "axios"
export default class SetNewPassword extends Component {
 constructor(props){
   super()
  
   
 }
 

  sendEmail = async (e) => {
    e.preventDefault();
    const { email } = this.state;
    if (email === '') {
        this.setState({
            showError: false,
            messageFromServer: '',
            showNullError: true,
        });
    } else {
        try {
            const response = await axios.post(
                'http://localhost:3003/auth/forgotPassword',
                {
                    email,
                },
            );
            console.log(response.data);
            if (response.data === 'recovery email sent') {
                this.setState({
                    showError: false,
                    messageFromServer: 'recovery email sent',
                    showNullError: false,
                });
            }
        } catch (error) {
            console.error(error.response.data);
            if (error.response.data === 'email not in db') {
                this.setState({
                    showError: true,
                    messageFromServer: '',
                    showNullError: false,
                });
            }
        }
    }
};
  render() {
   

  
    return (
      <div>
     <Container  className="blocktext">
     <Form>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>New Password</Label>
        <Col sm={10}>
          <Input type="password" name="newPassword" id="newPassword" placeholder="Put your new paswword here ..." />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Confirm Password</Label>
        <Col sm={10}>
          <Input type="password" name="password" id="examplePassword" placeholder="Confirm your Password" />
        </Col>
      </FormGroup>
      </Form>
      <Button>Confirm</Button>
      </Container>

    
      </div>
    )
  }
}
