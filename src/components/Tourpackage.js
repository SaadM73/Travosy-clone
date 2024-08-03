import React from "react";
import "./Tourpackage.css";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Container, Grid, Box, Button, TextField } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import images
import image1 from "./images/HotelKarachi.jpg";
import image2 from "./images/HotelLahore.jpg";
import image3 from "./images/HotelIslamabad.jpg";

import { useLocation } from "react-router-dom";

const Tourpackage = () => {
  const { state } = useLocation();
  const type = state?.type.split(" ")
  console.log("🚀 ~ Tourpackage ~ type:", type)
  console.log("🚀 ~ Tourpackage ~ state:", state)

  return (
    <>
      <Box className="main-banner" sx={{ backgroundImage: `url(${state?.image})` }}>
        <h1>{state?.name}</h1>
      </Box>
      <Container className="Tourpackagecontainer">

        <Grid container spacing={3} className="main-content">
          <Grid item xs={12} md={8} className="left-section">
            <div className="tour-details">
              <h2>Tour Details</h2>
              <p>
                {state?.description}
              </p>
              <div className="details-table">
                <div className="details-row">
                  <div className="details-value">
                    <ul>
                      {type?.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={4} className="right-section">
            <div className="booking-section">
              <h3>Why Book With Us?</h3>
              <ul>
                <li>
                  <i className="fas fa-check"></i> No-hassle best price
                  guarantee
                </li>
                <li>
                  <i className="fas fa-headset"></i> Customer care available
                </li>
                <li>
                  <i className="fas fa-star"></i> Hand-picked Tours & Activities
                </li>
                <li>
                  <i className="fas fa-umbrella-beach"></i> Travel Insurance
                </li>
              </ul>
            </div>
            <div className="contact-section">
              <h3>Get a Question?</h3>
              <p>
                Do not hesitate to give us a call. We are an expert team and we
                are happy to talk to you.
              </p>
              <p>
                <i className="fas fa-phone"></i> {state?.phone}
              </p>
              <p>
                <i className="fas fa-envelope"></i>{" "}
                {state?.email}
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Tourpackage;
