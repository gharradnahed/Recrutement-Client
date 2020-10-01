import React, { Component ,componentDidMount} from 'react'
import Form from "react-bootstrap/Form";
import axios from 'axios';
import { Col } from "react-bootstrap";

import Button from "react-bootstrap/Button";

export default class Offre extends Component {
    constructor(props) {
        super();
    
        this.state = {
        
          offre:[],
        };}
    
    componentDidMount(){
        axios
        .get(`http://localhost:5000/offre/api/getoffre`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
        })
        .then((res) => {
          let off=res.data
          console.log(res.data);
      this.setState({offre:off,})
      console.log(this.state.offre)
      
        })
        .catch((error) => {
          console.log(error.response);
        });
        return(this.state.offre)
      }
    render() {
        return (
            
            <div>
                
                
        <h1>{this.state.offre.map((res)=>   <li>{res}</li>)}</h1>
            <Button variant="primary" type="submit" >
            Post
          </Button>
            
       
            </div>
        )
    }
}
