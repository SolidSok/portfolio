import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './work.css';

import MyFlixReact from './projects/myFlixReact';
import { ChatApp } from './projects/chatApp';
import EorzeanCuisine from './projects/eorzeanCuisine';
import EngageBuilder from './projects/engageBuilder';
export default function Work() {
  return (
    <Container className="work-container" fluid="md">
      <Row>
        <Col lg={6}>
          <EngageBuilder />
        </Col>
        <Col lg={6}>
          <EorzeanCuisine />
        </Col>
        <Col lg={6}>
          <MyFlixReact />
        </Col>
        <Col lg={6}>
          <ChatApp />
        </Col>
      </Row>
    </Container>
  );
}
