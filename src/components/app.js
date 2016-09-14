import React, { Component } from 'react';
import Header from './header';
import Balance from '../containers/balance';
import TransactionControl from './transaction_control';
import TransactionList from '../containers/transaction_list';

const LOCALE = "en";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Balance />
          <TransactionControl />
          <TransactionList />
        </div>
      </div>
    );
  }
}
