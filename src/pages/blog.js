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
        allMdx(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { path: { regex: "//blog/.*/" } } }
        ) {
          edges {
            node {
              id
              excerpt(pruneLength: 250)
              timeToRead
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
      <SEO
        title='Blog'
        description={"Small writeups of projects, ideas, or anything else"}
      />
      <div
        // className="panel"
        style={{
          maxWidth: `100%`,
          marginBottom: `1.45rem`,
        }}
      >
        {data.allMdx.edges.map(edge => (
          <BlogEntry
            {...edge.node.frontmatter}
            timeToRead={edge.node.timeToRead}
            key={edge.node.id}
          />
        ))}
      </div>
    </Layout>
  );
};

export default BlogPage;
