import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { Table } from 'react-bootstrap';
// remove later
import Timestamp from 'react-timestamp';
import {FormattedNumber} from 'react-intl';

class TransactionList extends Component {

  renderTransaction(transaction, index) {
    let size = this.props.transactions.length;
    return (
      // todo: add generated keys
      <tr key={index}>
        <td>{size-index}</td>
        <td><FormattedNumber value={transaction.amount} style='currency' currency="gbp"/></td>
        <td><Timestamp time={transaction.date} format="full"/></td>
      </tr>
    )
  }

  render() {
    if(this.props.transactions.length === 0) {
      return (
        <p className="text-info">No transactions yet</p>
      )
    }

    return (
      <Table bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {this.props.transactions.map(this.renderTransaction.bind(this))}
        </tbody>
      </Table>
    )
  }
}

function mapStateToProps(state) {
  return { transactions: state.transactions };
}

export default connect(mapStateToProps)(TransactionList);
