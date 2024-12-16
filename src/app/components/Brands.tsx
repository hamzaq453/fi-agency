"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"; 

interface SliderRef extends HTMLDivElement {
  touchStartX?: number;
}

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
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const sliderRef = useRef<SliderRef | null>(null);

  // Adjust itemsPerPage based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(5);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, brands.length - itemsPerPage)
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  // Touch swipe logic for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      sliderRef.current.touchStartX = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (sliderRef.current && sliderRef.current.touchStartX !== undefined) {
      const deltaX = e.changedTouches[0].clientX - sliderRef.current.touchStartX;
      if (deltaX > 50) handlePrev();
      if (deltaX < -50) handleNext();
      sliderRef.current.touchStartX = undefined;
    }
  };

  return (
    <section className="py-16 bg-gray-60 relative">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">We Have Driven Impact At</h2>
        </div>

        {/* Arrows for mobile devices */}
        {startIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 block sm:hidden text-black text-3xl"
          >
            <BiChevronLeft />
          </button>
        )}

        {startIndex + itemsPerPage < brands.length && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 block sm:hidden text-black text-3xl"
          >
            <BiChevronRight />
          </button>
        )}

        {/* Logos */}
        <div
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex gap-4 items-center justify-center overflow-hidden"
        >
          {brands
            .slice(startIndex, startIndex + itemsPerPage)
            .map((brand, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow-lg rounded-lg border border-gray-400 flex items-center justify-center w-[120px] h-[80px] sm:w-[160px] sm:h-[90px] md:w-[200px] md:h-[100px]"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={brand.width}
                  height={brand.height}
                  className="object-contain"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}