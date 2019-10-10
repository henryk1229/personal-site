import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FaLinkedin, FaTwitter, FaGoogle, FaGithub } from 'react-icons/fa';
import footerStyles from './footer.module.css'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata{
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p className={footerStyles.tag}>
      Built with Gatsby, © {new Date().getFullYear()}
      </p>
      <ul className={footerStyles.contactList}>
        <li className={footerStyles.contactItem}>
        Get in touch!
        </li>
        <li className={footerStyles.contactItem}>
        <a href="mailto:henryk1229@gmail.com"
        alt="gmail"
        target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
        </li>
        <li className={footerStyles.contactItem}>
        <a href="https://www.linkedin.com/in/henry-koehler-a73066176/" alt="linkedin"
        target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </li>
        <li className={footerStyles.contactItem}>
        <a href="https://twitter.com/@laszlo_jamf" alt="twitter"
        target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </li>
        <li className={footerStyles.contactItem}>
        <a href="https://github.com/henryk1229"
        alt="github"
        target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
