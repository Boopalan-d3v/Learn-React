import React from 'react'
import PageLink, { SocialLink } from './Links'

export const Footer = () => {
  return (
    <div><footer className="section footer">
      <PageLink />
      <SocialLink />
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date">{new Date().getFullYear()}</span> all rights reserved
    </p>
   </footer>
  </div>
  )
}
