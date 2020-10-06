import React, { Component, useState, setShow, show, handleClose, handleShow } from 'react'

import axios from 'axios';
import { Col, FormGroup } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalHeader from 'react-bootstrap/ModalHeader'
import Button from "react-bootstrap/Button";

export default class Offre extends Component {


  state = {

    offre: [],
    show:false,
  };
componentDidUpdate(){
  axios.delete('/api/deleteoffre/:id').then((res) => {
    let result = res.data
    console.log(result)

  })
  .catch((error) => {
    console.log(error.response);
  });
return(this.result)

}
  componentDidMount() {
    axios
      .get(`http://localhost:5000/offre/api/getoffre`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
      })
      .then((res) => {
        const offre = res.data
        this.setState({ offre })
        console.log(offre)

      })
      .catch((error) => {
        console.log(error.response);
      });
    return (this.state.offre)
  }
  handleModal() {
    this.setState({show:!this.state.show,})
  }
 
  render() {
    const { offre } = this.state;
    return (

      <div className="d-flex d-flex justify-content-between flex-wrap">
        {offre.map((data) => (
          <div
            className="card"
            style={{ width: "18rem", marginTop: "50px" }}
            key={data.id}
          >


            <div className="card-body">
              <h4 className="card-title">
                <div className="text-info"> Speciality:</div>{" "}
                {data.specialite}
              </h4>
              <h5 className="card-title">
                <div className="text-info">type of offer:</div> {data.typeOffre}
              </h5>
              <p className="card-text">
                <div className="text-info">Description :</div>{" "}
                {data.description}
                
              </p>
              
              <FormGroup>
                <Button variant="primary" type="submit" >
                  Delete
          </Button>
                <Button variant="primary" type="submit" onClick={()=>{this.handleModal()}} >
                  Show more
          </Button>
          <Modal scrollable={true} show={this.state.show}tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" onHide={()=>{this.handleModal()}} >
                <Modal.Header closeButton>
                  <Modal.Title>Description:</Modal.Title>
                </Modal.Header>
        <Modal.Body > <div className="text-info"></div>{" "}
                {data.description}
              </Modal.Body>
                 
                  
              </Modal>
              </FormGroup>
           
            </div>
          </div>
        ))}







      </div>
    )
  }
}
