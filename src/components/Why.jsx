import React from 'react';

const Why = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">
        Why Choose <span className="text-blue-600">Destination to Paradise</span> for Your Next Adventure?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="feature rounded-lg shadow-lg p-5 bg-white">
          <div className="flex flex-col items-center">
            <img src="/path/to/tourists-icon.png" alt="Tourists Served" className="h-10 w-10 mb-3"/>
            <div className="text-lg font-semibold">Tourists Served</div>
            <div className="text-2xl font-bold">10k+</div>
          </div>
        </div>
        
        <div className="feature rounded-lg shadow-lg p-5 bg-white">
          <div className="flex flex-col items-center">
            <img src="/path/to/packages-icon.png" alt="Packages" className="h-10 w-10 mb-3"/>
            <div className="text-lg font-semibold">Packages</div>
            <div className="text-2xl font-bold">100+</div>
          </div>
        </div>

        <div className="feature rounded-lg shadow-lg p-5 bg-white">
          <div className="flex flex-col items-center">
            <img src="/path/to/pilgrimage-icon.png" alt="Pilgrimage Tours" className="h-10 w-10 mb-3"/>
            <div className="text-lg font-semibold">Pilgrimage Tours</div>
            <div className="text-2xl font-bold">50+</div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="marker">✔️</span>
            <span className="ml-2">Expertly Curated Experiences: Our travel experts meticulously craft each itinerary to ensure your journey is filled with unforgettable experiences.</span>
          </li>
          <li className="flex items-start">
            <span className="marker">✔️</span>
            <span className="ml-2">Exclusive Access: Enjoy exclusive access to hidden spots and unique events that only our local knowledge and connections can provide.</span>
          </li>
          <li className="flex items-start">
            <span className="marker">✔️</span>
            <span className="ml-2">Personalized Service: We personalize every detail of your trip, from accommodations to activities, ensuring your adventure perfectly suits your tastes.</span>
          </li>
          <li className="flex items-start">
            <span className="marker">✔️</span>
            <span className="ml-2">Commitment to Sustainability <span className="new-badge">NEW!</span>: We prioritize eco-friendly practices that respect both the environment and local cultures, ensuring our destinations thrive for generations.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Why;