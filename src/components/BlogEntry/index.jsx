import React from "react"
import { Link } from "gatsby"

import Img from "gatsby-image"
import "./index.scss"

export default function({ date, path, title, featuredImage }) {
  return (
    <div className="blog-entry">
      <Link to={path}>
        <h3>{title}</h3>
      </Link>
      <h4>{date}</h4>
      {(featuredImage && (
        <Img fluid={featuredImage?.childImageSharp.fluid} />
      )) ||
        null}
    </div>
  )
}
