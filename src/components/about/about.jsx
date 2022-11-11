import React from 'react';
import './about.css';
import { Image } from 'react-bootstrap';
function About() {
  return (
    <div className="about">
      <div className="profile">
        <Image
          fluid
          roundedCircle={true}
          className="profile__portrait"
          src={require('./me.jpg')}
          alt="A photograph of me"
        />
      </div>
      <div className="bio">
        {' '}
        <h1>Welcome</h1>
        <p>
          Hi, I’m Steven, a web developer with a bachelor’s degree in political
          science and a background in customer service. I made the switch to web
          development in an attempt to broaden my horizons and grow as a person.
          My work history has brought me to many places like the courts, retail
          stores, and even the casino. Each of these experiences have developed
          my ability to think about things from a customer’s perspective, as
          well as remain flexible enough to work as a team or independently. As
          a developer I want to provide a positive user experience by developing
          applications that are effective and easy to understand. I want to grow
          from each of these experiences and constantly face new challenges.
        </p>
      </div>
    </div>
  );
}

export default About;
