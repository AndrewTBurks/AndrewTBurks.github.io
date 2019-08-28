import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Menu from "./menu";
import './header.scss';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `var(--prim)`,
      borderBottom: `4px solid var(--sec-d)`,
      marginBottom: `1.45rem`,
    }}
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
      <h1 style={{ margin: `1.45rem 1.0875rem`, }}>
        <Link
          to="/"
          style={{
            color: `inherit`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <Menu />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
