import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
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
        <Navbar.Brand className="nav-logo" href="/portfolio">
          Steven Sok{' '}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav-bar">
          {' '}
          <h3 className="nav-text"> Find me on: </h3>
          <Nav>
            <Button
              className="social-button"
              href="https://github.com/SolidSok"
              target="_blank"
              size="sm">
              <img src={require('./img/github.png')} alt="Github" />
            </Button>

            <Button
              className="social-button"
              href="https://twitter.com/solidsok"
              target="_blank"
              size="sm">
              {' '}
              <img src={require('./img/twitter.png')} alt="twitter" />
            </Button>

            <Button
              className="social-button"
              href="https://www.linkedin.com/in/steven-sok-bb2341201/"
              rel="noreferrer"
              size="sm">
              <img src={require('./img/linkedin.png')} alt="LinkedIn" />
            </Button>

            <a href="resume.pdf" download className="resume">
              Download my CV
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PortfolioNav;
