import React from "react";
import { Grid, Button } from "@mui/material";
import "./TravelAgency.css";
import image from "./images/HotBJ.jpg"; // Update with your image path

const TravelAgency = () => {
  return (
    <div className="travel-agency-section">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <div className="image-container">
            <img src={image} alt="Travel Agency" className="agency-image" />
            <div className="info-badge travel-packages">
              <span className="icon">🌐</span>
              <div className="info-text">
                <p className="info-title">Travel Packages</p>
                <p className="info-value">50+</p>
              </div>
            </div>
            <div className="info-badge visitor">
              <span className="icon">👥</span>
              <div className="info-text">
                <p className="info-title">Visitor</p>
                <p className="info-value">4,589</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="text-container">
            <h2>World Best Travel Agency: Travosy</h2>
            <p>
              Get instant helpful resources about anything on the go, easily
              implement secure money transfer solutions, boost your daily
              efficiency, connect to other app users and create your own Travosy
              network, and much more with just a few taps. commodo consequat.
              Duis aute irure.
            </p>
            <Button variant="contained" className="read-more-button">
              Read More
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TravelAgency;
