import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Grid, useMediaQuery } from "@mui/material";
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
      <nav className={`navbar ${isScrolledDown && "scrolled"}`}>
        <Container>
          <Grid container alignItems="center">
            <Grid item xs={3} sm={2} md={4}>
              <Link to="/">
                <img
                  src={isScrolledDown ? logo2 : logo}
                  className="logoimg"
                  alt="Logo"
                />
              </Link>
            </Grid>
            <Grid item md={8} className="navbtbar" display={{ md: "flex", sm: "none", xs: "none" }}>
              <ul className="navbt-list">
                <li className="navbt-item">
                  <Link to="/" className="navbt">
                    Home
                  </Link>
                </li>
                <li className="navbt-item">
                  <Link to="/hotels" className="navbt">
                    Hotels
                  </Link>
                </li>
                <li className="navbt-item">
                  <Link to="/places" className="navbt">
                    Places
                  </Link>
                </li>
                <li className="navbt-item">
                  <Link to="/restaurants" className="navbt">
                    Restaurants
                  </Link>
                </li>
                <li className="navbt-item">
                  <Link to="/plan" className="navbt">
                    Plan a trip
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </nav>
    </>
  );
};

export default Header;
