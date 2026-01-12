import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Soumya Ranjan Behera</h3>
            <p>
              Thank you for visiting my portfolio. Let's create something amazing together!
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/soumya-ranjan-behera-b32b9525a/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="https://github.com/Soumya7077" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="mailto:emailsoumyabehera@gmail.com" className="social-link">Email</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Soumya Ranjan Behera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer