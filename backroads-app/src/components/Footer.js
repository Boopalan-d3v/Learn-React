import React from 'react'
import { PageLinks, SocialLinks } from '../data'

export const Footer = () => {
  return (
    <div><footer className="section footer">
     <ul className="footer-links">
      {
        PageLinks.map((link) => {
          return (<li key={link.id}>
            <a href={link.href} className="footer-link">{link.text}</a>
          </li>)
        })
      }
    </ul>
    <ul className="footer-icons">
    {
      SocialLinks.map((link) => {
        return (<li key={link.id}>
          <a href={link.href} target="_blank" rel='noreferrer' className="nav-icon">
            <i className={link.className}></i>
          </a>
          </li>)
        })
    }
    </ul>
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date"></span> all rights reserved
    </p>
   </footer>
  </div>
  )
}
