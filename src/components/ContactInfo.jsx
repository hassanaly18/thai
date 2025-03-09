"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Contact Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Phone Card (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-lg shadow-md p-6 text-center"
        >
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-indigo-800 rounded-full p-4">
            <Phone className="h-7 w-7 text-white" />
          </div>
          <h3 className="mt-6 text-black font-bold text-lg mb-2">Phone</h3>
          <p className="text-gray-600 text-sm mb-4">
            Call us today to start planning your next adventure
          </p>
          <a href="tel:+66992262260" className="block text-indigo-800 font-semibold">
            Mr. Moon +66992262260
          </a>
        </motion.div>

        {/* Email Card (Middle) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-lg shadow-md p-6 text-center"
        >
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-indigo-800 rounded-full p-4">
            <Mail className="h-7 w-7 text-white" />
          </div>
          <h3 className="mt-6 font-bold text-black text-lg mb-2">Email</h3>
          <p className="text-gray-600 text-sm mb-4">
            Send us your travel inquiries and we'll craft your dream itinerary
          </p>
          <a href="mailto:info@destinationtoparadise.com" className="block text-indigo-800 font-semibold">
            info@destinationtoparadise.com
          </a>
          <a href="mailto:contact@destinationtoparadise.com" className="block text-indigo-800 font-semibold">
            contact@destinationtoparadise.com
          </a>
        </motion.div>

        {/* Location Card (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-lg shadow-md p-6 text-center"
        >
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-indigo-800 rounded-full p-4">
            <MapPin className="h-7 w-7 text-white" />
          </div>
          <h3 className="mt-6 text-black font-bold text-lg mb-2">Location</h3>
          <p className="text-gray-600 text-sm mb-4">
            Visit our office for a personal consultation
          </p>
          <p className="text-indigo-800 font-semibold">Bangkok, Thailand.</p>
        </motion.div>
      </div>

      {/* Google Maps Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full h-96 rounded-lg overflow-hidden"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7960046.426889807!2d96.75327837762324!3d12.84852421479636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2sThailand!5e0!3m2!1sen!2sus!4v1709300018123!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Thailand Map"
          className="rounded-lg"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
