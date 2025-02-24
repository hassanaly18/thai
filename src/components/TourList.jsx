// // src/components/TourList.jsx
// import Link from 'next/link';
// import Image from 'next/image';

// export default function TourList({ tours }) {
//   return (
//     <div className="max-w-6xl mx-auto px-4 space-y-6">
//       {tours.map((tour) => (
//         <div 
//           key={tour.id}
//           className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col sm:flex-row gap-6 items-center"
//         >
//           {/* Image Container */}
//           <div className="w-full sm:w-72 h-48 relative rounded-lg overflow-hidden">
//             <Image
//               src={tour.image}
//               alt={tour.title}
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Content Container */}
//           <div className="flex-1 space-y-2">
//             <h3 className="text-xl font-semibold">{tour.title}</h3>
//             <p className="text-gray-600">{tour.description}</p>
//           </div>

//           {/* Price and Button Container */}
//           <div className="flex flex-col items-end gap-2 min-w-[150px]">
//             <div className="text-right">
//               <p className="text-sm text-gray-500">As low as</p>
//               <p className="text-xl font-semibold text-indigo-700">{tour.price.toLocaleString()}</p>
//             </div>
//             <Link 
//               href={`/tours/${tour.slug}`}
//               className="bg-indigo-700 text-white px-6 py-2 rounded hover:bg-indigo-800 transition-colors text-center w-full"
//             >
//               View Details
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


// src/components/TourList.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function TourList({ tours }) {
  return (
    <div className="max-w-6xl mx-auto px-4 space-y-8 py-0">
      {tours.map((tour) => (
        <div 
          key={tour.id}
          className="bg-white shadow-lg flex flex-col sm:flex-row gap-0 items-stretch"
        >
          {/* Image Container */}
          <div className="w-full sm:w-64 h-64 relative">
            <Image
              src={tour.image}
              alt={tour.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content Container */}
          <div className="flex-1 p-6">
            <h3 className="text-xl text-[#312F93] font-bold mb-3">{tour.title}</h3>
            <p className="text-gray-600">{tour.description}</p>
          </div>

          {/* Vertical Separator */}
          <div className="hidden sm:block w-[2px] bg-[#312F93] my-6" />

          {/* Price and Button Container */}
          <div className="flex flex-col items-end justify-center p-6 min-w-[200px]">
            <div className="text-right mb-4">
              <p className="text-sm text-gray-500">As low as</p>
              <p className="text-xl font-semibold text-[#3B2F93]">{tour.price.toLocaleString()}</p>
            </div>
            <Link 
              href={`/tours/${tour.slug}`}
              className="bg-[#3B2F93] text-white px-6 py-2 hover:bg-[#2f2574] transition-colors text-center w-full"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}