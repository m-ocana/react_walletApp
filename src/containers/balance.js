import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {FormattedNumber} from 'react-intl';

class Balance extends Component {
  render () {
    return (
      <h1 className="lead">Balance: <FormattedNumber value={this.props.currentBalance} style='currency' currency="gbp"/></h1>
    )
  }
}

function mapStateToProps(state){
  return { currentBalance: state.currentBalance }
}

export default connect(mapStateToProps)(Balance);
