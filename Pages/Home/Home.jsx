import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span>Spice Heaven</span>
          </h1>
          <p className="hero-subtitle">
            Experience the authentic taste of Indian cuisine with traditional recipes and modern twist
          </p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn primary">View Menu</Link>
            <Link to="/contact" className="btn secondary">Order Now</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-food">
            <div className="food-card">🍛 Butter Chicken</div>
            <div className="food-card">🍗 Tandoori Chicken</div>
            <div className="food-card">🍚 Biryani</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>30 minutes delivery guarantee</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍽️</div>
              <h3>Fresh Food</h3>
              <p>Daily fresh ingredients</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Best Price</h3>
              <p>Quality food at affordable prices</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;