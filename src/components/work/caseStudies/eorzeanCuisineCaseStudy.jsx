import React, { useState } from 'react';
import '../work.css';

import { Container, Image, Modal, Button, Row, Col } from 'react-bootstrap';

export default function EorzeanCuisineCaseStudy() {
  const [show, setShow] = useState(false);

  return (
    <Container className="case-study" fluid>
      <Button variant="warning" onClick={() => setShow(true)}>
        <h2>Case Study</h2>
      </Button>
      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Case Study: EorzeanCuisine</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="case-study">
            <Col>
              {' '}
              <Image
                className="case-study-img"
                src={require('../img/myFlix/myFlix-card.png')}
              />
            </Col>
            <Col>
              <h2>Overview</h2>
              <p>
                Eorzean Cuisine is a web app that is meant to simulate a
                restaurant page. It takes recipes from the critically acclaimed
                mmorpg, Final Fantasy 14, and presents them in the form of a
                menu. Data for each menu item is pulled from a database on
                MongoDB. The client uses a custom REST API that I made using
                node and express.
              </p>
              <h2>Purpose and Objective</h2>
              <p>
                myFlix is a personal project built during my time at
                CareerFoundry. It demonstrates essential CRUD operations by
                fetching, updating, and deleting data from a database created
                using mongoDB.
              </p>
            </Col>
          </Row>

          <Image
            className="update-user-img"
            src={require('../img/myFlix/myFlix-update-info.png')}
          />
          <Row className="case-study">
            <Col>
              {' '}
              <h2>Tech Stack</h2>
              <p>This project uses both frontend and backend development.</p>
              <h3>Backend</h3>
              <p>
                The backend consists of a database using mongoDB, and a RESTful
                API for endpoint routing. Endpoints were tested using the
                Postman application.
              </p>
              <h3>Frontend</h3>
              <p>
                The frontend uses 2 clients, one made in React and the other in
                Angular. They both function the same for CRUD operations. They
                just have different visual presentations. The React client uses
                React-Bootstrap for its css framework, and the Angular version
                uses Material-Design.
              </p>
              <h2>The Dev Process</h2>
              <p>
                This project was my introduction to React. It took a while for
                me to understand concepts like transferring props between
                components. As I spent more time with it, I appreciated how much
                easier it is to create an application when using a framework.
                Components in particular make organizing content far easier,
                especially since they can be reused. Having already made the
                React client, it only took a few days to learn Angular and
                produce a client application in it.
              </p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
