// "use client";

// import React, { memo } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const DestCards = memo(({ destinations }) => {
//   return (
//     <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 pb-12">
//       {destinations.map((destination, index) => (
//         <article key={index} className="flex justify-center">
//           <div className="w-full max-w-xs shadow-xl bg-white transition-shadow duration-300 hover:shadow-2xl rounded-lg overflow-hidden">
//             <Link href={`/destinations/${destination.slug}`} className="block">
//               <div className="relative h-48 w-full">
//                 <Image
//                   src={destination.image}
//                   alt={`${destination.name} landscape`}
//                   fill
//                   className="object-cover transition-transform duration-500 hover:scale-105"
//                   priority={false}
//                   loading="lazy"
//                   decoding="async"
//                 />
//               </div>

//               <div className="p-6">
//                 <h3 className="text-black text-xl font-bold mb-2">
//                   {destination.name}
//                 </h3>
//                 <p className="text-gray-700 text-sm">{destination.description}</p>
//               </div>
//             </Link>
//           </div>
//         </article>
//       ))}
//     </section>
//   );
// });

// export default DestCards;

"use client";

import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const DestCards = memo(({ destinations }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }}
      className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 pb-12"
    >
      {destinations.map((destination, index) => (
        <motion.article
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, delay: index * 0.1 },
            },
          }}
          whileHover={{
            scale: 1.05,
            rotateX: 5,
            rotateY: 5,
            boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.4, ease: "easeOut" },
          }}
          className="flex justify-center"
        >
          <div className="w-full max-w-xs shadow-xl bg-white transition-shadow duration-300 rounded-lg overflow-hidden">
            <Link href={`/tours`} className="block">
              <div className="relative h-48 w-full">
                <Image
                  src={destination.image}
                  alt={`Destination To Paradise`}
                  fill
                  className="object-cover transition-transform duration-500"
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
        </motion.article>
      ))}
    </motion.section>
  );
});

export default DestCards;

// "use client";

// import React, { memo } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const DestCards = memo(({ destinations }) => {
//   return (
//     <motion.section
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={{
//         hidden: { opacity: 0, y: 50 },
//         visible: { opacity: 1, y: 0, transition: { duration: 1 } },
//       }}
//       className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 pb-12"
//     >
//       {destinations.map((destination, index) => (
//         <motion.article
//           key={index}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={{
//             hidden: { opacity: 0, scale: 0.9 },
//             visible: {
//               opacity: 1,
//               scale: 1,
//               transition: { duration: 0.5, delay: index * 0.1 },
//             },
//           }}
//           whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
//           className="flex justify-center"
//         >
//           <div className="w-full max-w-xs shadow-xl bg-white transition-shadow duration-300 hover:shadow-2xl rounded-lg overflow-hidden">
//             <Link href={`/destinations/${destination.slug}`} className="block">
//               <div className="relative h-48 w-full">
//                 <Image
//                   src={destination.image}
//                   alt={`${destination.name} landscape`}
//                   fill
//                   className="object-cover transition-transform duration-500 hover:scale-105"
//                   priority={false}
//                   loading="lazy"
//                   decoding="async"
//                 />
//               </div>

//               <div className="p-6">
//                 <h3 className="text-black text-xl font-bold mb-2">
//                   {destination.name}
//                 </h3>
//                 <p className="text-gray-700 text-sm">{destination.description}</p>
//               </div>
//             </Link>
//           </div>
//         </motion.article>
//       ))}
//     </motion.section>
//   );
// });

// export default DestCards;
