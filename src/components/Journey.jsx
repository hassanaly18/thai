//claude
import React from 'react';
import Image from 'next/image';

const Journey = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Main Content Container */}
      <div className="flex flex-col md:flex-row shadow-[#00000033]  shadow-2xl bg-white">
        {/* Left side - Image (narrower width) */}
        <div className="w-full md:w-1/3 relative h-[60vh]">
          <Image
            src="/images/journey.png" // Update with your actual image path
            alt="Thailand landscape with mountains and water"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Right side - Text Content (wider width) */}
        <div className="w-full md:w-2/3 p-8">
          <h2 className="text-2xl text-black font-bold text-center mb-6">
            Our Journey to Inspiring Your Adventures
          </h2>
          
          <div className="space-y-4">
            <p className="text-gray-700 text-left">
              Destination to Paradise began as a dream to offer more than just
              vacations, but transformative travel experiences. Starting in a small
              Bangkok office, we set out to connect adventurers with the world's
              most inspiring destinations.
            </p>
            
            <p className="text-gray-700 text-left">
              Our passion for discovery and commitment to personalized journeys
              has grown our company into a trusted name in travel, known for our
              unique, tailor-made itineraries that go beyond the ordinary.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Container - Correctly positioned at the bottom */}
      <div className="absolute bottom-[20vh] left-0 md:left-[10%] shadow-xl transform translate-y-1/2 w-full md:w-2/3 lg:w-3/5">
        <div className="grid grid-cols-3 bg-[#312F93] shadow-lg overflow-hidden">
          <div className="p-4 md:p-6 text-center border-r border-indigo-700">
            <h3 className="text-xl md:text-2xl font-bold text-amber-400">10K +</h3>
            <p className="text-white text-xs md:text-sm mt-1">Satisfied Customers</p>
          </div>
          <div className="p-4 md:p-6 text-center border-r border-indigo-700">
            <h3 className="text-xl md:text-2xl font-bold text-amber-400">500 +</h3>
            <p className="text-white text-xs md:text-sm mt-1">Destinations Covered</p>
          </div>
          <div className="p-4 md:p-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-amber-400">2500 +</h3>
            <p className="text-white text-xs md:text-sm mt-1">Tours Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;



// //deepseek
// import React from 'react';
// import Image from 'next/image';

// const Journey = () => {
//   return (
//     <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//       {/* Main Content Container */}
//       <div className="flex flex-col md:flex-row items-start gap-8">
//         {/* Left side - Image (narrower width) */}
//         <div className="w-full md:w-[38%] relative h-72 md:h-[500px]">
//           <Image
//             src="/images/journey.png"
//             alt="Thailand landscape with mountains and water"
//             fill
//             className="object-cover rounded-lg"
//           />
//         </div>

//         {/* Right side - Text Content */}
//         <div className="w-full md:w-[62%] mt-0 md:-mt-4">
//           {/* Stats Container positioned below header */}
//           <div className="w-full md:w-[90%] lg:w-[85%] xl:w-[75%] -mt-8 md:-mt-20 ml-0 md:ml-8 relative z-10">
//             <div className="grid grid-cols-1 md:grid-cols-3 bg-blue-800 rounded-lg shadow-lg divide-y md:divide-y-0 md:divide-x divide-blue-600">
//               <div className="p-4 md:p-6 text-center">
//                 <h3 className="text-2xl md:text-3xl font-bold text-white">10K+</h3>
//                 <p className="text-white text-sm mt-1">Satisfied Customers</p>
//               </div>
//               <div className="p-4 md:p-6 text-center">
//                 <h3 className="text-2xl md:text-3xl font-bold text-amber-400">500+</h3>
//                 <p className="text-white text-sm mt-1">Destinations Covered</p>
//               </div>
//               <div className="p-4 md:p-6 text-center">
//                 <h3 className="text-2xl md:text-3xl font-bold text-amber-400">2500+</h3>
//                 <p className="text-white text-sm mt-1">Tours Completed</p>
//               </div>
//             </div>
//           </div>

//           {/* Text Content */}
//           <div className="relative z-0 pt-8 md:pt-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
//               Our Journey to Inspiring Your<br/>
//               <span className="text-blue-600">Destination to Paradise</span>
//             </h2>
            
//             <div className="space-y-5 text-gray-600 text-lg">
//               <p>
//                 began as a dream to offer more than just vacations, 
//                 but transformative travel experiences. Starting in a small 
//                 Bangkok office, we set out to connect adventurers with the world's 
//                 most inspiring destinations.
//               </p>
              
//               <p>
//                 Our passion for discovery and commitment to personalized journeys
//                 has grown our company into a trusted name in travel, known for our
//                 unique, tailor-made itineraries that go beyond the ordinary.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Journey;