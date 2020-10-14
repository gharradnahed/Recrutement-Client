import React, { Component } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

export default class Offre extends Component {
  state = {
    offre: [],
    show: false,
    dataDesc: {},
    dataDelete: {},
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  delete(data) {
    //  this.setState({ dataDelete: data });
    ///const id= this.state.dataDelete.id
    console.log(data.id);
    axios
      .delete(`http://localhost:5000/offre/api/deleteoffre/${data.id}`)
      .then((res) => {
        let result = res.data;
        console.log(result);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response);
      });

    return this.result;
  }
  componentDidMount() {
    axios
      .get(`http://localhost:5000/offre/api/getoffre`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
      })
      .then((res) => {
        const offre = res.data;
        this.setState({ offre });
        console.log(offre);
      })
      .catch((error) => {
        console.log(error.response);
      });

    return this.state.offre;
  }
  handleModal(data) {
    this.setState({ show: true, dataDesc: data });
    console.log(this.statedataDesc);
  }
  closeModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { offre } = this.state;
    let email = localStorage.getItem("Email");

    return (
      <section className="sptb">
        <div className="container">
          <div className="section-title center-block text-center">
            <h1>Your Posts</h1>
            <p>You find all your posts here</p>
          </div>
          <div className="panel panel-primary">
            <div className="panel-body">
              <div className="tab-content">
                <div className="tab-pane active show" id="index1">
                  <div className="row">
                    {offre.map((data) =>
                      data.author.email === email ? (
                        <div
                          className="col-xl-4 col-md-6"
                          name="key"
                          key={data.id}
                        >
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
                                <i className="fa fa-usd  text-muted mr-1 " />{" "}
                                Offre type :
                              </a>{" "}
                              <a className="mr-4 float-right">
                                <i className="fa fa-clock-o  text-muted mr-1" />
                                {data.typeOffre}
                              </a>{" "}
                            </div>
                            <div className="card-body py-2">
                              <div className="d-flex align-items-center mt-auto">
                                <div className=" text-muted">
                                  {" "}
                                  <a
                                    className="btn btn-primary text-white"
                                    onClick={() => {
                                      this.delete(data);
                                    }}
                                  >
                                    delete{" "}
                                  </a>
                                  {""}
                                  <a
                                    onClick={() => {
                                      this.handleModal(data);
                                    }}
                                    className="btn btn-primary text-white"
                                    style={{ marginLeft: "100px" }}
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
                      ) : (
                        <div />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
