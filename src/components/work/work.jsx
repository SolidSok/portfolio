import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './work.css';
import projectData from './projects/projectData';
import MyFlixReact from './projects/myFlixReact';
import { ChatApp } from './projects/chatApp';
import EorzeanCuisine from './projects/eorzeanCuisine';
import EngageBuilder from './projects/engageBuilder';
import ProjectCard from './projects/projectCard';
export default function Work() {
  const chatApp = projectData[0];
  console.log(projectData[0]);
  return (
    <Container className="work-container" fluid="md">
      <Row>
        <Col lg={6}>
          <EngageBuilder />
        </Col>
        <Col lg={6}>
          <EorzeanCuisine />
        </Col>
        <Col lg={6}>
          <MyFlixReact />
        </Col>
        <Col lg={6}>
          <ProjectCard project={chatApp} />
        </Col>
      </Row>
    </Container>
  );
}
