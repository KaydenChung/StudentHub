import React from 'react';
import { FaHome, FaSearch, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-header">Welcome Student</h1>
      <div className="nav-item">
        <div className="icon"><FaHome /></div>
        <span>Home</span>
      </div>
      <div className="nav-item">
        <div className="icon"><FaSearch /></div>
        <span>Explore</span>
      </div>
      <div className="nav-item">
        <div className="icon"><FaUsers /></div>
        <span>Users</span>
      </div>
      <div className="nav-item">
        <div className="icon"><FaSignOutAlt /></div>
        <span>Sign Out</span>
      </div>
    </div>
  );
};

export default Navbar;
