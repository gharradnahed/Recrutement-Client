import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import Form from 'react-bootstrap/Form'
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

        handleChange = name => (event) => {
            this.setState({
                [name]: event.target.value,
            });
        };

        sendEmail = async (e) => {
            e.preventDefault();
            const { email } = this.state;
            if (email === '') {
                this.setState({
                    showError: false,
                    messageFromServer: '',
                    showNullError: true,
                });
            } else {
                try {
                    const response = await axios.post(
                        'http://localhost:3003/auth/forgotPassword',
                        {
                            email,
                        },
                    );
                    console.log(response.data);
                    if (response.data === 'recovery email sent') {
                        this.setState({
                            showError: false,
                            messageFromServer: 'recovery email sent',
                            showNullError: false,
                        });
                    }
                } catch (error) {
                    console.error(error.response.data);
                    if (error.response.data === 'email not in db') {
                        this.setState({
                            showError: true,
                            messageFromServer: '',
                            showNullError: false,
                        });
                    }
                }
            }
        };
    
        render() {
            const {
                email, messageFromServer, showNullError, showError
            } = this.state;

            return (
                <div>
                    <form  onSubmit={this.sendEmail}>
                         <Form.Control
                          
                            type="email"
                            label="email"
                            value={email}
                            onChange={this.handleChange('email')}
                            placeholder="Email Address"
                        ></Form.Control>
                        <Button
                            
                            buttonText="Send Password Reset Email"
                        >
                            Change password
                        </Button>
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
                            <Button
                                buttonText="Register"
                                link="/Register"
                            >
                                Register
                            </Button>
                        </div>
                    )}
                    {messageFromServer === 'recovery email sent' && (
                        <div>
                            <h3>Password Reset Email Successfully Sent!</h3>
                        </div>
                    )}
                    <Button buttonText="Go Home"  href="/" >Go Home</Button>
                </div>
            );
        }
    
    }
export default ForgotPassword