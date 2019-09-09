import React, { useState } from 'react';

import { useSpring, animated } from 'react-spring';

import { IconContext } from 'react-icons';

import "./menu.scss";

function Menu({Icon, count, className, createOption, ...props}) {
  let [open, setOpen] = useState(false);

  let buttonStyles = useSpring({
    borderBottomRightRadius: open ? "0px" : "100px",
    borderBottomLeftRadius: open ? "0px" : "100px",
  });

  let optionsStyle = useSpring({
    width: open ? "200px" : "50px",
    height: open ? "200px" : "50px",
    opacity: open ? 1 : 0
  });

  return <animated.button className={`menu ${open ? "open" : ""}`}
    style={{...buttonStyles}}
    onClick={() => setOpen(o => !o)}
  >
    <IconContext.Provider value={{ className: `menuIcon`, size: `1.5em` }}>
      <Icon />
    </IconContext.Provider>
    <animated.div className="menu-options"
      style={{ ...optionsStyle }}
      onClick={(e) => { e.stopPropagation() }}
    >
      {[...Array(count).keys()].map(i => <MenuOption
        key={i}
        angle={i * 2 * Math.PI / count - Math.PI / 2}
        open={open}
        className={className(i)}
      >
        {createOption(i)}
      </MenuOption>)}
    </animated.div>
  </animated.button>
}

function MenuOption({
  angle,
  open, 
  className,
  ...props}) {

  let pos = useSpring({
    left: `${Math.cos(angle) * (open ? 30 : 0) + 50}%`,
    top: `${Math.sin(angle) * (open ? 30 : 0) + 50}%`
  })

  let style = {
    transform: "translate(-50%, -50%)",
    position: "absolute"
  };

  return <animated.div className={`menu-opt ${className}`}
    style={{
    ...style,
    ...pos
  }}>
    {props.children}
  </animated.div>
}

export default Menu;