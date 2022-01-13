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
      <Seo
        title="Portfolio"
        description="The portfolio for the Full Stack Web Developer known as Shannon Myers - aka Cent"
      />
      <Intro />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
