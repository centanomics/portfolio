// imports

import * as React from 'react';

//components

import Seo from '../components/_seo';
import Layout from '../components/_layout';
import Intro from '../components/Intro';
import Projects from '../components/Projects';

const IndexPage = () => {
  return (
    <Layout>
      <Intro />
      <Projects />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <Seo
    title='Portfolio'
    description='The portfolio for the Full Stack Web Developer known as Shannon "Cent" Myers.'
  />
);
