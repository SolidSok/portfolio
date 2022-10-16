import React from 'react';
import './about.css';
import { Image } from 'react-bootstrap';
function About() {
  return (
    <div className="about">
      <div class="profile">
        <Image
          className="image"
          fluid
          roundedCircle={true}
          class="profile__portrait"
          src={require('./me.jpg')}
          alt="A photograph of me"
        />
      </div>
      <h1 id="about">Welcome</h1>
      <p>
        I am a student at the Career Foundry Web Development Bootcamp. <br />
        I have a B.A. in Political Science from CSU San Marcos, and an IT
        Support certification from Google.
        <br />
      </p>
      <p> I enjoy programming, gaming, and anime.</p>
    </div>
  );
}

export default About;
