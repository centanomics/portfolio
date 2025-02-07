//imports

import * as React from 'react';

//components

import Seo from '../components/_seo';
import Layout from '../components/_layout';

//markup

const BlogPage = () => {
  return <Layout>Blog</Layout>;
};

export default BlogPage;

export const Head = () => (
  <Seo title='Blog' description='The blog page for Cent' />
);
