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
import { Container, Grid, Box, Button, TextField, CardMedia, Rating, Typography, Card, CardContent } from "@mui/material";

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

const Tourpackage = () => {
  const { state } = useLocation();
  // const type = state?.type.split(" ")
  // console.log("🚀 ~ Tourpackage ~ type:", type)
  console.log("🚀 ~ Tourpackage ~ state:", state)

  return (
    <>
      <Container className="Tourpackagecontainer">

        <Grid container spacing={3} className="main-content">
          <Grid item md={12} sm={12} xs={12}>
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              navigation
              loop={true}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              style={{ height: "275px" }}
            >
              {state?.photos?.map((item, ind) => {
                const imageUrl = item.urlTemplate.split("?")[0];
                return (
                  <SwiperSlide key={ind}>
                    <CardMedia
                      component={"img"}
                      src={imageUrl}
                      sx={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover"
                      }}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </Grid>

          <Grid item xs={12} md={8} className="left-section">
            <div className="tour-details">
              <h2>{state?.title}</h2>
              <Rating
                name="half-rating-read"
                defaultValue={state?.rating}
                precision={0.5}
                readOnly
              />
              <div className="details-table">
                <div className="details-row">
                  <div className="details-value">
                    <ul style={{ display: "flex", gap: "8px" }}>
                      {state?.about?.tags?.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2
              }}>
                <Grid container spacing={2}>
                  <Grid item md={12}>
                    <Typography variant="h5">Attractions nearby</Typography>
                  </Grid>
                  {state?.attractionsNearby?.content?.slice(0, 3)?.map((item, ind) => {
                    const imageUrl = item?.cardPhoto?.urlTemplate?.split("?")[0]
                    return (
                      <Grid key={ind} item md={4}>
                        <Card sx={{ height: "100%" }}>
                          <CardMedia
                            component="img"
                            src={imageUrl}
                            alt="alt image"
                            sx={{
                              width: "100%",
                              height: "120px",
                              objectFit: "cover"
                            }}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h6" component="div" sx={{
                              whiteSpace: "nowrap",
                              width: "100%",
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                            }}>
                              {item.title}
                            </Typography>
                            <Typography variant={"caption"} sx={{ color: "#c4c4c4" }}>{item.distance}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  })}
                  <Grid item md={12}>
                    <Typography variant="h5">Restaurants nearby</Typography>
                  </Grid>
                  {state?.restaurantsNearby?.content?.slice(0, 3)?.map((item, ind) => {
                    const imageUrl = item?.cardPhoto?.urlTemplate?.split("?")[0]
                    console.log(item.bubbleRating.rating)
                    return (
                      <Grid key={ind} item md={4}>
                        <Card sx={{ height: "100%" }}>
                          <CardMedia
                            component="img"
                            src={imageUrl}
                            alt="alt image"
                            sx={{
                              width: "100%",
                              height: "120px",
                              objectFit: "cover"
                            }}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h6" component="div" sx={{
                              whiteSpace: "nowrap",
                              width: "100%",
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                            }}>
                              {item.title}
                            </Typography>
                            <Typography variant={"caption"} sx={{ color: "#c4c4c4" }}>{item.distance}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  })}
                </Grid>
              </Box>
            </div>
          </Grid>

          <Grid item xs={12} md={4} className="right-section">
            <div className="booking-section">
              <h3>Why Book With Us?</h3>
              <ul>
                {state?.amenitiesScreen?.map((item, ind) => (
                  <li>{item.content.join(" ")}</li>
                ))}
              </ul>
            </div>
            <div className="contact-section">
              <h3>Get a Question?</h3>
              <p>
                Do not hesitate to send us an email. We are an expert team and we
                are happy to know about your concern.
              </p>
              <p>
                <Email />
                {state?.price?.providerName}
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
