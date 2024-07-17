import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tourpackage from "./components/Tourpackage";
import Blog from "./components/Blog";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tourpackage" element={<Tourpackage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
