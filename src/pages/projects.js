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
              <a href={"https://" + edge.node.frontmatter.link}
                target="_blank"
                rel="noopener noreferrer"
                className={projectStyles.projectTitle}
                >{edge.node.frontmatter.title}
              </a>
              <div className={projectStyles.content}>
                <p>
                <a href={"https://" + edge.node.frontmatter.demo}
                target="_blank"
                rel="noopener noreferrer"
                >
                Youtube Demo
                </a>
                &nbsp;| Github:&nbsp;
                <a href={"https://" + edge.node.frontmatter.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  >Frontend
                </a>
                &nbsp;|&nbsp;
                <a href={"https://" + edge.node.frontmatter.backend}
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
