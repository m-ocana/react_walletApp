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

  render() {
    return (
      <FormGroup>
        <InputGroup>
          <InputGroup.Button>
            <Button
              bsStyle="danger"
              disabled={Number(this.props.currentBalance) - Number(this.state.value) <= 0}
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
