import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter{
        title
      }
      html
    }
  }
`

const Resume = ({data}) => {
  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}></div>
    </Layout>
  )
}

export default Resume
