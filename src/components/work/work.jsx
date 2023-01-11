import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import './work.css';

import MyFlixReact from './projects/myFlixReact';
import { ChatApp } from './projects/chatApp';
import EorzeanCuisine from './projects/eorzeanCuisine';
export default function Work() {
  return (
    <Container className="work-container" fluid="md">
      <Row>
        <Col>
          {' '}
          <Card border="secondary">
            {' '}
            <EorzeanCuisine />
          </Card>{' '}
        </Col>
        <Col>
          {' '}
          <Card border="secondary">
            {' '}
            <MyFlixReact />
          </Card>{' '}
        </Col>
        <Col>
          {' '}
          <Card border="secondary">
            {' '}
            <ChatApp />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
