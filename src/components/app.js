import React, { Component } from 'react';
import Header from './header';
import Balance from './balance';
import Transaction from './transaction';
import TransactionList from './transaction_list';

const LOCALE = "en";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Balance />
          <Transaction />
          <TransactionList />
        </div>
      </div>
    );
  }
}
