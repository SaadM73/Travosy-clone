import React, { useState, useEffect } from "react";
import { Grid, Card, CardMedia, CardContent } from "@mui/material";
import "./Restaurants.css";
import Res1 from "./images/ResIslamabad.jpeg";
import Res2 from "./images/ResIslamabad2.jpeg";
import Res3 from "./images/ResIslamabad3.jpeg";
import Res4 from "./images/ResLahore.png";
import Res5 from "./images/ResLahore2.jpg";
import Res6 from "./images/ResKarachi.jpg";
import StarRating from "./starRating";
import { Link } from "react-router-dom";
import PublicServices from "../api/public/PublicServices";
import { useNavigate } from "react-router-dom";

const Restaurants = () => {
  const images = {
    img1: Res1,
    img2: Res2,
    img3: Res3,
    img4: Res4,
    img5: Res5,
    img6: Res6,
  }
  const [restaurants, setRestaurants] = useState([]);

  const navigate = useNavigate();

  const getRestaurants = async (pagination, page, limit, city) => {
    try {
      const result = await PublicServices.getRestaurants(
        pagination ? pagination : true,
        page ? page : 1,
        limit ? limit : 10,
        city ? city : ""
      )
      if (result.responseCode == 200) {
        console.log("🚀 ~ getAttractions ~ result.data.attractions):", result.data.restaurants)
        setRestaurants(result.data.restaurants);
      }
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <div className="tours-section">
      <h2 className="section-title">Top Restaurants</h2>
      <p className="section-subtitle">
        Planning for a trip? We will organize your trip with the best Restaurants and
        within best budget!
      </p>
      <Grid container spacing={4}>
        {restaurants.slice(0, 6).map((tour, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="tour-card"
              sx={{ height: "330px" }}
            >
              <div className="image-container">
                <CardMedia
                  component="img"
                  alt={`Res`}
                  height="200"
                  src={images[`img${index + 1}`]}
                  className="tour-image"
                />
                <div className="favorite-icon">
                  <i className="bi bi-heart-fill"></i>
                </div>
              </div>
              <CardContent>
                <div>
                  <p style={{ textAlign: "left" }}>{tour.name}</p>
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
      <div className="see-more-container">
        <a href="#" className="explore-now-link see-more-link">
          See More Tours <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Restaurants;
