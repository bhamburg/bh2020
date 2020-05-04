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
      <h2>About This Site</h2>
      <p>Tools and processes used to build this site and others</p>
    </Header>

    <Wrapper>
      About this site.
    </Wrapper>
  </PageWrapper>
);

export default Generic;
