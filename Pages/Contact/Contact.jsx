import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* Hero Section */}
        <section className="contact-hero">
          <h1 className="page-title">Contact Us</h1>
          <p className="contact-subtitle">
            We'd love to hear from you! Get in touch with any questions or feedback.
          </p>
        </section>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>We're here to help with any questions about our menu, reservations, or catering services.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📞</div>
                <div className="method-details">
                  <h3>Call Us</h3>
                  <p>+91 98765 43210</p>
                  <p>+91 98765 43211</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-details">
                  <h3>Email Us</h3>
                  <p>info@spiceheaven.com</p>
                  <p>support@spiceheaven.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-details">
                  <h3>Visit Us</h3>
                  <p>123 Food Street, Restaurant Lane</p>
                  <p>Mumbai, Maharashtra - 400001</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">🕒</div>
                <div className="method-details">
                  <h3>Opening Hours</h3>
                  <p>Monday - Sunday: 11:00 AM - 11:00 PM</p>
                  <p>Friday Special: Open till 12:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <section className="map-section">
          <h2 className="section-title">Find Us Here</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <div className="map-icon">🗺️</div>
              <h3>Interactive Map</h3>
              <p>123 Food Street, Restaurant Lane, Mumbai</p>
              <button className="directions-btn">Get Directions</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;