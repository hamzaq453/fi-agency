'use client'
import React, { useEffect, useState } from 'react';
import HeroImg from "../../../public/Hero1.png";
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = "Transforming visions into reality with cutting-edge solutions and unforgettable brand experiences.";
    const [textVisible, setTextVisible] = useState(false);
    const [imageVisible, setImageVisible] = useState(false);

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            setDisplayedText(fullText.slice(0, currentIndex + 1));
            currentIndex++;
            if (currentIndex === fullText.length) {
                clearInterval(typingInterval);
            }
        }, 50); // Adjust typing speed here (in milliseconds)

        setTimeout(() => setTextVisible(true), 100); // Delay to start text animation
        setTimeout(() => setImageVisible(true), 200); // Delay to start image animation

        return () => clearInterval(typingInterval);
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
        <section className="bg-white mb-14 p-6 mt-24">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-4 sm:px-6 lg:px-16">
                <div className={`lg:w-1/2 mt-8 lg:-mt-20 transition-all duration-1000 ease-out transform ${textVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight transition-transform transform hover:scale-105 duration-300">
                        Exploring Innovative Paths to Cultivate Your Business
                    </h1>
                    <p className="mt-10 text-gray-700 text-lg sm:text-xl lg:text-2xl typing-effect" style={{ minHeight: '3em' }}>
                        {displayedText}
                    </p>
                    {/* Call to Action Button */}
                    <div className="mt-16">
                    <Link href="https://calendly.com/ceofimarketing/meeting">
                        <button className="bg-red-500 text-white text-lg font-semibold py-5 px-6 rounded-lg hover:bg-red-600 transition duration-200">
                            Get Free Consultation Now
                        </button>
                    </Link>
                    </div>
                </div>
                <div className={`lg:w-1/2 flex justify-center lg:justify-end transition-all duration-1000 ease-out transform ${imageVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                    <div className="w-80 h-80 bg-gray-200 rounded-lg flex items-center justify-center transition-transform transform hover:scale-105 duration-300">
                    <Image src={HeroImg} alt="Hero Image" width={320} height={320} className="object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
}
