import React, { useState } from 'react';
import { navItems } from "@/constantsEN";

const BottomNavbar = () => {
  const [selectedItem, setSelectedItem] = useState('Dashboard');
  return (
    <div className="bottom-navbar">
      <div className="bottom-navbar-container">
        <div className="bottom-navbar-nav-items">
          {navItems.map((item) => (
            <button
              key={item.title}
              className={`bottom-navbar-nav-item-button ${selectedItem === item.title ? 'selected' : ''}`}
              onClick={() => setSelectedItem(item.title)}
            >
              {item.image}
              {item.title}
            </button>
          ))}
        </div>
        <div className="bottom-navbar-search-container">
          <input type="text" placeholder="Search" className="search-input"/>
          <button className="bottom-navbar-search-button">Q</button>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
