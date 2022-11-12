import { Card, Row, Col, Container, Badge, Image } from 'react-bootstrap';

export function ChatApp() {
  return (
    <div className="project-body">
      {' '}
      <Card.Body>
        <Card.Header>
          <a
            href="https://github.com/SolidSok/chat-app"
            target="_blank"
            rel="noreferrer">
            <h2 class="project">React Native Chat App</h2>
          </a>
        </Card.Header>{' '}
        <Card.Img className="img" src={require('../img/chat-app/main.png')} />
        <Card.Img className="img" src={require('../img/chat-app/2.png')} />
        <Card.Img className="img" src={require('../img/chat-app/3.png')} />
        <Row className="badges">
          {' '}
          <h1>
            <Badge bg="info">React Native</Badge> <Badge bg="info">Expo</Badge>{' '}
            <Badge bg="info">Firebase</Badge>
          </h1>
        </Row>
        <Card.Text>
          <h3 class="work-description">Description:</h3>
          <p class="project-text">
            Chat app for mobile devices using React Native. The app will provide
            users with a chat interface and options to share images and their
            location.
          </p>
          <h2>
            {' '}
            <Badge>
              {' '}
              <a className="a-link" href="https://github.com/SolidSok/chat-app">
                Github Repo
              </a>
            </Badge>
          </h2>
        </Card.Text>
      </Card.Body>
    </div>
  );
}
