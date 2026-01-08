import React, { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Firebase", "Material-UI"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current weather data and forecasts using OpenWeather API with beautiful visualizations.",
      image: "/api/placeholder/400/250",
      technologies: ["JavaScript", "Chart.js", "CSS3"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "REST API Service",
      description: "A robust RESTful API service with authentication, rate limiting, and comprehensive documentation. Built with Express.js and PostgreSQL.",
      image: "/api/placeholder/400/250",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      category: "backend",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing modern design principles and smooth animations. Built with React and styled-components.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Styled Components", "Framer Motion"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time chat application with multiple rooms, file sharing, and emoji support. Features WebSocket communication and user presence.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p>Some of my recent work</p>
        </div>
        
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <span>Project Screenshot</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>Live Demo</span>
                    </a>
                    <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects