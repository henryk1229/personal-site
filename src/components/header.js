import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from './header.module.css'

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <h1>
      <Link className={headerStyles.title} to="/">
        {siteTitle}
      </Link>
    </h1>
    <nav>
      <ul className={headerStyles.navList}>
        <li>
          <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to="/">
          Home
          </Link>
        </li>
        <li>
          <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to="/projects">
          Projects
          </Link>
        </li>
        <li>
          <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to="/about">
          About
          </Link>
        </li>
        <li>
          <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to="/blog">
          Blog
          </Link>
        </li>
        <li>
          <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to="/contact">
          Contact
          </Link>
        </li>

      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
