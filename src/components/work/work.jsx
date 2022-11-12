import React from 'react';
import { Card, Row, Col, Container, Badge, Image } from 'react-bootstrap';
import './work.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MyFlixCaseStudy from './myFlixCaseStudy';

export default function Work() {
  return (
    <Container className="work-container" fluid>
      {' '}
      <Row className="work">
        <Tabs>
          <Tab eventKey={'myflix-react'} title="myFlix(React)">
            <div className="project-body">
              {' '}
              <Card.Body>
                <Card.Title>
                  <a
                    href="https://sokflix.netlify.app"
                    target="_blank"
                    rel="noreferrer">
                    <h2 class="project">myFlix Web App</h2>
                  </a>
                </Card.Title>{' '}
                <Image
                  className="project-img"
                  src={require('./img/myFlix/main.png')}
                />
                <Card.Text>
                  <Row className="badges">
                    <h1>
                      <Badge bg="info">React</Badge>{' '}
                      <Badge bg="info">Parcel</Badge>{' '}
                      <Badge bg="info">React-Bootstrap</Badge>{' '}
                      <Badge bg="info">Axios</Badge>{' '}
                      <Badge bg="info">React-Router</Badge>{' '}
                      <Badge bg="info">React-Redux</Badge>{' '}
                    </h1>
                  </Row>
                  <p class="project-text">
                    This client-side application uses an API to pull data from a
                    database about movies and displays them in an easy to view
                    card format. It was created in React. Most of its styling
                    comes from react-bootstrap. Both the front-end and back-end
                    for this application were created from scratch by me.
                  </p>
                  <h2>
                    {' '}
                    <Badge>
                      {' '}
                      <a
                        className="a-link"
                        href="https://github.com/SolidSok/myFlix-client"
                        target="_blank"
                        rel="noreferrer">
                        Github Repo
                      </a>
                    </Badge>{' '}
                    <Badge>
                      <a
                        className="a-link"
                        href="https://sokflix.netlify.app"
                        target="_blank"
                        rel="noreferrer">
                        WebPage
                      </a>
                    </Badge>
                  </h2>

                  <MyFlixCaseStudy />
                </Card.Text>
              </Card.Body>
            </div>
          </Tab>
          <Tab eventKey={'chat-app'} title="chat-app">
            <div className="project-body">
              {' '}
              <Card.Body>
                <Card.Title>
                  <a
                    href="https://github.com/SolidSok/chat-app"
                    target="_blank"
                    rel="noreferrer">
                    <h2 class="project">React Native Chat App</h2>
                  </a>
                </Card.Title>{' '}
                <Card.Img
                  className="img"
                  src={require('./img/chat-app/main.png')}
                />
                <Card.Img
                  className="img"
                  src={require('./img/chat-app/2.png')}
                />
                <Card.Img
                  className="img"
                  src={require('./img/chat-app/3.png')}
                />
                <Row className="badges">
                  {' '}
                  <h1>
                    <Badge bg="info">React Native</Badge>{' '}
                    <Badge bg="info">Expo</Badge>{' '}
                    <Badge bg="info">Firebase</Badge>
                  </h1>
                </Row>
                <Card.Text>
                  <h3 class="work-description">Description:</h3>
                  <p class="project-text">
                    Chat app for mobile devices using React Native. The app will
                    provide users with a chat interface and options to share
                    images and their location.
                  </p>
                  <Badge>
                    {' '}
                    <a
                      className="a-link"
                      href="https://github.com/SolidSok/chat-app">
                      Github Repo
                    </a>
                  </Badge>
                </Card.Text>
              </Card.Body>
            </div>
          </Tab>
          <Tab eventKey={'myflix-angular'} title="myFlix(Angular)">
            <Col>
              {' '}
              <div className="project-body">
                {' '}
                <Card.Body>
                  <Card.Title>
                    <a
                      href="https://github.com/SolidSok/myFlix-Angular-client"
                      target="_blank"
                      rel="noreferrer">
                      <h2 class="project">myFlix(Angular) Web App</h2>
                    </a>
                  </Card.Title>{' '}
                  <Card.Img
                    className="angular-img img"
                    src={require('./img/myFlix-Angular/main.jpg')}
                  />
                  <Card.Text>
                    <Row className="badges">
                      <h1>
                        <Badge bg="info">Angular</Badge>{' '}
                        <Badge bg="info">Profile Registration</Badge>{' '}
                        <Badge bg="info">CRUD App</Badge>
                      </h1>
                    </Row>
                    <p class="project-text">
                      The aim of this project is to build the client-side for an
                      application called myFlix using Angular based on its
                      existing server-side code (REST API and database), with
                      supporting documentation.
                    </p>
                    <h2>
                      {' '}
                      <Badge>
                        {' '}
                        <a
                          className="a-link"
                          href="https://github.com/SolidSok/myFlix-Angular-client"
                          target="_blank"
                          rel="noreferrer">
                          Github Repo
                        </a>
                      </Badge>
                    </h2>{' '}
                    <h2>
                      {' '}
                      <Badge>
                        {' '}
                        <a
                          className="a-link"
                          href="https://solidsok.github.io/myFlix-Angular-client/welcome"
                          target="_blank"
                          rel="noreferrer">
                          WebPage
                        </a>
                      </Badge>
                    </h2>
                  </Card.Text>
                </Card.Body>
              </div>
            </Col>
          </Tab>
        </Tabs>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
