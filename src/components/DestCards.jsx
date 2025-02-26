import React from "react";
import Image from "next/image";
import Link from "next/link";

const DestCards = ({ destinations }) => {
  return (
   
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 pb-12">
    {destinations.map((destination, index) => (
      <div key={index} className="flex justify-center">
        <div className="w-full max-w-xs shadow-xl bg-white transition-shadow duration-300 hover:shadow-2xl rounded-t-lg">
          <Link
            href={`/destinations/${destination.slug}`}
            className="block bg-white overflow-hidden rounded-t-lg"
          >
            <div className="relative h-48 w-full">
              <Image
                src={destination.image}
                alt={`${destination.name} landscape`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-black text-xl font-bold mb-2">
                {destination.name}
              </h3>
              <p className="text-gray-700 text-sm">
                {destination.description}
              </p>
            </div>
          </Link>
        </div>
      </div>
    ))}
  </div>
  );
};

export default DestCards;



 // <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-12 pb-12">
    //   {destinations.map((destination, index) => (
    //     // <div key={index} className="flex justify-center">
    //     //   <Link
    //     //     href={`/destinations/${destination.slug}`}
    //     //     className="block bg-white shadow-sm transform transition duration-300 hover:-translate-y-1 hover:shadow-md w-full max-w-sm"
    //     //   >
    //     //     <div className="overflow-hidden">
    //     //       <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
    //     //         <Image
    //     //           src={destination.image}
    //     //           alt={`${destination.name} landscape`}
    //     //           fill
    //     //           className="object-cover transition-transform duration-500 hover:scale-105"
    //     //         />
    //     //       </div>

    //     //       <div className="p-6">
    //     //         <h3 className="text-black text-xl font-bold mb-2">{destination.name}</h3>
    //     //         <p className="text-gray-700 text-sm">{destination.description}</p>
    //     //       </div>
    //     //     </div>
    //     //   </Link>
    //     // </div>
    //     // <div key={index} className="flex justify-center">
    //     //   <div className="w-full max-w-sm rounded-t-lg lg:grid-cols-3 md:grid-cols-2 grid-cols-1 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
    //     //     <Link
    //     //       href={`/destinations/${destination.slug}`}
    //     //       className="block bg-white rounded-lg overflow-hidden"
    //     //     >
    //     //       <div className="relative h-48 w-full">
    //     //         <Image
    //     //           src={destination.image}
    //     //           alt={`${destination.name} landscape`}
    //     //           fill
    //     //           className="object-cover transition-transform duration-500 hover:scale-105"
    //     //         />
    //     //       </div>

    //     //       <div className="p-6">
    //     //         <h3 className="text-black text-xl font-bold mb-2">
    //     //           {destination.name}
    //     //         </h3>
    //     //         <p className="text-gray-700 text-sm">
    //     //           {destination.description}
    //     //         </p>
    //     //       </div>
    //     //     </Link>
    //     //   </div>
    //     // </div>
      
    //   ))}
    // </div>