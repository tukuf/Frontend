import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaComment } from 'react-icons/fa'; // Import icons

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
  };

  return (
    <div style={{ 
      marginLeft: "auto", 
      marginRight: "auto", 
      padding: "20px", 
      maxWidth: "500px", 
      backgroundColor: "#f0f8ff", // Light background color (e.g., AliceBlue)
      borderRadius: "8px", // Rounded corners
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" // Soft shadow
    }}>
      <h1 className="text-center">Welcome to Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3 input-group">
          <span className="input-group-text">
            <FaEnvelope />
          </span>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
          />
        </div>
        <div className="mb-3 input-group">
          <span className="input-group-text">
            <FaComment />
          </span>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            maxLength={50}
            rows="4"
            required
            placeholder="Write a Message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
