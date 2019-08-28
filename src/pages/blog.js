import React from "react"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout"
import Image from "../components/profile-image"
import SEO from "../components/seo"

const BlogPage = () => {
  let data = useStaticQuery(
  graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
            }
          }
        }
      }
    }
  `);

  return <Layout>
    <SEO title="Blog" />
    <div className="panel" style={{
      maxWidth: `100%`,
      marginBottom: `1.45rem`,
      border: `1px solid black`,
    }}>
      {data.allMarkdownRemark.edges.map(edge => {
        let { date, path, title } = edge.node.frontmatter;
        return <div key={edge.node.id} style={{margin: "5px"}}>
          <Link key={edge.node.id} to={path}>
            {title}
          </Link>
        </div>
      })}
    </div>
  </Layout>
}

export default BlogPage
