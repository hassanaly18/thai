"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "./Packages.css";

const packageData = [
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
];

const Packages = () => {
  useEffect(() => {
    const slider = document.querySelector(".packages-card-wrapper");
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    // Auto scroll
    const autoScroll = () => {
      if (!slider.matches(":hover")) {
        slider.scrollLeft += 1;
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        }
      }
    };

    const scrollInterval = setInterval(autoScroll, 30);

    return () => {
      clearInterval(scrollInterval);
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
        <div className="packages-card-wrapper">
          {[...packageData, ...packageData, ...packageData].map(
            (pkg, index) => (
              <div className="card" key={`${pkg.id}-${index}`}>
                <div className="image-container">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    className="card-image"
                    width={500}
                    height={300}
                    priority={index < 3} // Load first 3 images with priority
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
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Packages;


// import React, { useEffect, useRef } from "react";
// import "./Packages.css";

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
// ];

// const Packages = () => {
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const slider = sliderRef.current;
//     let isDown = false;
//     let startX;
//     let scrollLeft;

//     const handleMouseDown = (e) => {
//       isDown = true;
//       slider.classList.add("active");
//       startX = e.pageX - slider.offsetLeft;
//       scrollLeft = slider.scrollLeft;
//     };

//     const handleMouseLeave = () => {
//       isDown = false;
//       slider.classList.remove("active");
//     };

//     const handleMouseUp = () => {
//       isDown = false;
//       slider.classList.remove("active");
//     };

//     const handleMouseMove = (e) => {
//       if (!isDown) return;
//       e.preventDefault();
//       const x = e.pageX - slider.offsetLeft;
//       const walk = (x - startX) * 2;
//       slider.scrollLeft = scrollLeft - walk;
//     };

//     slider.addEventListener("mousedown", handleMouseDown);
//     slider.addEventListener("mouseleave", handleMouseLeave);
//     slider.addEventListener("mouseup", handleMouseUp);
//     slider.addEventListener("mousemove", handleMouseMove);

//     // Auto scroll
//     const autoScroll = () => {
//       if (!slider.matches(":hover")) {
//         slider.scrollLeft += 1;
//         if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
//           slider.scrollLeft = 0;
//         }
//       }
//     };

//     const scrollInterval = setInterval(autoScroll, 30);

//     return () => {
//       clearInterval(scrollInterval);
//       slider.removeEventListener("mousedown", handleMouseDown);
//       slider.removeEventListener("mouseleave", handleMouseLeave);
//       slider.removeEventListener("mouseup", handleMouseUp);
//       slider.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

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
//         <div className="packages-card-wrapper" ref={sliderRef}>
//           {[...packageData, ...packageData, ...packageData].map(
//             (pkg, index) => (
//               <Card key={`${pkg.id}-${index}`} pkg={pkg} />
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Card = ({ pkg }) => (
//   <div className="card">
//     <div className="image-container">
//       <img src={pkg.image} alt={pkg.title} className="card-image" />
//       <div className="rating">
//         <span>{pkg.rating}</span>
//       </div>
//     </div>
//     <div className="card-content">
//       <h3 className="title">{pkg.title}</h3>
//       <p className="price">{pkg.price}</p>
//       <div className="features">
//         {pkg.features.map((feature, featureIndex) => (
//           <div className="feature" key={featureIndex}>
//             <span className="icon">{feature.icon}</span>
//             <span className="text">{feature.text}</span>
//           </div>
//         ))}
//       </div>
//       <button className="view-details">VIEW DETAILS</button>
//     </div>
//   </div>
// );

// export default Packages;



// import React, { useEffect } from "react";
// import "./Packages.css";

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
// ];

// const Packages = () => {
//   useEffect(() => {
//     const slider = document.querySelector(".packages-card-wrapper");
//     let isDown = false;
//     let startX;
//     let scrollLeft;

//     slider.addEventListener("mousedown", (e) => {
//       isDown = true;
//       slider.classList.add("active");
//       startX = e.pageX - slider.offsetLeft;
//       scrollLeft = slider.scrollLeft;
//     });

//     slider.addEventListener("mouseleave", () => {
//       isDown = false;
//       slider.classList.remove("active");
//     });

//     slider.addEventListener("mouseup", () => {
//       isDown = false;
//       slider.classList.remove("active");
//     });

//     slider.addEventListener("mousemove", (e) => {
//       if (!isDown) return;
//       e.preventDefault();
//       const x = e.pageX - slider.offsetLeft;
//       const walk = (x - startX) * 2;
//       slider.scrollLeft = scrollLeft - walk;
//     });

//     // Auto scroll
//     const autoScroll = () => {
//       if (!slider.matches(":hover")) {
//         slider.scrollLeft += 1;
//         if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
//           slider.scrollLeft = 0;
//         }
//       }
//     };

//     const scrollInterval = setInterval(autoScroll, 30);

//     return () => {
//       clearInterval(scrollInterval);
//       // Cleanup event listeners
//       slider.removeEventListener("mousedown", () => {});
//       slider.removeEventListener("mouseleave", () => {});
//       slider.removeEventListener("mouseup", () => {});
//       slider.removeEventListener("mousemove", () => {});
//     };
//   }, []);

//   return (
//     <div className="packages-container">
//       {/* <h2 className="expertise-title heading">OUR EXPERTISE</h2> */}
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
//         <div className="packages-card-wrapper">
//           {[...packageData, ...packageData, ...packageData].map(
//             (pkg, index) => (
//               <div className="card" key={`${pkg.id}-${index}`}>
//                 <div className="image-container">
//                   <img src={pkg.image} alt={pkg.title} className="card-image" />
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
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Packages;