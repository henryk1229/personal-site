import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello, I'm Henry!</h1>
    <p>Welcome to my personal website.</p>
    <p><Link to="/about">About</Link></p>
    <p><Link to="/projects">Projects</Link></p>
    <p><Link to="/blog">Blog</Link></p>
    <p><Link to="/contact">Contact</Link></p>
  </Layout>
)

export default IndexPage
