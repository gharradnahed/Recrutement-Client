import React, { Component } from 'react';
import axios from 'axios';
import { Button, Container } from 'reactstrap';
import Form from 'react-bootstrap/Form'
import cle from '../image/cle.png'
import { Redirect, useHistory } from "react-router-dom";
const title = {
    pageTitle: 'Forgot Password Screen',
};
class ForgotPassword extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            loggedIn: false,

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {

       

        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.email)
        let data = {
            email: this.state.email,
        }
        // if (email === "") {
        // this.setState({
        //      showError: false,
        //     showNullError: true,
        //     loggedIn: false,

        //    });
        // } else {

        //  console.log(email)
        axios.post('http://localhost:5000/api/byemail',
            data).then((res) => {
                console.log(res);
                console.log(res.data.secret);


                this.setState({ loggedIn: true })
                console.log(this.state.loggedIn)
                localStorage.setItem("Email", this.state.email);
                localStorage.setItem("secret", res.data.secret);
                window.location.reload();

            }).catch(err => {
                console.log(err.Response)

            })



        //  }


    }

    render() {
        const {
            email, messageFromServer, showNullError, showError
        } = this.state;
        if(this.state.loggedIn){return (<Redirect to="/SecretKey"/>)}
        return (
            <div className="baground-image">
                <Container className="blocktext">
                    <img src={cle} alt="cle" className="displayed " />

                    <form onSubmit={this.handleSubmit}>
                        <Form.Control
                            className="placeholder"
                            type="email"

                            name="email"

                            onChange={this.handleChange}
                            placeholder="Email Address"
                        ></Form.Control >
                        <Button color="primary" size="lg" block >Change Password</Button>
                    </form>

                    <Button color="secondary" href="/" size="lg" block> Login page</Button>
                </Container>
            </div>

        );
    }

}
export default ForgotPassword