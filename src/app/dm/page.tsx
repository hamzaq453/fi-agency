'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HeroDM from '../../../public/HeroDM.webp'; // Use appropriate path to your image
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import QuoteFormModal from '../components/QuoteFormModal';

export default function DigitalMarketingDetail() {
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
                <title>Digital Marketing | Fi Agency</title>
                <meta
                    name="description"
                    content="Boost your online presence with our expert digital marketing strategies, tailored for growth and success."
                />
            </Head>

            <section className="bg-white py-16 px-6">
                <div className="container mx-auto">
                    {/* Header Section */}
                    <div className={`flex flex-col-reverse lg:flex-row items-center transition-all duration-1000 ease-out ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pr-12">
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6 transition-transform transform hover:scale-105 duration-300">
                                Digital Marketing 
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-700 mb-6">
                                Boost your online presence and drive conversions with our cutting-edge digital marketing strategies. Our team will work closely with you to develop tailored campaigns that fit your brand and goals.
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex justify-center lg:justify-end">
                            <Image src={HeroDM} alt="Digital Marketing" width={500} height={500} className="rounded-lg shadow-lg transform hover:scale-105 duration-300" />
                        </div>
                    </div>
                    <div className="">
          <Button onClick={openModal} className="lg:px-12 lg:py-7 sm:px-12 py-2  sm:py-3 transform bg-red-600 text-white font-bold text-lg transition duration-500 hover:scale-110 hover:bg-red-600">
            Get Started!
          </Button>
        </div>
        <QuoteFormModal isOpen={isModalOpen} onClose={closeModal} />

                    {/* Services Breakdown Section */}
                    <div className="mt-28">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Digital Marketing Solutions</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Card 1: SEO */}
                            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Search Engine Optimization (SEO)</h3>
                                <p className="text-gray-700 mb-4">
                                    Rank higher on search engines and attract more organic traffic. Our SEO experts optimize your website with proven strategies to improve visibility and search rankings.
                                </p>
                            </div>

                            {/* Card 2: PPC Advertising */}
                            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pay-Per-Click (PPC) Advertising</h3>
                                <p className="text-gray-700 mb-4">
                                    Drive immediate traffic to your site with targeted PPC campaigns. We’ll help you reach your audience with ads that convert while maximizing your ROI.
                                </p>
                            </div>

                            {/* Card 3: Social Media Marketing */}
                            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Social Media Marketing</h3>
                                <p className="text-gray-700 mb-4">
                                    Build a loyal audience on social media platforms. Our team crafts engaging content and implements strategies to grow your social media presence and foster meaningful connections.
                                </p>
                            </div>

                            {/* Card 4: Content Marketing */}
                            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Content Marketing</h3>
                                <p className="text-gray-700 mb-4">
                                    Share your story through high-quality, relevant content. We create compelling articles, blogs, and videos that not only engage your audience but also improve your SEO efforts.
                                </p>
                            </div>

                            {/* Card 5: Email Marketing */}
                            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Email Marketing</h3>
                                <p className="text-gray-700 mb-4">
                                    Nurture leads and keep your audience engaged with personalized email campaigns. We use data-driven strategies to increase open rates and conversions.
                                </p>
                            </div>

                            {/* Card 6: Analytics & Reporting */}
                            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Analytics & Reporting</h3>
                                <p className="text-gray-700 mb-4">
                                    Gain actionable insights with our comprehensive analytics and reporting services. We track the performance of all your campaigns and provide detailed reports to guide future strategies.
                                </p>
                            </div>
                        </div>
                    </div>
           {/* Testimonials Section */}
<div className="mt-16">
  <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Testimonial 1 */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <p className="text-gray-700 italic mb-4">
        "Working with Fi Agency has been a game changer for our business. Their SEO strategies helped us rank on the first page of Google, and we have seen a noticeable increase in traffic and conversions."
      </p>
      <p className="text-gray-900 font-bold">- Sarah, CEO of XYZ Company</p>
    </div>
    {/* Testimonial 2 */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <p className="text-gray-700 italic mb-4">
        {"Their social media marketing team is outstanding! We have gained thousands of new followers and seen a massive engagement boost thanks to their creative content strategies."} {/* Option 2: Wrap in curly braces */}
      </p>
      <p className="text-gray-900 font-bold">- James, Marketing Director at ABC Inc</p> {/* Option 1: Escape the ending quote */}
    </div>
  </div>
</div>

                    {/* Call to Action Section */}
                    <div className="mt-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Let’s Grow Your Business</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Ready to take your digital marketing to the next level? Contact us today to discuss how we can help your business thrive.
                        </p>
                        <Button onClick={openModal} className="lg:px-12 lg:py-7 sm:px-12 py-2  sm:py-3 transform bg-red-600 text-white font-bold text-lg transition duration-500 hover:scale-110 hover:bg-red-600">
                           Contact Now
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
