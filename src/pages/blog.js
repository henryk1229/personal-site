import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.css'
import Layout from '../components/layout'

const BlogPage =  () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog-post"}}}) {
        edges {
          node {
            id
            frontmatter {
              type
              title
              link
              author
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
    // comment out  before  migrating posts
    // <h1>Blog</h1>
    // <ol className={blogStyles.posts}>
    //   {data.allMarkdownRemark.edges.map(edge => {
    //     return(
    //       <li className={blogStyles.post}>
    //         <Link to={`/blog/${edge.node.fields.slug}`}>
    //         <h2>{edge.node.frontmatter.title}</h2>
    //         </Link>
    //       </li>
    //     )
    //   })}
    // </ol>

  return (
    <Layout>
      <p>
      I'm currently migrating my blog posts onto this site.
      </p>
      <p>
       In the meantime, please check out my writing on &nbsp;
      <a href="https://medium.com/@henryk1229" target="_blank" rel="noopener noreferrer">Medium</a>.
      </p>
    </Layout>

  )
}

export default BlogPage
