import React from 'react';

const About = () => {
    return (
        <div style={{backgroundColor:"var(--blue)"}} className="flex flex-col md:flex-row text-white p-8">
            <div className="flex-1 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Who <span style={{color:"var(--yellow)"}}>We Are</span></h2>
                <p className="text-lg mb-4">
                    Welcome to Destination to Paradise, your expert in crafting bespoke travel experiences.
                    Our mission is to transform each trip into a unique paradise, tailored specifically
                    to your desires. We specialize in creating journeys that cater to individual tastes and
                    preferences, ensuring every detail is thoughtfully considered.
                </p>
                <p className="text-lg">
                    Whether you're looking to relax on secluded beaches or explore remote cultural treasures, 
                    Destination to Paradise is here to guide you to your perfect getaway.
                </p>
                <button style={{backgroundColor:"var(--yellow)", color:"var(--blue)", fontWeight:"bold"}} className="mt-4 px-4 py-2 rounded-lg transition duration-300 hover:bg-yellow-800">
                    Explore Now ➔
                </button>
            </div>
            <div className="flex-1">
                <div className="flex space-x-4">
                    <img src="/images/heobg.png" alt="Scenic Image 1" className="w-full h-auto rounded-lg shadow-md" />
                    <img src="/images/h.png" alt="Scenic Image 2" className="w-full h-auto rounded-lg shadow-md" />
                </div>
            </div>
        </div>
    );
};

export default About;