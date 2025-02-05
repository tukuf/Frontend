import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap';
import './Register.css'; // Ensure this file exists for styling

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [userType, setUserType] = useState('landowner');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post("https://backend-gqfp.onrender.com/api/user/", {
        username,
        password,
        user_type: userType, // ✅ Hii sasa inatumia userType badala ya user_type
        phone,
      });

      setLoading(false);
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      setLoading(false);
      setError("Registration failed. Please try again.");
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="login-container">
      <Container className="login-form-container">
        <h2 className="text-center mb-4">Register</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="userType">
            <Form.Label>User Type</Form.Label>
            <Form.Control
              as="select"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
            >
              <option value="landowner">Landowner</option>
              <option value="agent">Agent</option>
              <option value="buyer">Buyer</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : 'Register'}
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Register;
