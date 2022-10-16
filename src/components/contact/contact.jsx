import React from 'react';
import './contact.css';
export default function Contact() {
  return (
    <div className="contact">
      <h1 id="contact">Contact Me:</h1>
      <address>
        You can find me at:
        <br />
        <b>LinkedIn</b>:{' '}
        <a
          href="https://www.linkedin.com/in/steven-sok-bb2341201/"
          rel="noreferrer"
          target="_blank">
          Steven Sok
        </a>
        <br />
        <b>Twitter</b>:{' '}
        <a href="https://twitter.com/solidsok" target="_blank" rel="noreferrer">
          @SolidSok{' '}
        </a>
        <br />
        <b>GitHub</b>:{' '}
        <a href="https://github.com/SolidSok" target="_blank" rel="noreferrer">
          SolidSok
        </a>
        <br />
        <b>Email:</b> <a href="mailto:sokidsok@gmail.com">Solidsok@gmail.com</a>
      </address>
    </div>
  );
}
