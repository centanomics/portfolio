// imports

import * as React from 'react';

// components

import Layout from '../components/_layout';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Seo from '../components/_seo';

// markup

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Portfolio" />
      <Intro />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
