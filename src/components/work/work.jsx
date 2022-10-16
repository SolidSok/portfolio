import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import './work.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Work() {
  return (
    <Container>
      {' '}
      <Row className="work">
        <Tabs>
          <Tab eventKey={'myflix-react'} title="myFlix(React)">
            <Card className="myFlix-React">
              {' '}
              <Card.Body>
                <Card.Img
                  className="myflix-img"
                  src={require('./img/myFlix/main.png')}
                />
                <Card.Title>
                  <a
                    href="https://sokflix.netlify.app"
                    target="_blank"
                    rel="noreferrer">
                    <h2 class="project">myFlix Web App</h2>
                  </a>
                </Card.Title>{' '}
                <Card.Text>
                  <h3 class="work-description">Description:</h3>
                  <p class="project-text">
                    This client-side application uses an API to pull data from a
                    database about movies and displays them in an easy to view
                    card format. It was created in React. Most of its styling
                    comes from react-bootstrap. Both the front-end and back-end
                    for this application were created from scratch by me.
                  </p>
                  Notable Features:
                  <ul>
                    <li>React</li>
                    <li>Parcel</li>
                    <li>React-Bootstrap</li>
                    <li>Axios</li>
                    <li>React-Router</li>
                    <li>React-Redux</li>
                  </ul>
                  <a
                    href="https://github.com/SolidSok/myFlix-client"
                    target="_blank"
                    rel="noreferrer">
                    Github Repo
                  </a>
                  <br></br>
                  <a
                    href="https://sokflix.netlify.app"
                    target="_blank"
                    rel="noreferrer">
                    WebPage
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey={'chat-app'} title="chat-app">
            <Card className="Chat-App">
              {' '}
              <Card.Body>
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
                <Card.Title>
                  <a
                    href="https://github.com/SolidSok/chat-app"
                    target="_blank"
                    rel="noreferrer">
                    <h2 class="project">React Native Chat App</h2>
                  </a>
                </Card.Title>{' '}
                <Card.Text>
                  <h3 class="work-description">Description:</h3>
                  <p class="project-text">
                    Chat app for mobile devices using React Native. The app will
                    provide users with a chat interface and options to share
                    images and their location.
                  </p>
                  <img
                    class="modal-image"
                    src="img/chat-app/Screenshot (Oct 13, 2022 12_45_04 PM).png"
                    alt="chat app  "
                  />
                  Notable Features:
                  <ul class="modal-list">
                    <li>React Native</li>
                    <li>Expo</li>
                    <li>FireBase</li>
                  </ul>
                  <a href="https://github.com/SolidSok/chat-app">Github Repo</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey={'myflix-angular'} title="myFlix(Angular)">
            <Col>
              {' '}
              <Card className="myFlix-Angular">
                {' '}
                <Card.Body>
                  <Card.Img
                    className="angular-img"
                    src={require('./img/myFlix-Angular/main.jpg')}
                  />
                  <Card.Title>
                    <a
                      href="https://github.com/SolidSok/myFlix-Angular-client"
                      target="_blank"
                      rel="noreferrer">
                      <h2 class="project">myFlix(Angular) Web App</h2>
                    </a>
                  </Card.Title>{' '}
                  <Card.Text>
                    <h3 class="work-description">Description:</h3>
                    <p class="project-text">
                      The aim of this project is to build the client-side for an
                      application called myFlix using Angular based on its
                      existing server-side code (REST API and database), with
                      supporting documentation.
                    </p>
                    <img
                      class="modal-image"
                      src="img/myFlix-Angular/main.jpg"
                      alt="myflix angular "
                    />
                    Notable Features:
                    <ul class="modal-list">
                      <li>Angular</li>
                      <li>Allows users to register profile</li>
                      <li>Pulls movies from custom database</li>
                    </ul>
                    <a
                      href="https://github.com/SolidSok/myFlix-Angular-client"
                      target="_blank"
                      rel="noreferrer">
                      Github Repo
                    </a>
                    <br />
                    <a
                      href="https://solidsok.github.io/myFlix-Angular-client/welcome"
                      target="_blank"
                      rel="noreferrer">
                      WebPage
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Tab>
        </Tabs>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
