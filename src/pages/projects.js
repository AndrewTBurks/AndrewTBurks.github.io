import React from "react"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby";

import { IconContext } from 'react-icons';
import { FaAward, FaLink } from 'react-icons/fa';

import Layout from "../components/layout"
import Image from "../components/profile-image"
import SEO from "../components/seo"

const BlogPage = () => {
  let data = useStaticQuery(
  graphql`
    query MyQuery {
      allProjectsJson {
        nodes {
          abstract
          award
          github
          image
          id
          link
          name
          paper
          team
        }
      }
    }
  `);

  console.log(data);

  return <Layout>
    <SEO title="Blog" />
    <div className="panel" style={{
      maxWidth: `100%`,
      marginBottom: `1.45rem`,
      border: `1px solid black`,
    }}>
      {data.allProjectsJson.nodes.map(proj => {
        return <div style={{margin: "5px"}}>
          <IconContext.Provider value={{color: "var(--sec)", size: "1.25em"}}>
            {proj.award !== "" && <FaAward /> || null}
          </IconContext.Provider>
          <a key={proj.id} href={proj.link}>
            {proj.name}
          </a>
        </div>
      })}
    </div>
  </Layout>
}

export default BlogPage
