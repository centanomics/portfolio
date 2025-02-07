// imports

import React from 'react';
import { graphql } from 'gatsby';
import MarkdownView from 'react-showdown';

// components

import Layout from '../components/_layout';
import Seo from '../components/_seo';

// markup

const ProjectPost = ({ data }) => {
  const post = data.mdx;
  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <article className='frame'>
        <h1>HI</h1>
        <MarkdownView markdown={post.body} />
      </article>
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
