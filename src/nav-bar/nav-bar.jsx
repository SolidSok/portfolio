import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nav-bar.css';
const PortfolioNav = () => {
  return (
    <Navbar
      className="main-nav"
      sticky="top"
      bg="dark"
      expand="lg"
      variant="dark">
      <Container fluid>
        <Navbar.Brand className="nav-logo" href="/">
          Steven Sok{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav-bar">
          {' '}
          Find me on:{' '}
          <Nav>
            <a
              href="https://github.com/SolidSok"
              target="_blank"
              rel="noreferrer"
              on>
              <img src={require('./img/github.png')} alt="Github" />
            </a>
            <a
              href="https://twitter.com/solidsok"
              target="_blank"
              rel="noreferrer">
              <img src={require('./img/twitter.png')} alt="twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/steven-sok-bb2341201/"
              rel="noreferrer"
              target="_blank">
              <img src={require('./img/linkedin.png')} alt="LinkedIn" />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PortfolioNav;
