"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";

const Services = () => {
  const services = useMemo(
    () => [
      {
        id: 1,
        title: "Customized Itineraries",
        description:
          "Personalize your journey with bespoke travel plans tailored to your unique preferences and desires. Our experts create the perfect itinerary for you.",
        Icon: () => (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
          />
        ),
      },
      {
        id: 2,
        title: "Guided Tours",
        description:
          "Explore new destinations with the expertise of our knowledgeable guides who ensure you don't miss out on any hidden gems.",
        Icon: () => (
          <>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </>
        ),
      },
      {
        id: 3,
        title: "Adventure Activities",
        description:
          "From trekking and scuba diving to safari tours and hot air ballooning, we offer a range of thrilling activities for the adventurous soul.",
        Icon: () => (
          <>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </>
        ),
      },
    ],
    []
  );

  return (
    <div className="py-16 px-4 bg-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="h-px w-16 bg-[#312F93]"></div>
          <span className="text-l font-bold uppercase heading">Our Expertise</span>
          <div className="h-px w-16 bg-[#312F93]"></div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Tailored Services for Travelers
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto">
          Tailored Travel Experiences Designed to Fulfill Every Explorer's Dream,
          from Serene Beach Retreats to Thrilling Mountain Adventures.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map(({ id, title, description, Icon }) => (
          <div key={id} className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <Icon />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-indigo-800 mb-4">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Services), { ssr: false });


// const Services = () => {
//   return (
//     <div className="py-16 px-4 bg-white">
//       {/* Header Section */}
//       <div className="text-center mb-12">
//         <div className="flex justify-center items-center gap-2 mb-6">
//           <div className="flex justify-center items-center gap-2 mb-4">
//             <div className="h-px w-16 bg-[#312F93]"></div>
//             <span className="text-l font-bold uppercase heading">
//               Our Expertise
//             </span>
//             <div className="h-px w-16 bg-[#312F93]"></div>
//           </div>
//         </div>

//         <h2 className="text-3xl font-bold text-gray-900 mb-4">
//           Tailored Services for Travelers
//         </h2>

//         <p className="text-gray-600 max-w-3xl mx-auto">
//           Tailored Travel Experiences Designed to Fulfill Every Explorer's
//           Dream, from Serene Beach Retreats to Thrilling Mountain Adventures
//         </p>
//       </div>

//       {/* Services Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {/* Customized Itineraries */}
//         <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//           <div className="w-16 h-16 bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-6">
//             <svg
//               className="w-8 h-8 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
//               />
//             </svg>
//           </div>
//           <h3 className="text-xl font-bold text-indigo-800 mb-4">
//             Customized Itineraries
//           </h3>
//           <p className="text-gray-600">
//             Personalize your journey with bespoke travel plans tailored to your
//             unique preferences and desires. Our experts create the perfect
//             itinerary for you.
//           </p>
//         </div>

//         {/* Guided Tours */}
//         <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//           <div className="w-16 h-16 bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-6">
//             <svg
//               className="w-8 h-8 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//               />
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//               />
//             </svg>
//           </div>
//           <h3 className="text-xl font-bold text-indigo-800 mb-4">
//             Guided Tours
//           </h3>
//           <p className="text-gray-600">
//             Explore new destinations with the expertise of our knowledgeable
//             guides who ensure you don't miss out on any hidden gems.
//           </p>
//         </div>

//         {/* Adventure Activities */}
//         <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//           <div className="w-16 h-16 bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-6">
//             <svg
//               className="w-8 h-8 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//           </div>
//           <h3 className="text-xl font-bold text-indigo-800 mb-4">
//             Adventure Activities
//           </h3>
//           <p className="text-gray-600">
//             From trekking and scuba diving to safari tours and hot air
//             ballooning, we offer a range of thrilling activities for the
//             adventurous soul.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
