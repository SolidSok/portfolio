import React from 'react';
import { Badge, Card, Button } from 'react-bootstrap';

export default function ProjectCard({ project }) {
  return (
    <Card>
      <Card.Header>
        <h2 className="project">{project.name}</h2>
      </Card.Header>
      {project.images.map(image => {
        return <Card.Img className="img" src={image} />;
      })}
      {console.log(project.images)}
      <br />
      <Card.Body>
        {project.badges.map(badge => {
          return <Badge bg="info">{badge}</Badge>;
        })}
        <Card.Text className="project-text">{project.description}</Card.Text>
        <Button variant="info" href={project.github} target="_blank">
          Github Repo
        </Button>
        <Button variant="warning" href={project.webPage} target="_blank">
          Web Page
        </Button>
      </Card.Body>
    </Card>
  );
}
