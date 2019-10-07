import React from "react"
import PropTypes from "prop-types"
import {useSpring, animated} from 'react-spring'
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './footer'
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

const [fade, set] = useSpring({to: {opacity: 0}})

  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
      <Header siteTitle={data.site.siteMetadata.title} />
        <animated.div style={fade}>
          <div>{children}</div>
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
