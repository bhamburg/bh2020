import React from 'react';
import { Link } from "gatsby";

import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import Wrapper from '../components/Wrapper';
import SpecialLink from '../components/SpecialLink';

const NotFoundPage = ({ data }) => (
  <PageWrapper>
    <Header>
      <h2>Page Not Found</h2>
      <p>Not all who wander are lost, but you appear to be</p>
    </Header>
    <Wrapper>
      <Link to="/" className="button large fit primary icon fa-home">
        Go to homepage
      </Link>
    </Wrapper>
  </PageWrapper>
);

export default NotFoundPage;
