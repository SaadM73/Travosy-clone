import React from "react";
import "./Blog.css";
import image from "./images/Greece.jpg";
import CommentSection from "./CommentSection";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  GitHub,
  YouTube,
} from "@mui/icons-material";

import Footer from "./Footer";
import pfp from "./images/profile.jpg";

const Blog = () => {


  
  return (
    <>
      <div className="article-container">
        <div className="main-content">
          <div className="article-header">
            <h1>8 incredible US road trips to take this summer</h1>
            <p className="subtitle">
              Cue up "Life is a Highway" for these stellar drives.
            </p>
            <div className="author-info">
              <span>
                By Erika Owen and Shayla Martin • Jun 7, 2024 • 10 minutes read
              </span>
            </div>
          </div>
          <img
            src={image} // Replace with the actual image URL
            alt="Utah"
            className="main-image"
          />
          <p className="image-credit">Utah • Image: picadoo66/Getty Images</p>
          <div className="article-content">
            <p>
              The most well-known dummy text is the 'Lorem Ipsum', which is said
              to have originated in the 16th century. Lorem Ipsum is composed in
              a pseudo-Latin language which more or less corresponds to 'proper'
              Latin. It contains a series of real Latin words. This ancient
              dummy text is also incomprehensible, but it imitates the rhythm of
              most European languages in Latin script.
              <p>
                " There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form, by injected humour, or randomised words which don't look
                even slightly believable. "
              </p>
              The advantage of its Latin origin and the relative meaninglessness
              of Lorum Ipsum is that the text does not attract attention to
              itself or distract the viewer's attention from the layout.
            </p>
            <div className="jump-to">
              <span>Jump to:</span>
              <ul>
                <li>The Blue Ridge Parkway</li>
                <li>Austin to St. Louis</li>
                <li>Yellowstone and beyond</li>
                <li>Route 66</li>
                <li>Utah’s national parks</li>
                <li>California’s Highway 1</li>
                <li>Orlando to Houston</li>
                <li>Coastal Maine</li>
              </ul>
            </div>
          </div>
          {/* <div className="section-content">
          <h2>Driving the Blue Ridge Parkway</h2>
          <img
            src={image} // Replace with the actual image URL
            alt="Blue Ridge Parkway"
            className="section-image"
          />
          {/* Add content for each section as needed }
        </div> */}
          <CommentSection />
        </div>
        <div className="sidebar">
          <div className="author-section">
            <h3>Author</h3>
            <img src={pfp} alt="Cristina Romsey" className="author-image" />
            <h4>Cristina Romsey</h4>
            <p>Content Writer</p>
          </div>
          <div className="social-sites">
            <h3>Social sites</h3>
            <div className="social-icons">
              <Facebook className="social-icon" />
              <Instagram className="social-icon" />
              <Twitter className="social-icon" />
              <LinkedIn className="social-icon" />
              <GitHub className="social-icon" />
              <YouTube className="social-icon" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
