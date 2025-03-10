import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Header.css";
import logo from "./images/logoTravosy.png";
import logo2 from "./images/logoTravosy2.png";

import pfp from "./images/profile.jpg";

const Header = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const taglines = [
    "Unbeatable Quality, Unmatched Prices",
    "Your One-Stop Shopping Destination",
    "Fast Shipping, Happy Customers",
  ];

  const isLessThan900 = useMediaQuery("(max-width:900px)");
  const isLessThan600 = useMediaQuery("(max-width:600px)");
  const [isTopNavVisible, setIsTopNavVisible] = useState(true);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsTopNavVisible(false);
        setIsScrolledDown(true);
      } else {
        setIsTopNavVisible(true);
        setIsScrolledDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <>
      {isTopNavVisible && (
        <div className="top-nav">
          <div className="top-nav-left">
            <span>
              <AccessTimeIcon className="time-icon" /> Mon–Sat: 9am to 6pm
            </span>
            <span>
              <LocationOnIcon className="location-icon" /> Houston, USA 485
            </span>
          </div>
          <div className="top-nav-right">
            <span>
              <EmailIcon className="mail-icon" /> contact@example.com
            </span>
            <span>
              <a href="https://www.facebook.com">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com">
                <InstagramIcon />
              </a>
              <a href="https://www.twitter.com">
                <TwitterIcon />
              </a>
              <a href="tel:+1234567890">
                <PhoneIcon />
              </a>
            </span>
          </div>
        </div>
      )}
      <nav className={`navbar ${isScrolledDown ? "scrolled" : ""}`}>
        <Grid container alignItems="center">
          <Grid item xs={3} sm={2}>
            <Link to="/">
              <img
                src={isScrolledDown ? logo2 : logo}
                className="logoimg"
                alt="Logo"
              />
            </Link>
          </Grid>
          {!isLessThan900 && (
            <Grid item sm={8} className="navbtbar">
              <ul className="navbt-list">
                <li className="navbt-item">
                  <Link to="/" className="navbt">
                    Hero
                    <svg
                      className="dropdown-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </Link>
                  <ul className="dropdown">
                    <li>
                      <Link to="/hero-option1">Tour One</Link>
                    </li>
                    <li>
                      <Link to="/hero-option1">Tour Two</Link>
                    </li>
                    <li>
                      <Link to="/hero-option1">Tour Three</Link>
                    </li>
                    <li>
                      <Link to="/hero-option1">Tour Four</Link>
                    </li>
                    <li>
                      <Link to="/hero-option1">Tour Five</Link>
                    </li>
                  </ul>
                </li>
                <li className="navbt-item">
                  <Link to="/listing" className="navbt">
                    Listing
                    <svg
                      className="dropdown-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </Link>
                  <ul className="dropdown">
                    <li>
                      <Link to="/listing-option1">Option 1</Link>
                    </li>
                    <li>
                      <Link to="/listing-option2">Option 2</Link>
                    </li>
                  </ul>
                </li>
                <li className="navbt-item">
                  <Link to="/pages" className="navbt">
                    Pages
                    <svg
                      className="dropdown-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </Link>
                  <ul className="dropdown">
                    <li>
                      <Link to="/pages-option1">Option 1</Link>
                    </li>
                    <li>
                      <Link to="/pages-option2">Option 2</Link>
                    </li>
                  </ul>
                </li>
                <li className="navbt-item">
                  <Link to="/blog" className="navbt">
                    Blog
                    <svg
                      className="dropdown-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="10 0 24 24"
                      width="16"
                      height="16"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </Link>
                  <ul className="dropdown">
                    <li>
                      <Link to="/blog-option1">Option 1</Link>
                    </li>
                    <li>
                      <Link to="/blog-option2">Option 2</Link>
                    </li>
                  </ul>
                </li>
                <li className="navbt-item">
                  <Link to="/contact" className="navbt">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Grid>
          )}
          <Grid item xs={2} sm={1} container justifyContent="flex-end">
            <button className="profile-button">
              <img src={pfp} alt="Profile" className="profile-img" />
            </button>
          </Grid>
        </Grid>
      </nav>
    </>
  );
};

export default Header;
