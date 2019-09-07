import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useReducer, useEffect, useContext } from "react";

import { useSpring, animated } from 'react-spring';


import { IconContext } from 'react-icons';
import {
  FaPalette,
  FaSwatchbook,
  FaHamburger,
  FaHome,
  FaScroll,
  FaLaptopCode,
  FaBlog 
} from 'react-icons/fa';

// import Menu from "../menu/menu-old";

import './header.scss';
import RadialMenu from '../menu';

import { ThemeContext } from '../theme-context';


const NUM_SCHEMES = 2;
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

const Header = ({ siteTitle }) => {
  let { theme, setTheme } = useContext(ThemeContext);

  let [hidden, dispatch] = useReducer((prevState, {action}) => {
    if (action === "show") {
      return false;
    } else if (action === "hide") { 
      return true;
    }

    return false;
  }, false);

  useEffect(() => {
    let scrollListener = () => {
      if (window.scrollY < 100) {
        dispatch({action: "show"});
      } else if (window.scrollY > 100) {
        dispatch({action: "hide"});
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  let styles = useSpring({
    opacity: hidden ? 0 : 1
  });
  
  return <animated.header
    style={{
      ...styles,
    }}
    onMouseOver={() => dispatch({action: "show"})}
  >
    <div
      className='header-wrapper'
    >
      <h2 style={{ margin: `1.45rem 1.0875rem`, }}>
        <Link
          to="/"
          style={{
            color: `inherit`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>

      <div style={{marginLeft: "auto"}}/>
      <RadialMenu {...{
        count: 6,
        Icon: FaPalette,
        className: (i) => `scheme${(i % NUM_SCHEMES) + 1}`,
        createOption: (i) => {
          // return <span style={{width: "10px", height: "10px", background: "orange"}}/>
          return <div style={{
            border: "2px solid var(--sec)",
            background: "radial-gradient(var(--prim-d), var(--prim-l))",
            color: "var(--text)",
            borderRadius: "50%",
            padding: "10px  15px",
            // margin: "5px",
            fontWeight: theme === i + 1 ? "bold" : "normal"
          }} onClick={() => setTheme((i % NUM_SCHEMES) + 1)}>
            <IconContext.Provider value={{ className: `menuIcon`, style: { marginTop: "3px" } }}>
              <FaSwatchbook color="var(--sec-d)" />
            </IconContext.Provider>
          </div>
        }
      }}/>

      <RadialMenu {...{
        count: PAGES.length,
        Icon: FaHamburger,
        className: () => ``,
        createOption: (i) => {
          let { title, link, Icon } = PAGES[i];

          // console.log(title, link, Icon);

            return <Link to={link}>
            <div style={{
              border: "2px solid var(--sec)",
              background: "radial-gradient(var(--prim-l), var(--prim-d))",
              color: "var(--text)",
              borderRadius: "50%",
              padding: "10px  15px",
              // margin: "5px",
              fontWeight: theme === i + 1 ? "bold" : "normal"
            }}>

              <IconContext.Provider value={{ className: `menuIcon`, style: { marginTop: "3px" } }}>
                <Icon color="var(--sec-d)" />
              </IconContext.Provider>
            </div>
          </Link>
        }
      }} />
    </div>
  </animated.header>;
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;