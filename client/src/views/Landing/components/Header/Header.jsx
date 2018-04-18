import React, { Component } from 'react';
import cx from 'classnames';
import { Button, Navbar, NavItem, Nav } from 'react-bootstrap';

import logo from './../../img/reactlogo.png';

import './../../helpers/BootstrapStyles';
import 'bootstrap/dist/css/bootstrap.css';
import './../../css/App.css';
import './../../css/demo.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarTransparent: true
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset;
    this.setState(() => {
      return {
        navbarTransparent: scrollTop < 260
      };
    });
  };

  render() {

    const navbarStyles = cx({
      'navbar-transparent': this.state.navbarTransparent
    });

    return (
      <Navbar bsStyle="default" fixedTop className={navbarStyles}>
        <Navbar.Header>
          <Navbar.Toggle />
          <a href="/">
            <div className="logo-container">
              <div className="logo">
                  <img src={logo} alt="Logo" />
              </div>
            </div>
          </a>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav style={{float: 'right'}}>
            <NavItem eventKey={1} href="/signup">
              <Button bsStyle="danger" bsSize="large">
                Get Started!
              </Button>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
