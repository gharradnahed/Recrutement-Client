import React, { Component } from "react";

import {  Segment, Input, Container } from "semantic-ui-react";

import axios from "axios";
import Modal from "react-bootstrap/Modal";
export default class CompanyProf extends Component {
  state = {
    outputDtata: [],
    search:null,
    show: false,
    dataDesc: {},
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
  handleModal(data) {
    this.setState({ show: true, dataDesc: data });
    console.log(this.state.dataDesc)
  }
  closeModal = () => {
    this.setState({ show: false });
  };
  render() {
    const { outputDtata } = this.state;
    let items="";
    return (
      <div className="container">
        <Segment inverted className="searchTerm">
          <Input inverted placeholder="Search..." onChange={this.filterList} />
{items}
        </Segment>
        <Container className="user">
        <div className="d-flex d-flex justify-content-between flex-wrap"> 
          { items = outputDtata.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.specialite.toLowerCase().includes(this.state.search.toLowerCase()) || data.typeOffre.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map((data) => (
      <div className="col-xl-4 col-md-6" key={data.id}>
      <div className="card overflow-hidden">
        <div className="card-body">
          <div className="item-card7-desc">
            <div className="item-card7-text">
              <h4 className="font-weight-semibold">
                {data.specialite}
              </h4>
            </div>
            <p className="mb-0">{data.description}</p>
          </div>
        </div>
        <div className="card-body py-2">
          {" "}
          <a
            href="mr-4"
            className="icons font-weight-semibold text-body"
          >
            <i className="fa fa-usd  text-muted mr-1" /> Offre
            type :
          </a>{" "}
          <a className="mr-4 float-right">
            <i className="fa fa-clock-o  text-muted mr-1" />
            {data.typeOffre}
          </a>{" "}
          
          
        </div>
         <div className="card-body py-2">
          {" "}
          <a
            href="mr-4"
            className="icons font-weight-semibold text-body"
          >
            <i className="fa fa-usd  text-muted mr-1" /> Email
          </a>{" "}
          <a className="mr-4 float-right">
            <i className="fa fa-clock-o  text-muted mr-1" />
            {data.author.email}
          </a>{" "}
        </div>
        <div className="card-body py-2">
          {" "}
          <a
            href="mr-4"
            className="icons font-weight-semibold text-body"
          >
            <i className="fa fa-usd  text-muted mr-1" /> Phone Number
          </a>{" "}
          <a className="mr-4 float-right">
            <i className="fa fa-clock-o  text-muted mr-1" />
            {data.author.phoneNumber}
          </a>{" "}
          </div>
          <div className="card-body py-2">
          {" "}
          <a
            href="mr-4"
            className="icons font-weight-semibold text-body"
          >
            <i className="fa fa-usd  text-muted mr-1" /> Adress
          </a>{" "}
          <a className="mr-4 float-right">
            <i className="fa fa-clock-o  text-muted mr-1" />
            {data.author.adresse}   {data.author.city}   {data.author.state}
          </a>{" "}
        </div>
        
        <div className="card-body py-2">
          <div className="d-flex align-items-center mt-auto">
            <div className=" text-muted">
              {" "}
              
              <a
                onClick={() => {
                  this.handleModal(data);
                }}
                className="btn btn-primary text-white"
              >
                See Details
              </a>{" "}
              <Modal
                scrollable={true}
                show={this.state.show}
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLongTitle"
                aria-hidden="true"
                onHide={() => {
                  this.closeModal();
                }}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Description:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {" "}
                  <div className="text-info"></div>{" "}
                  {this.state.dataDesc.description}
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
            
            
          ))}
        </div>
        </Container>
      </div>
    );
  }
}