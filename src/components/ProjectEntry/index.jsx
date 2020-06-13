import React, { useContext } from "react";

import { Link } from "gatsby";
import Img from "gatsby-image";

import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

import ThemeContext, { colors } from "../theme-context";

import "./index.scss";

const cardVariants = {};

const titleBarVariants = {
  visible: ({ theme }) => ({
    background: colors["prim-l"][theme],
  }),
  hovered: ({ theme }) => ({
    background: colors["sec-l"][theme],
  }),
};

const titleVariants = {
  visible: ({ theme }) => ({
    // scale: 1,
    color: colors["link"][theme],
    x: 0,
  }),
  hovered: ({ theme }) => ({
    // scale: 1.2,
    color: colors["prim"][theme],
    x: 8,
  }),
};

export default function({
  date,
  path,
  shorttitle,
  keywords,
  featuredImage,
  award,
}) {
  let theme = useContext(ThemeContext);
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
          custom={{ theme }}
          variants={titleBarVariants}
          animate="visible"
          whileHover="hovered"
        >
          <motion.span custom={{ theme }} variants={titleVariants}>
            {shorttitle}
          </motion.span>
        </motion.div>
      </Link>

      <div className="content">
        {(award && (
          <p style={{ color: "var(--accent)", fontSize: 14, fontWeight: 600 }}>
            {" "}
            <FaAward /> {award}
          </p>
        )) ||
          null}
        {(keywords && <h6>{keywords.join(" & ")}</h6>) || null}
        {(featuredImage && (
          <Img fluid={featuredImage.childImageSharp.fluid} />
        )) ||
          null}
        <p style={{ margin: "0.1rem", marginTop: "auto" }}>{date}</p>
      </div>
    </motion.div>
  );
}
