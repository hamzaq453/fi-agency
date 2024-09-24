'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HeroVideoAds from '../../../public/HeroVideoAds.webp';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import QuoteFormModal from '../components/QuoteFormModal';
import Brands from '../components/Brands';

export default function VideoAdsDetail() {
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
                <title>Video Ads | Fi Agency</title>
                <meta
                    name="description"
                    content="Create stunning video ads with Fi Agency. Boost engagement and conversions with professionally crafted video content tailored to your audience."
                />
            </Head>

            <section className="bg-white py-16 px-6">
                <div className="container mx-auto">
                    {/* Header Section */}
                    <div className={`flex flex-col-reverse lg:flex-row items-center transition-all duration-1000 ease-out ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pr-12">
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6 transition-transform transform hover:scale-105 duration-300">
                                Video Ads
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-700 mb-6">
                                Engage your audience with high-quality, impactful video ads. Whether you're launching a product or boosting brand awareness, our tailored video ad solutions will drive results.
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex justify-center lg:justify-end">
                            <Image src={HeroVideoAds} alt="Video Ads" width={500} height={500} className="rounded-lg shadow-lg transform hover:scale-105 duration-300" />
                        </div>
                    </div>
                    <div className="">
                        <Button onClick={openModal} className="lg:px-12 lg:py-7 sm:px-12 py-2  sm:py-3 transform bg-red-600 text-white font-bold text-lg transition duration-500 hover:scale-110 hover:bg-red-600">
                            Get Started!
                        </Button>
                    </div>
                    <QuoteFormModal isOpen={isModalOpen} onClose={closeModal} />

                {/* Services Breakdown Section */}
                <div className="mt-28 py-16 px-6">
                    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16 tracking-wider">
                        Our Video Ad Solutions!
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1: Product Launch Videos */}
                        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                            <h3 className="text-[148%] font-semibold text-white mb-4">
                                Product Launch Videos
                            </h3>
                            <p className="text-white font-light text-lg mb-4">
                                Launch your product with a bang! Our engaging and creative video ads ensure your product stands out and reaches the right audience effectively.
                            </p>
                        </div>

                        {/* Card 2: Social Media Video Ads */}
                        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                            <h3 className="text-2xl font-semibold text-white mb-4">
                                Social Media Video Ads
                            </h3>
                            <p className="text-white font-light text-lg mb-4">
                                Capture attention and engage your audience on platforms like Facebook, Instagram, and TikTok with custom-crafted video ads designed to convert.
                            </p>
                        </div>

                        {/* Card 3: Brand Awareness Campaigns */}
                        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                            <h3 className="text-2xl font-semibold text-white mb-4">
                                Brand Awareness Campaigns
                            </h3>
                            <p className="text-white text-lg font-light mb-4">
                                Elevate your brand’s presence with video ads that tell your story and connect with your audience, increasing visibility and brand loyalty.
                            </p>
                        </div>

                        {/* Card 4: Testimonial Videos */}
                        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                            <h3 className="text-[146%] font-semibold text-white mb-4">
                                Testimonial Videos
                            </h3>
                            <p className="text-white text-lg font-light mb-4">
                                Build trust with potential customers by sharing compelling testimonials through video ads. Authentic feedback from happy clients can make all the difference.
                            </p>
                        </div>

                        {/* Card 5: Animated Explainer Videos */}
                        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                            <h3 className="text-2xl font-semibold text-white mb-4">
                                Animated Explainer Videos
                            </h3>
                            <p className="text-white text-lg font-light mb-4">
                                Simplify complex ideas with animated explainer videos. Our custom animations are perfect for introducing products, services, or processes in a fun, engaging way.
                            </p>
                        </div>

                        {/* Card 6: YouTube Video Ads */}
                        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                            <h3 className="text-[138%] font-semibold text-white mb-4">
                                YouTube Video Ads
                            </h3>
                            <p className="text-white text-lg font-light mb-4">
                                Target your ideal audience with custom YouTube ads. We create high-quality, engaging video ads that capture attention and deliver results on the world’s second-largest search engine.
                            </p>
                        </div>
                    </div>
                </div>

                <Brands/>

                {/* Call to Action Section */}
                <div className="mt-16 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Let&rsquo;s Create Your Next Video Ad</h2>
                <p className="text-lg text-gray-700 mb-6">
                        Ready to captivate your audience with powerful video ads? Contact us today to discuss your video ad needs.
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
