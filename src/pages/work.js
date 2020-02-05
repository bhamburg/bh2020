import React from 'react';
import { Link } from "gatsby";
import Img from 'gatsby-image';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import Wrapper from '../components/Wrapper';
import FeaturedItems from '../components/FeaturedItems';
import SpecialLink from '../components/SpecialLink';

const Generic = ({ data }) => (
  <PageWrapper>
    <Header>
      <h2>
        Work
      </h2>
      <p>Portfolio of development and design projects</p>
    </Header>

    <Wrapper>
      <h3 className="major">Building websites and applications for human beings</h3>
      <p>
        I'm passionate about not only keeping up with the latest advances 
        in technology, but more importantly, applying that technology to 
        accessible and useable solutions. As someone who worked in a  
        technical support help desk during the dark ages of Internet Explorer-only web 
        applications, I appreciate the importance of cross-browser, cross-platform 
        compatibility, as well as building in affordances for users of all abilities.
      </p>

      <FeaturedItems>
        <article>
          <a href="#" className="image">
            <Img sizes={data.pic04.childImageSharp.sizes}/>
          </a>
          <h3 className="major">Sed feugiat lorem</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla
            dignissim dapibus ultrices.
          </p>
          <SpecialLink>
            Learn more
          </SpecialLink>
        </article>
        <article>
          <a href="#" className="image">
            <Img sizes={data.pic05.childImageSharp.sizes}/>
          </a>
          <h3 className="major">Nisl placerat</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla
            dignissim dapibus ultrices.
          </p>
          <SpecialLink>
            Learn more
          </SpecialLink>
        </article>
      </FeaturedItems>

      <h3 className="major">Work History</h3>
      <p>
        I'm passionate about not only keeping up with the latest advances 
        in technology, but more importantly, applying that technology to 
        accessible and useable solutions. As someone who worked in a  
        technical support help desk during the dark ages of Internet Explorer-only web 
        applications, I appreciate the importance of cross-browser, cross-platform 
        compatibility, as well as building in affordances for users of all abilities.
      </p>

      <h3 className="major">Education</h3>
      <p>
        I'm passionate about not only keeping up with the latest advances 
        in technology, but more importantly, applying that technology to 
        accessible and useable solutions. As someone who worked in a  
        technical support help desk during the dark ages of Internet Explorer-only web 
        applications, I appreciate the importance of cross-browser, cross-platform 
        compatibility, as well as building in affordances for users of all abilities.
      </p>

      <button className="button large fit icon fa-download">Download My R&eacute;sum&eacute;</button>

    </Wrapper>
  </PageWrapper>
);

export default Generic;
