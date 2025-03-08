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

import React, { useEffect, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Packages.css";
import Link from "next/link"; 

// const tourData = [
//   {
//     id: 1,
//     title: "Explore Thailand with the Paradise Escape Package",
//     price: "£85 per person",
//     image: "/images/tour11.jpg",
//     slug: "thailand-paradise-escape",
//   },
//   {
//     id: 2,
//     title: "Discover Thailand with the Cultural Adventure Package",
//     price: "£130 per person",
//     image: "/images/tour21.jpg",
//     slug: "thailand-cultural-adventure",
//   },
//   {
//     id: 3,
//     title: "Thailand Ultimate Getaway Package",
//     price: "£95 per person",
//     image: "/images/tour23.jpg",
//     slug: "thailand-ultimate-getaway",
//   },
// ];

const tourData = [
  {
    id: 1,
    title: "Explore Thailand with the Paradise Escape Package",
    description: `Experience the best of Thailand with our Paradise Escape Package. Enjoy comfortable stays, daily breakfasts, exciting tours, and private transfers. Perfect for romantic getaways, family vacations, or corporate events. Contact us today to plan your dream trip!`,
    price: 85,
    image: "/images/tour11.jpg",
    slug: "thailand-paradise-escape",
  },
  {
    id: 2,
    title: "Discover Thailand with the Cultural Adventure Package",
    description: `Experience the wonders of Thailand with our Cultural Adventure Package. Enjoy a comfortable stay in Bangkok, daily breakfasts, and exciting full-day tours, including visits to Kanchanaburi and the floating market. Private airport transfers ensure a hassle-free journey. Contact us today to start your adventure!`,
    price: 130,
    image: "/images/tour21.jpg",
    slug: "thailand-cultural-adventure",
  },
  {
    id: 3,
    title: "Thailand Ultimate Getaway Package",
    description: `Discover the beauty of Thailand with our Ultimate Getaway Package. Enjoy 5 days and 4 nights with comfortable stays in Pattaya and Bangkok, daily breakfasts, and exciting tours, including Coral Island and Bangkok city explorations. All transfers are conveniently arranged. Contact us today to plan your perfect escape!`,
    price: 95,
    image: "/images/tour23.jpg",
    slug: "thailand-ultimate-getaway",
  },
  {
    id: 4,
    title: "Thailand Enchanting Explorer Package",
    description: `Experience the charm of Thailand with our Enchanting Explorer Package. Enjoy 4 days and 3 nights in Pratunam with daily breakfasts, and explore top attractions like Nong-Nooch Garden, Big Buddha Viewpoint, and the Floating Market. Book now for an unforgettable adventure!`,
    price: 165,
    image: "/images/tour41.jpg",
    slug: "thailand-enchanting-explorer",
  },
  {
    id: 5,
    title: "Asia Tri-City Adventure Package",
    description: `Discover the best of Singapore, Malaysia, and Thailand with our Tri-City Adventure Package. Enjoy 6 nights and 7 days of comfortable stays, daily breakfasts, and exciting city tours in Singapore, Kuala Lumpur, and Bangkok. Private airport transfers and intercity travel are included. Book now for an unforgettable journey!`,
    price: 89,
    image: "/images/tour51.jpg",
    slug: "asia-tri-city-adventure",
  },
  {
    id: 6,
    title: "Ayutthaya Day Explorer Package",
    description: `Uncover the rich history of Thailand with our Ayutthaya Day Explorer Package. Visit iconic landmarks like Bang Pa-In Palace, Wat Mahathat, and Wat Chaiwatthanaram, with guided tours and authentic Thai lunch included. Enjoy a seamless experience with hotel pick-up and drop-off. Book now for an unforgettable cultural journey!`,
    price: 95,
    image: "/images/tour61.jpg",
    slug: "ayutthaya-day-explorer",
  },
  {
    id: 7,
    title: "7 Island Sunset Adventure",
    description: `Experience the beauty of Krabi with our 7 Island Sunset Adventure. Visit stunning islands like Tup, Chicken, and Poda, snorkel in crystal-clear waters, and witness magical bioluminescent plankton. End the day with a breathtaking sunset. Book now for an unforgettable island-hopping experience!`,
    price: 95,
    image: "/images/tour71.jpg",
    slug: "island-sunset-adventure",
  },
  {
    id: 8,
    title: "Phi Phi Island Escape Tour",
    description: `Experience the beauty of Phi Phi Islands with our Phi Phi Island Escape. Relax on Bamboo Island's white sands, explore Viking Cave, and snorkel in crystal-clear waters at Nui Bay. Enjoy a beachfront buffet lunch and visit iconic spots like Maya Bay and Monkey Bay. Book now for an unforgettable island adventure!`,
    price: 95,
    image: "/images/tour81.jpg",
    slug: "phi-phi-island-escape",
  },
  {
    id: 9,
    title: "Four Island Adventure Tour",
    description: `Discover Krabi's stunning beaches with our Four Island Adventure. Visit iconic spots like Chicken Island, Poda Island, Talay Waek, and Pranang Cave Bay. Swim, snorkel, and relax on beautiful sandy beaches. Book now for an unforgettable day trip!`,
    price: 95,
    image: "/images/tour91.jpg",
    slug: "four-island-adventure",
  },
  {
    id: 10,
    title: "James Bond Island Tour",
    description: `Explore the famous James Bond Island with our James Bond Island Tour. Visit Monkey Cave, enjoy sea cave canoeing at Talu Island, and explore Phang-Nga Bay's stunning landscapes. Enjoy a scenic boat ride and lunch at a floating Muslim village. Book now for an unforgettable adventure!`,
    price: 95,
    image: "/images/tour101.jpg",
    slug: "james-bond-island-tour",
  },
];


const Packages = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  const packageData = useMemo(() =>
    tourData.map(tour => ({
      id: tour.id,
      title: tour.title,
      price: tour.price,
      image: tour.image,
      rating: "★★★★★",
      url: `/tours/${tour.slug}`,
      features: [
        { icon: "✈️", text: "Round trip economy class included" },
        { icon: "🏨", text: "Hotel accommodation included" },
        { icon: "🍽️", text: "Breakfast included" },
      ],
    })),
  []);

  const handleResize = useCallback(() => {
    let newSlides = 3;
    if (window.innerWidth < 640) newSlides = 1;
    else if (window.innerWidth < 1024) newSlides = 2;
    setSlidesToShow(newSlides);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <div className="packages-container">
      <h1 className="packages-header">Discover Our Travel Packages</h1>
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
                  priority={index < 3}
                  loading={index >= 3 ? "lazy" : "eager"}
                />
                <div className="rating"><span>{pkg.rating}</span></div>
              </div>
              <div className="card-content">
                <h3 className="title">{pkg.title}</h3>
                <p className="price">{pkg.price}</p>
                <div className="features">
                  {pkg.features.map((feature, i) => (
                    <div className="feature" key={i}>
                      <span className="icon">{feature.icon}</span>
                      <span className="text">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <Link href={pkg.url} className="view-details">VIEW DETAILS</Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Packages;


// Optimized version of the Packages component
// import React, { useEffect, useState, useMemo, useCallback } from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Packages.css";

// const Packages = () => {
//   const [slidesToShow, setSlidesToShow] = useState(3);

//   // Memoized package data to prevent unnecessary recalculations
//   const packageData = useMemo(
//     () => [
//       {
//         id: 1,
//         title: "Phuket Island Escape",
//         price: "£697 per person",
//         image: "/images/bg1.jpg",
//         rating: "★★★★",
//         features: [
//           { icon: "✈️", text: "Round trip economy class included" },
//           { icon: "🚌", text: "Extra Cost will be included" },
//           { icon: "🍽️", text: "Meals not included" },
//         ],
//       },
//       {
//         id: 2,
//         title: "Bali Adventure",
//         price: "£799 per person",
//         image: "/images/bg2.jpg",
//         rating: "★★★★★",
//         features: [
//           { icon: "✈️", text: "Round trip economy class included" },
//           { icon: "🏨", text: "Hotel accommodation included" },
//           { icon: "🍽️", text: "Breakfast included" },
//         ],
//       },
//       {
//         id: 3,
//         title: "Maldives Luxury Retreat",
//         price: "£1200 per person",
//         image: "/images/beach2.jpg",
//         rating: "★★★★★",
//         features: [
//           { icon: "✈️", text: "Business class flights included" },
//           { icon: "🏝️", text: "Private beach villa" },
//           { icon: "🍽️", text: "All meals included" },
//         ],
//       },
//     ],
//     []
//   );

//   // Optimized resize event handler with useCallback
//   const handleResize = useCallback(() => {
//     let newSlides = 3;
//     if (window.innerWidth < 640) newSlides = 1;
//     else if (window.innerWidth < 1024) newSlides = 2;

//     setSlidesToShow((prev) => (prev !== newSlides ? newSlides : prev));
//   }, []);

//   useEffect(() => {
//     handleResize(); // Initial set
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [handleResize]);

//   // Slick slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     cssEase: "ease-in-out",
//     pauseOnHover: true,
//     arrows: true,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//       { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//     ],
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
//                     priority={index < 3} // Prioritize first 3 images
//                     loading={index >= 3 ? "lazy" : "eager"}
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
