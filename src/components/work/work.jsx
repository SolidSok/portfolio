import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import meetImg from './img/img';

export default function Work() {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>
              {' '}
              <a
                href="https://solidsok.github.io/meet"
                target="_blank"
                rel="noreferrer">
                <h2 className="project">Meet Application</h2>
              </a>
            </Card.Title>{' '}
            <Card.Img
              className="modal-image"
              src="src/components/work/img/meet/main.png"
              alt="meet app"></Card.Img>
            <Card.Text>
              {' '}
              <h3 className="work-description">Description:</h3>
            </Card.Text>
            <Card.Text>
              {' '}
              <p className="project-text">
                This app pulls data from the Google Calendar API to look up
                developer events in specific locations. It was created in React
                while using a test-driven development approach. It can be used
                through the browser or as an application on devices. Thanks to
                this, it can also be used offline. Though it will only be able
                to use whatever data was cached before.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          {' '}
          <Card.Body>
            <Card.Title>
              {' '}
              <a
                href="https://solidsok.github.io/meet"
                target="_blank"
                rel="noreferrer">
                <h2 className="project">Meet Application</h2>
              </a>
            </Card.Title>{' '}
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          {' '}
          <Card.Body>
            <Card.Title>
              {' '}
              <a
                href="https://solidsok.github.io/meet"
                target="_blank"
                rel="noreferrer">
                <h2 className="project">Meet Application</h2>
              </a>
            </Card.Title>{' '}
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          {' '}
          <Card.Body>
            <Card.Title>
              {' '}
              <a
                href="https://solidsok.github.io/meet"
                target="_blank"
                rel="noreferrer">
                <h2 className="project">Meet Application</h2>
              </a>
            </Card.Title>{' '}
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          {' '}
          <Card.Body>
            <Card.Title>
              {' '}
              <a
                href="https://solidsok.github.io/meet"
                target="_blank"
                rel="noreferrer">
                <h2 className="project">Meet Application</h2>
              </a>
            </Card.Title>{' '}
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    // <div className="grid">
    //   <div class="grid__item meet-app">

    //     <div>
    //       <img class="modal-image" src="img/meet/main.png" alt="meet" />
    //       <div>
    //         Notable Features:
    //         <ul class="modal-list">
    //           <li>React</li>
    //           <li>Jest</li>
    //           <li>AWS Lambda</li>
    //           <li>oAuth2</li>
    //         </ul>
    //       </div>
    //     </div>
    //     <a
    //       href="https://github.com/SolidSok/meet"
    //       target="_blank"
    //       rel="noreferrer">
    //       Github Repo
    //     </a>
    //     <br />
    //     <a
    //       href="https://solidsok.github.io/meet"
    //       target="_blank"
    //       rel="noreferrer">
    //       Web Page
    //     </a>
    //   </div>

    //   <div class="grid__item sokflix-app">
    //     <a href="https://sokflix.netlify.app" target="_blank" rel="noreferrer">
    //       <h2 class="project">myFlix Web App</h2>
    //     </a>
    //     <h3 class="work-description">Description:</h3>

    //     <p class="project-text">
    //       This client-side application uses an API to pull data from a database
    //       about movies and displays them in an easy to view card format. It was
    //       created in React. Most of its styling comes from react-bootstrap. Both
    //       the front-end and back-end for this application were created from
    //       scratch by me.
    //     </p>
    //     <div>
    //       <img
    //         alt="myFlix page"
    //         src="img/myFlix/main.png"
    //         class="modal-image"
    //       />
    //       Notable Features:
    //       <ul>
    //         <li>React</li>
    //         <li>Parcel</li>
    //         <li>React-Bootstrap</li>
    //         <li>Axios</li>
    //         <li>React-Router</li>
    //         <li>React-Redux</li>
    //       </ul>
    //     </div>

    //     <a
    //       href="https://github.com/SolidSok/myFlix-client"
    //       target="_blank"
    //       rel="noreferrer">
    //       <p>Github Repo</p>
    //     </a>

    //     <a href="https://sokflix.netlify.app" target="_blank" rel="noreferrer">
    //       WebPage
    //     </a>
    //   </div>

    //

    //   <div class="grid__item pokedex-react-app">
    //     <a
    //       href="https://github.com/SolidSok/myFlix-Angular-client"
    //       target="_blank"
    //       rel="noreferrer">
    //       <h2 class="project">myFlix(Angular) Web App</h2>
    //     </a>

    //     <h3 class="work-description">Description:</h3>

    //     <p class="project-text">
    //       The aim of this project is to build the client-side for an application
    //       called myFlix using Angular based on its existing server-side code
    //       (REST API and database), with supporting documentation.
    //     </p>
    //     <div>
    //       <img
    //         class="modal-image"
    //         src="img/myFlix-Angular/main.jpg"
    //         alt="myflix angular "
    //       />
    //       <div>
    //         Notable Features:
    //         <ul class="modal-list">
    //           <li>Angular</li>
    //           <li>Allows users to register profile</li>
    //           <li>Pulls movies from custom database</li>
    //         </ul>
    //       </div>
    //     </div>
    //     <a
    //       href="https://github.com/SolidSok/myFlix-Angular-client"
    //       target="_blank"
    //       rel="noreferrer">
    //       <p>Github Repo</p>
    //     </a>

    //     <a
    //       href="https://solidsok.github.io/myFlix-Angular-client/welcome"
    //       target="_blank"
    //       rel="noreferrer">
    //       <p>WebPage</p>
    //     </a>
    //   </div>

    //   <div class="grid__item native-app">
    //     <a
    //       href="https://github.com/SolidSok/chat-app"
    //       target="_blank"
    //       rel="noreferrer">
    //       <h2 class="project">React Native Chat App</h2>
    //     </a>
    //     <h3 class="work-description">Description:</h3>

    //     <p class="project-text">
    //       Chat app for mobile devices using React Native. The app will provide
    //       users with a chat interface and options to share images and their
    //       location.
    //     </p>
    //     <div>
    //       <img
    //         class="modal-image"
    //         src="img/chat-app/Screenshot (Oct 13, 2022 12_45_04 PM).png"
    //         alt="chat app  "
    //       />

    //       <div>
    //         Notable Features:
    //         <ul class="modal-list">
    //           <li>React Native</li>
    //           <li>Expo</li>
    //           <li>FireBase</li>
    //         </ul>
    //       </div>
    //     </div>
    //     <a href="">
    //       <p>Github Repo</p>
    //     </a>
    //   </div>
    // </div>
  );
}
