"use client"

import React from 'react';

const WhyUs = () => {
  const benefits = [
    {
      title: "Expertly Curated Experiences",
      description: "Our travel experts meticulously craft each itinerary to ensure your journey is filled with unforgettable experiences."
    },
    {
      title: "Exclusive Access",
      description: "Enjoy exclusive access to hidden spots and unique events that only our local knowledge and connections can provide."
    },
    {
      title: "Personalized Service",
      description: "We personalize every detail of your trip, from accommodations to activities, ensuring your adventure perfectly suits your tastes."
    },
    {
      title: "Commitment to Sustainability",
      description: "We prioritize eco-friendly practices that respect both the environment and local cultures, ensuring our destinations thrive for generations.",
      isNew: true
    }
  ];

  const stats = [
    { icon: "👥", label: "Tourists Served", value: "10k+" },
    { icon: "🏨", label: "Partnered Hotels", value: "100+" },
    { icon: "📍", label: "Pilgrimage Tours", value: "50+" }
  ];

  return (
    <div style={{color:"black", marginTop:"2rem", gap:"5rem"}} className="w-full max-w-6xl mx-auto p-8 bg-white flex flex-col md:flex-row gap-8 items-center">
      {/* Left Section with Image and Stats */}
      <div className="w-full md:w-2/5 relative">
        <div style={{backgroundColor:"var(--blue)"}} className="relative rounded-full p-1">
          <img 
            src="/images/herobg.png"
            alt="Tourist with camera"
            className="rounded-full w-full aspect-square object-cover"
          />
          {/* Stats Overlay */}
          {stats.map((stat, index) => (
            <div
              key={index}
              className="absolute bg-white rounded-lg p-2 shadow-lg flex items-center gap-2"
              style={{
                [index === 0 ? 'top' : index === 1 ? 'right' : 'bottom']: '10%',
                [index === 0 ? 'right' : index === 1 ? 'bottom' : 'left']: '0%',
                transform: 'translate(25%, 0)'
              }}
            >
              <span className="text-lg">{stat.icon}</span>
              <div className="flex flex-col">
                <span className="font-bold">{stat.value}</span>
                <span className="text-xs text-gray-600">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section with Content */}
      <div className="w-full md:w-3/5">
        <h2 className="text-2xl font-bold mb-6">
          Why Choose <span style={{color:"var(--blue)"}}>Destination to Paradise</span> for Your Next Adventure?
        </h2>
        
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div style={{backgroundColor:"var(--blue)"}} className="w-6 h-6 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  {benefit.title}
                  {benefit.isNew && (
                    <span style={{color:"var(--blue)"}} className="text-xs bg-blue-100  px-2 py-1 rounded">NEW!</span>
                  )}
                </h3>
                <p className="text-gray-600 mt-1">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;