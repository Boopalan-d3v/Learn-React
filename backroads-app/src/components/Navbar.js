import React from 'react'
import logo from '../images/logo.svg'
import PageLink, { SocialLink } from './Links'
function Navbar() {
  return (
    <div>
        <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLink />
        <SocialLink />
      </div>
    </nav>
    </div>
  )
}

export default Navbar