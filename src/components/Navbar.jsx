// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav
//       className="bg-white shadow-md w-full fixed top-0 left-0"
//       style={{ zIndex: "1" }}
//     >
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo Section */}
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <Link href="/" className="flex items-center">
//                 <img
//                   className="h-12 w-auto object-contain"
//                   src="/images/Logo-Color Horizontal.png"
//                   alt="Destination To Paradise"
//                 />
//                 {/* <span className="hidden md:block ml-2 text-xl font-semibold">
//                   Destination To Paradise
//                 </span> */}
//               </Link>
//             </div>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="text-gray-700 hover:text-purple-600">
//               Home
//             </Link>
//             <Link
//               href="/destinations"
//               className="text-gray-700 hover:text-purple-600"
//             >
//               Destinations
//             </Link>
//             <Link href="/tours" className="text-gray-700 hover:text-purple-600">
//               Tours
//             </Link>
//             <Link href="/about" className="text-gray-700 hover:text-purple-600">
//               About
//             </Link>
//             <Link
//               href="/contact"
//               className="text-gray-700 hover:text-purple-600"
//             >
//               Contact Us
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-purple-600 focus:outline-none"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <Link
//                 href="/"
//                 className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/destinations"
//                 className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
//               >
//                 Destinations
//               </Link>
//               <Link
//                 href="/tours"
//                 className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
//               >
//                 Tours
//               </Link>
//               <Link
//                 href="/about"
//                 className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
//               >
//                 About
//               </Link>
//               <Link
//                 href="/contact"
//                 className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Tours', path: '/tours' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <nav style={{zIndex:"999"}} className="bg-white shadow-md w-full fixed top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <img 
                  src="/images/Logo-Color Horizontal.png" 
                  alt="Destination To Paradise" 
                  className="h-12 w-auto object-contain" 
                />
                {/* <span className="hidden md:block ml-2 text-xl font-semibold">
                  Destination To Paradise
                </span> */}
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path} 
                className={`relative group text-gray-700 hover:text-[#312F93] ${
                  pathname === item.path ? 'font-semibold text[#312F93]' : ''
                }`}
              >
                {item.name}
                {/* Underline Animation */}
                <span className={`absolute left-0 -bottom-1 w-full h-[2px] bg-[#312F93] transition-transform duration-300 ${
                  pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#312F93] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link 
                  key={item.path} 
                  href={item.path} 
                  className={`block px-3 py-2 text-gray-700 hover:text-[#312F93] hover:bg-gray-50 rounded-md ${
                    pathname === item.path ? 'font-semibold text-[#312F93]' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
