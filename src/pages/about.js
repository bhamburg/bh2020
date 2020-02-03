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
      <h2>About Brian</h2>
      <p>Nerdy kid from the Philly burbs grew up to embrace his nerdiness</p>
    </Header>

    <Wrapper>
      About
    </Wrapper>
  </PageWrapper>
);

export default Generic;
