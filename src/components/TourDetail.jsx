import React from 'react';
import { MapPin, Plane, Building2, Utensils } from 'lucide-react';

const TourDetail = ({
  description,
  departureLocation,
  destinationLocation,
  services = []
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - 70% width */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {/* Tour Detail Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-[#312F93] rounded flex items-center justify-center">
                <svg 
                  className="w-4 h-4 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
              </div>
              <h2 style={{color:"black"}} className="text-xl font-bold">Tour Detail</h2>
            </div>
            
            <p className="text-gray-600 mb-6">{description}</p>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between">
                <h3 style={{color:"black"}} className="font-semibold">Departure and Return Location</h3>
                <span className="text-gray-600">{departureLocation} - {destinationLocation}</span>
              </div>
            </div>
          </div>

          {/* Our Services Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-[#312F93] rounded flex items-center justify-center">
                <svg 
                  className="w-4 h-4 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" 
                  />
                </svg>
              </div>
              <h2 style={{color:"black"}} className="text-xl font-bold">Our Services</h2>
            </div>

            <p className="text-gray-600 mb-6">Our services encompass everything you need for a seamless and enjoyable visit to Pattaya.</p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Plane className="w-5 h-5 text-[#312F93]" />
                <span style={{color:"#555"}}>Airport Transfers</span>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-[#312F93]" />
                <span style={{color:"#555"}}>Accommodation Booking</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#312F93]" />
                <span style={{color:"#555"}}> Guided City Tours</span>
              </div>
              <div className="flex items-center gap-3">
                <Utensils className="w-5 h-5 text-[#312F93]" />
                <span style={{color:"#555"}}>Dining Reservations</span>
              </div>
            </div>
          </div>

          {/* Places You'll Explore Section */}
          <div>
            <h2  style={{color:"black"}}className="text-2xl font-bold mb-6">Places You'll Explore</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/images/beach1.jpg" 
                  alt="Pattaya Night Scene"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/images/bg2.jpg" 
                  alt="Pattaya Market"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - 30% width */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Why Book with Us Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 style={{color:"black"}} className="text-xl font-bold mb-6">Why Book with Us?</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#312F93] mb-2">Best Price Guarantee</h3>
                <p className="text-gray-600 text-sm">We offer competitive pricing and value-for-money experiences.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#312F93] mb-2">24/7 Customer Support</h3>
                <p className="text-gray-600 text-sm">Our dedicated team is available around the clock to assist you.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#312F93] mb-2">Trusted Local Guides</h3>
                <p className="text-gray-600 text-sm">Knowledgeable guides ensure you discover the true essence of each destination.</p>
              </div>
            </div>
          </div>

          {/* Get a Question Section */}
          <div className="bg-[#312F93] rounded-lg p-6 text-white">
            <h2 className="text-xl font-bold mb-4">Got a Question?</h2>
            <p className="mb-6 text-sm">Do not hesitate to give us a call. We are an expert team and we are happy to talk to you.</p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:abc@gmail.com" className="hover:underline">abc@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+92001001001" className="hover:underline">+92 001-001-001</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;