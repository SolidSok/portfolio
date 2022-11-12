import { Card, Row, Col, Container, Badge, Image } from 'react-bootstrap';
import MyFlixCaseStudy from '../caseStudies/myFlixCaseStudy';

export default function MyFlixReact() {
  return (
    <div className="project-body">
      {' '}
      <Card.Body>
        <Card.Header>
          <a
            href="https://sokflix.netlify.app"
            target="_blank"
            rel="noreferrer">
            <h2 class="project">myFlix Web App</h2>
          </a>
        </Card.Header>{' '}
        <Card.Img
          className="project-img"
          src={require('../img/myFlix/main.png')}
        />
        <Card.Text>
          <Row className="badges">
            <h1>
              <Badge bg="info">React</Badge> <Badge bg="info">Parcel</Badge>{' '}
              <Badge bg="info">React-Bootstrap</Badge>{' '}
              <Badge bg="info">Axios</Badge>{' '}
              <Badge bg="info">React-Router</Badge>{' '}
              <Badge bg="info">React-Redux</Badge>{' '}
            </h1>
          </Row>
          <p class="project-text">
            This client-side application uses an API to pull data from a
            database about movies and displays them in an easy to view card
            format. It was created in React. Most of its styling comes from
            react-bootstrap. Both the front-end and back-end for this
            application were created from scratch by me.
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
  );
}
