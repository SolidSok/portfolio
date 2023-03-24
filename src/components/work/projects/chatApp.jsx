import { Card, Badge, Button } from 'react-bootstrap';

export function ChatApp() {
  return (
    <Card className="text-center">
      {' '}
      <Card.Header>
        {' '}
        <Button
          variant="none"
          href="https://github.com/SolidSok/chat-app"
          target="_blank"
          rel="noreferrer">
          <h2 class="project">React Native Chat App</h2>
        </Button>
      </Card.Header>{' '}
      <Card.Body>
        <Card.Img className="img" src={require('../img/chat-app/main.png')} />
        <Card.Img className="img" src={require('../img/chat-app/2.png')} />
        <Card.Img className="img" src={require('../img/chat-app/3.png')} />
        <br />
        <Badge bg="info">React Native</Badge> <Badge bg="info">Expo</Badge>{' '}
        <Badge bg="info">Firebase</Badge>
        <Card.Text>
          <p class="project-text">
            Chat app for mobile devices using React Native. The app will provide
            users with a chat interface and options to share images and their
            location.
          </p>
          <h2>
            {' '}
            <Button
              variant="warning"
              href="https://github.com/SolidSok/chat-app"
              target="_blank">
              {' '}
              Github Repo
            </Button>
          </h2>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
