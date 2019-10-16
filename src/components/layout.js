import React from "react"
import PropTypes from "prop-types"
import {useSpring, animated} from 'react-spring'
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './footer'
import SEO from './seo'
// import "./layout.css"
import layoutStyles from './layout.module.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

const animation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 400 });

  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
      <SEO title={data.site.siteMetadata.title}  />
      <Header siteTitle={data.site.siteMetadata.title} />
        <animated.div className={layoutStyles.children} style={animation}>
        {children}
        </animated.div>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
