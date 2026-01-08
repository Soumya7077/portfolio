import React from 'react'
import profileImage from '../assets/me.jpeg'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>I'm a passionate developer who loves creating digital experiences</h3>
            <p>
              With over 3 years of experience in web development, I specialize in creating 
              modern, responsive applications using cutting-edge technologies. I'm passionate 
              about writing clean, efficient code and delivering exceptional user experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h4>50+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>3+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>100%</h4>
                <p>Client Satisfaction</p>
              </div>
            </div>

            <div className="about-actions">
              <a 
                href="/Soumya Ranjan Behera.pdf" 
                download="Soumya_Ranjan_Behera_Resume.pdf"
                className="btn btn-primary"
              >
                📄 Download Resume
              </a>
              <a 
                href="/Soumya Ranjan Behera.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                👁️ View Resume
              </a>
            </div>
          </div>
          
          <div className="about-image">
            <div className="about-img-container">
              <img src={profileImage} alt="Soumya Ranjan Behera" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About