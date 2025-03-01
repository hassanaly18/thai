import React from "react";

const ContactForm = () => {
  return (
    <div className="container mx-auto px-4 py-12">
        <h3 className="font-bold text-2xl text-black p-4 pt-0">Send Us Your Queries</h3>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Tour Cards Section */}
        <div className="lg:w-1/2 relative">
          {/* All cards same size */}
          <div className="bg-white rounded-lg shadow-md p-4 w-64 mx-auto">
          <h3 className="font-bold text-black text-md pb-2">
              Explore Historic Europe
            </h3>
            <img
              src="/images/beach1.jpg"
              alt="Historic Europe Coast"
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <p className="text-xs text-gray-700">
              Discover the rich history and breathtaking architecture of
              Europe's top cities with our guided tours.
            </p>
          </div>

          {/* Rotated Card 1 - Island Adventures */}
          <div className="absolute top-16 -left-4 transform -rotate-12 bg-white rounded-lg shadow-md p-4 w-64">
            <h3 className="font-bold text-black text-md">
              Island Adventures Await
            </h3>
            <div className="mt-2">
              <img
                src="/images/beach2.jpg"
                alt="Island Rock Formation"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <p className="text-xs text-gray-700 pt-2">
              Dive into crystal clear waters, explore hidden caves and
              experience the local culture.
            </p>
          </div>

          {/* Rotated Card 2 - Thai Traditions */}
          <div className="absolute bottom-16 -right-4 transform rotate-12 bg-white rounded-lg shadow-md p-4 w-64">
            <h3 className="font-bold text-black text-md">Explore Thailand!</h3>

            <div className="mt-2">
              <img
                src="/images/mission1.png"
                alt="Thai Coastal View"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <p className="text-xs text-gray-700 pt-2">
              Immerse yourself in ancient Thai traditions and discover the
              warmth and hospitality of local communities.
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="lg:w-1/2 z-10">
          <div className="bg-indigo-800 rounded-lg shadow-lg p-8 text-white">
            <form className="space-y-6">
              <div className="text-left">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1 text-left"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-b border-white bg-transparent pb-1 focus:outline-none text-white"
                  placeholder=" "
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1 text-left"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-b border-white bg-transparent pb-1 focus:outline-none text-white"
                  placeholder=" "
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1 text-left"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full border-b border-white bg-transparent pb-1 focus:outline-none text-white"
                  placeholder=" "
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-indigo-900 font-bold py-2 px-8 rounded-md transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
