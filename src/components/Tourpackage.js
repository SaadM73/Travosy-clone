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
import image1 from "./images/Cuba.jpg";
import image2 from "./images/Greece.jpg";
import image3 from "./images/HotBJ.jpg";
import image4 from "./images/MMA.jpg";
import image5 from "./images/Newyork.jpg";
import image6 from "./images/PMV.jpg";

const Tourpackage = () => {
  const images = [
    { src: image1, title: "Rome, Italy", subtitle: "3 Hotels" },
    { src: image2, title: "Paris, France", subtitle: "3 Hotels" },
    { src: image3, title: "Lumpur, Malaysia", subtitle: "3 Hotels" },
    { src: image4, title: "Goa, India", subtitle: "3 Hotels" },
    { src: image5, title: "Singapore", subtitle: "3 Hotels" },
    { src: image6, title: "Whistler, Canada", subtitle: "3 Hotels" },
  ];

  return (
    <>
      <Container className="Tourpackagecontainer">
        <Box className="main-banner">
          <h1>3 Days Trekking Trip to Spinkhor Lake Kalam</h1>
        </Box>

        <Grid container spacing={3} className="main-content">
          <Grid item xs={12} md={8} className="left-section">
            <p>3 Days (2 Nights) | Availability: June 1 - Oct 30</p>
            <p>Lahore / Islamabad to Spinkhor Lake</p>
            <div className="tour-details">
              <h2>Tour Details</h2>
              <p>
                Let's get ready for an adventurous trekking trip to Spinkhor
                Lake of Utror Swat Valley! Pack your bags and enjoy the trekking
                trip to the beautiful forest of Swat. Bring your friends along
                to make the trip memorable.
              </p>
              <div className="details-table">
                <div className="details-row">
                  <div className="details-header">
                    Departure & Return Location
                  </div>
                  <div className="details-value">
                    Lahore / Islamabad (
                    <a href="https://maps.google.com">Google Map</a>)
                  </div>
                </div>
                <div className="details-row">
                  <div className="details-header">Departure Time</div>
                  <div className="details-value">10:30PM</div>
                </div>
                <div className="details-row">
                  <div className="details-header">Price Includes</div>
                  <div className="details-value">
                    <ul>
                      <li>Complete Tour Management with dedicated Guide</li>
                      <li>Travel on dedicated Transport (Hiace)</li>
                      <li>Accommodation 3 to 4 person</li>
                      <li>Quality Food Serving (2 Meals per day)</li>
                      <li>Refreshments during Travel</li>
                      <li>All Toll and Taxes included</li>
                      <li>Hassle Free Trip</li>
                      <li>Pick & Drop</li>
                    </ul>
                  </div>
                </div>
                <div className="details-row">
                  <div className="details-headerexclude">Price Excludes</div>
                  <div className="details-valueexclude">
                    <ul>
                      <li>
                        Porters (for carrying personal equipment of participant)
                      </li>
                      <li>Extra expenses due to landslides</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="itinerary">
              <h3>Itinerary</h3>
              <ul>
                <li>Day 0 - Departure from Lahore</li>
                <li>
                  Day 1 - Breakfast at Bahrain, Departure for Kalam, Arrival at
                  Kalam...
                </li>{" "}
                <li>
                  Day 2 - Breakfast at Bahrain, Departure for Kalam, Arrival at
                  Kalam...
                </li>{" "}
                <li>
                  Day 3 - Breakfast at Bahrain, Departure for Kalam, Arrival at
                  Kalam...
                </li>{" "}
                <li>
                  Day 4 - Breakfast at Bahrain, Departure for Kalam, Arrival at
                  Kalam...
                </li>{" "}
                <li>
                  Day 5 - Breakfast at Bahrain, Departure for Kalam, Arrival at
                  Kalam...
                </li>
              </ul>
            </div>
            <Swiper
              spaceBetween={20}
              slidesPerView="1"
              navigation={{
                nextEl: ".swiper-button-next.custom-next",
                prevEl: ".swiper-button-prev.custom-prev",
              }}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {images.map((slide, index) => (
                <SwiperSlide key={index} className="slide">
                  <img src={slide.src} alt={`Slide ${index + 1}`} />
                  <div className="slide-overlay">
                    <span className="slideTitle">{slide.title}</span>
                    <p>{slide.subtitle}</p>
                  </div>
                </SwiperSlide>
              ))}

              {/* Custom navigation buttons (outside the Swiper container) */}
              <div className="custom-nav">
                <Button
                  type="button"
                  className="swiper-button-prev custom-prev"
                >
                  <i className="fas fa-chevron-left"></i>
                </Button>
                <Button
                  type="button"
                  className="swiper-button-next custom-next"
                >
                  <i className="fas fa-chevron-right"></i>
                </Button>
              </div>
            </Swiper>
          </Grid>

          <Grid item xs={12} md={4} className="right-section">
            <div className="booking-section">
              <h2>As low as Rs17,500</h2>
              <TextField type="date" fullWidth margin="normal" />
              <TextField
                type="number"
                placeholder="Number Of People"
                fullWidth
                margin="normal"
              />
              <Button variant="contained" color="primary" fullWidth>
                PROCEED BOOKING
              </Button>

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
                <i className="fas fa-phone"></i> +92 321 410 6223
              </p>
              <p>
                <i className="fas fa-envelope"></i>{" "}
                info@pakistantravelplaces.com
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
