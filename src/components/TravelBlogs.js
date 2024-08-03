import React from "react";
import "./TravelBlogs.css";
import blogImage1 from "./images/Cuba.jpg"; // Replace with the actual paths to your images
import blogImage2 from "./images/Greece.jpg";
import blogImage3 from "./images/HotBJ.jpg";
import { Link } from "react-router-dom";

const TravelBlogs = () => {
  const blogs = [
    {
      image: blogImage1,
      title: "This Spanish city is a feast for the eyes: Travosy",
      readTime: "5 min read",
      author: "Travosy",
      description:
        "This is required when, for example, the final text is not yet available.",
    },
    {
      image: blogImage2,
      title: "New Zealand’s South Island brims with majestic",
      readTime: "5 min read",
      author: "Travosy",
      description:
        "This is required when, for example, the final text is not yet available.",
    },
    {
      image: blogImage3,
      title: "When you visit the Eternal Rome City: Travosy",
      readTime: "5 min read",
      author: "Travosy",
      description:
        "This is required when, for example, the final text is not yet available.",
    },
  ];

  return (
    <div className="travel-blogs">
      <h2>Travel Blogs</h2>
      <p className="intro-text">
        This is just a simple text made for this unique and awesome template,
        you can replace it with any text.
      </p>
      <div className="blogs-container">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <div className="blog-meta">
                <span className="read-time">{blog.readTime}</span>
                <span className="author">by {blog.author}</span>
              </div>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <Link to="/blog" className="read-more">
                Read More &gt;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelBlogs;
