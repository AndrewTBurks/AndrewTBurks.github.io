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
        allMdx(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { path: { regex: "//projects/.*/" } } }
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
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gridAutoRows: "1fr",
          // gridAutoColumns: "minmax(250px, 1fr)",
          gridGap: "0.8rem",
          justifyContent: "center",
          padding: 10,
        }}
      >
        {data.allMdx.edges.map(edge => (
          <ProjectEntry {...edge.node.frontmatter} key={edge.node.id} />
        ))}
      </div>
    </Layout>
  );
};

export default ProjectsPage;
