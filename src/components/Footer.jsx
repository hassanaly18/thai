import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div style={{ backgroundColor: "var(--blue)" }} className="py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Get in Touch Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Get in Touch</h2>
            <div className="space-y-2">
              <p className="flex items-center gap-2">🏠 Bangkok, Thailand.</p>
              <p className="flex items-center gap-2">📞 +66992262260</p>
              <p className="flex items-center gap-2">
                📧 info@destinationtoparadise.com <br />
              </p>
              <p className="flex items-center gap-2">
                📧 contact@destinationtoparadise.com
              </p>
            </div>
          </div>

          {/* Company Links Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Company</h2>
            <div className="space-y-2 flex flex-col gap-0">
              <Link href="/">Home</Link>
              <Link href="/tours">Tours</Link>
              <Link href="/destinations">Destinations</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            {/* Social Media Links */}
            <h2 className="text-xl font-bold">Follow Us</h2>
            <div className="flex gap-4 mb-4">
              <Link href="https://www.facebook.com/share/1ECGicHA6H/?mibextid=wwXIfr" target="_blank" aria-label="Facebook">
                <FaFacebookF className="text-2xl hover:text-gray-300" />
              </Link>
              <Link href="https://www.instagram.com/paradise_destination_" target="_blank" aria-label="Instagram">
                <FaInstagram className="text-2xl hover:text-gray-300" />
              </Link>
              <Link href="https://www.tiktok.com/@paradisedestination.63" target="_blank" aria-label="TikTok">
                <FaTiktok className="text-2xl hover:text-gray-300" />
              </Link>
              <Link href="https://whatsapp.com/channel/0029Vb7SiMkDZ4LjfRE0Gf0k" target="_blank" aria-label="WhatsApp Community">
                <FaWhatsapp className="text-2xl hover:text-gray-300" />
              </Link>
            </div>

            {/* Newsletter */}
            <h2 className="text-xl font-bold mt-8">Subscribe to Newsletter</h2>
            <div className="flex flex-col sm:flex-row gap-2 max-w-xs">
              <input 
                type="email" 
                placeholder="Enter Email" 
                className="flex-1 px-4 py-2 text-black rounded-l focus:outline-none"
              />
              <button className="bg-orange-500 px-6 py-2 rounded-r whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-white/20 mt-8 pt-4 text-center">
          <p>© Since 2015, Destination To Paradise. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
