import React from "react";
import { Link } from "gatsby";

import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import ProjectEntry from "../components/ProjectEntry";
import Img from "gatsby-image";
import SEO from "../components/seo";

const ProjectsPage = () => {
  let data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { fields: { collection: { eq: "projects" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              timeToRead
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                shorttitle
                keywords
                abstract
                award
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  console.log(data);

  return (
    <Layout>
      <SEO title="Projects" />
      <div
        // className="panel"
        style={{
          maxWidth: `100%`,
          // marginBottom: `1.45rem`,
          // border: `1px solid black`,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
        }}
      >
        {data.allMarkdownRemark.edges.map(edge => (
          <ProjectEntry {...edge.node.frontmatter} key={edge.node.id} />
        ))}
      </div>
    </Layout>
  );
};

export default ProjectsPage;
