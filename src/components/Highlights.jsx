// import React from "react";
import { Check, X } from "lucide-react";

const Highlights = ({
  mapLocation = "Thailand", // Default location
  included = [],
  notIncluded = [],
  highlights = [],
}) => {
  // Optimized Google Maps embed URL
  const encodedLocation = encodeURIComponent(mapLocation);
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15933528.384143036!2d90.80080763757574!3d12.841882077790606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2s${encodedLocation}!5e0!3m2!1sen!2s!4v1740312693100!5m2!1sen!2s`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-8">
          <div className="rounded-xl overflow-hidden mb-8 h-[300px]">
            <iframe
              title={`Map of ${mapLocation}`}
              src={mapUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>

          {/* Included / Not Included Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            {/* What's Included */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-900">
                What's Included:
              </h3>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#312F93] flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" title="Included" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Not Included */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-900">
                What's Not Included:
              </h3>
              <ul className="space-y-3">
                {notIncluded.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                      <X className="w-3 h-3 text-red-600" title="Not Included" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Highlights Section */}
          {highlights.length > 0 && (
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-900">
                Highlights:
              </h3>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#312F93]"></div>
                    </div>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Empty Right Column (Maintains Layout) */}
        <div className="hidden lg:block lg:col-span-4"></div>
      </div>
    </div>
  );
};

export default Highlights;





// import React from "react";
// import { Check, X } from "lucide-react";

// const Highlights = ({
//   mapLocation = "PThailand", // Default location
//   included = [],
//   notIncluded = [],
//   highlights = [],
// }) => {
//   // Encode the location for the Google Maps URL
//   const encodedLocation = encodeURIComponent(mapLocation);
//   const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15933528.384143036!2d90.80080763757574!3d12.841882077790606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2sThailand!5e0!3m2!1sen!2s!4v1740312693100!5m2!1sen!2s`;

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
//       <div className="grid grid-cols-12 gap-6">
//         {/* Map Section - 70% width */}
//         <div className="col-span-12 lg:col-span-8">
//           <div className="rounded-xl overflow-hidden mb-8 h-[300px]">
//             <iframe
//               src={mapUrl}
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               className="w-full h-full"
//             ></iframe>
//           </div>

//           {/* Included/Not Included Grid */}
//           <div className="grid grid-cols-2 gap-8 mb-8">
//             {/* What's Included */}
//             <div>
//               <h3 style={{ color: "black" }} className="text-lg font-bold mb-4">
//                 What's Included:
//               </h3>
//               <div className="space-y-3">
//                 {included.map((item, index) => (
//                   <div key={index} className="flex items-center gap-2">
//                     <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#312F93] flex items-center justify-center">
//                       <Check className="w-3 h-3 text-white" />
//                     </div>
//                     <span className="text-gray-700">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* What's Not Included */}
//             <div>
//               <h3 style={{ color: "black" }} className="text-lg font-bold mb-4">
//                 What's Not Included:
//               </h3>
//               <div className="space-y-3">
//                 {notIncluded.map((item, index) => (
//                   <div key={index} className="flex items-center gap-2">
//                     <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
//                       <X className="w-3 h-3 text-red-600" />
//                     </div>
//                     <span className="text-gray-700">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Highlights Section */}
//           <div>
//             <h3 style={{ color: "black" }} className="text-lg font-bold mb-4">
//               Highlights:
//             </h3>
//             <div className="space-y-3">
//               {highlights.map((highlight, index) => (
//                 <div key={index} className="flex items-start gap-2">
//                   <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
//                     <div className="w-2 h-2 rounded-full bg-[#312F93]"></div>
//                   </div>
//                   <span className="text-gray-700">{highlight}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right column spacer - 30% width */}
//         <div className="hidden lg:block lg:col-span-4">
//           {/* This empty div maintains the layout structure */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Highlights;
