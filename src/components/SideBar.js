import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const Sidebar = ({ categories, onSelectCategory, onClose, visible }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className={`sidebar ${visible ? "visible" : ""}`}>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <ul>
        <li>
          <Link to="/" className="Sidebt" onClick={onClose}>
            Home
          </Link>
        </li>
        <li className="Sidebt-item">
          <div className="Sidebt" onClick={() => toggleMenu("Hero")}>
            Hero
            <span className="dropdown-arrow">&#9662;</span>
          </div>
          {activeMenu === "Hero" && (
            <ul className="dropdown">
              <li>
                <Link to="/hero-option1" onClick={onClose}>
                  Tour One
                </Link>
              </li>
              <li>
                <Link to="/hero-option2" onClick={onClose}>
                  Tour Two
                </Link>
              </li>
              <li>
                <Link to="/hero-option3" onClick={onClose}>
                  Tour Three
                </Link>
              </li>
              <li>
                <Link to="/hero-option4" onClick={onClose}>
                  Tour Four
                </Link>
              </li>
              <li>
                <Link to="/hero-option5" onClick={onClose}>
                  Tour Five
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="Sidebt-item">
          <div className="Sidebt" onClick={() => toggleMenu("Listing")}>
            Listing
            <span className="dropdown-arrow">&#9662;</span>
          </div>
          {activeMenu === "Listing" && (
            <ul className="dropdown">
              <li>
                <Link to="/listing-option1" onClick={onClose}>
                  Option 1
                </Link>
              </li>
              <li>
                <Link to="/listing-option2" onClick={onClose}>
                  Option 2
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="Sidebt-item">
          <div className="Sidebt" onClick={() => toggleMenu("Pages")}>
            Pages
            <span className="dropdown-arrow">&#9662;</span>
          </div>
          {activeMenu === "Pages" && (
            <ul className="dropdown">
              <li>
                <Link to="/pages-option1" onClick={onClose}>
                  Option 1
                </Link>
              </li>
              <li>
                <Link to="/pages-option2" onClick={onClose}>
                  Option 2
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="Sidebt-item">
          <div className="Sidebt" onClick={() => toggleMenu("Blog")}>
            Blog
            <span className="dropdown-arrow">&#9662;</span>
          </div>
          {activeMenu === "Blog" && (
            <ul className="dropdown">
              <li>
                <Link to="/blog-option1" onClick={onClose}>
                  Option 1
                </Link>
              </li>
              <li>
                <Link to="/blog-option2" onClick={onClose}>
                  Option 2
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/contact" className="Sidebt" onClick={onClose}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
