import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-content">
            <h1 className="page-title">About Spice Heaven</h1>
            <p className="about-subtitle">
              Serving authentic Indian flavors with love since 2010
            </p>
          </div>
          <div className="about-image">
            <div className="chef-card">
              <div className="chef-emoji">👨‍🍳</div>
              <h3>Master Chef Raj</h3>
              <p>20+ years experience</p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Spice Heaven started as a small family restaurant in Mumbai with a passion for 
              authentic Indian cuisine. Today, we serve thousands of happy customers with 
              the same traditional recipes and homemade taste.
            </p>
            <p>
              Our secret is simple: use fresh ingredients, traditional spices, and cook with love. 
              Every dish tells a story of Indian culture and culinary heritage.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">13+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Dishes</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5</div>
              <div className="stat-label">Cities</div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2 className="section-title">Our Master Chefs</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="chef-avatar">👨‍🍳</div>
              <h3>Chef Raj Kumar</h3>
              <p>Head Chef</p>
              <span>Specialty: North Indian</span>
            </div>
            <div className="team-card">
              <div className="chef-avatar">👩‍🍳</div>
              <h3>Chef Priya Sharma</h3>
              <p>Sous Chef</p>
              <span>Specialty: South Indian</span>
            </div>
            <div className="team-card">
              <div className="chef-avatar">👨‍🍳</div>
              <h3>Chef Amit Patel</h3>
              <p>Pastry Chef</p>
              <span>Specialty: Desserts</span>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Fresh Ingredients</h3>
              <p>Daily sourced fresh vegetables and spices</p>
            </div>
            <div className="value-card">
              <div className="value-icon">👨‍🍳</div>
              <h3>Traditional Recipes</h3>
              <p>Authentic family recipes passed through generations</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💖</div>
              <h3>Cooked with Love</h3>
              <p>Every dish prepared with care and passion</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;