"use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import "./Packages.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const packageData = [
//   {
//     id: 1,
//     title: "Phuket Island Escape",
//     price: "£697 per person",
//     image: "/images/bg1.jpg",
//     rating: "★★★★",
//     features: [
//       { icon: "✈️", text: "Round trip economy class included" },
//       { icon: "🚌", text: "Extra Cost will be included" },
//       { icon: "🍽️", text: "Meals not included" },
//     ],
//   },
//   {
//     id: 2,
//     title: "Bali Adventure",
//     price: "£799 per person",
//     image: "/images/bg2.jpg",
//     rating: "★★★★★",
//     features: [
//       { icon: "✈️", text: "Round trip economy class included" },
//       { icon: "🏨", text: "Hotel accommodation included" },
//       { icon: "🍽️", text: "Breakfast included" },
//     ],
//   },
//   {
//     id: 3,
//     title: "Maldives Luxury Retreat",
//     price: "£1200 per person",
//     image: "/images/beach2.jpg",
//     rating: "★★★★★",
//     features: [
//       { icon: "✈️", text: "Business class flights included" },
//       { icon: "🏝️", text: "Private beach villa" },
//       { icon: "🍽️", text: "All meals included" },
//     ],
//   },
//   // Duplicating the data to have enough slides
//   {
//     id: 4,
//     title: "Phuket Island Escape",
//     price: "£697 per person",
//     image: "/images/bg1.jpg",
//     rating: "★★★★",
//     features: [
//       { icon: "✈️", text: "Round trip economy class included" },
//       { icon: "🚌", text: "Extra Cost will be included" },
//       { icon: "🍽️", text: "Meals not included" },
//     ],
//   },
//   {
//     id: 5,
//     title: "Bali Adventure",
//     price: "£799 per person",
//     image: "/images/bg2.jpg",
//     rating: "★★★★★",
//     features: [
//       { icon: "✈️", text: "Round trip economy class included" },
//       { icon: "🏨", text: "Hotel accommodation included" },
//       { icon: "🍽️", text: "Breakfast included" },
//     ],
//   },
//   {
//     id: 6,
//     title: "Maldives Luxury Retreat",
//     price: "£1200 per person",
//     image: "/images/beach2.jpg",
//     rating: "★★★★★",
//     features: [
//       { icon: "✈️", text: "Business class flights included" },
//       { icon: "🏝️", text: "Private beach villa" },
//       { icon: "🍽️", text: "All meals included" },
//     ],
//   },
// ];

// const Packages = () => {
//   const [slidesToShow, setSlidesToShow] = useState(3);

//   // Responsive settings based on screen size
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setSlidesToShow(1); // Mobile
//       } else if (window.innerWidth < 1024) {
//         setSlidesToShow(2); // Tablet
//       } else {
//         setSlidesToShow(3); // Desktop
//       }
//     };

//     // Set initial value
//     handleResize();
    
//     // Add event listener for window resize
//     window.addEventListener('resize', handleResize);
    
//     // Clean up the event listener
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Slick slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: slidesToShow,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000, // 2 seconds pause between transitions
//     cssEase: "ease-in-out",
//     pauseOnHover: true,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   };

//   return (
//     <div className="packages-container">
//       <div className="flex justify-center items-center gap-2 mb-4">
//         <div className="h-px w-16 bg-[#312F93]"></div>
//         <span className="text-l font-bold uppercase heading">
//           what we offer
//         </span>
//         <div className="h-px w-16 bg-[#312F93]"></div>
//       </div>
//       <h1 className="packages-header">Discover Our Travel Packages</h1>
//       <p className="packages-subtitle">
//         Expertly Curated Journeys Designed to Inspire and Transform Your Next
//         Travel Adventure
//       </p>
//       <div className="slider-container">
//         <Slider {...settings}>
//           {packageData.map((pkg, index) => (
//             <div key={pkg.id} className="card-wrapper">
//               <div className="card">
//                 <div className="image-container">
//                   <Image
//                     src={pkg.image}
//                     alt={pkg.title}
//                     className="card-image"
//                     width={500}
//                     height={300}
//                     priority={index < 3}
//                   />
//                   <div className="rating">
//                     <span>{pkg.rating}</span>
//                   </div>
//                 </div>
//                 <div className="card-content">
//                   <h3 className="title">{pkg.title}</h3>
//                   <p className="price">{pkg.price}</p>
//                   <div className="features">
//                     {pkg.features.map((feature, featureIndex) => (
//                       <div className="feature" key={featureIndex}>
//                         <span className="icon">{feature.icon}</span>
//                         <span className="text">{feature.text}</span>
//                       </div>
//                     ))}
//                   </div>
//                   <button className="view-details">VIEW DETAILS</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Packages;


// Optimized version of the Packages component
import React, { useEffect, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Packages.css";

const Packages = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Memoized package data to prevent unnecessary recalculations
  const packageData = useMemo(
    () => [
      {
        id: 1,
        title: "Phuket Island Escape",
        price: "£697 per person",
        image: "/images/bg1.jpg",
        rating: "★★★★",
        features: [
          { icon: "✈️", text: "Round trip economy class included" },
          { icon: "🚌", text: "Extra Cost will be included" },
          { icon: "🍽️", text: "Meals not included" },
        ],
      },
      {
        id: 2,
        title: "Bali Adventure",
        price: "£799 per person",
        image: "/images/bg2.jpg",
        rating: "★★★★★",
        features: [
          { icon: "✈️", text: "Round trip economy class included" },
          { icon: "🏨", text: "Hotel accommodation included" },
          { icon: "🍽️", text: "Breakfast included" },
        ],
      },
      {
        id: 3,
        title: "Maldives Luxury Retreat",
        price: "£1200 per person",
        image: "/images/beach2.jpg",
        rating: "★★★★★",
        features: [
          { icon: "✈️", text: "Business class flights included" },
          { icon: "🏝️", text: "Private beach villa" },
          { icon: "🍽️", text: "All meals included" },
        ],
      },
    ],
    []
  );

  // Optimized resize event handler with useCallback
  const handleResize = useCallback(() => {
    let newSlides = 3;
    if (window.innerWidth < 640) newSlides = 1;
    else if (window.innerWidth < 1024) newSlides = 2;

    setSlidesToShow((prev) => (prev !== newSlides ? newSlides : prev));
  }, []);

  useEffect(() => {
    handleResize(); // Initial set
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="packages-container">
      <div className="flex justify-center items-center gap-2 mb-4">
        <div className="h-px w-16 bg-[#312F93]"></div>
        <span className="text-l font-bold uppercase heading">
          what we offer
        </span>
        <div className="h-px w-16 bg-[#312F93]"></div>
      </div>
      <h1 className="packages-header">Discover Our Travel Packages</h1>
      <p className="packages-subtitle">
        Expertly Curated Journeys Designed to Inspire and Transform Your Next
        Travel Adventure
      </p>
      <div className="slider-container">
        <Slider {...settings}>
          {packageData.map((pkg, index) => (
            <div key={pkg.id} className="card-wrapper">
              <div className="card">
                <div className="image-container">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    className="card-image"
                    width={500}
                    height={300}
                    priority={index < 3} // Prioritize first 3 images
                    loading={index >= 3 ? "lazy" : "eager"}
                  />
                  <div className="rating">
                    <span>{pkg.rating}</span>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="title">{pkg.title}</h3>
                  <p className="price">{pkg.price}</p>
                  <div className="features">
                    {pkg.features.map((feature, featureIndex) => (
                      <div className="feature" key={featureIndex}>
                        <span className="icon">{feature.icon}</span>
                        <span className="text">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  <button className="view-details">VIEW DETAILS</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Packages;
