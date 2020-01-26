import React from 'react';

import Copyright from './Copyright';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Footer = () => (
  <section id="contact">
    <div className="inner">
      <h2 className="major">Hit me up</h2>
      <p>
        I am available for freelance web development and design projects as well as traditional jazz banjo engagements.
      </p>
      <ContactForm />
      <ContactInfo />
      <Copyright />
    </div>
  </section>
);

export default Footer;
