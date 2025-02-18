import React from 'react';
import './Company.css'
import image3 from "../assets/Mask group.svg";
// List of logos
const logos = [
  { src: '/Workday.png', alt: 'Workday logo' },
  { src: '/Google.png', alt: 'Google logo' },
  { src: '/Salesforce.png', alt: 'Salesforce logo' },
  { src: '/Amazon.png', alt: 'Amazon logo' },
  { src: '/Sony.png', alt: 'Sony logo' },
  { src: '/Cocacola.png', alt: 'Coca Cola logo' },
  { src: '/intel.png', alt: 'Intel logo' },
];

const Company = () => {
  return (
    // The container hides the overflowing content
    <div className="overflow-hidden">
         <img
                src={image3}
                alt="Layer 2"
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/9 w-[700px] h-[700px] -scale-z-50 opacity-2.5"
              />
      <div className="flex animate-marquee">
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-9">
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-20 h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
