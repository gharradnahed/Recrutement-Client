import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
export default class CompanyProf extends Component {
    render() {
        return (
            
<div>
            <Link to ="./CompanyView"/>
            <Form>
                
    <Form.Control type="description" placeholder="Post Here" />
    <Button variant="primary" type="submit">
    Post
  </Button>
            </Form>

 
            </div>
        )
    }
}
