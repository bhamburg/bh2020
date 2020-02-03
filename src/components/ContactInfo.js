import React from 'react';

const ContactInfo = () => (
  <ul className="contact">
    <li className="fa-home">
      Philadelphia, PA, USA
    </li>
    <li className="fa-twitter">
      <a href="https://twitter.com/burgbits" target="_blank">twitter.com/burgbits</a>
    </li>
    <li className="fa-instagram">
      <a href="https://www.instagram.com/burgbits" target="_blank">instagram.com/burgbits</a>
    </li>
    <li className="fa-gitlab">
      <a href="https://gitlab.com/bhamburg" target="_blank">gitlab.com/bhamburg</a>
    </li>
    <li className="fa-github">
      <a href="https://github.com/bhamburg" target="_blank">github.com/bhamburg</a>
    </li>
    <li className="fa-envelope">
      <a href="mailto:bhamburg@gmail.com">bhamburg@gmail.com</a>
    </li>
  </ul>
);

export default ContactInfo;
