import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status message when user starts typing
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    try {
      // Replace these with your EmailJS credentials
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',      // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID',     // Replace with your EmailJS Template ID
        form.current,
        'YOUR_PUBLIC_KEY'       // Replace with your EmailJS Public Key
      )

      console.log('Email sent successfully:', result.text)
      
      // Success
      setSubmitStatus({
        type: 'success',
        message: '✅ Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Email send failed:', error)
      
      // Error
      setSubmitStatus({
        type: 'error',
        message: '❌ Oops! Something went wrong. Please try again or email me directly at emailsoumyabehera@gmail.com'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Let's work together on your next project</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's talk about your project</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:emailsoumyabehera@gmail.com" style={{color: '#666', textDecoration: 'none'}}>
                    emailsoumyabehera@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 63721 18561</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>Hyderabad, India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/soumya-ranjan-behera-b32b9525a/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="https://github.com/Soumya7077" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="mailto:emailsoumyabehera@gmail.com" className="social-link">Email</a>
            </div>
          </div>
          
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            {submitStatus.message && (
              <div className={`form-status ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact