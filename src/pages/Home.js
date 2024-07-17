import React from "react";
import HeroSection from "../components/HeroSection";
import FormComponent from "../components/FormComponent";
import Destinations from "../components/Destinations";
import Tours from "../components/Tours";
import TravelAgency from "../components/TravelAgency";
import TravelBlogs from "../components/TravelBlogs";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
// import TourList from "../components/TourList";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FormComponent />
      <Destinations />
      <Tours />
      <TravelAgency />
      <Testimonials />
      <TravelBlogs />
      <Footer />
    </div>
  );
};

export default Home;
