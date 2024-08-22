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
import Plan from "./pages/Plan";
import Layout from "./layout";
import Tourpackage2 from "./components/Tourpackage2";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/places" element={<Places />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/tourpackage" element={<Tourpackage />} />
          <Route path="/tourpackage-details" element={<Tourpackage2 />} />
          <Route path="/plan" element={<Plan />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
