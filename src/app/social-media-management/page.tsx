'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HeroSMM from '../../../public/HeroSMM.webp';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import QuoteFormModal from '../components/QuoteFormModal';
import Brands from '../components/Brands';

export default function SocialMediaManagementDetail() {
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
                <title>Social Media Management | Fi Agency</title>
                <meta
                    name="description"
                    content="Maximize your online presence and engage with your audience effectively with our expert social media management services. We create strategies that drive growth."
                />
            </Head>

            <section className="bg-white py-16 px-6">
                <div className="container mx-auto">
                    {/* Header Section */}
                    <div className={`flex flex-col-reverse lg:flex-row items-center transition-all duration-1000 ease-out ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pr-12">
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6 transition-transform transform hover:scale-105 duration-300">
                                Social Media Management
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-700 mb-6">
                                {"Grow your brand's online presence with targeted social media strategies. We manage your social platforms to engage your audience and drive meaningful interactions."}
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex justify-center lg:justify-end">
                            <Image src={HeroSMM} alt="Social Media Management" width={500} height={500} className="rounded-lg shadow-lg transform hover:scale-105 duration-300" />
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
        Our Social Media Management Solutions!
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1: Social Media Strategy Development */}
        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-[148%] font-semibold text-white mb-4">
                Social Media Strategy Development
            </h3>
            <p className="text-white font-light text-lg mb-4">
                We craft customized strategies for each social media platform to ensure maximum engagement and brand growth.
            </p>
        </div>

        {/* Card 2: Content Creation & Curation */}
        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">
                Content Creation & Curation
            </h3>
            <p className="text-white font-light text-lg mb-4">
                {"We create and curate engaging, shareable content that resonates with your audience and aligns with your brand’s message."}
            </p>
        </div>

        {/* Card 3: Community Management */}
        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">
                Community Management
            </h3>
            <p className="text-white text-lg font-light mb-4">
                Build relationships with your audience through timely interactions and community engagement on social media platforms.
            </p>
        </div>

        {/* Card 4: Paid Social Advertising */}
        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-[146%] font-semibold text-white mb-4">
                Paid Social Advertising
            </h3>
            <p className="text-white text-lg font-light mb-4">
                Amplify your reach with targeted paid campaigns across major platforms like Facebook, Instagram, and LinkedIn.
            </p>
        </div>

        {/* Card 5: Social Media Analytics & Reporting */}
        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">
                Social Media Analytics & Reporting
            </h3>
            <p className="text-white text-lg font-light mb-4">
                Track your social media performance with detailed analytics, and make data-driven decisions to enhance your strategy.
            </p>
        </div>

        {/* Card 6: Influencer Marketing */}
        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-[138%] font-semibold text-white mb-4">
                Influencer Marketing
            </h3>
            <p className="text-white text-lg font-light mb-4">
                Leverage influencers to promote your brand and reach a wider audience with authentic endorsements.
            </p>
        </div>
    </div>
</div>

                    <Brands/>

                    {/* Call to Action Section */}
                    <div className="mt-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">{"Let’s Elevate Your Social Media Presence"}</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Ready to boost your brand’s visibility and engage with your audience? Contact us today to get started with our social media management services.
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
