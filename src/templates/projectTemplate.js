import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { motion } from "framer-motion";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./md.scss";
import "../fontawesome/all.js";
import "../fontawesome/all.css";
import { FaAward, FaCode, FaLink, FaFilePdf } from "react-icons/fa";

const buttonStyle = {
  color: "inherit",
  color: "var(--link)",
  textDecoration: "none",
  fontWeight: 300,
  display: "lnline-flex",
  alignItems: "center",
  whiteSpace: "pre",
  padding: 4,
  // margin: "0 8px",
};

const buttonMap = {
  github: {
    Icon: props => (
      <motion.a href={props.github} target="_blank" style={buttonStyle}>
        <FaCode />
      </motion.a>
    ),
  },
  link: {
    Icon: props => (
      <motion.a href={props.link} target="_blank" style={buttonStyle}>
        <FaLink />
      </motion.a>
    ),
  },
  paper: {
    Icon: props => (
      <motion.a href={props.paper} target="_blank" style={buttonStyle}>
        <FaFilePdf />
      </motion.a>
    ),
  },
};

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data; // data.markdownRemark holds our post data
  const { frontmatter, body } = mdx;

  return (
    <Layout>
      <SEO title={frontmatter.shorttitle} />
      <div className="blog-post-container panel" style={{ padding: 20 }}>
        <div className="blog-post">
          <h1 style={{ color: "var(--text)" }}>{frontmatter.title}</h1>
          <h4 style={{ fontWeight: "lighter" }}>{frontmatter.date}</h4>
          <div
            style={{ fontSize: "1.4rem", color: "var(--text-sec)", padding: 4 }}
          >
            {Object.keys(buttonMap)
              .filter(a => frontmatter[a])
              .map(attr => {
                let { Icon } = buttonMap[attr];

                return <Icon key={attr} {...frontmatter} />;
              })}
          </div>
          <hr />
          {frontmatter.award &&
            ((
              <h3 style={{ color: "var(--accent)", fontWeight: 300 }}>
                <FaAward fontSize={"1.38316rem"} /> {frontmatter.award}
              </h3>
            ) ||
              null)}
          <h4>Abstract:</h4>
          <p
            style={{
              marginLeft: 8,
              paddingLeft: 12,
              borderLeft: "1px solid var(--accent)",
            }}
          >
            {frontmatter.abstract}
          </p>
          {(frontmatter.featuredImage && (
            <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
          )) ||
            null}
          <div className="blog-post-content">
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
      excerpt(pruneLength: 250)
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        shorttitle
        abstract
        award
        link
        github
        paper
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
`;
