import React, { useContext } from "react";

import { Link } from "gatsby";
import Img from "gatsby-image";

import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

import ThemeContext, { colors } from "../theme-context";

import "./index.scss";

const cardVariants = {};

const titleBarVariants = {
  visible: {
    background: "var(--link)",
  },
  hovered: {
    background: "var(--accent)",
  },
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
    <Link
      to={path}
      className="project-entry"
      style={{
        textDecoration: "none",
        placeItems: "stretch",
      }}
    >
      <motion.div
        // className="project-entry"
        // variants={cardVariants}
        // initial={false}
        animate="visible"
        whileHover="hovered"
        style={{
          height: "100%",
          display: "flex",
          flexFlow: "column",
        }}
      >
        <motion.div
          className="title"
          initial={false}
          variants={titleBarVariants}
          // animate="visible"
          // whileHover="hovered"
        >
          <motion.span custom={{ theme }} variants={titleVariants}>
            {shorttitle}
          </motion.span>
        </motion.div>

        <div className="content">
          {(featuredImage && (
            <Img fluid={featuredImage.childImageSharp.fluid} />
          )) ||
            null}
          {(award && (
            <p
              style={{
                color: "var(--accent)",
                fontSize: 14,
                fontWeight: 600,
                marginBottom: "0.2rem",
              }}
            >
              <FaAward /> {award}
            </p>
          )) ||
            null}
          {(keywords && (
            <div
              style={{
                fontSize: 14,
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "stretch",
                marginBottom: "0.8rem",
                flexShrink: 0,
              }}
            >
              {keywords.map(k => (
                <span
                  style={{
                    border: "1px solid var(--link)",
                    color: "var(--link)",
                    whiteSpace: "pre",
                    margin: 2,
                    padding: "0px 12px",
                    borderRadius: 100,
                    display: "inline-flex",
                    alignItems: "center",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                >
                  {k}
                </span>
              ))}
            </div>
          )) ||
            null}
          <p
            style={{
              padding: "0.1rem",
              margin: "auto 0 0 0",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            {date}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}