import React,{ Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">WalletApp</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Reset</NavItem>
            <NavItem eventKey={2} href="https://github.com/m-ocana/react_walletApp">View Source</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
