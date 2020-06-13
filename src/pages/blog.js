import React from "react";
import { Link } from "gatsby";

import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import BlogEntry from "../components/BlogEntry";
import Img from "gatsby-image";
import SEO from "../components/seo";

const BlogPage = () => {
  let data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { fields: { collection: { eq: "blog" } } }
        ) {
          edges {
            node {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 800) {
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

  return (
    <Layout>
      <SEO title="Blog" />
      <div
        className="panel"
        style={{
          maxWidth: `100%`,
          marginBottom: `1.45rem`,
          border: `1px solid black`,
        }}
      >
        {data.allMarkdownRemark.edges.map(edge => (
          <BlogEntry {...edge.node.frontmatter} key={edge.node.id} />
        ))}
      </div>
    </Layout>
  );
};

export default BlogPage;
