import React, { Fragment, useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import { Box, Button, Card, CardContent, CardMedia, Container, Grid } from '@mui/material';
import PublicServices from '../api/public/PublicServices';
import dummyImage from "../components/images/dummyFood.jpeg";
import StarRating from '../components/starRating';
import { useNavigate } from 'react-router-dom';

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(null);

  const navigate = useNavigate()

  const getRestaurants = async (pagination, page, limit, city) => {
    setLoading(true);
    try {
      const result = await PublicServices.getRestaurants(
        pagination ? pagination : true,
        page ? page : 1,
        limit ? limit : 48,
        city ? city : ""
      )
      if (result.responseCode == 200) {
        setRestaurants(() => [...restaurants, ...result.data.restaurants]);
        setCount(result.data.total_count);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  const handleChangePage = () => {
    const newPage = page + 1;
    setPage(newPage);
    getRestaurants("", newPage, "", "");
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <Fragment>
      {/* <HeroSection /> */}
      <Container>
        <Grid container spacing={2} mt={6}>
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
          <Grid item md={12}>
            {!loading && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  pb: 2
                }}
              >
                {restaurants.length != count && (
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
      </Container>
    </Fragment>
  )
}

export default Restaurants