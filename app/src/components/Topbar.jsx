import React from 'react';
import './Topbar.css';

const Topbar = () => (
  <div className="topbar-container">
    <input type="text" className="search-input" placeholder="Search..." />
    <div className="nav-items">
      <span>Dashboard</span>
      <span>Profile</span>
      <span>Settings</span>
      <span>Help</span>
    </div>
  </div>
);

export default Topbar;
