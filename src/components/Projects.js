// imports

import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

// markup

const Projects = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(sort: { frontmatter: { index: ASC } }) {
          edges {
            node {
              frontmatter {
                image
                startDate(formatString: "MMMM YYYY")
                title
                description
                repo
                dark
                live
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  return (
    <section className='frame' id='projects'>
      {data.allMdx.edges.map(({ node }, index) => {
        console.log(node.fields.slug);
        return (
          <article key={index} className='projects'>
            <Link to={node.fields.slug}>
              <div
                style={{ backgroundImage: `url(${node.frontmatter.image})` }}
                className='projectImage'
              >
                <div className={`project ${node.frontmatter.dark} lazy`}>
                  <span>{node.frontmatter.description}</span>
                  <p>{node.frontmatter.title}</p>
                  <span>{node.frontmatter.startDate}</span>
                </div>
              </div>
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default Projects;
