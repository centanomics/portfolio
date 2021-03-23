// imports

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// markup

const Projects = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___index], order: ASC }) {
          edges {
            node {
              frontmatter {
                image
                startDate(formatString: "MMMM YYYY")
                title
                description
                repo
                dark
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  return (
    <section className="frame" id="Projects">
      {data.allMarkdownRemark.edges.map(({ node }, index) => {
        console.log(node.fields.slug)
        return (
          <article key={index} className="project">
            <Link to={node.fields.slug}>
              <div style={{ background: `url(${node.frontmatter.image})` }}>
                hi
              </div>
            </Link>
          </article>
        )
      })}
    </section>
  )
}

export default Projects