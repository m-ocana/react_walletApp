import React,{ Component } from 'react';
import { Table } from 'react-bootstrap';
// remove later
import Timestamp from 'react-timestamp';
import {FormattedNumber} from 'react-intl';

class TransactionList extends Component {
  render() {
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
          <tr>
            <td>1</td>
            <td><FormattedNumber value={1000} style='currency' currency="gbp"/></td>
            <td><Timestamp time={Date.now()/1000} format="full"/></td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default TransactionList;
