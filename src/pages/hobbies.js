import React from 'react';
import { Link } from "gatsby";
import Img from 'gatsby-image';

import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import Wrapper from '../components/Wrapper';
import FeaturedItems from '../components/FeaturedItems';
import SpecialLink from '../components/SpecialLink';
import Goodreads from '../components/Goodreads';

const Generic = ({ data }) => (
  <PageWrapper>
    <Header>
      <h2>Hobbies</h2>
      <p>Always striving to improve my skills and expand my mind</p>
    </Header>

    <Wrapper>
      <Goodreads />
    </Wrapper>
  </PageWrapper>
);

export default Generic;
