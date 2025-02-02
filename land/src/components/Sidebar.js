import React from "react";
import "./Sidebar.css"; // Ensure the CSS file is included
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Land System</h2>
      <ul>
        <li className="search-bar">
          <input type="text" placeholder="Search..." />
        </li>
        <li>
          <span>WELCOME TO THE DASHBOARD!!</span>
        </li>
        <li>
          <i>📤</i>
          <span><Link to="/upload-land">Upload Land</Link></span>
        </li>
        <li>
          <i>📋</i>
          <span><Link to="/buy-land">Buy Lands</Link></span>
        </li>
        <li>
          <i>💳</i>
          <span><Link to="/transactions">Transactions</Link></span> {/* Added Transactions menu item */}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
