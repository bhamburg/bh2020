import React, { Component } from 'react';
import TypedHero from '../components/TypedHero'

const Banner = React.forwardRef(({ siteTitle }, ref) => (
  <section ref={ref} id="banner">
    <div className="inner">
      <h2>
        <TypedHero
          isHomepage={true} 
          strings={[
            'Brian Hamburg'
          ]} 
        />
      </h2>
      <p>
        Web Developer, Designer, and Musician in Philadelphia
      </p>
    </div>
  </section>
));

export default Banner;
