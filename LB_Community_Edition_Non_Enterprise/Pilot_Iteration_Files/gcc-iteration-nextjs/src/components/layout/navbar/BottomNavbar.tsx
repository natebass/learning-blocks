import React, { useState } from 'react';
import { useSiteNavigation } from "@/components/hooks/SiteNavigationProvider";

const BottomNavbar = () => {
  const {currentSecondary, secondaryLinks, setPrimaryNavigationKey} = useSiteNavigation()

  return (
    <div className="bottom-navbar">
      <div className="bottom-navbar-container">
        <div className="bottom-navbar-nav-items">
          {secondaryLinks.map((item) => (
            <button
              key={item.title}
              className={`bottom-navbar-nav-item-button ${currentSecondary === item.title ? 'bottom-navbar-selected' : ''}`}
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
