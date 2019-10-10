import React from 'react'
import { FaLinkedin, FaTwitter, FaGoogle, FaGithub } from 'react-icons/fa';
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
        target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/henry-koehler-a73066176/" alt="linkedin"
        target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </li>
        <li>
        <a href="https://twitter.com/@laszlo_jamf" alt="twitter"
        target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </li>
        <li>
        <a href="https://github.com/henryk1229"
        alt="github"
        target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </li>

      </ul>

    </div>
    </Layout>
  )
}

export default ContactPage
