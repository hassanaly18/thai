import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <div className="bg-[#312F93] flex flex-col md:flex-row text-white p-8">
            <div className="flex-1 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Who <span className="text-yellow-400">We Are</span></h2>
                <p className="text-lg mb-4">
                    Welcome to Destination to Paradise, your expert in crafting bespoke travel experiences.
                    Our mission is to transform each trip into a unique paradise, tailored specifically
                    to your desires. We specialize in creating journeys that cater to individual tastes and
                    preferences, ensuring every detail is thoughtfully considered.
                </p>
                <p className="text-lg">
                    Whether you're looking to relax on secluded beaches or explore remote cultural treasures, 
                    Destination to Paradise is here to guide you to your perfect getaway.
                </p>
                <button className="mt-4 px-6 py-2 bg-yellow-400 text-blue-900 font-bold rounded-lg transition duration-300 hover:bg-yellow-500">
                    Explore Now ➔
                </button>
            </div>
            <div className="aboutImages flex-1 relative">
                <div className="relative max-w-xl mx-auto">
                    <div className="relative flex items-center justify-center h-96">
                        <div className="w-1/2 absolute transform -translate-x-16 translate-y-14 transition-all duration-500 hover:-translate-y-2">
                            <div className="aspect-square relative overflow-hidden shadow-xl">
                                <Image 
                                    src="/images/beach1.jpg" 
                                    alt="Travel Scene 1" 
                                    layout="fill"
                                    objectFit="cover"
                                    priority={false}
                                />
                            </div>
                        </div>
                        
                        <div className="w-1/2 absolute z-10 transform translate-x-16 translate-y-8 transition-all duration-500 hover:-translate-y-2">
                            <div className="aspect-square relative overflow-hidden shadow-xl">
                                <Image 
                                    src="/images/bg1.jpg" 
                                    alt="Travel Scene 2" 
                                    layout="fill"
                                    objectFit="cover"
                                    priority={false}
                                />
                            </div>
                        </div>
                        
                        <div className="w-1/2 absolute z-20 transform -translate-y-4 transition-all duration-500 hover:-translate-y-6">
                            <div className="aspect-square relative overflow-hidden shadow-xl">
                                <Image 
                                    src="/images/bg2.jpg" 
                                    alt="Travel Scene 3" 
                                    layout="fill"
                                    objectFit="cover"
                                    priority={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;


// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion, useInView } from "framer-motion";

// const About = () => {
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <div ref={ref} className="bg-[#312F93] flex flex-col md:flex-row text-white p-8">
//       {/* Text Section */}
//       <motion.div
//         className="flex-1 mb-6 md:mb-0"
//         initial={{ opacity: 0, x: -50 }}
//         animate={isInView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl font-bold mb-4">
//           Who <span className="text-yellow-400">We Are</span>
//         </h2>
//         <p className="text-lg mb-4">
//           Welcome to Destination to Paradise, your expert in crafting bespoke travel experiences.
//           Our mission is to transform each trip into a unique paradise, tailored specifically
//           to your desires. We specialize in creating journeys that cater to individual tastes and
//           preferences, ensuring every detail is thoughtfully considered.
//         </p>
//         <p className="text-lg">
//           Whether you're looking to relax on secluded beaches or explore remote cultural treasures,
//           Destination to Paradise is here to guide you to your perfect getaway.
//         </p>
//         <button className="mt-4 px-6 py-2 bg-yellow-400 text-blue-900 font-bold rounded-lg transition duration-300 hover:bg-yellow-500">
//           Explore Now ➔
//         </button>
//       </motion.div>

//       {/* Image Section */}
//       <div className="flex-1 relative">
//         <div className="relative max-w-xl mx-auto">
//           <div className="relative flex items-center justify-center h-96">
//             {/* Image 1 - From Left */}
//             <motion.div
//               className="w-1/2 absolute transform -translate-x-16 translate-y-14"
//               initial={{ opacity: 0, x: -80 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
//             >
//               <div className="aspect-square relative overflow-hidden shadow-xl">
//                 <Image src="/images/beach1.jpg" alt="Travel Scene 1" layout="fill" objectFit="cover" />
//               </div>
//             </motion.div>

//             {/* Image 2 - From Right */}
//             <motion.div
//               className="w-1/2 absolute z-10 transform translate-x-16 translate-y-8"
//               initial={{ opacity: 0, x: 80 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
//             >
//               <div className="aspect-square relative overflow-hidden shadow-xl">
//                 <Image src="/images/bg1.jpg" alt="Travel Scene 2" layout="fill" objectFit="cover" />
//               </div>
//             </motion.div>

//             {/* Image 3 - From Bottom */}
//             <motion.div
//               className="w-1/2 absolute z-20 transform -translate-y-4"
//               initial={{ opacity: 0, y: 80 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
//             >
//               <div className="aspect-square relative overflow-hidden shadow-xl">
//                 <Image src="/images/bg2.jpg" alt="Travel Scene 3" layout="fill" objectFit="cover" />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
