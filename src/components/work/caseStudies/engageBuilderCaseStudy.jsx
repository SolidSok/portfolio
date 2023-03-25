import React, { useState } from 'react';
import '../work.css';
import { Container, Image, Modal, Button, Row, Col } from 'react-bootstrap';

export default function EngageBuilderCaseStudy() {
  const [show, setShow] = useState(false);

  return (
    <Container className="case-study" fluid>
      <Button variant="success" onClick={() => setShow(true)}>
        Case Study
      </Button>
      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Case Study: Engage Builder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="case-study">
            <Col>
              {' '}
              <Image
                className="engage-builder-case-study"
                src={require('../img/engage-builder/1.png')}
              />
            </Col>
            <Col>
              <h2>Overview</h2>
              <p>
                Engage Builder is a web app built in React. It has information
                about units, classes, and other aspects of the game, Fire Emblem
                Engage. The app presents all of that information in an easy to
                view location.
              </p>
              <h2>Purpose and Objective</h2>
              <p>
                Fire Emblem Engage is one of my favorite games to come out in
                recent history. It has a lot of customization options which also
                means a lot of looking up information online. I got tired of
                having to look at different charts and pages to see how a
                specific unit would fare in a different class, so I made the
                Engae Builder.
              </p>
              <p>
                The Engage Builder takes all of that information and presents it
                in an easy to use location. Simply select a unit, then a class,
                and you can see what that unit's growth rates will be. This is
                an ongoing project, so more features will be added overtime.
              </p>
            </Col>
          </Row>

          <Image
            className="engage-builder-case-study"
            src={require('../img/engage-builder/2.png')}
          />
          <Row className="case-study">
            <Col>
              {' '}
              <h2>Tech Stack</h2>
              <p>
                This project uses purely front end. I decided to keep
                information as a module to pull from rather than having to rely
                on an outside source. I felt a backend was unnecessary since the
                app is fairly simple.
              </p>
              <h3>Frontend</h3>
              <p>
                The app was built using React, and uses React-Bootstrap for its
                css framework.
              </p>
              <h2>The Dev Process</h2>
              <p>
                I was much more familiar with React at this point. It took a
                while to figure out how i wanted the layout to appear. This is
                still a work in progress, so it may change again, but the basic
                functions are implemented.
              </p>
              <p>
                One issue I had during development included my image assets not
                loading properly. After looking into it, I found it was because
                I used Vite Create React App which causes a bug with image
                assets. I fixed this by moving them to the public folder.
              </p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
