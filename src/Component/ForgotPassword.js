import React, { Component } from 'react';
import axios from 'axios';
import { Button, Container } from 'reactstrap';
import Form from 'react-bootstrap/Form'
import cle from '../image/cle.png'
const title = {
    pageTitle: 'Forgot Password Screen',
};
class ForgotPassword extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            showError: false,
            messageFromServer: '',
            showNullError: false,
        };
    }

    handleChange  = (e) => {
        
    
        this.setState({
          [e.target.email]: e.target.value,
        });
      };

    componentDidMoun = async (e) => {
        e.preventDefault();
        const { email } = this.state;
        if (email === "") {
            this.setState({
                showError: false,
                showNullError: true,
                loggedIn: false,
                
            });
        } else {
            try {
                const response = axios.post('http://localhost:5000/api/byemail', {
                    username: this.state.email,})  .then((res) => {
                      
                       
                        console.log(res)
                        
                      });
                      
                  }
                  catch{
                          console.log("email not found")
                  }
                }
                
        
    }

    render() {
        const {
            email, messageFromServer, showNullError, showError
        } = this.state;

        return (
            <div className="baground-image">
                <Container className="blocktext">
                    <img src={cle} alt="cle" className="displayed " />

                    <form onSubmit={this.componentDidMount}>
                        <Form.Control
                            className="placeholder"
                            type="email"
                            label="email"
                            value={email}
                            onChange={this.handleChange()}
                            placeholder="Email Address"
                        ></Form.Control >
                        <Button color="primary" size="lg" block onClick={this.C}>Change Password</Button>
                    </form>
                    {showNullError && (
                        <div>
                            <p>The email address cannot be null.</p>
                        </div>
                    )}
                    {showError && (
                        <div>
                            <p>
                                That email address isn't recognized. Please try again or
                                register for a new account.
                        </p>
                        </div>
                    )}
                    {messageFromServer === 'recovery email sent' && (
                        <div>
                            <h3>Password Reset Email Successfully Sent!</h3>
                        </div>
                    )}
                    <Button color="secondary" href="/" size="lg" block> Login page</Button>
                </Container>
            </div>

        );
    }

}
export default ForgotPassword