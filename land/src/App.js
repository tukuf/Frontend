// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import NavBar from './components/NavBar';
// import Sidebar from "./components/Sidebar";
// import Home from './Pages/Home';
// import Review from './components/Review';
// import Land from './Pages/Land';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import Login from './Pages/Auth/Login';
// import UploadLand from './Pages/UploadLand';
// import BuyLand from "./Pages/BuyLand";
// import Transactions from "./Pages/Transactions"; // Import page ya transaction success

// import 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [role, setRole] = useState(localStorage.getItem('role')); // Get role from localStorage

//   useEffect(() => {
//     const token = localStorage.getItem('access_token');
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('access_token');
//     localStorage.removeItem('refresh_token');
//     localStorage.removeItem('role');
//     setIsLoggedIn(false);
//     setRole(null);
//   };

//   return (
//     <Router>
//       {isLoggedIn && <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />}
//       {isLoggedIn && <Sidebar role={role} />}
//       <Routes>
//         {/* Default route to Login */}
//         <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} setRole={setRole} />} />
        
//         {/* Authenticated routes */}
//         <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
//         <Route path="/land" element={isLoggedIn ? <Land /> : <Navigate to="/" />} />
//         <Route path="/review" element={isLoggedIn ? <Review /> : <Navigate to="/" />} />
//         <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/" />} />
//         <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/" />} />
        
//         {/* Role-based routes */}
//         <Route path="/upload-land" element={role === 'admin' ? <UploadLand /> : <Navigate to="/home" />} />
//         <Route path="/buy-land" element={role === 'user' ? <BuyLand /> : <Navigate to="/home" />} />
        
//         {/* Other routes */}
//         <Route path="/transaction-success/:transactions" element={isLoggedIn ? <Transactions /> : <Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from './components/NavBar';
import Sidebar from "./components/Sidebar";
import Home from './Pages/Home';
import Review from './components/Review';
import Land from './Pages/Land';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Auth/Login';
import UploadLand from './Pages/UploadLand';
import BuyLand from "./Pages/BuyLand";
import Transactions from "./Pages/Transactions"; // Import page ya transaction success
import Register from './Pages/Auth/Register';  // Import Register page

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {isLoggedIn && <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />}
      {isLoggedIn && <Sidebar />}
      <Routes>
        {/* Default route to Login */}
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />

        {/* Register Route */}
        <Route path="/register" element={<Register />} /> {/* Add Register route */}

        {/* Authenticated routes */}
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
        <Route path="/land" element={isLoggedIn ? <Land /> : <Navigate to="/" />} />
        <Route path="/review" element={isLoggedIn ? <Review /> : <Navigate to="/" />} />
        <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/" />} />
        <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/" />} />
        <Route path="/upload-land" element={isLoggedIn ? <UploadLand /> : <Navigate to="/" />} />
        <Route path="/buy-land" element={isLoggedIn ? <BuyLand /> : <Navigate to="/" />} />
        <Route path="/transactions" element={isLoggedIn ? <Transactions /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;

