import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon,Segment, Input } from 'semantic-ui-react'
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';
import axios from 'axios'
export default class CompanyProf extends Component {
  state = {
    outputDtata: []
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/offre/api/getoffre`)
      .then(res => {
        const outputDtata = res.data;
        this.setState({outputDtata  });
      })
  }
    render() {
        return (<div>
  <Segment inverted>
    <Input inverted placeholder='Search...' />
  </Segment>
  <Form >
                    <Form.Row>
                      
                        <Form.Group as={Col} >
                            
                            <Form.Control type="text" name="putData"  required = {true} readOnly = {true} value={this.state.outputDtata}     />
                        </Form.Group>
                    </Form.Row>
    </Form>

 </div>
            
        )
    }
}
