import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import projectStyles from './projects.module.css'

const ProjectPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "project"}}}) {
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
            html
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <ol className={projectStyles.projects}>
        {data.allMarkdownRemark.edges.map(edge => {
          return(
            <li className={projectStyles.project}>
              <Link to={edge.node.frontmatter.link}
                target="_blank"
                rel="noopener noreferrer"
                className={projectStyles.projectTitle}
                >{edge.node.frontmatter.title}
              </Link>
                <div className={projectStyles.content} 
                dangerouslySetInnerHTML={{ __html: edge.node.html}}>
              </div>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default ProjectPage
