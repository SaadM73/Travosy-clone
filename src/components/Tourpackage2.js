import React from "react";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Container, Grid, Box, Button, TextField, CardMedia, Rating, Typography, Card, CardContent, Stack, Chip } from "@mui/material";

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
import "./Tourpackage.css";
import { Email } from "@mui/icons-material";

const Tourpackage2 = () => {
  const { state } = useLocation();
  console.log("🚀 ~ Tourpackage ~ state:", state)

  return (
    <>
      <Container className="Tourpackagecontainer">

        <Grid container spacing={3} className="main-content">
          <Grid item md={12} sm={12} xs={12}>
            <CardMedia
              component={"img"}
              src={state?.image}
              sx={{
                width: "100%",
                height: "550px",
                objectFit: "cover"
              }}
            />
          </Grid>

          <Grid item xs={12} md={8} className="left-section">
            <div className="tour-details">
              <h2>{state?.name}</h2>
              <Rating
                name="half-rating-read"
                defaultValue={state?.rating}
                precision={0.5}
                readOnly
              />
              <p>{state?.description}</p>
            </div>
          </Grid>

          <Grid item xs={12} md={4} className="right-section">
            <div className="booking-section">
              <h3>Why Book With Us?</h3>
              <Stack flexDirection={"row"} flexWrap={"wrap"} gap={0.5}>
                {state?.type?.split(" ")?.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                  />
                ))}
              </Stack>
            </div>
            <div className="contact-section">
              <h3>Get a Question?</h3>
              <p>
                Do not hesitate to send us an email. We are an expert team and we
                are happy to know about your concern.
              </p>
              <p>
                <Email />
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

export default Tourpackage2;
