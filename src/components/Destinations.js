import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import images
import image1 from "./images/Cuba.jpg";
import image2 from "./images/Greece.jpg";
import image3 from "./images/HotBJ.jpg";
import image4 from "./images/MMA.jpg";
import image5 from "./images/Newyork.jpg";
import image6 from "./images/PMV.jpg";

import "./Destinations.css";

const Destinations = () => {
  const images = [
    { src: image1, title: "Rome, Italy", subtitle: "3 Hotels" },
    { src: image2, title: "Paris, France", subtitle: "3 Hotels" },
    { src: image3, title: "Lumpur, Malaysia", subtitle: "3 Hotels" },
    { src: image4, title: "Goa, India", subtitle: "3 Hotels" },
    { src: image5, title: "Singapore", subtitle: "3 Hotels" },
    { src: image6, title: "Whistler, Canada", subtitle: "3 Hotels" },
  ];

  return (
    <div className="SliderContainer">
      <h2 className="section-title">Top Destinations</h2>
      <p className="section-subtitle">
        Planning for a trip? We will organize your trip with the best places and
        within best budget!
      </p>
      <Swiper
        spaceBetween={20}
        slidesPerView=""
        navigation={{
          nextEl: ".swiper-button-next.custom-next",
          prevEl: ".swiper-button-prev.custom-prev",
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {images.map((slide, index) => (
          <SwiperSlide key={index} className="slide">
            <img src={slide.src} alt={`Slide ${index + 1}`} />
            <div className="slide-overlay">
              <span className="slideTitle">{slide.title}</span>
              <p>{slide.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom navigation buttons (outside the Swiper container) */}
        <div className="custom-nav">
          <button type="button" className="swiper-button-prev custom-prev">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button type="button" className="swiper-button-next custom-next">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default Destinations;
