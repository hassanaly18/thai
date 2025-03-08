// "use client";

// import React, { memo } from "react";
// import Image from "next/image";
// import { Clock, Calendar } from "lucide-react";

// const TourInfo = memo(({ 
//   title, 
//   rating, 
//   reviews, 
//   mainImage, 
//   country, 
//   duration, 
//   season, 
//   categories 
// }) => {
//   return (
//     <section className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {/* Heading */}
//       <p className="mb-2 text-sm uppercase tracking-wider text-indigo-600 font-medium">
//         Our Tour
//       </p>

//       {/* Title & Rating */}
//       <header className="flex items-center justify-between mb-6">
//         <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
//         <div className="flex items-center gap-2">
//           <span className="text-2xl font-bold text-black">{rating}</span>
//           <div className="flex">
//             {[...Array(5)].map((_, i) => (
//               <svg
//                 key={i}
//                 className={`w-5 h-5 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//               </svg>
//             ))}
//           </div>
//           <span className="text-gray-600">{reviews} Travel Reviews</span>
//         </div>
//       </header>

//       {/* Content Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Image Section */}
//         <div className="lg:col-span-2 relative h-[500px] rounded-lg overflow-hidden">
//           <Image 
//             src={mainImage} 
//             alt={`${title} tour destination`}
//             fill
//             className="object-cover"
//             priority={false}
//             loading="lazy"
//             decoding="async"
//           />
//         </div>

//         {/* Tour Info Card */}
//         <aside className="lg:col-span-1">
//           <div className="bg-white rounded-lg shadow-lg p-6 h-full">
//             <h2 className="text-xl font-bold text-black mb-4">{title}</h2>
//             <p className="text-gray-600 mb-4">{country}</p>

//             <div className="space-y-4">
//               <div className="flex items-center gap-2">
//                 <Clock className="w-5 h-5 text-[#312F93]" />
//                 <span className="text-black">{duration} Days</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Calendar className="w-5 h-5 text-[#312F93]" />
//                 <span className="text-black">{season}</span>
//               </div>
//             </div>

//             {/* Categories */}
//             <div className="mt-6 flex flex-wrap gap-2">
//               {categories.map((category, index) => (
//                 <span
//                   key={index}
//                   className="px-4 py-2 bg-[#312F93] text-white rounded-full text-sm"
//                 >
//                   {category}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </aside>
//       </div>
//     </section>
//   );
// });

// export default TourInfo;

"use client";

import React, { memo } from "react";
import Image from "next/image";
import { Clock, Calendar, DollarSign } from "lucide-react";

const TourInfo = memo(({ 
  title, 
  rating, 
  reviews, 
  mainImage, 
  country, 
  duration, 
  season, 
  categories, 
  price 
}) => {

  const openWhatsAppChat = () => {
    // Replace with your phone number and message
    const phoneNumber = "+66992262260"; // Your WhatsApp number with country code
    const message = `Hi! I'm interested in booking the ${title} tour.`;
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp API URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="pt-16 md:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      {/* Heading */}
      <p className="mb-2 text-sm uppercase tracking-wider text-indigo-600 font-medium">
        Our Tour
      </p>

      {/* Title & Rating - Stack on mobile, side-by-side on larger screens */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h1>
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-bold text-black">{rating}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 sm:w-5 sm:h-5 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm sm:text-base text-gray-600">{reviews} Travel Reviews</span>
        </div>
      </header>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Image Section */}
        <div className="lg:col-span-2 relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden">
          <Image 
            src={mainImage} 
            alt={`${title} tour destination`}
            fill
            className="object-cover"
            priority={false}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Tour Info Card */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 h-full">
            <h2 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-4">{title}</h2>
            <p className="text-gray-600 mb-4">{country}</p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#312F93]" />
                <span className="text-sm sm:text-base text-black">{duration} Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#312F93]" />
                <span className="text-sm sm:text-base text-black">{season}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-[#312F93]" />
                <span className="text-sm sm:text-base text-black">${price} per person</span>
              </div>
            </div>

            {/* Categories */}
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-[#312F93] text-white rounded-full text-xs sm:text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
             {/* WhatsApp Button - Added just under categories */}
             <button 
              onClick={openWhatsAppChat}
              className="mt-6 w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 px-4 rounded-lg transition-colors duration-300"
            >
              {/* WhatsApp Icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-5 h-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
});

export default TourInfo;

// 'use client';
// import React from 'react';
// import { Clock, Calendar } from 'lucide-react';

// const TourInfo = ({ 
//   title, 
//   rating, 
//   reviews, 
//   mainImage, 
//   country, 
//   duration, 
//   season, 
//   categories 
// }) => {
//   return (
//     <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="mb-2 text-sm uppercase tracking-wider text-indigo-600 font-medium">
//         OUR TOUR
//       </div>
      
//       {/* Title and Rating Section */}
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
//         <div className="flex items-center gap-2">
//           <span style={{color:"black"}} className="text-2xl font-bold">{rating}</span>
//           <div className="flex">
//             {[...Array(5)].map((_, i) => (
//               <svg
//                 key={i}
//                 className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//               </svg>
//             ))}
//           </div>
//           <span className="text-gray-600">{reviews} Travel Reviews</span>
//         </div>
//       </div>

//       {/* Main Content Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Main Image - Takes up 2/3 of the space */}
//         <div className="lg:col-span-2 relative h-[500px] rounded-lg overflow-hidden">
//           <img 
//             src={mainImage} 
//             alt={title}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Info Card - Takes up 1/3 of the space */}
//         <div className="lg:col-span-1">
//           <div className="bg-white rounded-lg shadow-lg p-6 h-full">
//             <h2 style={{color:"black"}} className="text-xl font-bold mb-4">{title}</h2>
//             <p className="text-gray-600 mb-4">{country}</p>
            
//             <div className="space-y-4">
//               <div className="flex items-center gap-2">
//                 <Clock className="w-5 h-5 text-[#312F93]" />
//                 <span style={{color:"black"}}>{duration} Days</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Calendar className="w-5 h-5 text-[#312F93]" />
//                 <span style={{color:"black"}}>{season}</span>
//               </div>
//             </div>

//             <div className="mt-6 flex flex-wrap gap-2">
//               {categories.map((category, index) => (
//                 <span
//                   key={index}
//                   className="px-4 py-2 bg-[#312F93] text-white rounded-full text-sm"
//                 >
//                   {category}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TourInfo;