import React from 'react'
import { Document, Page, View, Text, StyleSheet, PDFViewer, PDFDownloadLink, Font } from '@react-pdf/renderer'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { FaGithub } from 'react-icons/fa'
import Layout from '../components/layout'

const ResumePage = () => {

  const data = useStaticQuery(graphql`
      query Resume {
      resume: file(relativePath: {eq: "resume.md"}) {
          childMarkdownRemark {
              internal {
              content
            }
            frontmatter {
              title
              date
              author
            }
          }
        }
     }
  `)

  Font.register({ family: 'Montserrat', src: "https://fonts.googleapis.com/css?family=Montserrat&display=swap" });

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: 'white',
      fontSize: 12
    },
    section: {
      margin: 15
    }
  });

  //upload resume and use graphql for the query, set document equal to data

  return (
    <Layout>
      <div>
          <p>
          Here's a downloadable pdf of my work to-date:
          </p>
      </div>
      <PDFViewer width="900px" height="920px">
        <Document
          title={data.resume.childMarkdownRemark.frontmatter.title}
          author={data.resume.childMarkdownRemark.frontmatter.author}
          subject="Curriculum Vitae"
          creator={data.resume.childMarkdownRemark.frontmatter.author}
        >
          <Page size="Letter" style={styles.page}>
            <View style={styles.section}>
              <Text>{data.resume.childMarkdownRemark.internal.content}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </Layout>
  )
}

export default ResumePage
