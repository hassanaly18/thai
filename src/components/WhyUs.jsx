// "use client";

// import React, { memo } from "react";

// const WhyUs = memo(() => {
//   const benefits = [
//     {
//       title: "Expertly Curated Experiences",
//       description:
//         "Our travel experts meticulously craft each itinerary to ensure your journey is filled with unforgettable experiences.",
//     },
//     {
//       title: "Exclusive Access",
//       description:
//         "Enjoy exclusive access to hidden spots and unique events that only our local knowledge and connections can provide.",
//     },
//     {
//       title: "Personalized Service",
//       description:
//         "We personalize every detail of your trip, from accommodations to activities, ensuring your adventure perfectly suits your tastes.",
//     },
//     {
//       title: "Commitment to Sustainability",
//       description:
//         "We prioritize eco-friendly practices that respect both the environment and local cultures, ensuring our destinations thrive for generations.",
//       isNew: true,
//     },
//   ];

//   const stats = [
//     { icon: "👥", label: "Tourists Served", value: "10k+" },
//     { icon: "🏨", label: "Partnered Hotels", value: "100+" },
//     { icon: "📍", label: "Pilgrimage Tours", value: "50+" },
//   ];

//   return (
//     <section className="w-full max-w-6xl mx-auto p-8 bg-white flex flex-col md:flex-row gap-12 items-center">
//       {/* Left Section with Image and Stats */}
//       <div className="w-full md:w-2/5 relative">
//         <div className="relative rounded-full p-1 bg-[#312F93]">
//           <img
//             src="/images/herobg.png"
//             alt="Tourist with camera exploring a new destination"
//             className="rounded-full w-full aspect-square object-cover"
//             loading="lazy"
//             decoding="async"
//           />
//           {/* Stats Overlay */}
//           <div className="absolute top-10 right-0 bg-white rounded-lg p-2 shadow-md flex items-center gap-2">
//             <span className="text-lg">{stats[0].icon}</span>
//             <div className="flex flex-col">
//               <span className="font-bold text-[#312F93]">{stats[0].value}</span>
//               <span className="text-xs text-gray-600">{stats[0].label}</span>
//             </div>
//           </div>
//           <div className="absolute right-0 bottom-10 bg-white rounded-lg p-2 shadow-md flex items-center gap-2">
//             <span className="text-lg">{stats[1].icon}</span>
//             <div className="flex flex-col">
//               <span className="font-bold text-[#312F93]">{stats[1].value}</span>
//               <span className="text-xs text-gray-600">{stats[1].label}</span>
//             </div>
//           </div>
//           <div className="absolute left-0 bottom-5 bg-white rounded-lg p-2 shadow-md flex items-center gap-2">
//             <span className="text-lg">{stats[2].icon}</span>
//             <div className="flex flex-col">
//               <span className="font-bold text-[#312F93]">{stats[2].value}</span>
//               <span className="text-xs text-gray-600">{stats[2].label}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Section with Benefits */}
//       <div className="w-full md:w-3/5">
//         <h2 className="text-2xl font-bold text-black mb-6">
//           Why Choose{" "}
//           <span className="text-[#312F93]">Destination to Paradise</span> for
//           Your Next Adventure?
//         </h2>

//         <div className="space-y-6">
//           {benefits.map((benefit, index) => (
//             <div key={index} className="flex gap-4">
//               <div className="flex-shrink-0">
//                 <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#312F93]">
//                   <svg
//                     className="w-4 h-4 text-white"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="font-semibold flex text-black items-center gap-2">
//                   {benefit.title}
//                   {benefit.isNew && (
//                     <span className="text-xs bg-blue-100 text-[#312F93] px-2 py-1 rounded">
//                       NEW!
//                     </span>
//                   )}
//                 </h3>
//                 <p className="text-gray-600 mt-1">{benefit.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// });

// export default WhyUs;


"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

const WhyUs = memo(() => {
  const benefits = [
    {
      title: "Expertly Curated Experiences",
      description:
        "Our travel experts meticulously craft each itinerary to ensure your journey is filled with unforgettable experiences.",
    },
    {
      title: "Exclusive Access",
      description:
        "Enjoy exclusive access to hidden spots and unique events that only our local knowledge and connections can provide.",
    },
    {
      title: "Personalized Service",
      description:
        "We personalize every detail of your trip, from accommodations to activities, ensuring your adventure perfectly suits your tastes.",
    },
    {
      title: "Commitment to Sustainability",
      description:
        "We prioritize eco-friendly practices that respect both the environment and local cultures, ensuring our destinations thrive for generations.",
      isNew: true,
    },
  ];

  const stats = [
    { icon: "👥", label: "Tourists Served", value: "10k+", className: "top-10 right-0" },
    { icon: "🏨", label: "Partnered Hotels", value: "100+", className: "right-0 bottom-10" },
    { icon: "📍", label: "Pilgrimage Tours", value: "50+", className: "left-0 bottom-5" },
  ];

  return (
    <section 
      className="w-full max-w-6xl mx-auto p-8 bg-white flex flex-col md:flex-row gap-12 items-center"
    >
      {/* Left Section with Image and Stats */}
      <div className="w-full md:w-2/5 relative">
        <div className="relative rounded-full p-1 bg-[#312F93]">
          <img
            src="/images/herobg.png"
            alt="Tourist with camera exploring a new destination"
            className="rounded-full w-full aspect-square object-cover"
            loading="lazy"
            decoding="async"
          />
          {/* Stats Overlay */}
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`absolute ${stat.className} bg-white rounded-lg p-2 shadow-md flex items-center gap-2`}
            >
              <span className="text-lg">{stat.icon}</span>
              <div className="flex flex-col">
                <span className="font-bold text-[#312F93]">{stat.value}</span>
                <span className="text-xs text-gray-600">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section with Benefits */}
      <div className="w-full md:w-3/5">
        <h2 className="text-2xl font-bold text-black mb-6">
          Why Choose <span className="text-[#312F93]">Destination to Paradise</span> for Your Next Adventure?
        </h2>

        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#312F93]">
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold flex text-black items-center gap-2">
                  {benefit.title}
                  {benefit.isNew && (
                    <span className="text-xs bg-blue-100 text-[#312F93] px-2 py-1 rounded">NEW!</span>
                  )}
                </h3>
                <p className="text-gray-600 mt-1">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default WhyUs;
