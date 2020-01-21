import React, { Component } from 'react';

const Banner = React.forwardRef(({ siteTitle }, ref) => (
  <section ref={ref} id="banner">
    <div className="inner">
      <div className="logo">
        <span className="icon fa-envelope" />
      </div>
      <h2>{siteTitle}</h2>
      <p>
        Based upon the free + fully responsive site template by {' '}
        <a href="http://html5up.net">HTML5 UP</a>
      </p>
    </div>
  </section>
));

export default Banner;
