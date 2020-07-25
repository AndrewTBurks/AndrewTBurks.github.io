import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./md.scss";
import "../fontawesome/all.js";
import "../fontawesome/all.css";
import { FaHome, FaHandPointLeft } from "react-icons/fa";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data; // data.markdownRemark holds our post data
  const { frontmatter, body } = mdx;

  console.log(frontmatter, body);

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        imageurl={frontmatter.featuredImage.publicURL}
        description={"Blog post by Andrew Burks"}
      />
      <div className='blog-post-container panel' style={{ padding: 20 }}>
        <div className='blog-post'>
          <div style={{ padding: "8px 0" }}>
            <Link to='/' style={{ marginRight: 8 }}>
              <FaHome /> Home
            </Link>{" "}
            <Link to='/blog' style={{ marginRight: 8 }}>
              {" "}
              <FaHandPointLeft /> Blog
            </Link>
          </div>
          <h1 style={{ color: "var(--text)" }}>{frontmatter.title}</h1>
          <h4 style={{ fontWeight: "lighter" }}>{frontmatter.date}</h4>
          <hr />
          {/* <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          /> */}

          <div className='blog-post-content'>
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featuredImage {
          publicURL
        }
      }
    }
  }
`;
