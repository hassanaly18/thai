import React from 'react';

const Footer = () => {
  return (
    <div style={{backgroundColor:"var(--blue)"}} className=" py-8 text-white">
      <div className="container mx-auto flex justify-between">
        <div className="get-in-touch">
          <h2 className="text-xl font-bold">Get in Touch</h2>
          <div className="mt-4">
            <span className="block">🏠 address here</span>
            <span className="block">🌐 www.goodsite.com</span>
            <span className="block">📞 02030628926</span>
          </div>
        </div>
        
        <div className="company-section">
          <h2 className="text-xl font-bold">Company</h2>
          <ul className="mt-4">
            <li>Services</li>
            <li>Features</li>
            <li>Our Team</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="subscribe-section">
          <h2 className="text-xl font-bold">Subscribe to Newsletter</h2>
          <div className="mt-4 flex items-center">
            <input 
              type="email" 
              placeholder="Enter Email" 
              className="p-2 w-64 border border-white rounded-l"
            />
            <button className="bg-orange-500 p-2 rounded-r">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;