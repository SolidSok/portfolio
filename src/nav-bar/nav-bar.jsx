import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function PortfolioNav() {
  return (
    <Navbar
      className="main-nav"
      sticky="top"
      bg="dark"
      expand="lg"
      variant="dark">
      <Container fluid>
        <Navbar.Brand className="nav-logo" href="/">
          SolidSok
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href={`/about`}>
              <b>About Me</b>
            </Nav.Link>
            <Nav.Link href={`/contact`}>
              <b>Contact Me</b>
            </Nav.Link>
            <Nav.Link href={'/work'}>
              <b>My Work</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
