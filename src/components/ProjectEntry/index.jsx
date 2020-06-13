import React from "react";
import { Link } from "gatsby";

import Img from "gatsby-image";
import "./index.scss";

export default function({ date, path, shorttitle, keywords, featuredImage }) {
  return (
    <div className="project-entry">
      <Link to={path}>
        <h4>{shorttitle}</h4>
      </Link>
      {(keywords && <h6>{keywords.join(" & ")}</h6>) || null}
      <p>{date}</p>
      {(featuredImage && <Img fluid={featuredImage.childImageSharp.fluid} />) ||
        null}
    </div>
  );
}
