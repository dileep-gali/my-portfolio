import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitStatus('sending');

      try {
        const response = await fetch('https://formspree.io/f/xyzyzgbv', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Error:', error);
        setSubmitStatus('error');
      }
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p className="contact-description">Feel free to reach out if you have any questions or would like to work together!</p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? 'error' : ''}
              aria-invalid={errors.subject ? 'true' : 'false'}
            />
            {errors.subject && <span className="error-message">{errors.subject}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
              aria-invalid={errors.message ? 'true' : 'false'}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
          {/* Honeypot field for spam protection */}
          <input type="text" name="_gotcha" style={{display: 'none'}} />
          <button type="submit" disabled={submitStatus === 'sending'}>
            {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {submitStatus === 'success' && (
          <p className="success-message">Your message has been sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="error-message">There was an error sending your message. Please try again.</p>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;