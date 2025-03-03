// "use client";

// import React, { memo } from "react";
// import Image from "next/image";

// const ContactForm = memo(() => {
//   return (
//     <section className="container mx-auto px-4 py-12">
//       <h2 className="font-bold text-2xl text-center text-black p-4 pt-0">
//         Send Us Your Queries
//       </h2>

//       <div className="flex flex-col lg:flex-row gap-12">
//         {/* Left Side - Tour Cards Section */}
//         <div className="lg:w-1/2 relative">
//           {/* Main Card */}
//           <Card
//             title="Explore Historic Europe"
//             src="/images/beach1.jpg"
//             alt="Explore historic Europe"
//             description="Discover the rich history and breathtaking architecture of Europe's top cities with our guided tours."
//           />

//           {/* Rotated Card 1 */}
//           <Card
//             title="Island Adventures Await"
//             src="/images/beach2.jpg"
//             alt="Island adventure with crystal clear waters"
//             description="Dive into crystal clear waters, explore hidden caves and experience the local culture."
//             customClass="absolute top-16 -left-4 transform -rotate-12"
//           />

//           {/* Rotated Card 2 */}
//           <Card
//             title="Explore Thailand!"
//             src="/images/mission1.png"
//             alt="Thai coastal view"
//             description="Immerse yourself in ancient Thai traditions and discover the warmth and hospitality of local communities."
//             customClass="absolute bottom-16 -right-4 transform rotate-12"
//           />
//         </div>

//         {/* Right Side - Contact Form */}
//         <div className="lg:w-1/2 z-10">
//           <div className="bg-[#312F93] rounded-lg shadow-lg p-8 text-white">
//             <form className="space-y-6">
//               <fieldset className="space-y-4">
//                 <legend className="sr-only">Contact Form</legend>

//                 <InputField id="name" label="Your Name" type="text" />
//                 <InputField id="email" label="Your Email" type="email" />
//                 <TextAreaField id="message" label="Your Message" />

//               </fieldset>

//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   className="bg-[#F8A603] hover:bg-yellow-600 text-[#312F93] font-bold py-2 px-8 rounded-md transition duration-300"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// });

// // Reusable Card Component
// const Card = memo(({ title, src, alt, description, customClass = "" }) => (
//   <div className={`bg-white rounded-lg shadow-md p-4 w-64 mx-auto ${customClass}`}>
//     <h3 className="font-bold text-black text-md pb-2">{title}</h3>
//     <div className="relative w-full h-32">
//       <Image
//         src={src}
//         alt={alt}
//         fill
//         priority
//         placeholder="blur"
//         blurDataURL="/images/blur-placeholder.jpg" // Optional: If available
//         className="object-cover rounded-lg"
//       />
//     </div>
//     <p className="text-xs text-gray-700 pt-2">{description}</p>
//   </div>
// ));

// // Reusable Input Component
// const InputField = memo(({ id, label, type }) => (
//   <div>
//     <label htmlFor={id} className="block text-md font-medium text-left mb-1">
//       {label}
//     </label>
//     <input
//       type={type}
//       id={id}
//       className="w-full border-b border-white bg-transparent pb-1 focus:outline-none text-white"
//       placeholder={`Enter your ${label.toLowerCase()}`}
//       aria-label={label}
//       required
//     />
//   </div>
// ));

// // Reusable TextArea Component
// const TextAreaField = memo(({ id, label }) => (
//   <div>
//     <label htmlFor={id} className="block text-md font-medium text-left mb-1">
//       {label}
//     </label>
//     <textarea
//       id={id}
//       rows="4"
//       className="w-full border-b border-white bg-transparent pb-1 focus:outline-none text-white"
//       placeholder={`Write your ${label.toLowerCase()}`}
//       aria-label={label}
//       required
//     ></textarea>
//   </div>
// ));

// export default ContactForm;


"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactForm = memo(() => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="font-bold text-2xl text-center text-black p-4 pt-0">
        Send Us Your Queries
      </h2>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side - Tour Cards Section */}
        <div className="lg:w-1/2 relative">
          {/* Main Card */}
          <AnimatedCard
            title="Explore Historic Europe"
            src="/images/beach1.jpg"
            alt="Explore historic Europe"
            description="Discover the rich history and breathtaking architecture of Europe's top cities with our guided tours."
          />

          {/* Rotated Card 1 */}
          <AnimatedCard
            title="Island Adventures Await"
            src="/images/beach2.jpg"
            alt="Island adventure with crystal clear waters"
            description="Dive into crystal clear waters, explore hidden caves and experience the local culture."
            customClass="absolute top-16 -left-4 transform -rotate-12"
          />

          {/* Rotated Card 2 */}
          <AnimatedCard
            title="Explore Thailand!"
            src="/images/mission1.png"
            alt="Thai coastal view"
            description="Immerse yourself in ancient Thai traditions and discover the warmth and hospitality of local communities."
            customClass="absolute bottom-16 -right-4 transform rotate-12"
          />
        </div>

        {/* Right Side - Contact Form */}
        <div className="lg:w-1/2 z-10">
          <div className="bg-[#312F93] rounded-lg shadow-lg p-8 text-white">
            <form className="space-y-6">
              <fieldset className="space-y-4">
                <legend className="sr-only">Contact Form</legend>
                <InputField id="name" label="Your Name" type="text" />
                <InputField id="email" label="Your Email" type="email" />
                <TextAreaField id="message" label="Your Message" />
              </fieldset>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#F8A603] hover:bg-yellow-600 text-[#312F93] font-bold py-2 px-8 rounded-md transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

// Animated Card Component
const AnimatedCard = memo(({ title, src, alt, description, customClass = "" }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`bg-white rounded-lg shadow-md p-4 w-64 mx-auto ${customClass}`}
    >
      <h3 className="font-bold text-black text-md pb-2">{title}</h3>
      <div className="relative w-full h-32">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          placeholder="blur"
          blurDataURL="/images/blur-placeholder.jpg"
          className="object-cover rounded-lg"
        />
      </div>
      <p className="text-xs text-gray-700 pt-2">{description}</p>
    </motion.div>
  );
});

// Reusable Input Component
const InputField = memo(({ id, label, type }) => (
  <div>
    <label htmlFor={id} className="block text-md font-medium text-left mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="w-full border-b border-white bg-transparent pb-1 focus:outline-none text-white"
      placeholder={`Enter your ${label.toLowerCase()}`}
      aria-label={label}
      required
    />
  </div>
));

// Reusable TextArea Component
const TextAreaField = memo(({ id, label }) => (
  <div>
    <label htmlFor={id} className="block text-md font-medium text-left mb-1">
      {label}
    </label>
    <textarea
      id={id}
      rows="4"
      className="w-full border-b border-white bg-transparent pb-1 focus:outline-none text-white"
      placeholder={`Write your ${label.toLowerCase()}`}
      aria-label={label}
      required
    ></textarea>
  </div>
));

export default ContactForm;
