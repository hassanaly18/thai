import React from 'react';
import Image from 'next/image';

const Future = () => {
  return (
    <div className="relative w-full mt-16 md:mt-16">
      {/* White background space above image */}
      <div className="bg-white w-full h-full md:h-48"></div>
      
      {/* Container for the image */}
      <div className="relative w-full h-64 md:h-80">
        <Image
          src="/images/future.png" // Update with your actual image path
          alt="Destination To Paradise"
          fill
          className="object-cover brightness-90"
          priority
        />
        {/* Semi-transparent overlay to whiten the image */}
        <div className="absolute inset-0 bg-white bg-opacity-20"></div>
      </div>
      
      {/* Blue Container - Positioned to overlap between white space and image */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-0 w-full max-w-4xl px-4 sm:px-6">
        <div className="bg-indigo-800 text-white p-6 md:p-8 rounded-sm shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold text-yellow-500 mb-4">
            Preserving Our Planet for Future Travelers
          </h2>
          
          <p className="mb-4 text-sm md:text-base">
            At Destination to Paradise, we are deeply committed to sustainable travel practices that protect 
            the environment and nurture the cultures we visit.
          </p>
          
          <div className="space-y-3 md:space-y-4 text-sm md:text-base">
            <div className="flex">
              <span className="text-yellow-500 mr-2">→</span>
              <p><span className="font-semibold">Eco-Friendly Partnerships:</span> We carefully select our partners to ensure they uphold environmental conservation standards.</p>
            </div>
            
            <div className="flex">
              <span className="text-yellow-500 mr-2">→</span>
              <p><span className="font-semibold">Supporting Local Communities:</span> We believe in giving back to the communities that make our travels meaningful.</p>
            </div>
            
            <div className="flex">
              <span className="text-yellow-500 mr-2">→</span>
              <p><span className="font-semibold">Minimizing Environmental Impact:</span> We continuously work to reduce the environmental footprint of our travel operations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;