import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./md.scss";
import "../fontawesome/all.js";
import "../fontawesome/all.css";
import { FaAward, FaCode, FaLink, FaFilePdf } from "react-icons/fa";

const buttonMap = {
  github: {
    Icon: props => (
      <a href={props.github} target="_blank" style={{ color: "inherit" }}>
        <FaCode />
      </a>
    ),
  },
  link: {
    Icon: props => (
      <a href={props.link} target="_blank" style={{ color: "inherit" }}>
        <FaLink />
      </a>
    ),
  },
  paper: {
    Icon: props => (
      <a href={props.paper} target="_blank" style={{ color: "inherit" }}>
        <FaFilePdf />
      </a>
    ),
  },
};

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.shorttitle} />
      <div className="blog-post-container panel" style={{ padding: 20 }}>
        <div className="blog-post">
          <h1 style={{ color: "var(--text)" }}>{frontmatter.title}</h1>
          {frontmatter.award &&
            ((
              <h3 style={{ color: "var(--sec)" }}>
                <FaAward /> {frontmatter.award}
              </h3>
            ) ||
              null)}
          <h4 style={{ fontWeight: "lighter" }}>{frontmatter.date}</h4>
          <div style={{ color: "var(--link)", fontSize: "1.6rem" }}>
            {Object.keys(buttonMap)
              .filter(a => frontmatter[a])
              .map(attr => {
                let { Icon } = buttonMap[attr];

                return (
                  // <div className="info-button" onClick={onClick} key={attr}>
                  <Icon {...frontmatter} />
                  // </div>
                );
              })}
          </div>
          <hr />
          <h4>Abstract:</h4>
          <p>{frontmatter.abstract}</p>
          {(frontmatter.featuredImage && (
            <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
          )) ||
            null}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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
