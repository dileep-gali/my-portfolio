import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css'; // Make sure to create this CSS file

const Experience = () => {
  const experiences = [
    {
      company: "GlobalLogic India Pvt Ltd",
      role: "Software Engineer",
      date: "July 2022 - July 2023",
      description: [
        "Designed and implemented user-friendly interfaces for Hilti's digital platforms using React.js, JavaScript, and HTML5.",
        "Developed and optimized interactive features for product catalogs using React and TypeScript.",
        "Integrated real-time data visualization tools using Node.js and RESTful APIs, enhancing the accuracy of digital offerings."
      ]
    },
    {
      company: "Sanshi Soft Solutions",
      role: "Associate Software Engineer",
      date: "May 2020 - June 2022",
      description: [
        "Developed and maintained the user interface for SingularityNET's decentralized AI marketplace using React.js and Redux.",
        "Implemented responsive design features with CSS3 and HTML5 to enhance user experience across devices.",
        "Integrated AGIX token payment system using RESTful APIs and Node.js for seamless transactions."
      ]
    }
  ];

  return (
    <motion.section
      id="experience"
      className="experience-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Work Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-date">{exp.date}</div>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <ul>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;