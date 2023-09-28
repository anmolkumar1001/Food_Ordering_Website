import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerStyle = {
    backgroundColor: "#343a40",
    color: "#fff",
    padding: "30px 0",
  };

  const headingStyle = {
    color: "#f8f9fa",
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    fontSize: "24px",
  };

  const linkStyle = {
    color: "#f8f9fa",
    textDecoration: "none",
  };

  const linkHoverStyle = {
    textDecoration: "underline",
  };
  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4 style={headingStyle} className="mb-4">
              About Us
            </h4>
            <p style={{ fontSize: "16px" }}>
              Food Delight is your premier destination for a delightful dining
              experience from the comfort of your home. We specialize in
              bringing the finest cuisines right to your doorstep, curated by
              top chefs and prepared with love. Whether it's a special occasion
              or a casual dinner, Food Delight is your go-to choice for
              exceptional food delivery.
            </p>
          </div>
          <div className="col-md-4">
            <h4 style={headingStyle} className="mb-4">
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li style={{ marginBottom: "10px" }}>
                <Link to="/" style={linkStyle} className="text-decoration-none">
                  Home
                </Link>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <Link
                  to="/menu"
                  style={linkStyle}
                  className="text-decoration-none"
                >
                  Menu
                </Link>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <Link
                  to="/contact"
                  style={linkStyle}
                  className="text-decoration-none"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4 style={headingStyle} className="mb-4">
              Contact Us
            </h4>
            <address>
              123 Main Street
              <br />
              Bangalore, Karnataka 560098
              <br />
              <a href="tel:123-456-7890" style={linkStyle}>
                Phone: 123-456-7890
              </a>
              <br />
              <a href="mailto:info@example.com" style={linkStyle}>
                Email: anmol@gmail.com
              </a>
            </address>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <span className="text-muted footer-copyright">
          &copy; 2023 Food Delight, Inc
        </span>
      </div>
    </footer>
  );
}
