import React from "react";
import Image from "next/image";

const Mission = React.memo(() => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading and Subheading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black">Our Mission and Vision</h2>
        <p className="text-gray-600 mt-2">Driving Change, One Journey at a Time</p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-2 max-w-5xl mx-auto border border-gray-200 shadow-xl overflow-hidden transform transition-transform duration-300 hover:translate-y-1">
        {/* Top Left - Mission */}
        <MissionCard
          title="OUR MISSION"
          description="To provide unforgettable travel experiences that inspire and enrich lives. We strive to connect travelers with unique destinations through personalized, responsible, and sustainable travel solutions that respect local cultures and ecosystems."
          bgColor="bg-[#312F93]"
          textColor="text-[#F8A603]"
          iconPath="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />

        {/* Top Right - Island Image */}
        <ImageCard src="/images/mission1.png" alt="Beautiful island view from above" />

        {/* Bottom Left - Rock Formation Image */}
        <ImageCard src="/images/mission2.png" alt="Rock formation by the beach" />

        {/* Bottom Right - Vision */}
        <MissionCard
          title="OUR VISION"
          description="To be a leader in the travel industry by consistently delivering exceptional service and pioneering new adventures. We envision a world where travel is a transformative force fostering understanding, and conservation of diverse cultures and habitats."
          bgColor="bg-[#F8A603]"
          textColor="text-[#312F93]"
          iconPath="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </div>
    </div>
  );
});

// Reusable Mission Card Component
const MissionCard = React.memo(({ title, description, bgColor, textColor, iconPath }) => (
  <div className="bg-white p-6 flex flex-col items-center justify-center">
    <div className={`${bgColor} w-24 h-24 flex items-center rounded-full justify-center mb-4`}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
      </svg>
    </div>
    <h3 className={`${textColor} font-bold text-xl mb-3`}>{title}</h3>
    <p className="text-center text-sm text-gray-700">{description}</p>
  </div>
));

// Reusable Image Component (Prevents Layout Shifts)
const ImageCard = React.memo(({ src, alt }) => (
  <div className="relative w-full h-full min-h-[250px]">
    <Image
      src={src}
      alt={alt}
      fill
      priority
      placeholder="blur"
      blurDataURL="/images/blur-placeholder.jpg" // Optional: Use if available
      className="object-cover"
    />
  </div>
));

export default Mission;





// import React from 'react';
// import Image from 'next/image';

// const Mission = () => {
//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       {/* Heading and Subheading */}
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold text-black">Our Mission and Vision</h2>
//         <p className="text-gray-600 mt-2">Driving Change, One Journey at a Time</p>
//       </div>
      
//       {/* Grid Container - With shadow for lifted appearance */}
//       <div className="grid grid-cols-2 max-w-5xl mx-auto border border-gray-100 rounded-lg shadow-xl overflow-hidden transform translate-y-0 hover:translate-y-1 transition-transform duration-300">
//         {/* Top Left - Mission */}
//         <div className="bg-white p-6 flex flex-col items-center justify-center">
//           <div className="bg-[#312F93] rounded-full w-24 h-24 flex items-center justify-center mb-4">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
//             </svg>
//           </div>
//           <h3 className="text-[#F8A603] font-bold text-xl mb-3">OUR MISSION</h3>
//           <p className="text-center text-sm text-gray-700">
//             To provide unforgettable travel experiences that inspire and enrich lives. We strive to connect travelers with unique destinations through personalized, responsible, and sustainable travel solutions that respect local cultures and ecosystems.
//           </p>
//         </div>
        
//         {/* Top Right - Island Image */}
//         <div className="relative w-full h-full min-h-[250px]">
//           <Image
//             src="/images/mission1.png"
//             alt="Beautiful island view from above"
//             fill
//             className="object-cover"
//           />
//         </div>
        
//         {/* Bottom Left - Rock Formation Image */}
//         <div className="relative w-full h-full min-h-[250px]">
//           <Image
//             src="/images/mission2.png"
//             alt="Rock formation by the beach"
//             fill
//             className="object-cover"
//           />
//         </div>
        
//         {/* Bottom Right - Vision */}
//         <div className="bg-white p-6 flex flex-col items-center justify-center">
//           <div className="bg-[#F8A603] rounded-full w-24 h-24 flex items-center justify-center mb-4">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//             </svg>
//           </div>
//           <h3 className="text-[#312F93] font-bold text-xl mb-3">OUR VISION</h3>
//           <p className="text-center text-sm text-gray-700">
//             To be a leader in the travel industry by consistently delivering exceptional service and pioneering new adventures. We envision a world where travel is a transformative force fostering understanding, and conservation of diverse cultures and habitats.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mission;