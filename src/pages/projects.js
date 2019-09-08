import React from "react"
import { Link } from "gatsby"

import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby";

import { IconContext } from 'react-icons';
import { FaAward, FaLink, FaScroll, } from 'react-icons/fa';

import useImageList from "../components/useImageList"

import Layout from "../components/layout"
import Card from "../components/ProjectCard"
import SEO from "../components/seo"

const ProjectsPage = () => {
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
          shortname
          name
          paper
          team
        }
      }
    }
  `);

  let {images} = useImageList();

  // let data = [];

  return <Layout>
    <SEO title="Projects" />
    <div style={{
      maxWidth: `100%`,
      marginBottom: `1.45rem`,
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "flex-start"
    }}>
      {data.allProjectsJson.nodes.map(proj => {
        let {node} = images.edges.find(({
          node
        }) => node.relativePath === proj.image);

        return <Card 
          key={proj.id} 
          {...proj}
          Image={
            <Img fluid={node.childImageSharp.fluid}/>
          }
        />
      })}
      
      {/* {data.allProjectsJson.nodes.map(proj => {
        return <div style={{margin: "5px"}} key={proj.id} >
          <IconContext.Provider value={{color: "var(--sec)", size: "1.25em"}}>
            {proj.award !== "" && <FaAward /> || null}
          </IconContext.Provider>
          <a href={proj.link}>
            {proj.name}
          </a>
        </div>
      })} */}
    </div>
  </Layout>
}

export default ProjectsPage
