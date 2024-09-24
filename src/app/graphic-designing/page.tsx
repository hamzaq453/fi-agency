'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HeroGD from '../../../public/HeroGD.webp';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import QuoteFormModal from '../components/QuoteFormModal';
import Brands from '../components/Brands';

export default function GraphicDesignDetail() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true); // Trigger the animation after component mounts
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
        <>
            <Head>
                <title>Graphic Designing | Fi Agency</title>
                <meta
                    name="description"
                    content="Create visually stunning and impactful graphic designs with our expert services. From branding to marketing materials, we offer tailored design solutions for your business."
                />
            </Head>

            <section className="bg-white py-16 px-6">
                <div className="container mx-auto">
                    {/* Header Section */}
                    <div className={`flex flex-col-reverse lg:flex-row items-center transition-all duration-1000 ease-out ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pr-12">
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6 transition-transform transform hover:scale-105 duration-300">
                                Graphic Designing
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-700 mb-6">
                                We create visually compelling graphic designs that communicate your brand message clearly and effectively. Our team ensures each design element is crafted with precision.
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex justify-center lg:justify-end">
                            <Image src={HeroGD} alt="Graphic Designing" width={500} height={500} className="rounded-lg shadow-lg transform hover:scale-105 duration-300" />
                        </div>
                    </div>
                    <div className="">
                        <Button onClick={openModal} className="lg:px-12 lg:py-7 sm:px-12 py-2 sm:py-3 transform bg-red-600 text-white font-bold text-lg transition duration-500 hover:scale-110 hover:bg-red-600">
                            Get Started!
                        </Button>
                    </div>
                    <QuoteFormModal isOpen={isModalOpen} onClose={closeModal} />

                {/* Services Breakdown Section */}
<div className="mt-28 py-16 px-6">
    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16 tracking-wider">
        Our Graphic Design Solutions!
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1: Branding & Logo Design */}
        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-[148%] font-semibold text-white mb-4">
                Branding & Logo Design
            </h3>
            <p className="text-white font-light text-lg mb-4">
                Establish a strong brand identity with custom logos and branding solutions that reflect your company’s vision and values.
            </p>
        </div>

        {/* Card 2: Marketing Materials */}
        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">
                Marketing Materials
            </h3>
            <p className="text-white font-light text-lg mb-4">
                From brochures to flyers, we design marketing materials that make a lasting impression and effectively convey your message.
            </p>
        </div>

        {/* Card 3: Social Media Graphics */}
        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">
                Social Media Graphics
            </h3>
            <p className="text-white text-lg font-light mb-4">
                Engage your audience on social media platforms with visually appealing and share-worthy graphics tailored for each platform.
            </p>
        </div>

        {/* Card 4: Packaging Design */}
        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-[146%] font-semibold text-white mb-4">
                Packaging Design
            </h3>
            <p className="text-white text-lg font-light mb-4">
                Make your products stand out on the shelves with our custom packaging designs that capture attention and convey quality.
            </p>
        </div>

        {/* Card 5: Website Graphics */}
        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">
                Website Graphics
            </h3>
            <p className="text-white text-lg font-light mb-4">
                Enhance your website with high-quality graphics that improve the user experience and align with your brand’s aesthetics.
            </p>
        </div>

        {/* Card 6: Print Design */}
        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-[138%] font-semibold text-white mb-4">
                Print Design
            </h3>
            <p className="text-white text-lg font-light mb-4">
                We offer bespoke print designs for magazines, business cards, posters, and more to help you make a powerful offline impact.
            </p>
        </div>
    </div>
</div>

                    <Brands />

                    {/* Call to Action Section */}
                    <div className="mt-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Let’s Design Something Amazing</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Ready to elevate your brand with stunning graphic design? Contact us to discuss your project today!
                        </p>
                        <Button onClick={openModal} className="lg:px-12 lg:py-7 sm:px-12 py-2 sm:py-3 transform bg-red-600 text-white font-bold text-lg transition duration-500 hover:scale-110 hover:bg-red-600">
                            Contact Now
                        </Button>
                        <QuoteFormModal isOpen={isModalOpen} onClose={closeModal} />
                    </div>
                </div>
            </section>
        </>
    );
}
