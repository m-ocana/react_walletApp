import React,{ Component } from 'react';
import {FormattedNumber} from 'react-intl';

class Balance extends Component {
  render () {
    return (
      <h1 className="lead">Balance: <FormattedNumber value={1000} style='currency' currency="gbp"/></h1>
    )
  }
}

export default Balance;
