"use client";

import React, { memo } from "react";
import Image from "next/image";

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
          <Card
            title="Explore Historic Europe"
            src="/images/beach1.jpg"
            alt="Explore historic Europe"
            description="Discover the rich history and breathtaking architecture of Europe's top cities with our guided tours."
          />

          {/* Rotated Card 1 */}
          <Card
            title="Island Adventures Await"
            src="/images/beach2.jpg"
            alt="Island adventure with crystal clear waters"
            description="Dive into crystal clear waters, explore hidden caves and experience the local culture."
            customClass="absolute top-16 -left-4 transform -rotate-12"
          />

          {/* Rotated Card 2 */}
          <Card
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

// Reusable Card Component
const Card = memo(({ title, src, alt, description, customClass = "" }) => (
  <div className={`bg-white rounded-lg shadow-md p-4 w-64 mx-auto ${customClass}`}>
    <h3 className="font-bold text-black text-md pb-2">{title}</h3>
    <div className="relative w-full h-32">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        placeholder="blur"
        blurDataURL="/images/blur-placeholder.jpg" // Optional: If available
        className="object-cover rounded-lg"
      />
    </div>
    <p className="text-xs text-gray-700 pt-2">{description}</p>
  </div>
));

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


// import React from "react";

// const ContactForm = () => {
//   return (
//     <div className="container mx-auto px-4 py-12">
//         <h3 className="font-bold text-2xl text-center text-black p-4 pt-0">Send Us Your Queries</h3>
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Left Side - Tour Cards Section */}
//         <div className="lg:w-1/2 relative">
//           {/* All cards same size */}
//           <div className="bg-white rounded-lg shadow-md p-4 w-64 mx-auto">
//           <h3 className="font-bold text-black text-md pb-2">
//               Explore Historic Europe
//             </h3>
//             <img
//               src="/images/beach1.jpg"
//               alt="Historic Europe Coast"
//               className="w-full h-32 object-cover rounded-lg mb-2"
//             />
//             <p className="text-xs text-gray-700">
//               Discover the rich history and breathtaking architecture of
//               Europe's top cities with our guided tours.
//             </p>
//           </div>

//           {/* Rotated Card 1 - Island Adventures */}
//           <div className="absolute top-16 -left-4 transform -rotate-12 bg-white rounded-lg shadow-md p-4 w-64">
//             <h3 className="font-bold text-black text-md">
//               Island Adventures Await
//             </h3>
//             <div className="mt-2">
//               <img
//                 src="/images/beach2.jpg"
//                 alt="Island Rock Formation"
//                 className="w-full h-32 object-cover rounded-lg"
//               />
//             </div>
//             <p className="text-xs text-gray-700 pt-2">
//               Dive into crystal clear waters, explore hidden caves and
//               experience the local culture.
//             </p>
//           </div>

//           {/* Rotated Card 2 - Thai Traditions */}
//           <div className="absolute bottom-16 -right-4 transform rotate-12 bg-white rounded-lg shadow-md p-4 w-64">
//             <h3 className="font-bold text-black text-md">Explore Thailand!</h3>

//             <div className="mt-2">
//               <img
//                 src="/images/mission1.png"
//                 alt="Thai Coastal View"
//                 className="w-full h-32 object-cover rounded-lg"
//               />
//             </div>
//             <p className="text-xs text-gray-700 pt-2">
//               Immerse yourself in ancient Thai traditions and discover the
//               warmth and hospitality of local communities.
//             </p>
//           </div>
//         </div>

//         {/* Right Side - Contact Form */}
//         <div className="lg:w-1/2 z-10">
//           <div className="bg-indigo-800 rounded-lg shadow-lg p-8 text-white">
//             <form className="space-y-6">
//               <div className="text-left">
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium mb-1 text-left"
//                 >
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="w-full border-b border-white bg-transparent pb-1 focus:outline-none text-white"
//                   placeholder=" "
//                 />
//               </div>

//               <div className="text-left">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium mb-1 text-left"
//                 >
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full border-b border-white bg-transparent pb-1 focus:outline-none text-white"
//                   placeholder=" "
//                 />
//               </div>

//               <div className="text-left">
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium mb-1 text-left"
//                 >
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="4"
//                   className="w-full border-b border-white bg-transparent pb-1 focus:outline-none text-white"
//                   placeholder=" "
//                 ></textarea>
//               </div>

//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   className="bg-yellow-500 hover:bg-yellow-600 text-indigo-900 font-bold py-2 px-8 rounded-md transition duration-300"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
