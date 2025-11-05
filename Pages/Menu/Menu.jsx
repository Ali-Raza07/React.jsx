import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuItems = [
    {
      id: 1,
      name: 'Paneer Tikka',
      category: 'starters',
      price: 320,
      image: '🧀',
      description: 'Grilled cottage cheese with Indian spices',
      popular: true
    },
    {
      id: 2,
      name: 'Butter Chicken',
      category: 'main-course',
      price: 450,
      image: '🍛',
      description: 'Creamy tomato-based curry with tender chicken',
      popular: true
    },
    {
      id: 3,
      name: 'Hyderabadi Biryani',
      category: 'main-course',
      price: 380,
      image: '🍚',
      description: 'Fragrant rice dish with spices and herbs'
    },
    {
      id: 4,
      name: 'Gulab Jamun',
      category: 'desserts',
      price: 180,
      image: '🍡',
      description: 'Sweet milk balls in rose-flavored syrup'
    },
    {
      id: 5,
      name: 'Masala Dosa',
      category: 'breakfast',
      price: 120,
      image: '🥘',
      description: 'Crispy rice crepe with potato filling'
    },
    {
      id: 6,
      name: 'Lassi',
      category: 'beverages',
      price: 80,
      image: '🥛',
      description: 'Traditional yogurt-based drink'
    }
  ];

  const categories = ['all', 'starters', 'main-course', 'desserts', 'breakfast', 'beverages'];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page">
      <div className="container">
        <h1 className="page-title">Our Menu</h1>
        
        {/* Category Filters */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="menu-grid">
          {filteredItems.map(item => (
            <div key={item.id} className={`menu-card ${item.popular ? 'popular' : ''}`}>
              {item.popular && <div className="popular-badge">🔥 Popular</div>}
              <div className="food-emoji">{item.image}</div>
              <div className="menu-card-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="price">₹{item.price}</div>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;