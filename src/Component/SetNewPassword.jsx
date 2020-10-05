import React, { Component,useState,setShow ,show,handleClose,handleShow} from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Modal from 'react-bootstrap/Modal'
export default class SetNewPassword extends Component {
 constructor(props){
   super()
  [show, setShow] = useState(false);
   
 }
 
  handleClose = () => this.setShow(false);
  handleShow = () => this.setShow(true);
  render() {
   

  
    return (
      <div>
     
     <Button variant="primary" onClick={this.handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
  }
}
