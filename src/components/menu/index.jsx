import React, { useContext } from 'react';
import { Link } from 'gatsby';

import { IconContext } from 'react-icons';

import { ThemeContext } from '../theme-context';

import "./menu.scss";

function Menu({Icon, count, className, createOption}) {
  return <button className={`menu`}>
    <IconContext.Provider value={{ className: `menuIcon`, size: `1.5em` }}>
      <Icon />
    </IconContext.Provider>
    <div className="menu-options">
      {new Array(count).fill(0).map((d, i) => {
        let angle = i * 2 * Math.PI / count - Math.PI / 2;

        let pos = {
          left: `calc(${Math.cos(angle) * 33 + 50}% - 5px)`,
          top: `calc(${Math.sin(angle) * 33 + 50}% - 5px)`,
          transform: "translate(-50%, -50%)",
          position: "absolute"
        };

        return <div className={`menu-opt ${className(i)}`} key={i} style={pos}>
          {createOption(i)}
          {/* <span style={{ width: "10px", height: "10px", background: "orange" }} /> */}
        </div>
      })}
    </div>
  </button>
}

export default Menu;