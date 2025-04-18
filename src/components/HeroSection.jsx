// import React from 'react';
// import Link from 'next/link';

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
//           <div className="flex flex-col">
//             {/* First line with blue background */}
//             <div  className="inline-block">
//               <div className="relative">
//                 <span  className="relative z-10 inline-block text-white text-3xl md:text-3xl lg:text-4xl font-bold px-6 py-6">
//                   Welcome to Destination To Paradise
//                 </span>
//                 <div style={{width:"57%"}} className="absolute inset-0 bg-[#312F93] transform -skew-x-6 z-0"></div>
//               </div>
//             </div>
            
//             {/* Second line with yellow background */}
//             <div className="inline-block">
//               <div className="relative -mt-2">
//                 <span  className="relative z-10 inline-block text-white text-2xl md:text-3xl lg:text-4xl font-bold px-6 py-5">
//                   Where Wonders Await!
//                 </span>
//                 <div style={{width:"40%"}} className="absolute inset-0 bg-yellow-400 transform -skew-x-6 z-0 -skew-y-1"></div>
//               </div>
//             </div>
            
//             {/* Button */}
//             <div className="mt-8">
//               <button className="bg-[#312F93] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition-colors">
//                 <Link href="/tours">
//                 Explore More
//                 </Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



//Framer 
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="hero relative h-screen w-full overflow-hidden">
      {/* Background Image Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="heroImage absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/herobg.png')" }}
      />

      {/* Content Container */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col">
            {/* First Line Animation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="inline-block"
            >
              <div className="relative">
                <span className="ftext relative z-10 inline-block text-white text-3xl md:text-3xl lg:text-4xl font-bold px-6 py-6">
                  Welcome to Destination To Paradise
                </span>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  style={{ width: "57%" }}
                  className="fline absolute inset-0 bg-[#312F93] transform -skew-x-2 z-0"
                />
              </div>
            </motion.div>

            {/* Second Line Animation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="inline-block"
            >
              <div className="relative -mt-2">
                <span className="stext relative z-10 inline-block text-white text-2xl md:text-3xl lg:text-4xl font-bold px-6 py-5">
                  Where Wonders Await!
                </span>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                  style={{ width: "40%" }}
                  className="sline absolute inset-0 bg-yellow-400 transform -skew-x-6 z-0 -skew-y-1"
                />
              </div>
            </motion.div>

            {/* Button Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="mt-8"
            >
              <button className="bg-[#312F93] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition-colors">
                <Link href="/tours">Explore More</Link>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
