import React from "react";
import { Grid, Card, CardMedia, CardContent } from "@mui/material";
import "./Tours.css";
import CubaImg from "./images/Cuba.jpg";
import NyImg from "./images/Newyork.jpg";
import GreeceImg from "./images/Greece.jpg";
import UsaImg from "./images/MMA.jpg";
import BaliImg from "./images/PMV.jpg";
import BkImg from "./images/HotBJ.jpg";
import StarRating from "./starRating";
import { Link } from "react-router-dom";

const tours = [
  {
    location: "Dubai",
    title: "Cuba Sailing Adventure",
    rating: 5.0,
    reviews: 30,
    price: 58,
    image: CubaImg,
    discount: "10% Off",
  },
  {
    location: "Italy",
    title: "Tour in New York",
    rating: 5.0,
    reviews: 30,
    price: 58,
    image: NyImg,
  },
  {
    location: "Maldivas",
    title: "Discover Greece",
    rating: 5.0,
    reviews: 30,
    price: 58,
    image: GreeceImg,
  },
  {
    location: "USA",
    title: "Museum of Modern Art",
    rating: 5.0,
    reviews: 30,
    price: 58,
    image: UsaImg,
  },
  {
    location: "Bali",
    title: "Peek Mountain View",
    rating: 5.0,
    reviews: 30,
    price: 58,
    image: BaliImg,
  },
  {
    location: "Bangkok",
    title: "Hot Baloon Journey",
    rating: 5.0,
    reviews: 30,
    price: 58,
    image: BkImg,
    discount: "25% Off",
  },
];

const Tours = () => {
  return (
    <div className="tours-section">
      <h2 className="section-title">Tours Packages</h2>
      <p className="section-subtitle">
        Planning for a trip? We will organize your trip with the best places and
        within best budget!
      </p>
      <Grid container spacing={4}>
        {tours.map((tour, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="tour-card">
              <div className="image-container">
                <CardMedia
                  component="img"
                  alt={tour.title}
                  height="200"
                  image={tour.image}
                  className="tour-image"
                />
                {tour.discount && (
                  <div className="discount-badge">{tour.discount}</div>
                )}
                <div className="favorite-icon">
                  <i className="bi bi-heart-fill"></i>
                </div>
              </div>
              <CardContent>
                <p className="location">
                  <i className="bi bi-geo-alt-fill"></i> {tour.location}
                </p>
                <p className="tour-title">{tour.title}</p>
                <div className="rating">
                  <span>Rating: </span>
                  <StarRating rating={tour.rating} />
                  <span className="rating-value">
                    {" "}
                    {tour.rating} ({tour.reviews})
                  </span>
                </div>
                <div className="price-section">
                  <p className="price">
                    <span className="price-value">${tour.price} / Day</span>
                  </p>
                  <Link to="/Tourpackage" className="explore-now-link">
                    Explore Now <i className="bi bi-arrow-right"></i>
                  </Link>
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

export default Tours;
