"use client"

import React, {useEffect} from "react";
import "./Packages.css"; 

const packageData = [
  {
    id: 1,
    title: "Phuket Island Escape",
    price: "£697 per person",
    image: "/images/herobg.png",
    rating: "★★★★",
    features: [
      { icon: "✈️", text: "Round trip economy class included" },
      { icon: "🚌", text: "Extra Cost will be included" },
      { icon: "🍽️", text: "Meals not included" },
    ],
  },
  {
    id: 2,
    title: "Bali Adventure",
    price: "£799 per person",
    image: "/images/herobg.png",
    rating: "★★★★★",
    features: [
      { icon: "✈️", text: "Round trip economy class included" },
      { icon: "🏨", text: "Hotel accommodation included" },
      { icon: "🍽️", text: "Breakfast included" },
    ],
  },
  {
    id: 3,
    title: "Maldives Luxury Retreat",
    price: "£1200 per person",
    image: "/images/herobg.png",
    rating: "★★★★★",
    features: [
      { icon: "✈️", text: "Business class flights included" },
      { icon: "🏝️", text: "Private beach villa" },
      { icon: "🍽️", text: "All meals included" },
    ],
  },
];

const Packages = () => {
    useEffect(() => {
      const slider = document.querySelector('.packages-card-wrapper');
      let isDown = false;
      let startX;
      let scrollLeft;
  
      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
  
      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
      });
  
      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
      });
  
      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
      });
  
      // Auto scroll
      const autoScroll = () => {
        if (!slider.matches(':hover')) {
          slider.scrollLeft += 1;
          if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth)) {
            slider.scrollLeft = 0;
          }
        }
      };
  
      const scrollInterval = setInterval(autoScroll, 30);
  
      return () => {
        clearInterval(scrollInterval);
        // Cleanup event listeners
        slider.removeEventListener('mousedown', () => {});
        slider.removeEventListener('mouseleave', () => {});
        slider.removeEventListener('mouseup', () => {});
        slider.removeEventListener('mousemove', () => {});
      };
    }, []);
  
    return (
      <div className="packages-container">
        <h2 className="expertise-title heading">OUR EXPERTISE</h2>
        <h1 className="packages-header">Discover Our Travel Packages</h1>
        <p className="packages-subtitle">
          Expertly Curated Journeys Designed to Inspire and Transform Your Next
          Travel Adventure
        </p>
        <div className="slider-container">
          <div className="packages-card-wrapper">
            {[...packageData, ...packageData, ...packageData].map((pkg, index) => (
              <div className="card" key={`${pkg.id}-${index}`}>
                <div className="image-container">
                  <img src={pkg.image} alt={pkg.title} className="card-image" />
                  <div className="rating">
                    <span>{pkg.rating}</span>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="title">{pkg.title}</h3>
                  <p className="price">{pkg.price}</p>
                  <div className="features">
                    {pkg.features.map((feature, featureIndex) => (
                      <div className="feature" key={featureIndex}>
                        <span className="icon">{feature.icon}</span>
                        <span className="text">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  <button className="view-details">VIEW DETAILS</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Packages;
