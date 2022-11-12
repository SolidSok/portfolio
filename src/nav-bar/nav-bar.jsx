import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import './nav-bar.css';
const PortfolioNav = () => {
  // Get the button
  let mybutton = document.getElementById('myBtn');

  // When the user scrolls down 30px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      mybutton.style.display = 'block';
    } else {
      mybutton.style.display = 'none';
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <Navbar
      className="main-nav"
      sticky="top"
      bg="dark"
      expand="lg"
      variant="dark">
      <Container fluid>
        <Navbar.Brand className="nav-logo" href="/portfolio2">
          Steven Sok{' '}
        </Navbar.Brand>
        <Button variant="secondary" id="myBtn" onClick={topFunction}>
          Top
        </Button>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav-bar">
          {' '}
          <h3 className="nav-text"> Find me on: </h3>
          <Nav>
            <Button size="sm">
              {' '}
              <a
                href="https://github.com/SolidSok"
                target="_blank"
                rel="noreferrer"
                on>
                <img src={require('./img/github.png')} alt="Github" />
              </a>
            </Button>

            <Button size="sm">
              {' '}
              <a
                href="https://twitter.com/solidsok"
                target="_blank"
                rel="noreferrer">
                <img src={require('./img/twitter.png')} alt="twitter" />
              </a>
            </Button>

            <Button size="sm">
              <a
                href="https://www.linkedin.com/in/steven-sok-bb2341201/"
                rel="noreferrer"
                target="_blank">
                <img src={require('./img/linkedin.png')} alt="LinkedIn" />
              </a>
            </Button>

            <Button size="sm" className="resume" variant="info">
              <a href="resume.pdf" download>
                Download my CV
              </a>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PortfolioNav;
