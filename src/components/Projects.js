// imports

import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

// markup

const Projects = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(sort: { fields: [frontmatter___index], order: ASC }) {
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
            <a href={node.frontmatter.live} target='_blank' rel='noreferrer'>
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
            </a>
          </article>
        );
      })}
    </section>
  );
};

export default Projects;
