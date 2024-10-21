import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    name: "Portfolio",
    shortDescription: "Developed a dynamic, responsive personal portfolio using React.js, JavaScript, and CSS3, featuring custom animations and interactive elements to showcase my projects and professional experience.",
    fullDescription: "I developed a dynamic and responsive personal portfolio using React.js, JavaScript, and CSS3, designed to effectively showcase my projects and professional experience. The portfolio features custom animations and interactive elements that enhance user engagement, providing an intuitive browsing experience across various devices. By leveraging React's component-based architecture, I ensured a clean and maintainable code structure while emphasizing best practices in web development. This project not only highlights my technical skills but also reflects my commitment to creating visually appealing and user-friendly web applications. ",
    technologies: ["React", "CSS", "Framer Motion"],
    liveDemo: "https://your-portfolio-url.com",
    github: "https://github.com/yourusername/portfolio"
  },
  {
    name: "NutriNest",
    shortDescription: "NutriNest is a web application I developed using HTML and JavaScript to empower users with tools for understanding BMI, balanced diet plans, and essential nutrition facts for healthier living.",
    fullDescription: "I developed NutriNest using HTML and JavaScript, creating a user-friendly platform dedicated to promoting healthier lifestyles. This project offers essential tools for understanding BMI, exploring balanced diet plans, and learning about nutrition facts. Through NutriNest, I've implemented interactive features that empower users with reliable information, developed in consultation with nutritionists and health experts. My goal was to create an accessible, informative resource that helps individuals make informed decisions about their health and nutrition..",
    technologies: ["HTML5", "CSS3", "Javascript"],
    liveDemo: "http://myweb.usf.edu/~varunreddy31/index.html",
    github: "https://github.com/yourusername/dis-project"
  },
  // Add more projects as needed
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <motion.section 
      id="projects" 
      className="projects"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => openModal(project)}
          >
            <h3>{project.name}</h3>
            <p>{project.shortDescription}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="modal-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>{selectedProject.name}</h3>
              <p>{selectedProject.fullDescription}</p>
              <div className="technologies">
                {selectedProject.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
              </div>
              <button className="close-modal" onClick={closeModal}>×</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;