//imports

import * as React from 'react';

//components

import Seo from '../components/_seo';
import Layout from '../components/_layout';

//markup

const AboutPage = () => {
  return <Layout>About</Layout>;
};

export default AboutPage;

export const Head = () => (
  <Seo title='About' description='The about page for Cent' />
);
