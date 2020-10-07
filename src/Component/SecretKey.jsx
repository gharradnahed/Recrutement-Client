import React, { Component } from 'react'
import { Button, Container } from 'reactstrap';
import Form from 'react-bootstrap/Form'
import cle from '../image/cle.png'
import Badge from 'react-bootstrap/Badge'
import { Redirect} from "react-router-dom";
export default class SecretKey extends Component {
    constructor(props){
super();

this.state = {
    nextPage:false,
    
response:'',
    secret: localStorage.getItem("secret"),
   
    
  };
  this.handleChange=this.handleChange.bind(this);
  this.compare=this.compare.bind(this);

    }
    handleChange = (e) => {

        

        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    compare(e){
        e.preventDefault();
     
 if(this.state.secret===this.state.response){
     this.setState({nextPage:true})
     console.log(this.state.nextPage)
    
 }
    }
    render() {

        if(this.state.nextPage){return (<Redirect to="/setNewPassword"/>)}
        return (
            <div>
                <div className="baground-image">
                    <Container className="blocktext">
                        <img src={cle} alt="cle" className="displayed " />

                        <form >
                            <h1>
                            What's your ideal company <Badge variant="secondary" ></Badge>
                            </h1>

                            <Form.Control
                                className="placeholder"
                                type="text"

                                name="response"
onChange={this.handleChange}
                                placeholder="Your answer"
                            ></Form.Control >
                            <Button color="primary" size="lg" block  onClick={this.compare}>check</Button>
                        </form>


                    </Container>
                </div>
            </div>
        )
    }
}
