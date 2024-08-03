import React, { useEffect, useState } from "react";
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
import image1 from "./images/Karachi.jpg";
import image2 from "./images/Lahore.jpg";
import image3 from "./images/Islamabad.jpg";

import "./Destinations.css";
import PublicServices from "../api/public/PublicServices";
import { useNavigate } from "react-router-dom";

const Destinations = () => {
  const [hotels, setHotels] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);

  const images = [
    { src: image1, title: "Karachi, Pakistan" },
    { src: image2, title: "Lahore, Pakistan" },
    { src: image3, title: "Islamabad, Pakistan" },
  ];

  const navigate = useNavigate();

  const getHotels = async (pagination, page, limit, city) => {
    try {
      const result = await PublicServices.getHotels(
        pagination ? pagination : true,
        page ? page : 1,
        limit ? limit : 10,
        city ? city : ""
      );
      if (result.responseCode == 200) {
        console.log("🚀 ~ getHotels ~ result.data.hotels:", result.data.hotels)
        setHotels(result.data.hotels)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getHotels()
  }, [])

  return (
    <div className="SliderContainer">
      <h2 className="section-title">Top Hotels</h2>
      <p className="section-subtitle">
        Planning for a trip? We will organize your trip with the best hotels and
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
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((slide, index) => {
          const [city] = slide.title.split(", ");
          return (
            <SwiperSlide key={index} className="slide"
              onClick={() => navigate("/listing", {
                state: {
                  navigateFrom: "page",
                  city: { city }
                }
              })}
            >
              <img src={slide.src} alt={`Slide ${index + 1}`} />
              <div className="slide-overlay">
                <span className="slideTitle">{slide.title}</span>
                <p>{slide.subtitle}</p>
              </div>
            </SwiperSlide>
          )
        })}

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
