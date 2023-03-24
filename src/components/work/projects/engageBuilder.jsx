import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';

export default function EngageBuilder() {
  return (
    <Card className="text-center">
      {' '}
      <Card.Header>
        {' '}
        <Button
          variant="none"
          href="https://github.com/SolidSok/fe-engage"
          target="_blank"
          rel="noreferrer">
          <h2 class="project">Engage Builder</h2>
        </Button>
      </Card.Header>{' '}
      <Card.Body>
        <Card.Img
          className="img cuisine"
          src={require('../img/engage-builder/1.png')}
        />{' '}
        <Card.Img
          className="img cuisine"
          src={require('../img/engage-builder/2.png')}
        />{' '}
        <br />
        <Badge bg="info">React</Badge> <Badge bg="info">BootStrap</Badge>{' '}
        <Badge bg="info">Functional Programming</Badge>
        <Card.Text>
          <p class="project-text">
            Engage Builder is an application based on the video game, Fire
            Emblem Engage. Users can select characters, classes, and other data
            to see what that unit will be like with those parameters. My goal
            with this project was to create an easy to view display of potential
            growths and limits all in one spot.
          </p>
          <h2>
            {' '}
            <Button
              variant="info"
              href="https://github.com/SolidSok/fe-engage"
              target="_blank">
              Github Repo
            </Button>
            <Button
              variant="warning"
              href="https://engagebuilder.netlify.app"
              target="_blank">
              Web Page
            </Button>
          </h2>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
