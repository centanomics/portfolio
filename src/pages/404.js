// imports

import * as React from 'react';

// components

import Layout from '../components/_layout';
import { Link } from 'gatsby';
import SEO from '../components/_seo';

// markup

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404" description="You got lost huh" />
      <h1>You took a wrong turn huh?</h1>
      <Link to="/">Get back to safety.</Link>
    </Layout>
  );
};

export default NotFoundPage;
