import React from 'react';
import { graphql } from 'gatsby'

const ProjectPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <main>
      {post.frontmatter.title}
    </main>
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