import React from "react"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout"
import Image from "../components/profile-image"
import SEO from "../components/seo"

import PubEntry from "../components/PubEntry"

const PubsPage = () => {
  let { dataJson } = useStaticQuery(
  graphql`
    query {
      dataJson {
        conference {
          award
          teamBefore
          teamAfter
          name
          journal
        }
        journal {
          award
          journal
          name
          teamAfter
          teamBefore
        }
        poster {
          award
          journal
          name
          teamAfter
          teamBefore
        }
      }
    }
  `);

  let {
    conference,
    journal,
    poster
  } = dataJson;

  return <Layout>
    <SEO title="Publications" />
    <div className="panel" style={{
      maxWidth: `100%`,
      marginBottom: `1.45rem`,
      padding: 20
    }}>
      <h3>Conference Papers</h3>
      {conference.map((pub, i) => (
        <PubEntry key={i} {...pub}/>
        // null
      ))}
      <hr />
      <h3>Journal Articles</h3>
      {journal.map((pub, i) => (
        <PubEntry key={i} {...pub} />
        // null
      ))}
      <hr />
      <h3>Short Papers, Posters & Abstracts</h3>
      {poster.map((pub, i) => (
        <PubEntry key={i} {...pub} />
        // null
      ))}

      {/* {data.allMarkdownRemark.edges.map(edge => {
        let { date, path, title } = edge.node.frontmatter;
        return <div key={edge.node.id} style={{margin: "5px"}}>
          <Link key={edge.node.id} to={path}>
            {title}
          </Link>
        </div>
      })} */}
    </div>
  </Layout>
}

export default PubsPage
