import React, { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PublicServices from '../api/public/PublicServices';
import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Container, Grid } from '@mui/material';
import StarRating from '../components/starRating';
import dummyImage from "../components/images/dummyHotel.jpeg";
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

function Listing() {
  const [data, setData] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [places, setPlaces] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { state } = useLocation();
  console.log("🚀 ~ Listing ~ state:", state)

  const getData = async (page) => {
    setLoading(true);
    try {
      let result;
      if (state?.city?.city == "Karachi") {
        result = await PublicServices.getHotels(true, page ? page : 1, 48, state?.city?.city);

      };
      if (state?.city?.city == "Lahore") {
        result = await PublicServices.getHotels(true, 1, 48, state?.city?.city);
      };
      if (state?.city?.city == "Islamabad") {
        result = await PublicServices.getHotels(true, 1, 48, state?.city?.city);
      };

      if (result.responseCode == 200) {
        setData(() => [...data, ...result.data.hotels]);
        setCount(result.data.total_count);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  const searchData = async () => {
    try {
      const result = await PublicServices.searchData(state?.search, state?.selectedType);
      console.log("🚀 ~ searchData ~ result:", result)
      if (result.responseCode == 200) {
        setHotels(result.data.hotels);
        setPlaces(result.data.attractions);
        setRestaurants(result.data.restaurants);
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleChangePage = () => {
    const newPage = page + 1;
    setPage(newPage);
    getData(newPage);
  }

  useEffect(() => {
    if (state?.navigateFrom == "page") {
      getData();
    }
    if (state.navigateFrom == "search") {
      searchData();
    }
  }, []);

  return (
    <Fragment>
      {/* <HeroSection /> */}
      <Container>
        {state?.navigateFrom == "page" && (
          <Grid container spacing={4} mt={6}>
            {data.map((tour, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className="tour-card" onClick={() => navigate("/tourpackage", { state: tour })}>
                  <div className="image-container">
                    <CardMedia
                      component="img"
                      alt={tour.title}
                      height="200"
                      image={tour.image == null ? dummyImage : tour.image}
                      className="tour-image"
                    />
                    <div className="favorite-icon">
                      <i className="bi bi-heart-fill"></i>
                    </div>
                  </div>
                  <CardContent>
                    <div>
                      <p>{tour.name}</p>
                    </div>
                    <div className="rating">
                      <span>Rating: </span>
                      <StarRating rating={5} />
                      <span className="rating-value">
                        {" "}
                        {tour.rating != null ? tour.rating : "5.0"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            <Grid item md={12}>
              {!loading && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    pb: 2
                  }}
                >
                  {data.length != count && (
                    <Button
                      variant={"contained"}
                      sx={{
                        p: "6px 24px",
                        background: "#e30037",
                        border: "1px solid transparent",
                        color: "#ffffff",
                        ":hover": {
                          background: "transparent",
                          border: "1px solid #e30037",
                          color: "#e30037",
                        }
                      }}
                      onClick={handleChangePage}
                    >
                      Load More
                    </Button>
                  )}
                </Box>
              )}
            </Grid>
          </Grid>
        )}
        {state?.navigateFrom == "search" && (
          <Grid container mt={6}>
            {hotels.length > 0 && (
              <Grid item md={12} sm={12} xs={12}>
                <Grid container spacing={4}>
                  <Grid item md={12} sm={12} xs={12}>
                    <h3>Hotels</h3>
                  </Grid>
                  {hotels.map((tour, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card className="tour-card" onClick={() => navigate("/tourpackage", { state: tour })}>
                        <div className="image-container">
                          <CardMedia
                            component="img"
                            alt={tour.title}
                            height="200"
                            image={tour.image == null ? dummyImage : tour.image}
                            className="tour-image"
                          />
                          <div className="favorite-icon">
                            <i className="bi bi-heart-fill"></i>
                          </div>
                        </div>
                        <CardContent>
                          <div>
                            <p>{tour.name}</p>
                          </div>
                          <div className="rating">
                            <span>Rating: </span>
                            <StarRating rating={5} />
                            <span className="rating-value">
                              {" "}
                              {tour.rating != null ? tour.rating : "5.0"}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            )}
            {places.length > 0 && (
              <Grid item md={12} sm={12} xs={12}>
                <Grid container spacing={4}>
                  <Grid item md={12} sm={12} xs={12}>
                    <h3>Places</h3>
                  </Grid>
                  {places.map((tour, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card className="tour-card" onClick={() => navigate("/tourpackage", { state: tour })}>
                        <div className="image-container">
                          <CardMedia
                            component="img"
                            alt={tour.title}
                            height="200"
                            image={tour.image == null ? dummyImage : tour.image}
                            className="tour-image"
                          />
                          <div className="favorite-icon">
                            <i className="bi bi-heart-fill"></i>
                          </div>
                        </div>
                        <CardContent>
                          <div>
                            <p>{tour.name}</p>
                          </div>
                          <div className="rating">
                            <span>Rating: </span>
                            <StarRating rating={5} />
                            <span className="rating-value">
                              {" "}
                              {tour.rating != null ? tour.rating : "5.0"}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            )}
            {restaurants.length > 0 && (
              <Grid item md={12} sm={12} xs={12}>
                <Grid container spacing={4}>
                  <Grid item md={12} sm={12} xs={12}>
                    <h3>Restaurants</h3>
                  </Grid>
                  {restaurants.map((tour, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card className="tour-card" onClick={() => navigate("/tourpackage", { state: tour })}>
                        <div className="image-container">
                          <CardMedia
                            component="img"
                            alt={tour.title}
                            height="200"
                            image={tour.image == null ? dummyImage : tour.image}
                            className="tour-image"
                          />
                          <div className="favorite-icon">
                            <i className="bi bi-heart-fill"></i>
                          </div>
                        </div>
                        <CardContent>
                          <div>
                            <p>{tour.name}</p>
                          </div>
                          <div className="rating">
                            <span>Rating: </span>
                            <StarRating rating={5} />
                            <span className="rating-value">
                              {" "}
                              {tour.rating != null ? tour.rating : "5.0"}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            )}
          </Grid>
        )}
      </Container>
    </Fragment>
  )
}

export default Listing