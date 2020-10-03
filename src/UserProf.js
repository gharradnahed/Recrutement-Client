import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon, Segment, Input } from "semantic-ui-react";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import axios from "axios";
import { List } from "semantic-ui-react";

export default class CompanyProf extends Component {
  state = {
    outputDtata: [],
    search:null,
    
  };
  filterList=this.filterList.bind(this);
  componentDidMount() {
    axios.get(`http://localhost:5000/offre/api/getoffre`).then((res) => {
      const outputDtata = res.data;
      this.setState({ outputDtata });
    });
   
  }
  filterList(e){
    let keyword = e.target.value;
    this.setState({search:keyword})
  }
  searchingfor(x){
 
  }
  render() {
    const { outputDtata } = this.state;
    let items="";
    return (
      <div className="container">
        <Segment inverted className="searchTerm">
          <Input inverted placeholder="Search..." onChange={this.filterList} />
{items}
        </Segment>
        <div className="d-flex d-flex justify-content-between flex-wrap"> 
          { items = outputDtata.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.specialite.toLowerCase().includes(this.state.search.toLowerCase()) || data.typeOffre.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map((data) => (
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
                  <div className="text-info">
type of offer:</div> {data.typeOffre}
                </h5>
                <p className="card-text">
                  <div className="text-info">Description :</div>{" "}
                  {data.description}
                </p>
                <div className="text-info">Contact :</div>{" "}
          <p>Email: {data.author.email}</p>
         
          <p>Phone number:{data.author.phoneNumber}</p>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    );
  }
}