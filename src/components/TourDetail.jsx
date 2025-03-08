import React from 'react';
import { MapPin, Plane, Building2, Utensils } from 'lucide-react';

const TourDetail = ({
  description,
  departureLocation,
  destinationLocation,
  services = [],
  destinationImages
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {/* Tour Detail Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold text-black flex items-center gap-2 mb-4">
              <span className="w-6 h-6 bg-[#312F93] rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Tour Detail
            </h2>
            <p className="text-gray-600 mb-6">{description}</p>
            <div className="border-t border-gray-200 pt-4 flex justify-between">
              <h3 className="font-semibold text-black">Departure & Return Location</h3>
              <span className="text-gray-600">{departureLocation} - {destinationLocation}</span>
            </div>
          </section>

          {/* Our Services Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold text-black flex items-center gap-2 mb-6">
              <span className="w-6 h-6 bg-[#312F93] rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </span>
              Our Services
            </h2>
            <p className="text-gray-600 mb-6">We provide a complete travel experience.</p>
            <div className="grid grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  {service.icon}
                  <span className="text-[#555]">{service.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Places You'll Explore */}
          <section>
            <h2 className="text-2xl font-bold text-black mb-6">Places You'll Explore</h2>
            <div className="grid grid-cols-2 gap-6">
              {destinationImages.map((src, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img src={src} alt={`Destination ${index + 1}`} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <aside className="col-span-12 lg:col-span-4 space-y-6">
          {/* Why Book With Us? */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-black mb-6">Why Book with Us?</h2>
            <ul className="space-y-6">
              {["Best Price Guarantee", "24/7 Customer Support", "Trusted Local Guides"].map((reason, index) => (
                <li key={index}>
                  <h3 className="font-semibold text-[#312F93] mb-2">{reason}</h3>
                  <p className="text-gray-600 text-sm">Quality service for an unforgettable experience.</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Get a Question? */}
          <section className="bg-[#312F93] rounded-lg p-6 text-white">
            <h2 className="text-xl font-bold mb-4">Got a Question?</h2>
            <p className="mb-6 text-sm">We are happy to assist you. Contact us now.</p>
            <ul className="space-y-2">
              {[{ href: "mailto:info@destinationtoparadise.com", label: "info@destinationtoparadise.com" }, { href: "tel:+66992262260", label: "+66 992262260" }].map((contact, index) => (
                <li key={index}>
                  <a href={contact.href} className="hover:underline">{contact.label}</a>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default TourDetail;