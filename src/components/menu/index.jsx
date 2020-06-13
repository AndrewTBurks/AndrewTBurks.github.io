import React, { useState } from "react";

import { motion } from "framer-motion";

import { IconContext } from "react-icons";

import "./menu.scss";

let menuVariants = {
  closed: {
    borderBottomRightRadius: "100px",
    borderBottomLeftRadius: "100px",
    background: "var(--prim)",
    borderBottomColor: "var(--sec)",
  },
  open: {
    borderBottomRightRadius: "0px",
    borderBottomLeftRadius: "0px",
    background: "var(--prim-l)",
    borderBottomColor: "var(--prim-l)",
  },
  hovered: {
    background: "var(--prim-l)",
  },
};

let menuOptionsVariants = {
  closed: {
    width: "50px",
    height: "50px",
    opacity: 0,
  },
  open: {
    width: "200px",
    height: "200px",
    opacity: 1,
  },
  hovered: {},
};

function Menu({ Icon, count, className, createOption, ...props }) {
  let [open, setOpen] = useState(false);

  return (
    <motion.button
      className={`menu ${open ? "open" : ""}`}
      intitial={false}
      animate={open ? "open" : "closed"}
      whileHover="hovered"
      variants={menuVariants}
      onClick={() => setOpen(o => !o)}
    >
      <IconContext.Provider value={{ className: `menuIcon`, size: `1.5em` }}>
        <Icon />
      </IconContext.Provider>
      <motion.div
        className="menu-options"
        variants={menuOptionsVariants}
        onClick={e => {
          e.stopPropagation();
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
