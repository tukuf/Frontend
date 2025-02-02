import React from "react";
import Sidebar from "./Sidebar"; // Hakikisha Sidebar imeunganishwa

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, marginLeft: "250px", padding: "20px" }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
