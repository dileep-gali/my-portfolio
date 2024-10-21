import React from 'react';
import { Link } from 'react-scroll';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import { motion } from 'framer-motion';
import Typewriter from 'react-typewriter-effect';
import './Hero.css';

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.3 } },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const waveAnimation = {
    hidden: { opacity: 0, rotate: 0 },
    visible: { 
      opacity: 1, 
      rotate: [0, 15, -10, 15, 0],
      transition: { duration: 1.2, loop: Infinity, ease: 'easeInOut' },
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
  };

  return (
    <section id="home" className="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
            opacity: { value: 0.8 },
            links: { enable: true, color: '#ffffff', distance: 150 },
          },
        }}
      />
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={containerAnimation}
        >
          <motion.div className="greeting" variants={itemAnimation}>
            Hi, 
            <motion.span className="wave-emoji" variants={waveAnimation}>👋</motion.span>
          </motion.div>

          <motion.h1 variants={itemAnimation}>
            <Typewriter
              text="I'm Dileep Gali"
              cursorColor="#3498db"
              typeSpeed={100}
              startDelay={1000}
            />
          </motion.h1>

          <motion.p className="tagline" variants={itemAnimation}>
            Crafting Digital Experiences with Code
          </motion.p>

          <motion.div className="hero-description" variants={itemAnimation}>
            <p>Web Developer | React Specialist | Problem Solver</p>
          </motion.div>

          <motion.div className="cta-container" variants={itemAnimation}>
            <Link to="about" smooth={true} duration={500}>
              <motion.button 
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
              </motion.button>
            </Link>
            <motion.a 
              href="/Dileep's resume.docx" 
              className="secondary-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          variants={imageAnimation}
          initial="hidden"
          animate="visible"
        >
          <motion.img 
            src="/240_F_601171867_X85WpWCcMzNsoMWtMxiZQspKzaOwCyuK.jpg" 
            alt="Dileep Kumar Gali"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;