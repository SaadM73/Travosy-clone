import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonials.css";
import profile1 from "./images/profile.jpg";
import profile2 from "./images/profile.jpg";
import profile3 from "./images/profile.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      text: '"One disadvantage of Lorem Ipsum is that in Latin certain letters appear more frequently than others."',
      name: "Jemina CLone",
      position: "Manager",
      image: profile1,
    },
    {
      text: '"Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts."',
      name: "Smith Vodka",
      position: "Manager",
      image: profile2,
    },
    {
      text: '"There is now an abundance of readable dummy texts. These are usually used when a text is required."',
      name: "Cristino Murfi",
      position: "Manager",
      image: profile3,
    },
    {
      text: '"There is now an abundance of readable dummy texts. These are usually used when a text is required."',
      name: "Gareth Southgate",
      position: "Manager",
      image: profile3,
    },
    {
      text: '"There is now an abundance of readable dummy texts. These are usually used when a text is required."',
      name: "abcdefg",
      position: "Manager",
      image: profile3,
    },
  ];
  return (
    <div className="testimonials">
      <h2 className="testimonials-title">What Our Users Say</h2>
      <p className="testimonials-subtitle">
        This is just a simple text made for this unique and awesome template,
        you can replace it with any text.
      </p>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]} // Import modules directly
        spaceBetween={30}
        slidesPerView="1" // Ensure the initial slidesPerView is set
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 3000, // Adjust the delay as needed
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <div className="testimonial-card">
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-rating">★★★★★</div>
            </div>
            <div className="testimonial-author">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="author-image"
              />
              <h3 className="author-name">{testimonial.name}</h3>
              <p className="author-position">{testimonial.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
