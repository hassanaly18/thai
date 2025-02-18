import React from 'react';

const Testimonial = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        What Our <span className="text-blue-600">Travelers Say</span>
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        "Booking with Destination to Paradise was the best decision I made for my trip. Every detail was perfectly planned, from seamless transportation to breathtaking excursions. The personalized service made me feel like a VIP."
      </p>
      
      <div className="flex items-center mb-4">
        <span className="text-yellow-500 mr-1">⭐</span>
        <span className="text-yellow-500 mr-1">⭐</span>
        <span className="text-yellow-500 mr-1">⭐</span>
        <span className="text-yellow-500 mr-1">⭐</span>
        <span className="text-gray-300">⭐</span>  {/* Empty star for rating */}
      </div>
      
      <div className="flex">
        <img 
          src="path_to_image.jpg" // Add the correct path to the image
          alt="Traveler"
          className="rounded-full w-28 h-28 border-4 border-blue-600 object-cover"
        />
      </div>
    </div>
  );
};

export default Testimonial;