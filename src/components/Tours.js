import React, { useState, useEffect } from "react";
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
import PublicServices from "../api/public/PublicServices";
import { useNavigate } from "react-router-dom";

const Tours = () => {
  const [tours, setTours] = useState([]);

  const navigate = useNavigate();

  const getAttractions = async (pagination, page, limit, city) => {
    try {
      const result = await PublicServices.getAttractions(
        pagination ? pagination : true,
        page ? page : 1,
        limit ? limit : 6,
        city ? city : ""
      )
      if (result.responseCode == 200) {
        console.log("🚀 ~ getAttractions ~ result.data.attractions):", result.data.attractions)
        setTours(result.data.attractions);
      }
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getAttractions();
  }, []);

  return (
    <div className="tours-section">
      <h2 className="section-title">Top Places</h2>
      <p className="section-subtitle">
        Planning for a trip? We will organize your trip with the best places and
        within best budget!
      </p>
      <Grid container spacing={4}>
        {tours.map((tour, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="tour-card"
              onClick={() => navigate("/tourpackage-details", { state: tour })}
              sx={{ height: "330px" }}
            >
              <div className="image-container">
                <CardMedia
                  component="img"
                  alt={tour.title}
                  height="200"
                  image={tour.image == "https://developers.elementor.com/path/to/placeholder.png" ? CubaImg : tour.image}
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
        <a
          className="explore-now-link see-more-link"
          onClick={() => navigate("/places")}
          style={{
            border: "1px solid #e30037",
            borderRadius: "4px",
            color: "#e30037",
            padding: "10px 20px",
            cursor: "pointer"
          }}
        >
          See More Tours <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Tours;
