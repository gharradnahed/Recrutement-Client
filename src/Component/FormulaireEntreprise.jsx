import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios  from 'axios';
import {Redirect,BrowserRouter,Switch,Router,Route, Link} from 'react-router-dom';
export class FormulaireEntreprise extends Component {
    constructor(props) {
        super();
        
    this.state = {
        email: '',
        password: '',
        phoneNumber: '',
        siteWeb:'',
        adress: '',
        age: '',
        sex: '',
        city: '',
        state: '',
 
        type: 'Entreprise',
        redirect:false,
        
        
    }
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({[e.target.name]:e.target.value});
    }

      setRedirect = () => {
            this.setState({
              redirect: true
            })
          }
    renderRedirect = () => {
            if (this.state.redirect) {
              return <Redirect to='/' />
            }
          }
     handleSubmit(e)  { 
            e.preventDefault();
            
        
            const user = {
                email: this.state.email,
                password: this.state.password,
                phoneNumber: this.state. phoneNumber,
                siteWeb: this.state.siteWeb,
                adress: this.state.adress,
                age: this.state.  age,
                sex: this.state.sex,
                city: this.state.city,
                state: this.state.state,
                type:this.state.type

                
    
            };
            axios.post(`http://localhost:5000/api/register`,  user, {
                headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
              } )
            .then(res => {
              console.log(res);
              console.log("test")
              console.log(res.user);    
            }) .catch(error => {
                console.log(error.response)
            });
            this.setRedirect(); 
          
            
        }    
             
      
 render() {
    if (this.state.redirect){
        return(
            <Redirect to ='/'></Redirect>
        )
    };
        return (
            <BrowserRouter>
            <div>
                <Form  onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Company@gmail.com" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name ='password' placeholder="Password" onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>
                  

                    <Form.Group controlId="numtel">
                        <Form.Label>Numero du télephone</Form.Label>
                        <Form.Control placeholder="00216 25 365 366 "  name='phoneNumber'onChange={this.handleChange}  />
                    </Form.Group>
                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Site  Web</Form.Label>
                        <Form.Control placeholder="www.exemple.com" name='siteWeb' onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder=" tunis for exemple" name='adress' onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity"onChange={this.handleChange} >
                            <Form.Label name='city'>City  </Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState" onChange={this.handleChange} >
                            <Form.Label name='state'>State</Form.Label>
                            <Form.Control
                                as="select"
                                className="mr-sm-2"
                                id="inlineFormCustomSelect"
                                custom
                            >
                                <option value="0">Choose...</option>
                                <option value="1">Ariana</option>
                                <option value="2">Béja</option>
                                <option value="3">Ben Arous</option>
                                <option value="4">Bizerte</option>
                                <option value="5">Gabès</option>
                                <option value="6">Gafsa</option>
                                <option value="7">Jendouba</option>
                                <option value="8">Kairouan</option>
                                <option value="9">Kasserine</option>
                                <option value="10">Kébili</option>
                                <option value="11">Le Kef</option>
                                <option value="12">Mahdia</option>
                                <option value="13">La Manouba</option>
                                <option value="14">Médenine</option>
                                <option value="15">Monastir</option>
                                <option value="16">Nabeul</option>
                                <option value="17">	Sfax</option>
                                <option value="18">Sidi Bouzid</option>
                                <option value="19">Siliana</option>
                                <option value="20">Sousse</option>
                                <option value="21">Tataouine</option>
                                <option value="22">Tozeur</option>
                                <option value="23">Tunis</option>
                                <option value="24">Zaghouanf</option>
                            </Form.Control>
                        </Form.Group>

                    </Form.Row>
                    <Button>
                    <Link to = "/" variant="primary" type="submit" onClick= {this.handleSubmit}  >
                    Submit
                    
                        
                      
  </Link>
  </Button>
                </Form>
            </div>
            </BrowserRouter>
        )
    }
}

export default FormulaireEntreprise
