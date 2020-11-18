import { Link, navigate } from "gatsby";
import PropTypes from "prop-types";
import React, { useReducer, useEffect, useContext } from "react";

import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";

import {
  FaHome,
  FaScroll,
  FaLaptopCode,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaLightbulb,
} from "react-icons/fa";

import "./header.scss";

import { ThemeContext } from "../theme-context";

const Header = ({ siteTitle, location }) => {
  let { theme, setTheme } = useContext(ThemeContext);

  const switchOn = theme === 4;

  let [hidden, dispatch] = useReducer((prevState, { action }) => {
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
        dispatch({ action: "show" });
      } else if (window.scrollY > 100) {
        dispatch({ action: "hide" });
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  let styles = useSpring({
    opacity: hidden ? 0 : 1,
  });

  return (
    <animated.header onMouseOver={() => dispatch({ action: "show" })}>
      <div className='header-wrapper'>
        <animated.div
          className='hiding'
          style={{
            ...styles,
          }}
        >
          <div>
            <h2>
              <Link
                to='/'
                style={{
                  color: `inherit`,
                  textDecoration: `none`,
                  background: "var(--background)",
                  padding: 18,
                  marginLeft: 10,
                  borderRadius: 100,
                }}
              >
                {siteTitle}
              </Link>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  marginRight: "1.25rem",
                  textAlign: "right",
                  // padding: ".25rem",
                  marginLeft: "auto",
                  background: "var(--background)",
                  borderRadius: 20,
                  padding: 10,
                }}
              >
                <FaLightbulb style={{ marginRight: 4 }} color='var(--link)' />
                <label class='switch'>
                  <input
                    type='checkbox'
                    onChange={evt => setTheme(evt.target.checked ? 4 : 3)}
                  />
                  <span class='slider round'>
                    <motion.span
                      class='dot'
                      animate={{
                        x: switchOn ? 16 : 0,
                      }}
                    />
                  </span>
                </label>
              </div>
            </h2>
          </div>
        </animated.div>

        {/* <button
          onClick={() => setTheme(t => (t === 3 ? 4 : 3))}
          style={{ zIndex: 10, margin: "auto 0" }}
        >
          Theme
        </button> */}
      </div>
    </animated.header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
