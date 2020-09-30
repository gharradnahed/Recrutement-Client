import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon,Segment, Input, Search } from 'semantic-ui-react'
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';
import axios from 'axios'
export default class CompanyProf extends Component {
  constructor(props){
    super()
    this.state = {
    outputDtata: [],
    Search:"",
  };}
componentDidMount() {
axios.get(`http://localhost:5000/offre/api/getoffre`, {
  headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
})
.then(res => {
  console.log(res.data);
//this.setState.outputDtata(res.data)
})
}
    render() {
      //const { search } = this.state;
     // const filteredoffre = this.state.outputDtata.filter(outputDtata => {
     // });       
      return (<div>
  <Segment inverted>
    <Input inverted placeholder='Search...' onChange={this.onChange} />


  </Segment>
  {this.componentDidMount}
  <div>{this.state.outputDtata}</div>

 </div>
            
        )
    }
}
