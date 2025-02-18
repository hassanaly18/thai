import React from 'react';
import './Packages.css'; // Assuming you'll create a CSS file for styles.

const Packages = () => {
    return (
        <div className="packages-container">
            <h2 className="expertise-title">OUR EXPERTISE</h2>
            <h1 className="packages-header">Discover Our Travel Packages</h1>
            <p className="packages-subtitle">
                Expertly Curated Journeys Designed to Inspire and Transform Your Next Travel Adventure
            </p>
            <div className="packages-card-wrapper">
                <div className="package-card">
                    <div className="package-image">
                        <img src="/images/herobg.png" alt="Phuket Island" />
                        <div className="rating">★★★★★</div>
                    </div>
                    <h3 className="package-title">Phuket Island Escape</h3>
                    <h4 className="package-price">£697 per person</h4>
                    <ul className="package-details">
                        <li>Round trip economy class included</li>
                        <li>Extra Cost will be included</li>
                        <li>Meals not included</li>
                    </ul>
                    <button className="view-details-btn">VIEW DETAILS</button>
                </div>
                <div className="package-card">
                    <div className="package-image">
                        <img src="/images/herobg.png" alt="Phuket Island" />
                        <div className="rating">★★★★★</div>
                    </div>
                    <h3 className="package-title">Phuket Island Escape</h3>
                    <h4 className="package-price">£697 per person</h4>
                    <ul className="package-details">
                        <li>Round trip economy class included</li>
                        <li>Extra Cost will be included</li>
                        <li>Meals not included</li>
                    </ul>
                    <button className="view-details-btn">VIEW DETAILS</button>
                </div>
                <div className="package-card">
                    <div className="package-image">
                        <img src="/images/herobg.png" alt="Phuket Island" />
                        <div className="rating">★★★★★</div>
                    </div>
                    <h3 className="package-title">Phuket Island Escape</h3>
                    <h4 className="package-price">£697 per person</h4>
                    <ul className="package-details">
                        <li>Round trip economy class included</li>
                        <li>Extra Cost will be included</li>
                        <li>Meals not included</li>
                    </ul>
                    <button className="view-details-btn">VIEW DETAILS</button>
                </div>
            </div>
        </div>
    );
}

export default Packages;