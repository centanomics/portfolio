// imports

import * as React from 'react';

// components

import Layout from '../components/_layout';
import { Link } from 'gatsby';
import Seo from '../components/_seo';

// markup

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404" description="You got lost huh" />
      <div className="frame page-404">
        <h1>You took a wrong turn huh?</h1>
        <Link to="/">Click here to get back to safety.</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
