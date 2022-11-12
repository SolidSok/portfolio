import { Card, Row, Col, Container, Badge, Image } from 'react-bootstrap';

export default function MyFlixAngular() {
  return (
    <div className="project-body">
      {' '}
      <Card.Body>
        <Card.Header>
          <a
            href="https://github.com/SolidSok/myFlix-Angular-client"
            target="_blank"
            rel="noreferrer">
            <h2 class="project">myFlix(Angular) Web App</h2>
          </a>
        </Card.Header>{' '}
        <Card.Img
          className="project-img"
          src={require('../img/myFlix-Angular/main.jpg')}
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
            application called myFlix using Angular based on its existing
            server-side code (REST API and database), with supporting
            documentation.
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
  );
}
