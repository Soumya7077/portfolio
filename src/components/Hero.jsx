import React, { useState, useEffect } from 'react'
import profileImage from '../assets/me.jpeg'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Full Stack Developer'
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Soumya Ranjan Behera</span>
          </h1>
          <h2 className="hero-subtitle">
            {typedText}
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            I create beautiful, responsive web applications with modern technologies.
            Passionate about clean code, user experience, and innovative solutions.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
            <a 
              href="/Soumya Ranjan Behera.pdf" 
              download="Soumya_Ranjan_Behera_Resume.pdf"
              className="btn btn-outline"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-image">
            <img src={profileImage} alt="Soumya Ranjan Behera" />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero