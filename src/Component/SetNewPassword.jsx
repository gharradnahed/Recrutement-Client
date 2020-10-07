import React, { Component, useState, setShow, show, handleClose, handleShow } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import axios from "axios"
import pass from '../image/pass.png'
import { Redirect} from "react-router-dom";

export default class SetNewPassword extends Component {
  constructor(props) {
    super()
    this.state = {
      nextPage: false,

      newPassword: '',
      password: '',
      secret: localStorage.getItem("secret"),
      email: localStorage.getItem("Email"),
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit(e){
    e.preventDefault();
    let data={
     
      secret:this.state.secret,
newPassword:this.state.newPassword,
email:this.state.email,
    }
   axios.post('http://localhost:5000/api/forgot',data).then((res) => {
    console.log(res);
    this.setState({nextPage:true})
   localStorage.clear("Email")
  })


  }

  render() {


    if((this.state.nextPage)&&(this.state.password===this.state.newPassword)){return (<Redirect to="/"/>)}
    return (
      <div className="baground-image">
        <Container className="blocktext">
          <img src={pass} alt="pass" className="displayed " />
          <Form >
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>New Password</Label>
              <Col sm={10}>
                <Input type="password" name="newPassword" id="newPassword" onChange={this.handleChange} placeholder="Put your new paswword here ..." />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}>Confirm Password</Label>
              <Col sm={10}>
                <Input type="password" name="password" id="examplePassword" onChange={this.handleChange} placeholder="Confirm your Password" />
              </Col>
            </FormGroup>
          </Form>
          <Button color="primary" size="lg" block onClick={this.handleSubmit} >Confirm</Button>
        </Container>


      </div>
    )
  }
}
