// import React, { useState } from "react";
// import axios from "axios";
// import { Form, Button, Alert } from "react-bootstrap";
// import "./UploadLand.css";  
// import backgroundImage from '../assets/images/new6.jpg'; 

// const UploadLand = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [location, setLocation] = useState("");
//   const [size, setSize] = useState("");
//   const [length, setLength] = useState("");
//   const [width, setWidth] = useState("");
//   const [landType, setLandType] = useState("residential");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState(null);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!image) {
//       setError("Please select an image to upload.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("location", location);
//     formData.append("size", size);
//     formData.append("length", length);
//     formData.append("width", width);
//     formData.append("land_type", landType);
//     formData.append("price", price);
//     formData.append("image", image);

//     const token = localStorage.getItem("access_token");
//     if (!token) {
//       setError("Authorization token is missing. Please log in.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/land/", formData, {
//         headers: {
//           "Authorization": `Bearer ${token}`,
//         },
//       });

//       setSuccess(true);
//       setError("");
//       console.log(response.data);
//     } catch (err) {
//       console.error(err.response?.data || err.message);  // Log error response for debugging
//       setError("Error uploading land. Please try again.");
//       setSuccess(false);
//     }
//   };

//   return (
//     <div className="upload-form-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="upload-form">
//         <h2>Upload Land</h2>
//         {error && <Alert variant="danger">{error}</Alert>}
//         {success && <Alert variant="success">Land uploaded successfully!</Alert>}
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="title">
//             <Form.Label>Title</Form.Label>
//             <Form.Control
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="description">
//             <Form.Label>Description</Form.Label>
//             <Form.Control
//               as="textarea"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="location">
//             <Form.Label>Location</Form.Label>
//             <Form.Control
//               type="text"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="size">
//             <Form.Label>Size (in cm²)</Form.Label>
//             <Form.Control
//               type="number"
//               value={size}
//               onChange={(e) => setSize(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="length">
//             <Form.Label>Length (in meters)</Form.Label>
//             <Form.Control
//               type="number"
//               value={length}
//               onChange={(e) => setLength(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="width">
//             <Form.Label>Width (in meters)</Form.Label>
//             <Form.Control
//               type="number"
//               value={width}
//               onChange={(e) => setWidth(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="landType">
//             <Form.Label>Land Type</Form.Label>
//             <Form.Control
//               as="select"
//               value={landType}
//               onChange={(e) => setLandType(e.target.value)}
//             >
//               <option value="residential">Residential</option>
//               <option value="agricultural">Agricultural</option>
//               <option value="commercial">Commercial</option>
//               <option value="industrial">Industrial</option>
//             </Form.Control>
//           </Form.Group>
//           <Form.Group controlId="price">
//             <Form.Label>Price (in Tsh)</Form.Label>
//             <Form.Control
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="image">
//             <Form.Label>Land Image</Form.Label>
//             <Form.Control
//               type="file"
//               onChange={(e) => setImage(e.target.files[0])}
//               required
//             />
//           </Form.Group>
//           <Button variant="primary" type="submit" className="mt-3">
//             Upload Land
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default UploadLand;


import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";
import "./UploadLand.css";
import backgroundImage from "../assets/images/new6.jpg";

const UploadLand = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [size, setSize] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [landType, setLandType] = useState("residential");
  const [price, setPrice] = useState("");
  const [owner, setOwner] = useState("");  // ✅ Added field for owner
  const [listedBy, setListedBy] = useState("");  // ✅ Added field for listed_by

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("access_token");
    if (!token) {
        setError("Authorization token is missing. Please log in.");
        return;
    }

    try {
    console.log("Fetching user details...");
    const userResponse = await axios.get("http://127.0.0.1:8000/api/user/", {
        headers: { Authorization: `Bearer ${token}` },
    });

    console.log("User API Response:", userResponse.data);  // ✅ Angalia API response

    if (!userResponse.data || !userResponse.data.id) {
        setError("Failed to fetch user details. Please try again.");
        return;
    }

    const userId = userResponse.data.id;
    console.log("User ID:", userId);  // ✅ Hakikisha userId ipo


        // **2. Unda FormData**
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("location", location);
        formData.append("size", size);
        formData.append("length", length);
        formData.append("width", width);
        formData.append("land_type", landType);
        formData.append("price", price);
        formData.append("owner", userId);      // ✅ Ongeza owner
        formData.append("listed_by", userId);  // ✅ Ongeza listed_by

        // **3. Tuma Land kwa API**
        const response = await axios.post("http://127.0.0.1:8000/api/land/", formData, {
            headers: { Authorization: `Bearer ${token}` },
        });

        setSuccess(true);
        setError("");
        console.log("Land uploaded successfully:", response.data);

        // **4. Reset Form**
        setTitle(""); setDescription(""); setLocation(""); setSize(""); 
        setLength(""); setWidth(""); setLandType("residential"); setPrice("");

    } catch (err) {
        console.error("Upload Error:", err.response?.data || err.message);
        setError(`Failed to upload land: ${JSON.stringify(err.response?.data)}`);
    }
};


  return (
    <div className="upload-form-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="upload-form">
        <h2>Upload Land</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">Land uploaded successfully!</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="size">
            <Form.Label>Size (in cm²)</Form.Label>
            <Form.Control
              type="number"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="length">
            <Form.Label>Length (in meters)</Form.Label>
            <Form.Control
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="width">
            <Form.Label>Width (in meters)</Form.Label>
            <Form.Control
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="landType">
            <Form.Label>Land Type</Form.Label>
            <Form.Control
              as="select"
              value={landType}
              onChange={(e) => setLandType(e.target.value)}
            >
              <option value="residential">Residential</option>
              <option value="agricultural">Agricultural</option>
              <option value="commercial">Commercial</option>
              <option value="industrial">Industrial</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price (in Tsh)</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>

          {/* ✅ Added Owner and Listed By fields */}
          <Form.Group controlId="owner">
            <Form.Label>Owner ID</Form.Label>
            <Form.Control
              type="number"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="listedBy">
            <Form.Label>Listed By ID</Form.Label>
            <Form.Control
              type="number"
              value={listedBy}
              onChange={(e) => setListedBy(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Upload Land
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UploadLand;

