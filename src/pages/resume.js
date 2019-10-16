import React from 'react'
import { Document, Page, View, Text, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

//resume sections
import Header from '../resume/header'
import Projects from '../resume/employment'

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


  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: 'white',
      fontSize: 10,
      flexGrow: 1
    },
    section: {
      margin: 15,
      flexGrow: 1
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
      <div>
      {typeof window !== 'undefined' &&
      <PDFViewer width="840px" height="920px">
        <Document
          title={data.resume.childMarkdownRemark.frontmatter.title}
          author={data.resume.childMarkdownRemark.frontmatter.author}
          subject="Curriculum Vitae"
          creator={data.resume.childMarkdownRemark.frontmatter.author}
        >
          <Page size="Letter" style={styles.page}>
            <Header />
            <View style={styles.section}>
              <Text>{data.resume.childMarkdownRemark.internal.content}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>}
      </div>
    </Layout>
  )
}

export default ResumePage
