import React, {useContext} from 'react';
import { Link } from 'gatsby';

import { IconContext } from 'react-icons';
import { 
  FaHamburger,
  FaHome,
  FaScroll,
  FaLaptopCode,
  FaBlog
} from 'react-icons/fa';

import { ThemeContext } from '../theme-context';

import "./menu.scss";

const PAGES = [
  {
    Icon: FaHome,
    title: "Home",
    link: "/"
  },
  {
    Icon: FaLaptopCode,
    title: "Projects",
    link: "/projects"
  },
  {
    Icon: FaScroll,
    title: "Publications",
    link: "/publications"
  },
  {
    Icon: FaBlog,
    title: "Blog",
    link: "/blog"
  }
];

function Menu() {
  let { theme, setTheme } = useContext(ThemeContext);

  return <button className={`menu`}>
    <IconContext.Provider value={{className: `menuIcon`, size: `1.5em`}}>
      <FaHamburger />
    </IconContext.Provider>
    <div className="menu-options-2">

    </div>
    <div className="menu-options">
      {PAGES.map(({title, link, Icon}) => {
        return <div className="menu-opt" key={link} >
          <IconContext.Provider value={{ className: `menuIcon` }}>
            <Icon/>
          </IconContext.Provider>
          <Link style={{margin: "5px"}} to={link}>{title}</Link>
        </div>;
      })}
    </div>
  </button>
}

export default Menu;