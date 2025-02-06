// imports

import React from 'react';
import { graphql } from 'gatsby';

// components

import Layout from '../components/_layout';
import Seo from '../components/_seo';

// markup

const ProjectPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

// graphql

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`;

export default ProjectPost;
