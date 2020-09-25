import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import axios  from 'axios';
import {Redirect,BrowserRouter,Switch,Router,Route, Link} from 'react-router-dom';
import LoginPage from './LoginPage'
export class FormulaireOthers extends Component {
    constructor(props) {
        super();
        let loggedIn = false ;
    this.state = {
        nom: '',
        prenom: '',
        email: '',
        phone_number: '',
        password:'',
        adresse: '',
        age: '',
        sex: '',
        city: '',
        state: '',
        specialite: '',
        type: 'User',
        redirect:false,
        
        
    }
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
  /*  onChange = e => {
        this.setState ({
            [e.target.name]: e.target.value
        }) }
    submitForm= e => {
        e.preventDefault(); 
        
             
            // localStorage.setItem("token","aaaa");

            this.setState({loggedIn:true})
          

        
        
       
  handleSubmit = event => {
        event.preventDefault();
         console.log(this.state)
        const user = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            email: this.state.email,
            phoneNumber: this.state.phone_number,
            adresse: this.state.adresse,
            age: this.state.age,
            sex: this.state.sex,
            city: this.state.city,
            state: this.state.state,
            speciality: this.state.specialite,
            type: this.state.USER,

        };
var check=false*/
      
    handleChange(e) {
        this.setState({[e.target.name]:e.target.value});
        // this.setState({nom: event.target.nom});
        // this.setState({nom: event.target.prenom});
        // this.setState({nom: event.target.email});
        // this.setState({nom: event.target.phone_number});
        // this.setState({nom: event.target.adresse});
        // this.setState({nom: event.target.age});
        // this.setState({nom: event.target.sex});
        // this.setState({nom: event.target.specialite});
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
            nom: this.state.nom,
            prenom: this.state.prenom,
            email: this.state.email,
            phoneNumber: this.state.phone_number,
            adresse: this.state.adresse,
            age: this.state.age,
            sex: this.state.sex,
            city: this.state.city,
            state: this.state.state,
            speciality: this.state.specialite,
            password: this.state.password,
            

        };
         
      
        axios.post(`http://localhost:5000/api/register`,  user )
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
        
                
            
            <div>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="nom"  type="text" placeholder="Name" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="prenom"  placeholder="Last Name" onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email"  placeholder="Company@gmail.com" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>


                    <Form.Group controlId="numtel">
                        <Form.Label>Phone number</Form.Label>

                        <Form.Control placeholder="00216 25 365 366 tunis for exemple" name="phone_number" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>speciality</Form.Label>
                        <Form.Control placeholder="       "   name="specialite" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" name="adresse"  placeholder="1234 tunis for exemple" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Age</Form.Label>
                            <Form.Control placeholder="Put your age please" name="age" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState" >
                            <Form.Label>Sex</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." name="sex"
                              
                              onChange={this.handleChange}>
                                <option value="0">Choose...</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                
                            </Form.Control >
                        </Form.Group>


                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control name="city" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control name="state" onChange={this.handleChange}
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
  
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      </Switch>
      </BrowserRouter>
                </Form>
            </div>

        )
    }
}

export default FormulaireOthers
