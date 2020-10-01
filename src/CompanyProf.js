import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Container } from "reactstrap";
import Offre from "./Offre";
export default class CompanyProf extends Component {
  constructor(props) {
    super();

    this.state = {
      description: "",
      speciality:"",
      typeofffre:"",
  
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();

    const data = {
      description: this.state.description,
      typeOffre: this.state.typeoffre,
      specialite: this.state.speciality,
      email:localStorage.getItem("Email"),
      
    };
    axios
      .post(`http://localhost:5000/offre/api/postOffre`, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
      })
      .then((res) => {
       // console.log(res);
        //console.log("test");
      //  console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });


  }

  
  render() {
    return (
      <div>
        <Link to="./CompanyView" />
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                name="typeoffre"
                placeholder="type of offer"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                type="text"
                name="speciality"
                placeholder="speciality"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Control
            type="description"
            placeholder="description"
            name="description"
            onChange={this.handleChange}
          />
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Post
          </Button>
        </Form>
        <Container>
       
         <Offre/>
        </Container>
      </div>
    );
  }
}
