import React, { useContext } from 'react';
import { Link } from 'gatsby';

import { IconContext } from 'react-icons';
import { FaPalette, FaSwatchbook } from 'react-icons/fa';

import { ThemeContext } from './theme-context';

const NUM_SCHEMES = 2;
const NUM_ENTRIES = 6;

function ThemeMenu() {
  let { theme, setTheme } = useContext(ThemeContext);

  return <button className={`menu`}>
    <IconContext.Provider value={{ className: `menuIcon`, size: `1.5em` }}>
      <FaPalette />
    </IconContext.Provider>
    <div className="menu-options">
      {new Array(NUM_ENTRIES).fill(0).map((d, i) => {
        let angle = i * 2 * Math.PI / NUM_ENTRIES;

        let pos = {
          left: `calc(${Math.cos(angle) * 30 + 50}% - 5px)`,
          top: `calc(${Math.sin(angle) * 30 + 50}% - 5px)`,
          transform: "translate(-50%, -50%)",
          position: "absolute"
        };

        return <div className={`menu-opt scheme${(i % NUM_SCHEMES) + 1}`} key={i} style={pos}>
          <div style={{
            border: "2px solid var(--sec)",
            background: "radial-gradient(var(--prim-d), var(--prim-l))",
            color: "var(--text)",
            borderRadius: "50%",
            padding: "5px  10px",
            // margin: "5px",
            fontWeight: theme === i + 1 ? "bold" : "normal"
          }} onClick={() => setTheme((i % NUM_SCHEMES) + 1)}>
            <IconContext.Provider value={{ className: `menuIcon`, style: {marginTop: "3px"}}}>
              <FaSwatchbook color="var(--sec-d)"/>
            </IconContext.Provider>
          </div>
        </div>
      })}
    </div>
  </button>
}

export default ThemeMenu;