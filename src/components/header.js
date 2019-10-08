import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from 'gatsby-image'

import headerStyles from './header.module.css'

const Header = ({ siteTitle }) => {

  const data = useStaticQuery(graphql`
      query Headshot {
        image: file(relativePath: {eq: "headshot.jpg"}) {
          id
          childImageSharp {
            fixed(
              width: 150
              height: 200
            ) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
     }
  `)

  return(
    <header className={headerStyles.header}>
      <div className={headerStyles.textContainer}>
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
      </div>
      <div className={headerStyles.headshot}>
        <Img
        fixed={data.image.childImageSharp.fixed}
        alt="headshot"
        />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
