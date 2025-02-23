"use client";

import React, { useEffect } from "react";
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

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });

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
      // Cleanup event listeners
      slider.removeEventListener("mousedown", () => {});
      slider.removeEventListener("mouseleave", () => {});
      slider.removeEventListener("mouseup", () => {});
      slider.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <div className="packages-container">
      {/* <h2 className="expertise-title heading">OUR EXPERTISE</h2> */}
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
                  <img src={pkg.image} alt={pkg.title} className="card-image" />
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

// "use client";
// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const Packages = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   // const packageData = [
//   //   {
//   //     id: 1,
//   //     title: "Phuket Island Escape",
//   //     price: "£697 per person",
//   //     image: "/images/herobg.png",
//   //     rating: "★★★★",
//   //     features: [
//   //       { icon: "✈️", text: "Round trip economy class included" },
//   //       { icon: "🚌", text: "Extra Cost will be included" },
//   //       { icon: "🍽️", text: "Meals not included" },
//   //     ],
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "Bali Adventure",
//   //     price: "£799 per person",
//   //     image: "/images/herobg.png",
//   //     rating: "★★★★★",
//   //     features: [
//   //       { icon: "✈️", text: "Round trip economy class included" },
//   //       { icon: "🏨", text: "Hotel accommodation included" },
//   //       { icon: "🍽️", text: "Breakfast included" },
//   //     ],
//   //   },
//   //   {
//   //     id: 3,
//   //     title: "Maldives Luxury Retreat",
//   //     price: "£1200 per person",
//   //     image: "/images/herobg.png",
//   //     rating: "★★★★★",
//   //     features: [
//   //       { icon: "✈️", text: "Business class flights included" },
//   //       { icon: "🏝️", text: "Private beach villa" },
//   //       { icon: "🍽️", text: "All meals included" },
//   //     ],
//   //   }
//   // ];

//   const packageData = [
//     {
//       id: 1,
//       title: "Phuket Island Escape",
//       price: "£697 per person",
//       image: "/images/herobg.png",
//       rating: "★★★★",
//       features: [
//         { icon: "✈️", text: "Round trip economy class included" },
//         { icon: "🚌", text: "Extra Cost will be included" },
//         { icon: "🍽️", text: "Meals not included" },
//       ],
//     },
//     {
//       id: 2,
//       title: "Bali Adventure",
//       price: "£799 per person",
//       image: "/images/herobg.png",
//       rating: "★★★★★",
//       features: [
//         { icon: "✈️", text: "Round trip economy class included" },
//         { icon: "🏨", text: "Hotel accommodation included" },
//         { icon: "🍽️", text: "Breakfast included" },
//       ],
//     },
//     {
//       id: 3,
//       title: "Maldives Luxury Retreat",
//       price: "£1200 per person",
//       image: "/images/herobg.png",
//       rating: "★★★★★",
//       features: [
//         { icon: "✈️", text: "Business class flights included" },
//         { icon: "🏝️", text: "Private beach villa" },
//         { icon: "🍽️", text: "All meals included" },
//       ],
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === packageData.length - 3 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? packageData.length - 3 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="w-full max-w-6xl mx-auto px-4">
//       <div className="flex justify-center items-center gap-2 mb-4">
//         <div className="h-px w-16 bg-blue-600"></div>
//         <span className="text-lg font-bold uppercase">What We Offer</span>
//         <div className="h-px w-16 bg-blue-600"></div>
//       </div>
      
//       <h1 className="text-3xl font-bold text-center mb-4">
//         Discover Our Travel Packages
//       </h1>
      
//       <p className="text-center text-gray-600 mb-8">
//         Expertly Curated Journeys Designed to Inspire and Transform Your Next Travel Adventure
//       </p>

//       <div className="relative">
//         <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-10">
//           <button 
//             onClick={prevSlide}
//             className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <button 
//             onClick={nextSlide}
//             className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>

//         <div className="overflow-hidden">
//           <div 
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{ 
//               transform: `translateX(-${currentIndex * (100 / 3)}%)`,
//               width: `${(packageData.length * 100) / 3}%`
//             }}
//           >
//             {packageData.map((pkg, index) => (
//               <div 
//                 key={`${pkg.id}-${index}`}
//                 className="w-1/3 px-4"
//               >
//                 <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//                   <div className="relative">
//                     <img 
//                       src={pkg.image} 
//                       alt={pkg.title} 
//                       className="w-full h-48 object-cover"
//                     />
//                     <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded">
//                       <span className="text-yellow-500">{pkg.rating}</span>
//                     </div>
//                   </div>
                  
//                   <div className="p-4">
//                     <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
//                     <p className="text-lg font-bold text-blue-600 mb-4">{pkg.price}</p>
                    
//                     <div className="space-y-2">
//                       {pkg.features.map((feature, featureIndex) => (
//                         <div key={featureIndex} className="flex items-center gap-2">
//                           <span>{feature.icon}</span>
//                           <span className="text-sm text-gray-600">{feature.text}</span>
//                         </div>
//                       ))}
//                     </div>
                    
//                     <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
//                       VIEW DETAILS
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Packages;


// "use client";
// import React, { useState, useEffect } from 'react';
// import "./Packages.css";

// const Packages = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   const packageData = [
//     {
//       id: 1,
//       title: "Phuket Island Escape",
//       price: "£697 per person",
//       image: "/images/herobg.png",
//       rating: "★★★★",
//       features: [
//         { icon: "✈️", text: "Round trip economy class included" },
//         { icon: "🚌", text: "Extra Cost will be included" },
//         { icon: "🍽️", text: "Meals not included" },
//       ],
//     },
//     {
//       id: 2,
//       title: "Bali Adventure",
//       price: "£799 per person",
//       image: "/images/herobg.png",
//       rating: "★★★★★",
//       features: [
//         { icon: "✈️", text: "Round trip economy class included" },
//         { icon: "🏨", text: "Hotel accommodation included" },
//         { icon: "🍽️", text: "Breakfast included" },
//       ],
//     },
//     {
//       id: 3,
//       title: "Maldives Luxury Retreat",
//       price: "£1200 per person",
//       image: "/images/herobg.png",
//       rating: "★★★★★",
//       features: [
//         { icon: "✈️", text: "Business class flights included" },
//         { icon: "🏝️", text: "Private beach villa" },
//         { icon: "🍽️", text: "All meals included" },
//       ],
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === packageData.length - 3 ? 0 : prevIndex + 1
//     );
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 1000);

//     return () => clearInterval(timer);
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
//         Expertly Curated Journeys Designed to Inspire and Transform Your Next Travel Adventure
//       </p>

//       <div className="slider-container">
//         <div 
//           className="packages-card-wrapper"
//           style={{ 
//             transform: `translateX(-${currentIndex * 304}px)`, // 280px card width + 24px gap
//             transition: 'transform 0.5s ease-in-out',
//             cursor: 'default'
//           }}
//         >
//           {[...packageData, ...packageData].map((pkg, index) => (
//             <div className="card" key={`${pkg.id}-${index}`}>
//               <div className="image-container">
//                 <img src={pkg.image} alt={pkg.title} className="card-image" />
//                 <div className="rating">
//                   <span>{pkg.rating}</span>
//                 </div>
//               </div>
//               <div className="card-content">
//                 <h3 className="title">{pkg.title}</h3>
//                 <p className="price">{pkg.price}</p>
//                 <div className="features">
//                   {pkg.features.map((feature, featureIndex) => (
//                     <div className="feature" key={featureIndex}>
//                       <span className="icon">{feature.icon}</span>
//                       <span className="text">{feature.text}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <button className="view-details">VIEW DETAILS</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Packages;


// import React, { useState, useEffect } from 'react';

// const Packages = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   const packageData = [
//     {
//       id: 1,
//       title: "Phuket Island Escape",
//       price: "£697 per person",
//       image: "/images/herobg.png",
//       rating: "★★★★",
//       features: [
//         { icon: "✈️", text: "Round trip economy class included" },
//         { icon: "🚌", text: "Extra Cost will be included" },
//         { icon: "🍽️", text: "Meals not included" },
//       ],
//     },
//     {
//       id: 2,
//       title: "Bali Adventure",
//       price: "£799 per person",
//       image: "/images/herobg.png",
//       rating: "★★★★★",
//       features: [
//         { icon: "✈️", text: "Round trip economy class included" },
//         { icon: "🏨", text: "Hotel accommodation included" },
//         { icon: "🍽️", text: "Breakfast included" },
//       ],
//     },
//     {
//       id: 3,
//       title: "Maldives Luxury Retreat",
//       price: "£1200 per person",
//       image: "/images/herobg.png",
//       rating: "★★★★★",
//       features: [
//         { icon: "✈️", text: "Business class flights included" },
//         { icon: "🏝️", text: "Private beach villa" },
//         { icon: "🍽️", text: "All meals included" },
//       ],
//     }
//   ];

//   // Duplicate the data to create a continuous effect
//   const extendedData = [...packageData, ...packageData];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => {
//       const nextIndex = prevIndex + 1;
//       // Reset to beginning when we reach the original set
//       if (nextIndex >= packageData.length) {
//         return 0;
//       }
//       return nextIndex;
//     });
//   };

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 3000);
//     return () => clearInterval(timer);
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
//         Expertly Curated Journeys Designed to Inspire and Transform Your Next Travel Adventure
//       </p>

//       <div className="slider-container" style={{ maxWidth: '960px', margin: '0 auto' }}>
//         <div 
//           className="packages-card-wrapper"
//           style={{ 
//             transform: `translateX(-${currentIndex * (100/3)}%)`,
//             transition: 'transform 0.5s ease-in-out',
//             display: 'flex',
//             width: '200%', // Double width to accommodate duplicated cards
//             gap: '24px'
//           }}
//         >
//           {extendedData.map((pkg, index) => (
//             <div 
//               className="card" 
//               key={`${pkg.id}-${index}`}
//               style={{
//                 flex: '0 0 calc(33.333% - 16px)', // Subtracting some of the gap to ensure 3 cards fit
//                 marginRight: index === extendedData.length - 1 ? '0' : undefined
//               }}
//             >
//               <div className="image-container">
//                 <img src={pkg.image} alt={pkg.title} className="card-image" />
//                 <div className="rating">
//                   <span>{pkg.rating}</span>
//                 </div>
//               </div>
//               <div className="card-content">
//                 <h3 className="title">{pkg.title}</h3>
//                 <p className="price">{pkg.price}</p>
//                 <div className="features">
//                   {pkg.features.map((feature, featureIndex) => (
//                     <div className="feature" key={featureIndex}>
//                       <span className="icon">{feature.icon}</span>
//                       <span className="text">{feature.text}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <button className="view-details">VIEW DETAILS</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Packages;