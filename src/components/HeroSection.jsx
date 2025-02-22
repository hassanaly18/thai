// import React from 'react';

// const HeroSection = () => {
//   return (
//     <div className="relative h-screen w-full">
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 w-full h-full bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/images/herobg.png')"
//         }}
//       />
      
//       {/* Content Container */}
//       <div className="relative h-full flex items-center">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col gap-4">
//             {/* First line with blue background */}
//             <div className="inline-block">
//               <span className="text-white text-4xl md:text-5xl lg:text-6xl font-bold bg-[#312F93] px-6 py-2">
//                 Welcome to Destination To Paradise
//               </span>
//             </div>
            
//             {/* Second line with yellow background */}
//             <div className="inline-block">
//               <span className="text-white text-3xl md:text-4xl lg:text-5xl font-bold bg-yellow-400 px-6 py-2">
//                 Where Wonders Await!
//               </span>
//             </div>
            
//             {/* Button */}
//             <div className="mt-8">
//               <button className="bg-[#312F93] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition-colors">
//                 Explore More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/herobg.png')"
        }}
      />
      
      {/* Content Container */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col">
            {/* First line with blue background */}
            <div  className="inline-block">
              <div className="relative">
                <span  className="relative z-10 inline-block text-white text-3xl md:text-3xl lg:text-4xl font-bold px-6 py-6">
                  Welcome to Destination To Paradise
                </span>
                <div style={{width:"57%"}} className="absolute inset-0 bg-[#312F93] transform -skew-x-6 z-0"></div>
              </div>
            </div>
            
            {/* Second line with yellow background */}
            <div className="inline-block">
              <div className="relative -mt-2">
                <span  className="relative z-10 inline-block text-white text-2xl md:text-3xl lg:text-4xl font-bold px-6 py-5">
                  Where Wonders Await!
                </span>
                <div style={{width:"40%"}} className="absolute inset-0 bg-yellow-400 transform -skew-x-6 z-0 -skew-y-1"></div>
              </div>
            </div>
            
            {/* Button */}
            <div className="mt-8">
              <button className="bg-[#312F93] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition-colors">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;