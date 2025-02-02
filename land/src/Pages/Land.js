// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Card, Alert, Spinner } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Land = () => {
//   const [lands, setLands] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchLands = async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:8000/api/land/");
//         setLands(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.response ? err.response.data.error : "Failed to fetch land data");
//         setLoading(false);
//       }
//     };

//     fetchLands();
//   }, []);

//   if (loading) {
//     return (
//       <Container className="text-center mt-5">
//         <Spinner animation="border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </Spinner>
//       </Container>
//     );
//   }

//   if (error) {
//     return (
//       <Container className="mt-5">
//         <Alert variant="danger">Error: {error}</Alert>
//       </Container>
//     );
//   }

//   return (
//     <Container className="mt-5" style={{ marginLeft: '300px', paddingRight: '30px' }}> {/* Increased left margin */}
//       <h1 className="text-center mb-4">Available Lands For You!</h1>
//       <Row xs={1} md={2} lg={3} className="g-4">
//         {lands.map((land) => (
//           <Col key={land.id}>
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src={land.image || "https://via.placeholder.com/150"}
//                 alt={land.title}
//               />
//               <Card.Body>
//                 <Card.Title>{land.title}</Card.Title>
//                 <Card.Text>
//                   <strong>Location:</strong> {land.location}
//                   <br />
//                   <strong>Type:</strong> {land.land_type}
//                   <br />
//                   <strong>Price:</strong> ${land.price}
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Land;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Alert } from "react-bootstrap";
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

  return (
    <div className="buy-land-container">
      <h2>Available Lands for You!</h2>
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
          <Form>
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
          </Form>
        </div>
      )}
    </div>
  );
};

export default BuyLand;


