import React from 'react';
import '../App.css'

import GitHubIcon from '../Assets/GitHub_Invertocat_Logo.svg.png'

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <a
        href="https://github.com/liljlock"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={GitHubIcon} // Use the imported GitHub SVG icon
          alt="GitHub"
          className="github-icon"
        />
      </a>
    </footer>
  );
}

export default Footer;