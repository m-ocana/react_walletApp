import React,{ Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTransaction, IN, OUT } from '../actions/index';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

class TransactionControl extends Component {

  constructor(props) {
    super(props);
    this.state = { value: ''};
  }

  onInputChange(event){
    this.setState({value: event.target.value})
  }

  onButtonClick(type){
    if(this.state.value > 0) {
      this.props.addTransaction(type, this.state.value);
      this.setState({value: ''});
    }
  }

  validateInput(){
    const regexp = /^[0-9]+([,.][0-9]+)?$/g;
    const test = regexp.test(Number(this.state.value));
    return test;
  }

  validateCashOut(){
    if((Number(this.props.currentBalance) - Number(this.state.value)) <= 0){
      return false;
    }
    if(!this.validateInput()){
      return false;
    }
    return true;
  }

  render() {
    return (
      <FormGroup
        controlId="formValidation"
        validationState={!this.validateInput() ? "error" : null}>
        <InputGroup>
          <InputGroup.Button>
            <Button
              bsStyle="danger"
              disabled={!this.validateCashOut()}
              onClick={this.onButtonClick.bind(this, OUT)}>
              Out</Button>
          </InputGroup.Button>
          <FormControl
            value={this.state.value}
            type="text"
            placeholder="Cash"
            onChange={this.onInputChange.bind(this)}
            />
          <InputGroup.Button>
            <Button
              bsStyle="success"
              disabled={!this.validateInput()}
              onClick={this.onButtonClick.bind(this, IN)}>
              In</Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    )
  }
}

function mapStateToProps(state) {
  return { currentBalance: state.currentBalance };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addTransaction},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionControl);
