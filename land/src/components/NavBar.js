// import React from 'react';
// import './App.css';  // Make sure the CSS file is linked

// import { Link } from 'react-router-dom';

// const NavBar = ({ handleLogout }) => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/home">Land Registration & Selling System</Link>
//         <div className="navbar-nav">
//           <Link className="nav-link custom-btn mx-2" to="/home">Home</Link>
//           <Link className="nav-link custom-btn mx-2" to="/about">About</Link>
//           <Link className="nav-link custom-btn mx-2" to="/review">Preview</Link>
//           <Link className="nav-link custom-btn mx-2" to="/contact">Contact</Link>
//           <Link className="nav-link custom-btn mx-2" to="/land">Land</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;


import React from 'react';
import './App.css'; // Ensure the CSS file is linked
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({ handleLogout }) => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLogoutClick = () => {
    handleLogout(); // Clear authentication data
    navigate('/'); // Redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">Land Registration & Selling System</Link>
        <div className="navbar-nav">
          <Link className="nav-link custom-btn mx-2" to="/register">Register</Link>
          <Link className="nav-link custom-btn mx-2" to="/home">Home</Link>
          <Link className="nav-link custom-btn mx-2" to="/about">About</Link>
          <Link className="nav-link custom-btn mx-2" to="/review">Preview</Link>
          <Link className="nav-link custom-btn mx-2" to="/contact">Contact</Link>
          <Link className="nav-link custom-btn mx-2" to="/land">Land</Link>
          <button
            className="btn btn-danger mx-2"
            onClick={handleLogoutClick}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
