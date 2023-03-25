import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';

export default function EorzeanCuisine() {
  return (
    <Card className="text-center">
      {' '}
      <Card.Header>
        <Button
          variant="none"
          href="https://github.com/SolidSok/eorzean-cuisine"
          target="_blank"
          rel="noreferrer">
          <h2 class="project">Eorzean Cuisine</h2>
        </Button>
      </Card.Header>{' '}
      <Card.Body>
        <Card.Img
          className="img cuisine"
          src={require('../img/eorzean-cuisine/eorzeanCuisine.png')}
        />
        <br />
        <Badge bg="info">Restful API</Badge> <Badge bg="info">Axios</Badge>{' '}
        <Badge bg="info">MongoDB</Badge> <Badge bg="info">Express</Badge>{' '}
        <Badge bg="info">React-Router</Badge>
        <Card.Text>
          Web app to simulate a restaurant website. Content includes food and
          locations from critically acclaimed video game, Final Fantasy 14.
          Information is stored on a database hosted on MongoDB. It uses a REST
          API that I created to pull data and display them in the client.{' '}
        </Card.Text>
        <Button
          variant="info"
          href="https://github.com/SolidSok/eorzean-cuisine">
          Github Repo
        </Button>{' '}
        <Button
          variant="warning"
          href="https://eorzean-cuisine-client.herokuapp.com/"
          target="_blank">
          Web Page
        </Button>
      </Card.Body>
    </Card>
  );
}
