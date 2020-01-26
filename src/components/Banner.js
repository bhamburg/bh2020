import React, { Component } from 'react';

const Banner = React.forwardRef(({ siteTitle }, ref) => (
  <section ref={ref} id="banner">
    <div className="inner">
      <h2><a href="/" className="logo"><span>bh</span></a> {siteTitle}</h2>
      <p>
        Web Developer, Designer, and Musician in Philadelphia
      </p>
    </div>
  </section>
));

export default Banner;
