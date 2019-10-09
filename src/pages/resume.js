import React, {useState,useEffect} from 'react'
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'
import Layout from '../components/layout'

const ResumePage = () => {

  const doc = () => {
    return(
      <Document>
        <Page>
          Henry's resume
        </Page>
      </Document>
    )
  }

  //upload resume and use graphql for the query, set document equal to data

  return (
    <div>
      <PDFDownloadLink document={doc} fileName="somename.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  )
}

export default ResumePage
