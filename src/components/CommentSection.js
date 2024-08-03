import React, { useState } from "react";
import "./CommentSection.css";

const CommentSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic
    console.log({ name, email, message });
  };

  return (
    <div className="comment-section">
      <h2>Leave A Comment:</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Name :"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Email :"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Comment:</label>
          <textarea
            id="message"
            placeholder="Message :"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default CommentSection;
