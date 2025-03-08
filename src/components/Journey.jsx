// import React from "react";
// import Image from "next/image";

// const Journey = React.memo(() => {
//   return (
//     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       {/* Main Content Container */}
//       <div className="flex flex-col md:flex-row shadow-xl bg-white overflow-hidden">
//         {/* Left Side - Image */}
//         <div className="w-full md:w-1/3 relative h-[60vh]">
//           <Image
//             src="/images/journey.png"
//             alt="Thailand landscape with mountains and water"
//             fill
//             priority
//             placeholder="blur"
//             blurDataURL="/images/journey-placeholder.jpg" // Optional: Use if you have a low-res version
//             className="object-cover"
//           />
//         </div>

//         {/* Right Side - Text Content */}
//         <div className="w-full md:w-2/3 p-8">
//           <h2 className="text-2xl text-black font-bold text-center mb-6">
//             Our Journey to Inspiring Your Adventures
//           </h2>

//           <div className="space-y-4">
//             <p className="text-gray-700 text-left">
//               Destination to Paradise began as a dream to offer more than just
//               vacations, but transformative travel experiences. Starting in a small
//               Bangkok office, we set out to connect adventurers with the world's
//               most inspiring destinations.
//             </p>

//             <p className="text-gray-700 text-left">
//               Our passion for discovery and commitment to personalized journeys
//               has grown our company into a trusted name in travel, known for our
//               unique, tailor-made itineraries that go beyond the ordinary.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Stats Container */}
//       <div className="absolute bottom-[20vh] left-0 md:left-[10%] shadow-lg transform translate-y-1/2 w-full md:w-2/3 lg:w-3/5">
//         <div className="grid grid-cols-3 bg-[#312F93] shadow-md overflow-hidden">
//           <StatBox number="10K+" label="Satisfied Customers" />
//           <StatBox number="500+" label="Destinations Covered" />
//           <StatBox number="2500+" label="Tours Completed" border={false} />
//         </div>
//       </div>
//     </div>
//   );
// });

// // Reusable Statistic Box Component (Prevents Unnecessary Re-renders)
// const StatBox = React.memo(({ number, label, border = true }) => (
//   <div
//     className={`p-4 md:p-6 text-center ${border ? "border-r border-indigo-700" : ""}`}
//     aria-label={label}
//   >
//     <h3 className="text-xl md:text-2xl font-bold text-amber-400">{number}</h3>
//     <p className="text-white text-xs md:text-sm mt-1">{label}</p>
//   </div>
// ));

// export default Journey;


import React from "react";
import Image from "next/image";

const Journey = React.memo(() => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 overflow-x-hidden overflow-y-hidden">
      {/* Main Content Container */}
      <div className="flex flex-col md:flex-row shadow-xl rounded-lg bg-white overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/3 relative h-[40vh] md:h-[60vh]">
          <Image
            src="/images/journey.png"
            alt="Destination To Paradise"
            fill
            priority
            placeholder="blur"
            blurDataURL="/images/journey-placeholder.jpg" // Optional: Use if you have a low-res version
            className="object-cover"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-2/3 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl text-black font-bold text-center mb-4 md:mb-6">
            Our Journey to Inspiring Your Adventures
          </h2>

          <div className="space-y-3 md:space-y-4">
            <p className="text-gray-700 text-sm sm:text-base text-left">
              Destination to Paradise began as a dream to offer more than just
              vacations, but transformative travel experiences. Starting in a small
              Bangkok office, we set out to connect adventurers with the world's
              most inspiring destinations.
            </p>

            <p className="text-gray-700 text-sm sm:text-base text-left">
              Our passion for discovery and commitment to personalized journeys
              has grown our company into a trusted name in travel, known for our
              unique, tailor-made itineraries that go beyond the ordinary.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Container */}
      <div className="absolute bottom-0 md:bottom-[20vh] left-0 md:left-[10%] shadow-lg transform translate-y-1/2 w-full md:w-2/3 lg:w-3/5 rounded-md overflow-hidden z-100">
        <div className="grid grid-cols-3 bg-[#312F93] shadow-md">
          <StatBox number="10K+" label="Satisfied Customers" />
          <StatBox number="500+" label="Destinations Covered" />
          <StatBox number="2500+" label="Tours Completed" border={false} />
        </div>
      </div>
    </div>
  );
});

// Reusable Statistic Box Component (Prevents Unnecessary Re-renders)
const StatBox = React.memo(({ number, label, border = true }) => (
  <div
    className={`p-3 sm:p-4 md:p-6 z-100 text-center ${border ? "border-r border-indigo-700" : ""}`}
    aria-label={label}
  >
    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-400">{number}</h3>
    <p className="text-white text-xs sm:text-sm mt-1 truncate">{label}</p>
  </div>
));

export default Journey;


// import React from 'react';
// import Image from 'next/image';

// const Journey = () => {
//   return (
//     <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       {/* Main Content Container */}
//       <div className="flex flex-col md:flex-row shadow-[#00000033]  shadow-2xl bg-white">
//         {/* Left side - Image (narrower width) */}
//         <div className="w-full md:w-1/3 relative h-[60vh]">
//           <Image
//             src="/images/journey.png" // Update with your actual image path
//             alt="Thailand landscape with mountains and water"
//             fill
//             className="object-cover"
//           />
//         </div>
        
//         {/* Right side - Text Content (wider width) */}
//         <div className="w-full md:w-2/3 p-8">
//           <h2 className="text-2xl text-black font-bold text-center mb-6">
//             Our Journey to Inspiring Your Adventures
//           </h2>
          
//           <div className="space-y-4">
//             <p className="text-gray-700 text-left">
//               Destination to Paradise began as a dream to offer more than just
//               vacations, but transformative travel experiences. Starting in a small
//               Bangkok office, we set out to connect adventurers with the world's
//               most inspiring destinations.
//             </p>
            
//             <p className="text-gray-700 text-left">
//               Our passion for discovery and commitment to personalized journeys
//               has grown our company into a trusted name in travel, known for our
//               unique, tailor-made itineraries that go beyond the ordinary.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Stats Container - Correctly positioned at the bottom */}
//       <div className="absolute bottom-[20vh] left-0 md:left-[10%] shadow-xl transform translate-y-1/2 w-full md:w-2/3 lg:w-3/5">
//         <div className="grid grid-cols-3 bg-[#312F93] shadow-lg overflow-hidden">
//           <div className="p-4 md:p-6 text-center border-r border-indigo-700">
//             <h3 className="text-xl md:text-2xl font-bold text-amber-400">10K +</h3>
//             <p className="text-white text-xs md:text-sm mt-1">Satisfied Customers</p>
//           </div>
//           <div className="p-4 md:p-6 text-center border-r border-indigo-700">
//             <h3 className="text-xl md:text-2xl font-bold text-amber-400">500 +</h3>
//             <p className="text-white text-xs md:text-sm mt-1">Destinations Covered</p>
//           </div>
//           <div className="p-4 md:p-6 text-center">
//             <h3 className="text-xl md:text-2xl font-bold text-amber-400">2500 +</h3>
//             <p className="text-white text-xs md:text-sm mt-1">Tours Completed</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Journey;
