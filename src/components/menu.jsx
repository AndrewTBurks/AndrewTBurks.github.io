import React, {useContext} from 'react';
import { Link } from 'gatsby';

import { IconContext } from 'react-icons';
import { FaHamburger } from 'react-icons/fa';

import { ThemeContext } from './theme-context';

const PAGES = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "Projects",
    link: "/projects"
  },
  {
    title: "Publications",
    link: "/publications"
  },
  {
    title: "Blog",
    link: "/blog"
  }
]

function Menu() {
  let { theme, setTheme } = useContext(ThemeContext);

  return <button className={`menu`} style={{marginLeft: "auto"}}>
    <IconContext.Provider value={{className: `menuIcon`, size: `2em`}}>
      <FaHamburger />
    </IconContext.Provider>
    <div className="menu-options">
      {PAGES.map(({title, link}) => (
        <div className="menu-opt" key={link} >
          <Link style={{margin: "-5px"}} to={link}>{title}</Link>
        </div>
      ))}
      <div className="menu-opt">
        {new Array(2).fill(0).map((d, i) => {
          return <span className={`scheme${i + 1}`} key={i}>
            <span style={{
              border: "2px solid var(--sec)",
              background: "var(--prim)",
              color: "var(--text)",
              padding: "5px",
              margin: "5px",
              fontWeight: theme === i + 1 ? "bold" : "normal"
            }} onClick={() => setTheme(i + 1)}>
              Aa
            </span>
          </span>
        })}
        {/* <span style={{
          border: "1px solid black",
          padding: "5px",
          margin: "5px"
        }} onClick={() => setTheme(2)}>
          2
        </span> */}
        {/* change theme */}
      </div>
      {/* <div className="menu-opt">
        Lol
      </div> */}
    </div>
  </button>
}

export default Menu;