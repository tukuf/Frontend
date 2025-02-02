import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div style={{ margin: "20px auto", maxWidth: "800px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <h1 className="text-center mb-4">About Our System</h1>
      <section>
        <h3>System Purpose</h3>
        <p>
          Our system is designed to assist the people of Zanzibar in registering their land properties and purchasing land without the need for leasing. This system addresses the challenges faced by farmers, businesspeople, and even ordinary citizens, as it provides options for Residential Lands, Industrial Lands, and Commercial Lands.
        </p>
      </section>

      <section>
        <h3>Target Area</h3>
        <p>
          This system specifically targets the Zanzibar region, aiming to provide an easy, affordable, and secure platform for land transactions.
        </p>
      </section>

      <section>
        <h3>Why We Created This System</h3>
        <p>
          Historically, people have faced numerous challenges in finding and purchasing land. Nowadays, land-related scams have become increasingly common, making security a significant concern. This system was created to eliminate these problems and ensure safety and transparency in land transactions.
        </p>
      </section>

      <section>
        <h3>Key Features</h3>
        <ul>
          <li>Ease of use</li>
          <li>Affordable costs</li>
          <li>Secure transactions</li>
        </ul>
      </section>

      <section>
        <h3>Contact Information</h3>
        <p>
          <strong>Phone:</strong> 0748939567 <br />
          <strong>Email:</strong> <a href="mailto:sharifbeyy@gmail.com">sharifbeyy@gmail.com</a> <br />
          <strong>Instagram:</strong> <a href="https://www.instagram.com/tukuf_jr" target="_blank" rel="noopener noreferrer">@tukuf_jr</a>
        </p>
      </section>

      <section>
        <h3>Developer</h3>
        <p>This system was proudly developed by me, Tukuf Jr.</p>
      </section>

      <footer className="text-end mt-4" style={{ borderTop: "1px solid #ddd", paddingTop: "10px", fontSize: "14px" }}>
        __created by Tukuf Jr © All rights reserved 2025
      </footer>
    </div>
  );
};

export default About;
