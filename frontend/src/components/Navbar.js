// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the corresponding CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-items">
        <Link to="/home">
          <span><i className="fas fa-home"></i> Anasayfa</span>
        </Link>
        <Link to="/askiyabirak">
          <span><i className="fas fa-coffee"></i> Askıya Bırak</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
