import { Card, Badge, Button } from 'react-bootstrap';

export function ChatApp() {
  return (
    <Card className="text-center">
      {' '}
      <Card.Header>
        {' '}
        <Button
          className="project-header"
          variant="none"
          href="https://github.com/SolidSok/chat-app"
          target="_blank"
          rel="noreferrer">
          React Native Chat App
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
          Chat app for mobile devices using React Native. The app will provide
          users with a chat interface and options to share images and their
          location.{' '}
        </Card.Text>
        <Button
          variant="warning"
          href="https://github.com/SolidSok/chat-app"
          target="_blank">
          {' '}
          Github Repo
        </Button>
      </Card.Body>
    </Card>
  );
}
