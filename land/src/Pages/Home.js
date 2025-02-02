import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      style={{
        marginLeft: "260px",
        padding: "20px",
        backgroundImage: "linear-gradient(to right, #28a745, #a1e890)",
        color: "white",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Section Header */}
      <h1>Welcome to the Land Renting System</h1>
      <p>Find the perfect land for your needs, easily and quickly.</p>

      {/* Section with Image and Description */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <img
          src="/assets/images/landscape.jpg" // Replace with your image path
          alt="Land view"
          style={{
            width: "60%",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>

      {/* Additional Information Section */}
      <div style={{ marginTop: "20px" }}>
        <p>
          We offer a variety of options: residential lands, commercial lands, and industrial lands.
          Secure your future today with our safe and affordable platform designed for Zanzibar.
        </p>
      </div>

      {/* Button */}
      <Link to="/land">
        <button
          style={{
            backgroundColor: "#ff6f00", // Orange button
            border: "none",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "20px",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#e65100")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6f00")}
        >
          Browse Properties
        </button>
      </Link>
    </div>
  );
};

export default Home; 