// imports

import React from 'react';
import { graphql } from 'gatsby';

// components

import Layout from '../components/_layout';
import SEO from '../components/_seo';

// markup

const ProjectPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

// graphql

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default ProjectPost;
