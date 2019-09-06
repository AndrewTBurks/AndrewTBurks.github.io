import React from "react"
import { Link } from "gatsby"

import { loremIpsum } from 'lorem-ipsum';

import Layout from "../components/layout"
import Image from "../components/profile-image"
import SEO from "../components/seo"

const IndexPage = () => (
  

  <Layout>
    <SEO title="Home" />
    <div className="panel" style={{
      maxWidth: `100%`,
      marginBottom: `1.45rem`,
      display: 'flex',
      alignItems: `flex-start`,
      flexFlow: `row wrap`
    }}>
      <div style={{
        flex: `1 0 300px`
      }}>
        <Image />
      </div>
      <div style={{
        margin: `20px`,
        flex: `1 0 300px`,
        maxWidth: "300px"
      }}>
        <p>
          I am a Ph.D. Computer Science student at the University of Illinois at Chicago. I am currently a Research Assistant at the Electronic Visualization Laboratory at UIC. I have experience working on research projects related to data visualization and the development of collaborative software for large/tiled displays.
        </p>
        <p>
          My current research interests are Collaborative Visualization and Data Exploration.
        </p>
        <p>
          {loremIpsum({count: 10})}
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
