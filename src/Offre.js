import React, { Component ,componentDidMount} from 'react'
import Form from "react-bootstrap/Form";
import axios from 'axios';
import { Col, FormGroup } from "react-bootstrap";

import Button from "react-bootstrap/Button";

export default class Offre extends Component {
    
    
        state = {
        
          offre:[],
        };
    
    componentDidMount(){
        axios
        .get(`http://localhost:5000/offre/api/getoffre`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
        })
        .then((res) => {
         const offre=res.data
      this.setState({offre})
      console.log(offre)
      
        })
        .catch((error) => {
          console.log(error.response);
        });
        return(this.state.offre)
      }
    render() {
      const { offre } = this.state;
        return (
            
            <div  className="d-flex d-flex justify-content-between flex-wrap">
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
                  <div className="text-info">type of offer::</div> {data.typeOffre}
                </h5>
                <p className="card-text">
                  <div className="text-info">Description :</div>{" "}
                  {data.description}
                </p>
              <FormGroup>
                <Button variant="primary" type="submit" >
            Delete
          </Button>
          <Button variant="primary" type="submit" >
            Show more
          </Button>
          </FormGroup>
              </div>
            </div>
          ))}
              
                
                
       
          
            
       
            </div>
        )
    }
}
