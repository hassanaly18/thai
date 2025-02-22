// // src/app/tours/[destination]/TourInfo.js
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
//     <div style={{paddingTop:"6rem", position:"relative"}} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="mb-2 text-sm uppercase tracking-wider text-indigo-600 font-medium">
//         OUR TOUR
//       </div>
      
//       {/* Title and Rating Section */}
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
//         <div className="flex items-center gap-2">
//           <span className="text-2xl font-bold">{rating}</span>
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

//       {/* Main Image */}
//       <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
//         <img 
//           src={mainImage} 
//           alt={title}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Info Card */}
//       <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
//         <h2 className="text-xl font-bold mb-4">{title}</h2>
//         <p className="text-gray-600 mb-4">{country}</p>
        
//         <div className="space-y-4">
//           <div className="flex items-center gap-2">
//             <Clock className="w-5 h-5 text-indigo-600" />
//             <span>{duration} Days</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Calendar className="w-5 h-5 text-indigo-600" />
//             <span>{season}</span>
//           </div>
//         </div>

//         <div className="mt-6 flex flex-wrap gap-2">
//           {categories.map((category, index) => (
//             <span
//               key={index}
//               className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm"
//             >
//               {category}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TourInfo;



// src/app/tours/[destination]/TourInfo.js
'use client';
import React from 'react';
import { Clock, Calendar } from 'lucide-react';

const TourInfo = ({ 
  title, 
  rating, 
  reviews, 
  mainImage, 
  country, 
  duration, 
  season, 
  categories 
}) => {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-2 text-sm uppercase tracking-wider text-indigo-600 font-medium">
        OUR TOUR
      </div>
      
      {/* Title and Rating Section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <div className="flex items-center gap-2">
          <span style={{color:"black"}} className="text-2xl font-bold">{rating}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-600">{reviews} Travel Reviews</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Image - Takes up 2/3 of the space */}
        <div className="lg:col-span-2 relative h-[500px] rounded-lg overflow-hidden">
          <img 
            src={mainImage} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info Card - Takes up 1/3 of the space */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 h-full">
            <h2 style={{color:"black"}} className="text-xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-4">{country}</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#312F93]" />
                <span style={{color:"black"}}>{duration} Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#312F93]" />
                <span style={{color:"black"}}>{season}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#312F93] text-white rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourInfo;