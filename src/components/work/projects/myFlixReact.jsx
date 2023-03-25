import { Card, Badge, Button } from 'react-bootstrap';
import MyFlixCaseStudy from '../caseStudies/myFlixCaseStudy';

export default function MyFlixReact() {
  return (
    <Card className="text-center">
      {' '}
      <Card.Header>
        <Button
          className="project-header"
          variant="none"
          href="https://sokflix.netlify.app"
          target="_blank"
          rel="noreferrer">
          myFlix Web App
        </Button>
      </Card.Header>{' '}
      <Card.Body>
        <Card.Img
          className="project-img"
          src={require('../img/myFlix/main.png')}
        />
        <br />
        <Badge bg="info">React</Badge> <Badge bg="info">Parcel</Badge>{' '}
        <Badge bg="info">React-Bootstrap</Badge> <Badge bg="info">Axios</Badge>{' '}
        <Badge bg="info">React-Router</Badge>{' '}
        <Badge bg="info">React-Redux</Badge>{' '}
        <Card.Text>
          This client-side application uses an API to pull data from a database
          about movies and displays them in an easy to view card format. It was
          created in React. Most of its styling comes from react-bootstrap. Both
          the front-end and back-end for this application were created from
          scratch by me.
        </Card.Text>
        <Button
          variant="info"
          href="https://github.com/SolidSok/myFlix-client"
          target="_blank">
          {' '}
          Github Repo
        </Button>{' '}
        <Button
          variant="warning"
          href="https://sokflix.netlify.app"
          target="_blank">
          Web Page
        </Button>
        <MyFlixCaseStudy />
      </Card.Body>
    </Card>
  );
}
