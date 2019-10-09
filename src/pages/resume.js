import React from 'react'
import { Document, Page, View, Text, StyleSheet, PDFViewer, PDFDownloadLink, Font } from '@react-pdf/renderer'
import { useStaticQuery, graphql } from 'gatsby'
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
      backgroundColor: '#ffffe6',
      fontSize: 12,
      flexGrow: 1
    },
    section: {
      flexGrow: 1,
      margin: 15
    }
  });

  //upload resume and use graphql for the query, set document equal to data
  console.log(data)
  return (
    <Layout>
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
