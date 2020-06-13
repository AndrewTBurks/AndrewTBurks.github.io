import React, { useState, useContext } from "react";

import { motion } from "framer-motion";

import { IconContext } from "react-icons";

import ThemeContext, { colors } from "../theme-context";

import "./menu.scss";

let menuVariants = {
  closed: ({ theme }) => ({
    borderBottomRightRadius: "100px",
    borderBottomLeftRadius: "100px",
    // background: colors.prim[theme],
    // borderBottomColor: colors.sec[theme],
  }),
  open: ({ theme }) => ({
    borderBottomRightRadius: "0px",
    borderBottomLeftRadius: "0px",
    // background: colors["prim-l"][theme],
    // borderBottomColor: colors["prim-l"][theme],
  }),
  hovered: ({ theme }) => ({
    // background: colors["prim-l"][theme],
  }),
};

let menuOptionsVariants = {
  closed: {
    // width: "50px",
    // height: "50px",
    scale: 0.25,
    opacity: 0,
  },
  open: {
    // width: "200px",
    // height: "200px",
    scale: 1,
    opacity: 1,
  },
  hovered: {},
};

function Menu({ Icon, count, className, createOption, theme, ...props }) {
  let [open, setOpen] = useState(false);
  return (
    <motion.button
      className={`menu ${open ? "open" : ""}`}
      intitial={false}
      animate={open ? "open" : "closed"}
      whileHover="hovered"
      custom={{ theme }}
      variants={menuVariants}
      onClick={() => setOpen(o => !o)}
      onBlur={evt => {
        if (!evt.currentTarget.contains(evt.relatedTarget)) {
          setOpen(false);
        }
      }}
      // tabIndex={-1}
    >
      <IconContext.Provider value={{ className: `menuIcon`, size: `1.5em` }}>
        <Icon />
      </IconContext.Provider>
      <motion.div
        className="menu-options"
        initial="closed"
        variants={menuOptionsVariants}
        onClick={e => {
          e.stopPropagation();
        }}
        style={{
          width: 200,
          height: 200,
        }}
      >
        {[...Array(count).keys()].map(i => (
          <MenuOption
            key={i}
            angle={(i * 2 * Math.PI) / count - Math.PI / 2}
            open={open}
            className={className(i)}
          >
            {createOption(i)}
          </MenuOption>
        ))}
      </motion.div>
    </motion.button>
  );
}

function MenuOption({ angle, open, className, ...props }) {
  let style = {
    transform: "translate(-50%, -50%)",
    position: "absolute",
  };

  return (
    <motion.div
      className={`menu-opt ${className}`}
      initial={false}
      animate={{
        left: `${Math.cos(angle) * (open ? 30 : 0) + 50}%`,
        top: `${Math.sin(angle) * (open ? 30 : 0) + 50}%`,
      }}
      style={{
        ...style,
      }}
    >
      {props.children}
    </motion.div>
  );
}

export default Menu;
