import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Outlet } from 'react-router';
import './nav-bar.css';
const PortfolioNav = () => {
  return (
    <>
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
            <Nav>
              <Nav.Item>
                <Nav.Link href="/portfolio">About Me</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="portfolio/work">My Work</Nav.Link>
              </Nav.Item>
              <Button
                variant="info"
                href="resume.pdf"
                download
                className="resume">
                {' '}
                Download my CV
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default PortfolioNav;
