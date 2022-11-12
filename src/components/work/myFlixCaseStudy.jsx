import { Accordion, Container, Image, Row } from 'react-bootstrap';

export default function MyFlixCaseStudy() {
  return (
    <Container fluid>
      {' '}
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Case Study</Accordion.Header>

          <Accordion.Body className="project-text ">
            <h1>Case Study myFlix</h1>
            <Image
              className="case-study-img"
              src={require('./img/myFlix/myFlix-card.png')}
            />
            <Image
              className="update-user-img"
              src={require('./img/myFlix/myFlix-update-info.png')}
            />
            <h2>Overview</h2>
            <p>
              myFlix is a web app built in React. It pulls data from a custom
              built API to present information about movies, directors, and
              genres. Users are able to create accounts, update their user
              information, and edit their list of favorite movies.
            </p>
            <h2>Purpose and Objective</h2>
            <p>
              myFlix is a personal project built during my time at
              CareerFoundry. It demonstrates essential CRUD operations by
              fetching, updating, and deleting data from a database created
              using mongoDB.
            </p>
            <h2>Tech Stack</h2>
            <p>This project uses both frontend and backend development.</p>
            <h3>Backend</h3>
            <p>
              The backend consists of a database using mongoDB, and a RESTful
              API for endpoint routing. Endpoints were tested using the Postman
              application.
            </p>
            <h3>Frontend</h3>
            <p>
              The frontend uses 2 clients, one made in React and the other in
              Angular. They both function the same for CRUD operations. They
              just have different visual presentations. The React client uses
              React-Bootstrap for its css framework, and the Angular version
              uses Material-Design.
            </p>

            <h2>The Dev Process</h2>
            <p>
              This project was my introduction to React. It took a while for me
              to understand concepts like transferring props between components.
              As I spent more time with it, I appreciated how much easier it is
              to create an application when using a framework. Components in
              particular make organizing content far easier, especially since
              they can be reused. Having already made the React client, it only
              took a few days to learn Angular and produce a client application
              in it.
            </p>

            <h2>Conclusion</h2>
            <p></p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
