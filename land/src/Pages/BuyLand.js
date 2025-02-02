import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";
import "./BuyLand.css"; // Hakikisha unahusisha faili la CSS

const BuyLand = () => {
  const [lands, setLands] = useState([]);
  const [selectedLand, setSelectedLand] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Fetch available lands from the API
  useEffect(() => {
    const fetchLands = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/land/");
        setLands(response.data);
      } catch (err) {
        setError("Error fetching lands. Please try again.");
      }
    };
    fetchLands();
  }, []);

  const handleSelectLand = (land) => {
    setSelectedLand(land);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add your buying functionality here if needed
    setSuccess(true);
    setError("");
  };

  return (
    <div className="buy-land-container">
      <h2>Select Land for your choice to buy!!</h2> {/* New heading added here */}
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Land bought successfully!</Alert>}
      
      <div className="land-list">
        {lands.map((land) => (
          <div
            key={land.id}
            className="land-item"
            onClick={() => handleSelectLand(land)}
          >
            <h4>{land.title}</h4>
            <p>{land.location}</p>
            <p>{land.size} cm²</p>
            <p>{land.price} Tsh</p>
            <img
              src={`http://127.0.0.1:8000${land.image}`}
              alt={land.title}
              className="land-image"
            />
          </div>
        ))}
      </div>

      {selectedLand && (
        <div className="selected-land-form">
          <h3>Land Details</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="landTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={selectedLand.title}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="landDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={selectedLand.description}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="landPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                value={selectedLand.price}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="landLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={selectedLand.location}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="landSize">
              <Form.Label>Size (in cm²)</Form.Label>
              <Form.Control
                type="text"
                value={selectedLand.size}
                disabled
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Confirm Purchase
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default BuyLand;
