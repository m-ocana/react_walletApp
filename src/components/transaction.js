import React,{ Component } from 'react';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

class Transaction extends Component {
  render() {
    return (
      <FormGroup>
        <InputGroup>
          <InputGroup.Button>
            <Button bsStyle="danger">Out</Button>
          </InputGroup.Button>
          <FormControl type="text" placeholder="Cash"/>
          <InputGroup.Button>
            <Button bsStyle="success">In</Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    )
  }
}

export default Transaction;
