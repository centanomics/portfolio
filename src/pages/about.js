// imports

import * as React from 'react';

// components

import Layout from '../components/_layout';
import Seo from '../components/_seo';

// markup

const AboutPage = () => {
  return (
    <Layout>
      <Seo
        title="Portfolio"
        description="Learn more about Centanomics and his interests professionally and personally here."
      />
      About
    </Layout>
  );
};

export default AboutPage;
