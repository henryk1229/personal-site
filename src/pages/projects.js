import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
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
              demo
              frontend
              backend
            }
            fields {
              slug
              demoUrl
            }
            html
          }
        }
      }
    }
  `)
  // console.log(data.allMarkdownRemark.edges)
  return (
    <Layout>
      <ol className={projectStyles.projects}>
        {data.allMarkdownRemark.edges.map(edge => {
          return(
            <li className={projectStyles.project}>
              <a href={edge.node.frontmatter.link}
                target="_blank"
                rel="noopener noreferrer"
                className={projectStyles.projectTitle}
                >{edge.node.frontmatter.title}
              </a>
              <div className={projectStyles.content}>
                <p>
                <a href={edge.node.fields.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                >
                Demo
                </a>
                &nbsp;| Github:&nbsp;
                <a href={edge.node.frontmatter.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  >Frontend
                </a>
                &nbsp;|&nbsp;
                <a href={edge.node.frontmatter.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  >Backend
                </a>
                </p>
                <div
                dangerouslySetInnerHTML={{ __html: edge.node.html}}>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default ProjectPage
