"use client";
import React, { useState } from 'react';
import Image from 'next/image';

// Array of logos with width and height for each
const brands = [
  { src: '/BrandZA.png', alt: "Peet's Coffee", width: 90, height: 60 },
  { src: '/BrandOXO.jpg', alt: 'Salesforce', width: 90, height: 60 },
  { src: '/BrandRC.jpg', alt: 'Polymath', width: 90, height: 60 },
  { src: '/BrandWH.png', alt: 'Lever', width: 110, height: 60 },
  { src: '/BrandMax.jpg', alt: 'CreateMax', width: 90, height: 60 },
  { src: '/Brand6.png', alt: 'Brand 6', width: 90, height: 60 },
  { src: '/Brand7.png', alt: 'Brand 7', width: 170, height: 60 },
  { src: '/Brand8.png', alt: 'Brand 8', width: 160, height: 60 },
  { src: '/Brand9.png', alt: 'Brand 9', width: 140, height: 60 },
  { src: '/Brand10.png', alt: 'Brand 10', width: 140, height: 60 },
  { src: '/Brand11.png', alt: 'Brand 11', width: 160, height: 60 },
  { src: '/Brand12.png', alt: 'Brand 12', width: 200, height: 60 },
  { src: '/Brand13.png', alt: 'Brand 13', width: 200, height: 60 },
  { src: '/Brand14.png', alt: 'Brand 14', width: 90, height: 60 },
  { src: '/Brand15.png', alt: 'Brand 15', width: 150, height: 60 },
  { src: '/Brand16.png', alt: 'Brand 16', width: 200, height: 60 },
  { src: '/Brand17.png', alt: 'Brand 17', width: 90, height: 60 },
  { src: '/Brand18.png', alt: 'Brand 18', width: 90, height: 60 },
];

export default function Brands() {
  const [startIndex, setStartIndex] = useState(0); // Tracks the current start index of visible logos
  const itemsPerPage = 5; // Number of logos to show per slide

  const handleNext = () => {
    // Move to the next page, ensuring the index does not exceed the total count
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, brands.length)
    );
  };

  const handlePrev = () => {
    // Move to the previous page, ensuring the index does not go below 0
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  return (
    <section className="py-16 bg-gray-60">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">We Have Driven Impact At</h2>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          {/* Left Arrow */}
          {startIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md"
            >
              &#8592;
            </button>
          )}

          {/* Logos */}
          <div
            className="flex gap-8 items-center justify-center"
            style={{ width: '100%' }}
          >
            {brands
              .slice(startIndex, startIndex + itemsPerPage)
              .map((brand, index) => (
                <div
                  key={index}
                  className="bg-white p-4 shadow-lg rounded-lg border border-gray-400 flex items-center justify-center w-[200px] h-[100px] md:w-[200px] md:h-[100px]"
                >
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    className="mx-auto"
                    width={brand.width}
                    height={brand.height}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ))}
          </div>

          {/* Right Arrow */}
          {startIndex + itemsPerPage < brands.length && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md"
            >
              &#8594;
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
