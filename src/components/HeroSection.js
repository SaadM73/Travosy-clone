import React from "react";
import "./HeroSection.css";
import FormComponent from "./FormComponent";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h2 className="subheading">Beauty of Discovers</h2>
        <h1>
          Let's Leave The Road,
          <br />
          And Take The Travosy
        </h1>
        <p>
          Planning for a trip? We will organize your trip with the best places
          and within best budget!
        </p>
      </div>
      {/* <button className="cta-button">
        <i className="play-icon"></i>
      </button> */}
    </div>
  );
};

export default HeroSection;
