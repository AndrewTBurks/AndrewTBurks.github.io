import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useReducer, useEffect } from "react";

import { useSpring, animated } from 'react-spring';

import Menu from "./menu";
import './header.scss';
import ThemeMenu from './themes';

const Header = ({ siteTitle }) => {
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
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1,
      background: `var(--prim)`,
      borderBottom: `4px solid var(--sec-d)`,
      marginBottom: `1.45rem`,
    }}
    onMouseOver={() => dispatch({action: "show"})}
  >
    <div
      className='header-wrapper'
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        display: `flex`,
        flexDirection: `row`,
        alignItems: `stretch`
      }}
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
      <ThemeMenu />
      <Menu />
    </div>
  </animated.header>;
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
