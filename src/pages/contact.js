import React from 'react'

import Layout from '../components/layout'

import contactStyles from './contact.module.css'

const ContactPage = () => {

  return (
    <Layout>
    <div className={contactStyles.container}>
      <p>
      Let's build something together!
      </p>
      <p>
      Contact me via:
      </p>
      <ul className={contactStyles.contactList}>
        <li>
        <a href="mailto:henryk1229@gmail.com"
        alt="gmail"
        target="_blank" rel="noopener noreferrer">Gmail</a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/henry-koehler-a73066176/" alt="linkedin"
        target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li>
        <a href="https://twitter.com/@laszlo_jamf" alt="twitter"
        target="_blank" rel="noopener noreferrer">Twitter</a>
        </li>

      </ul>

    </div>
    </Layout>
  )
}

export default ContactPage
