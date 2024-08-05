import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tourpackage from "./components/Tourpackage";
import Blog from "./components/Blog";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Restaurants from "./pages/Restaurants";
import Places from "./pages/Places";
import Hotels from "./pages/Hotels";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/places" element={<Places />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/tourpackage" element={<Tourpackage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
