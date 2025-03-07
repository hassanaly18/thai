// import React from "react";

// const Stats = () => {
//   return (
//     <div className="bg-white py-16">
//       <div className="container mx-auto px-4">
//         {/* Header Section */}
//         <div className="text-center mb-10">
//           <div className="flex justify-center items-center gap-2 mb-4">
//             {/* <div className="h-px w-12 bg-blue-600"></div> */}
//             {/* <span className="text-sm font-medium uppercase heading">Our Success</span> */}
//             <div className="flex justify-center items-center gap-2 mb-4">
//               <div className="h-px w-16 bg-[#312F93]"></div>
//               <span className="text-l font-bold uppercase heading">
//                 Our success
//               </span>
//               <div className="h-px w-16 bg-[#312F93]"></div>
//             </div>
//             {/* <div className="h-px w-12 bg-blue-600"></div> */}
//           </div>

//           <h2 className="text-2xl font-bold text-gray-900 mb-3">
//             Our Journey in Numbers
//           </h2>

//           <p className="text-gray-600 text-sm max-w-2xl mx-auto">
//             Unveiling the Impact of Our Global Travel Adventures with Thousands
//             of Happy Explorers
//           </p>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//           {/* Satisfied Customers */}
//           <div className="text-center">
//             <p
//               style={{ color: "var(--blue)" }}
//               className="text-blue-600 text-3xl font-bold mb-2"
//             >
//               10K +
//             </p>
//             <p
//               style={{ color: "var(--blue)" }}
//               className="text-gray-600 text-sm"
//             >
//               Satisfied Customers
//             </p>
//           </div>

//           {/* Destinations Covered */}
//           <div className="text-center">
//             <p
//               style={{ color: "var(--blue)" }}
//               className="text-blue-600 text-3xl font-bold mb-2"
//             >
//               500 +
//             </p>
//             <p
//               style={{ color: "var(--blue)" }}
//               className="text-gray-600 text-sm"
//             >
//               Destinations Covered
//             </p>
//           </div>

//           {/* Tours Completed */}
//           <div className="text-center">
//             <p
//               style={{ color: "var(--blue)" }}
//               className="text-blue-600 text-3xl font-bold mb-2"
//             >
//               2500 +
//             </p>
//             <p
//               style={{ color: "var(--blue)" }}
//               className="text-gray-600 text-sm"
//             >
//               Tours Completed
//             </p>
//           </div>

//           {/* Average Customer Rating */}
//           <div className="text-center">
//             <p
//               style={{ color: "var(--blue)" }}
//               className="text-blue-600 text-3xl font-bold mb-2"
//             >
//               4.8
//             </p>
//             <p
//               style={{ color: "var(--blue)" }}
//               className="text-gray-600 text-sm"
//             >
//               Average Customer Rating
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Stats;


"use client";
import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const StatItem = ({ value, label, animation, shouldCount }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation only when scrolled into view
  const [count, setCount] = useState(shouldCount ? 0 : value); // Only count if needed

  useEffect(() => {
    if (!shouldCount || !isInView) return; // No counting for 4.8 rating

    let start = 0;
    const end = parseInt(value.replace(/\D/g, ""), 10);
    if (isNaN(end)) return;

    const duration = 2000; // 2 seconds
    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, isInView, shouldCount]);

  return (
    <motion.div ref={ref} className="text-center" {...animation}>
      <p style={{ color: "var(--blue)" }} className="statNum text-blue-600 text-3xl font-bold mb-2">
        {shouldCount ? count + "+" : value} {/* Show number counting or static value */}
      </p>
      <p style={{ color: "var(--blue)" }} className="statText text-gray-600 text-sm">
        {label}
      </p>
    </motion.div>
  );
};

const Stats = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // Triggers animations only once

  return (
    <div className="bg-white py-16">
      <div ref={ref} className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <motion.div
            className="flex justify-center items-center gap-2 mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="h-px w-16 bg-[#312F93]"></div>
            <span className="text-l font-bold uppercase heading">Our success</span>
            <div className="h-px w-16 bg-[#312F93]"></div>
          </motion.div>

          <motion.h2
            className="text-2xl font-bold text-gray-900 mb-3"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Our Journey in Numbers
          </motion.h2>

          <motion.p
            className="text-gray-600 text-sm max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            Unveiling the Impact of Our Global Travel Adventures with Thousands of Happy Explorers
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <StatItem
            value="10K+"
            label="Satisfied Customers"
            shouldCount={true}
            animation={{
              initial: { opacity: 0, x: -50 },
              animate: isInView ? { opacity: 1, x: 0 } : {},
              transition: { duration: 1, delay: 0.7, ease: "easeOut" },
            }}
          />
          <StatItem
            value="500+"
            label="Destinations Covered"
            shouldCount={true}
            animation={{
              initial: { opacity: 0, y: 50 },
              animate: isInView ? { opacity: 1, y: 0 } : {},
              transition: { duration: 1, delay: 0.9, ease: "easeOut" },
            }}
          />
          <StatItem
            value="1500+"
            label="Tours Completed"
            shouldCount={true}
            animation={{
              initial: { opacity: 0, y: 50 },
              animate: isInView ? { opacity: 1, y: 0 } : {},
              transition: { duration: 1, delay: 0.9, ease: "easeOut" },
            }}
          />
          <StatItem
            value="4.8"
            label="Average Customer Rating"
            shouldCount={false} // No counting for 4.8
            animation={{
              initial: { opacity: 0, x: 50 },
              animate: isInView ? { opacity: 1, x: 0 } : {},
              transition: { duration: 1, delay: 0.7, ease: "easeOut" },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
