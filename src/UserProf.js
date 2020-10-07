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
 offer type:</div> {data.typeOffre}
                </h5>
                <p className="card-text">
                  <div className="text-info">Description :</div>{" "}
                  {data.description}
                </p>
                <div className="text-info">Contact :</div>{" "}
          <p>Email: {data.author.email}</p>
         
          <p>Phone number:{data.author.phoneNumber}</p>
    <div className="text-info">Adress:{data.author.phoneNumber.adresse}{data.author.phoneNumber.city}{data.author.phoneNumber.state}</div>
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
            
            
          ))}
        </div>
        </Container>
      </div>
    );
  }
}