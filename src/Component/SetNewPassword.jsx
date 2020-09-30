import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SetNewPassword extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
