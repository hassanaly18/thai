"use client";

import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";

const DestCards = memo(({ destinations }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 pb-12">
      {destinations.map((destination, index) => (
        <article key={index} className="flex justify-center">
          <div className="w-full max-w-xs shadow-xl bg-white transition-shadow duration-300 hover:shadow-2xl rounded-lg overflow-hidden">
            <Link href={`/destinations/${destination.slug}`} className="block">
              <div className="relative h-48 w-full">
                <Image
                  src={destination.image}
                  alt={`${destination.name} landscape`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority={false}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="p-6">
                <h3 className="text-black text-xl font-bold mb-2">
                  {destination.name}
                </h3>
                <p className="text-gray-700 text-sm">{destination.description}</p>
              </div>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
});

export default DestCards;




// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const DestCards = ({ destinations }) => {
//   return (
   
//     <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 pb-12">
//     {destinations.map((destination, index) => (
//       <div key={index} className="flex justify-center">
//         <div className="w-full max-w-xs shadow-xl bg-white transition-shadow duration-300 hover:shadow-2xl rounded-t-lg">
//           <Link
//             href={`/destinations/${destination.slug}`}
//             className="block bg-white overflow-hidden rounded-t-lg"
//           >
//             <div className="relative h-48 w-full">
//               <Image
//                 src={destination.image}
//                 alt={`${destination.name} landscape`}
//                 fill
//                 className="object-cover transition-transform duration-500 hover:scale-105"
//               />
//             </div>

//             <div className="p-6">
//               <h3 className="text-black text-xl font-bold mb-2">
//                 {destination.name}
//               </h3>
//               <p className="text-gray-700 text-sm">
//                 {destination.description}
//               </p>
//             </div>
//           </Link>
//         </div>
//       </div>
//     ))}
//   </div>
//   );
// };

// export default DestCards;