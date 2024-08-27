import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopNavbar from './components/Topbar';
import './App.css';

const Login = () => (
  <div className="login-container">
    <h2 style={{ color: 'blue' }}>Login Page</h2>
    <input type="text" className="input" placeholder="Username" />
    <input type="password" className="input" placeholder="Password" />
    <div style={{ margin: '10px 0' }}>
      <input type="checkbox" id="remember" />
      <label htmlFor="remember" style={{ marginLeft: '5px' }}>Remember Me</label>
    </div>
    <button className="button">Sign In</button>
    <button className="button">Sign Up</button>
  </div>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <TopNavbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
