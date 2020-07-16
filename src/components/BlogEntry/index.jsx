import React from "react";
import { Link } from "gatsby";

import { FaClock } from "react-icons/fa";

import Img from "gatsby-image";
import "./index.scss";

export default function({ date, path, title, featuredImage, timeToRead }) {
  return (
    <div className='blog-entry'>
      <Link to={path}>
        <h3 className='accent-font'>{title}</h3>
      </Link>
      <h4 style={{ fontWeight: 400 }}>
        <FaClock /> {timeToRead} {timeToRead === 1 ? "minute" : "minutes"}
      </h4>
      <h4 style={{ fontWeight: 300 }}>{date}</h4>
      {(featuredImage && (
        <Img
          style={{ borderRadius: 10, overflow: "hidden" }}
          fluid={featuredImage.childImageSharp.fluid}
        />
      )) ||
        null}
    </div>
  );
}
