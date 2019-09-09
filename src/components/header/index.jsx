import { Link, navigateTo } from "gatsby"
import PropTypes from "prop-types"
import React, { useReducer, useEffect, useContext } from "react";

import { useSpring, animated } from 'react-spring';

import { globalHistory } from '@reach/router';

import { IconContext } from 'react-icons';
import {
  FaPalette,
  FaSwatchbook,
  FaHamburger,
  FaHome,
  FaScroll,
  FaLaptopCode,
  FaBlog, 
  FaBriefcase,
  FaAward,
  FaLinkedin,
  FaGithub,
  FaTwitter
} from 'react-icons/fa';

// import Menu from "../menu/menu-old";

import './header.scss';
import RadialMenu from '../menu';

import { ThemeContext } from '../theme-context';


const NUM_SCHEMES = 4;
const PAGES = [
  {
    Icon: FaHome,
    title: "Home",
    link: "/"
  },
  // {
  //   Icon: FaBriefcase,
  //   title: "Experience",
  //   link: "/experience"
  // },
  // {
  //   Icon: FaAward,
  //   title: "Awards",
  //   link: "/awards"
  // },
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
    Icon: FaLinkedin,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/andrew-burks/"
  },
  {
    Icon: FaGithub,
    title: "GitHub",
    link: "https://github.com/AndrewTBurks"
  },
  {
    Icon: FaTwitter,
    title: "Twitter",
    link: "https://twitter.com/AndrewTBurks"
  },
  // {
  //   Icon: FaBlog,
  //   title: "Blog",
  //   link: "/blog"
  // }
];

const Header = ({ siteTitle, location }) => {
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
    onMouseOver={() => dispatch({action: "show"})}
  >
    <div
      className='header-wrapper'
    >
      <animated.div className="hiding"
        style={{
          ...styles,
        }}>
        <div style={{width: "50%"}}>
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
        </div>
      </animated.div>

      <div style={{marginLeft: "auto"}}/>

      <RadialMenu {...{
        count: NUM_SCHEMES,
        Icon: FaPalette,
        className: (i) => `scheme${(i % NUM_SCHEMES) + 1}`,
        createOption: (i) => {
          // return <span style={{width: "10px", height: "10px", background: "orange"}}/>
          return <div className={`radial-button ${theme === ((i % NUM_SCHEMES) + 1) ? "active" : ""}`}
            onClick={() => setTheme((i % NUM_SCHEMES) + 1)}
          >
            <IconContext.Provider value={{ className: `menuIcon`, style: { marginTop: "3px" } }}>
              <FaSwatchbook/>
            </IconContext.Provider>
          </div>
        }
      }}/>

      <div style={{ marginLeft: "5px" }} />

      <RadialMenu {...{
        count: PAGES.length,
        Icon: FaHamburger,
        className: () => ``,
        createOption: (i) => {
          let { title, link, Icon } = PAGES[i];

          // console.log(title, link, Icon);

          let content = <IconContext.Provider value={{
            className: `menuIcon`, style: { marginTop: "3px" }
          }}>
            <Icon />
          </IconContext.Provider>;

          if (link.includes("http")) {
            return <a className={`radial-button ${globalHistory.location.pathname === link ? "active" : ""}`}
              href={link}
              disabled={true}
              target="__blank"
            >
              {content}
            </a>;
          }

          return <div className={`radial-button ${globalHistory.location.pathname === link ? "active" : ""}`}
            onClick={() => navigateTo(link)}
          >
            {content}
          </div>;
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
