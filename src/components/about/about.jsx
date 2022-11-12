import React from 'react';
import './about.css';
import { Image, Row, Col, Container, Card, Badge } from 'react-bootstrap';

export default function About() {
  return (
    <Container className="about">
      <Row>
        <Col xs={12} md={3}>
          {' '}
          <div className="profile">
            <Image
              fluid
              roundedCircle={true}
              className="profile__portrait"
              src={require('./me.jpg')}
              alt="A photograph of me"
            />
            <Card
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.459)' }}
              className="text-center">
              <Card.Header>
                <b>My Toolkit</b>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {' '}
                  <Badge bg="warning">HTML</Badge>{' '}
                  <Badge bg="warning">JavaScript</Badge>{' '}
                  <Badge bg="warning">TypeScript</Badge>{' '}
                </Card.Text>
                <Card.Text>
                  {' '}
                  <Badge bg="warning">React</Badge>{' '}
                  <Badge bg="warning">Angular</Badge>{' '}
                  <Badge bg="warning">jQuery</Badge>{' '}
                  <Badge bg="warning">BootStrap</Badge>{' '}
                  <Badge bg="warning">React Native</Badge> <br />
                </Card.Text>
                <Card.Text>
                  {' '}
                  <Badge bg="warning">NodeJS</Badge>
                  <Badge bg="warning">Express</Badge>{' '}
                </Card.Text>

                <Card.Text>
                  {' '}
                  <Badge bg="warning">MongoDB</Badge>{' '}
                  <Badge bg="warning">AWS</Badge>{' '}
                  <Badge bg="warning">Google Firestore</Badge>{' '}
                  <Badge bg="warning">PostgreSQL</Badge>{' '}
                </Card.Text>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col xs={12} md={6}>
          {' '}
          <Card className="bio">
            {' '}
            <Card.Header className="welcome-header">
              <h1>Welcome</h1>
            </Card.Header>
            <h3>Who I Am</h3>
            <p>
              Hi, I’m Steven, a web developer with a bachelor’s degree in
              political science and a background in customer service. I made the
              switch to web development in an attempt to broaden my horizons and
              grow as a person.
            </p>
            <h3>My History</h3>
            <p>
              {' '}
              My work history has brought me to many places like the courts,
              retail stores, and even the casino. Each of these experiences have
              developed my ability to think about things from a customer’s
              perspective, as well as remain flexible enough to work as a team
              or independently.
            </p>
            <h3>What I Want to Do</h3>
            <p>
              As a developer I want to provide a positive user experience by
              developing applications that are effective and easy to understand.
              I want to grow from each of these experiences and constantly face
              new challenges.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
