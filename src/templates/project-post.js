import React from 'react';
import { graphql } from 'gatsby'

import Layout from '../components/_layout'

const ProjectPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      {post.frontmatter.title}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html,
      frontmatter {
        title
      }
    }
  }
`

export default ProjectPost