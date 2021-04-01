// imports

import * as React from 'react';

// components

import Layout from '../components/_layout';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import SEO from '../components/_seo';

// markup

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Intro />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
