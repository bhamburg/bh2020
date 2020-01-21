import React, { Component } from 'react';

const Banner = React.forwardRef(({ siteTitle }, ref) => (
  <section ref={ref} id="banner">
    <div className="inner">
      <h2><a href="/" class="logo"><span>bh</span></a> {siteTitle}</h2>
      <p>
        Web Developer and Plectrum Banjoist in Philadelphia
      </p>
    </div>
  </section>
));

export default Banner;
