import React,{ Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetWallet } from '../actions/index';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">
            <img src="img/easter-egg.png" alt="Easter Egg" />
            WalletApp</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem
              onClick = {this.props.resetWallet}
              eventKey={1}
              href="#">Reset</NavItem>
            <NavItem eventKey={2} href="https://github.com/m-ocana/react_walletApp">View Source</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({resetWallet},dispatch);
}

export default connect(null, mapDispatchToProps)(Header);
