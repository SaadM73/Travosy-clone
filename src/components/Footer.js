import React from "react";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaShoppingCart,
  FaDribbble,
} from "react-icons/fa";


import logo from "./images/logoTravosy.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <img src={logo} className="FooterLogo" alt="Logo" />
          <p>
            Planning for a trip? We will organize your trip with the best places
            and within best budget!
          </p>
          <div className="social-icons">
            <a href="/">
              <FaShoppingCart />
            </a>
            <a href="/">
              <FaDribbble />
            </a>
            <a href="/">
              <FaLinkedinIn />
            </a>
            <a href="/">
              <FaFacebookF />
            </a>
            <a href="/">
              <FaInstagram />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-section office">
          <h2>Office</h2>
          <p>Travosy Tour & Travels</p>
          <p>
            <FaEnvelope /> contact@example.com
          </p>
          <p>
            <FaPhone /> 0332 0374410
          </p>
        </div>

        <div className="footer-section company">
          <h2>Company</h2>
          <ul>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Team</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h2>Newsletter</h2>
          <p>Sign up and receive the latest tips via email.</p>
          <form>
            <input type="email" placeholder="Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Travosy.
      </div>
    </footer>
  );
};

export default Footer;
