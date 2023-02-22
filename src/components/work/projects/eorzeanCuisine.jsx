import React from 'react';
import { Card, Row, Badge } from 'react-bootstrap';

export default function EorzeanCuisine() {
  return (
    <div className="project-body">
      {' '}
      <Card.Body>
        <Card.Header>
          <a
            href="https://github.com/SolidSok/eorzean-cuisine"
            target="_blank"
            rel="noreferrer">
            <h2 class="project">Eorzean Cuisine</h2>
          </a>
        </Card.Header>{' '}
        <Card.Img
          className="img cuisine"
          src={require('../img/eorzean-cuisine/eorzeanCuisine.png')}
        />
        <Row className="badges">
          {' '}
          <h1>
            <Badge bg="info">Restful API</Badge> <Badge bg="info">Axios</Badge>{' '}
            <Badge bg="info">MongoDB</Badge> <Badge bg="info">Express</Badge>
          </h1>
        </Row>
        <Card.Text>
          <h3 class="work-description">Description:</h3>
          <p class="project-text">
            Web app to simulate a restaurant website. Content includes food and
            locations from critically acclaimed video game, Final Fantasy 14.
            Information is stored on a database hosted on MongoDB. It uses a
            REST API that I created to pull data and display them in the client.
          </p>
          <h2>
            {' '}
            <Badge>
              {' '}
              <a
                className="a-link"
                href="https://github.com/SolidSok/eorzean-cuisine">
                Github Repo
              </a>
            </Badge>
            <Badge>
              <a
                className="a-link"
                href="https://eorzean-cuisine-client.herokuapp.com/"
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
