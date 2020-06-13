import React from "react";

import { Link } from "gatsby";
import Img from "gatsby-image";

import { motion } from "framer-motion";

import "./index.scss";
import { FaAward } from "react-icons/fa";

const cardVariants = {};

const titleBarVariants = {
  visible: {
    background: "var(--prim-l)",
  },
  hovered: {
    background: "var(--sec-l)",
  },
};

const titleVariants = {
  visible: {
    // scale: 1,
    color: "var(--link)",
    x: 0,
  },
  hovered: {
    // scale: 1.2,
    color: "var(--prim)",
    x: 8,
  },
};

export default function({
  date,
  path,
  shorttitle,
  keywords,
  featuredImage,
  award,
}) {
  return (
    <motion.div
      className="project-entry"
      // variants={cardVariants}
      // initial={false}
      // animate="visible"
      // whileHover="hovered"
    >
      <Link to={path}>
        <motion.div
          className="title"
          initial={false}
          variants={titleBarVariants}
          animate="visible"
          whileHover="hovered"
        >
          <motion.span variants={titleVariants}>{shorttitle}</motion.span>
        </motion.div>
      </Link>

      <div className="content">
        {(award && (
          <p style={{ color: "var(--sec-l)", fontSize: 14, fontWeight: 600 }}>
            {" "}
            <FaAward /> {award}
          </p>
        )) ||
          null}
        {(keywords && <h6>{keywords.join(" & ")}</h6>) || null}
        <p>{date}</p>
        {(featuredImage && (
          <Img fluid={featuredImage.childImageSharp.fluid} />
        )) ||
          null}
      </div>
    </motion.div>
  );
}
