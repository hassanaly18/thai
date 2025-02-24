// import React from 'react';

// const About = () => {
//     return (
//         <div className="bg-blue-900 flex flex-col md:flex-row text-white p-8">
//             <div className="flex-1 mb-6 md:mb-0">
//                 <h2 className="text-3xl font-bold mb-4">Who <span className="text-yellow-400">We Are</span></h2>
//                 <p className="text-lg mb-4">
//                     Welcome to Destination to Paradise, your expert in crafting bespoke travel experiences.
//                     Our mission is to transform each trip into a unique paradise, tailored specifically
//                     to your desires. We specialize in creating journeys that cater to individual tastes and
//                     preferences, ensuring every detail is thoughtfully considered.
//                 </p>
//                 <p className="text-lg">
//                     Whether you're looking to relax on secluded beaches or explore remote cultural treasures, 
//                     Destination to Paradise is here to guide you to your perfect getaway.
//                 </p>
//                 <button className="mt-4 px-6 py-2 bg-yellow-400 text-blue-900 font-bold rounded-lg transition duration-300 hover:bg-yellow-500">
//                     Explore Now ➔
//                 </button>
//             </div>
//             <div className="flex-1 relative">
//                 <div className="relative max-w-xl mx-auto">
//                     {/* Overlapping images container */}
//                     <div className="relative flex items-center justify-center h-96">
//                         {/* First image - back left (lowest) */}
//                         <div className="w-1/2 absolute transform -translate-x-16 translate-y-14 transition-all duration-500 hover:-translate-y-2">
//                             <div className="aspect-square relative overflow-hidden shadow-xl">
//                                 <img 
//                                     src="/images/beach1.jpg" 
//                                     alt="Travel Scene 1" 
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                         </div>
                        
//                         {/* Second image - back right (middle height) */}
//                         <div className="w-1/2 absolute z-10 transform translate-x-16 translate-y-8 transition-all duration-500 hover:-translate-y-2">
//                             <div className="aspect-square relative overflow-hidden  shadow-xl">
//                                 <img 
//                                     src="\images\bg1.jpg" 
//                                     alt="Travel Scene 2" 
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                         </div>
                        
//                         {/* Third image - front center (highest) */}
//                         <div className="w-1/2 absolute z-20 transform -translate-y-4 transition-all duration-500 hover:-translate-y-6">
//                             <div className="aspect-square relative overflow-hidden  shadow-xl">
//                                 <img 
//                                     src="\images\bg2.jpg" 
//                                     alt="Travel Scene 3" 
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;


import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <div className="bg-blue-900 flex flex-col md:flex-row text-white p-8">
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
            <div className="flex-1 relative">
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
