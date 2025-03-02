"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialSlider.css";

const testimonials = [
  {
    id: 1,
    name: "John Sans",
    avatar: "/images/herobg.png",
    content:
      "Incredible family trip with seamless planning and unique cultural experiences. Cant wait for more!",
    date: "14 November",
    rating: 5,
  },
  {
    id: 2,
    name: "Eesha Rana",
    avatar: "/images/herobg.png",
    content:
      "Remarkable solo trek with expert guides. The attention to detail was top-notch. Highly recommend!",
    date: "7 June",
    rating: 5,
  },
  {
    id: 3,
    name: "Sami Khan",
    avatar: "/images/herobg.png",
    content:
      "Our anniversary trip was magical, filled with romance and meticulously planned excursions. Perfect in every way!",
    date: "9 June",
    rating: 5,
  },
  {
    id: 4,
    name: "Hassan Ali",
    avatar: "/images/herobg.png",
    content: "Amazing adventure, great service, and wonderful memories.",
    date: "21 March",
    rating: 4,
  },
  {
    id: 5,
    name: "Ayesha Noor",
    avatar: "/images/herobg.png",
    content:
      "A dream vacation come true! Everything was perfect from start to finish.",
    date: "5 July",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default: 3 slides on large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024, // Tablets & medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="h-px w-16 bg-[#312F93]"></div>
          <span className="text-l font-bold uppercase heading">
            testimonials
          </span>
          <div className="h-px w-16 bg-[#312F93]"></div>
        </div>
        <h2 className="testimonial-title">What Our Travelers Say</h2>
        <p className="testimonial-subtitle">
          Discover the Unforgettable Experiences Our Travelers Share
        </p>
      </div>

      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header-content">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="testimonial-avatar"
              />
              <h3 className="testimonial-name">{testimonial.name}</h3>
            </div>
            <p className="testimonial-content">{testimonial.content}</p>
            <div className="testimonial-footer">
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <span className="testimonial-date">{testimonial.date}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;





// "use client";

// import React, { useState, useEffect } from "react";
// import "./TestimonialSlider.css";

// const testimonials = [
//   {
//     id: 1,
//     name: "John Sans",
//     avatar: "/images/herobg.png",
//     content:
//       "Incredible family trip with seamless planning and unique cultural experiences. Cant wait for more!",
//     date: "14 November",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Eesha Rana",
//     avatar: "/images/herobg.png",
//     content:
//       "Remarkable solo trek with expert guides. The attention to detail was top-notch. Highly recommend!",
//     date: "7 June",
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: "Sami Khan",
//     avatar: "/images/herobg.png",
//     content:
//       "Our anniversary trip was magical, filled with romance and meticulously planned excursions. Perfect in every way!",
//     date: "9 June",
//     rating: 5,
//   },
// ];

// const TestimonialSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="testimonial-container">
//       <div className="testimonial-header">
//         {/* <span className="testimonial-label">TESTIMONIAL</span> */}
//         <div className="flex justify-center items-center gap-2 mb-4">
//           <div className="h-px w-16 bg-[#312F93]"></div>
//           <span className="text-l font-bold uppercase heading">
//             testimonials
//           </span>
//           <div className="h-px w-16 bg-[#312F93]"></div>
//         </div>
//         <h2 className="testimonial-title">What Our Travelers Say</h2>
//         <p className="testimonial-subtitle">
//           Discover the Unforgettable Experiences Our Travelers Share
//         </p>
//       </div>

//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div className="testimonial-slider">
//           <div
//             className="testimonial-track"
//             style={{
//               transform: `translateX(-${currentIndex * 33.33}%)`,
//             }}
//           >
//             {testimonials.map((testimonial) => (
//               <div key={testimonial.id} className="testimonial-card">
//                 <div className="testimonial-header-content">
//                   <img
//                     src={testimonial.avatar}
//                     alt={testimonial.name}
//                     className="testimonial-avatar"
//                   />
//                   <h3 className="testimonial-name">{testimonial.name}</h3>
//                 </div>
//                 <p className="testimonial-content">{testimonial.content}</p>
//                 <div className="testimonial-footer">
//                   <div className="testimonial-stars">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <span key={i} className="star">
//                         ★
//                       </span>
//                     ))}
//                   </div>
//                   <span className="testimonial-date">{testimonial.date}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button className="nav-button prev" onClick={prevSlide}>
//             ‹
//           </button>
//           <button className="nav-button next" onClick={nextSlide}>
//             ›
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;
