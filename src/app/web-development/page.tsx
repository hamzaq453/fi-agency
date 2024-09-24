'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HeroWD from '../../../public/HeroWD.webp';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import QuoteFormModal from '../components/QuoteFormModal';
import Brands from '../components/Brands';

export default function WebDevelopmentDetail() {
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
                <title>Web Development | Fi Agency</title>
                <meta
                    name="description"
                    content="Build a robust, scalable, and high-performance website with our expert web development services. Custom solutions to match your business needs."
                />
            </Head>

            <section className="bg-white py-16 px-6">
                <div className="container mx-auto">
                    {/* Header Section */}
                    <div className={`flex flex-col-reverse lg:flex-row items-center transition-all duration-1000 ease-out ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pr-12">
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6 transition-transform transform hover:scale-105 duration-300">
                                Web Development
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-700 mb-6">
                                {"We design and develop custom websites that are visually appealing, user-friendly, and optimized for performance. Whether you're a startup or an enterprise, our team can build solutions tailored to your needs."}
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex justify-center lg:justify-end">
                            <Image src={HeroWD} alt="Web Development" width={500} height={500} className="rounded-lg shadow-lg transform hover:scale-105 duration-300" />
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
        Our Web Development Solutions!
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1: Custom Website Development */}
        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-[148%] font-semibold text-white mb-4">
                Custom Website Development
            </h3>
            <p className="text-white font-light text-lg mb-4">
                We build websites from scratch, ensuring they are tailored to your brand and user needs. From design to functionality, we ensure your site stands out.
            </p>
        </div>

        {/* Card 2: E-commerce Development */}
        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">
                E-commerce Development
            </h3>
            <p className="text-white font-light text-lg mb-4">
                Sell your products online with our fully customized e-commerce solutions. We develop secure, scalable online stores that enhance user experience and maximize sales.
            </p>
        </div>

        {/* Card 3: CMS Development */}
        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">
                CMS Development
            </h3>
            <p className="text-white text-lg font-light mb-4">
                Manage your website with ease. Our CMS development services allow you to update and control your website’s content effortlessly, without needing technical skills.
            </p>
        </div>

        {/* Card 4: Web Application Development */}
        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-[146%] font-semibold text-white mb-4">
                Web Application Development
            </h3>
            <p className="text-white text-lg font-light mb-4">
                We create powerful web applications tailored to your business processes. Whether it’s a customer portal, SaaS platform, or any custom application, we’ve got you covered.
            </p>
        </div>

        {/* Card 5: Responsive Web Design */}
        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">
                Responsive Web Design
            </h3>
            <p className="text-white text-lg font-light mb-4">
                Ensure your website looks and works perfectly on all devices. Our responsive design services adapt your website’s layout for seamless user experiences on smartphones, tablets, and desktops.
            </p>
        </div>

        {/* Card 6: Website Maintenance & Support */}
        <div className="bg-gradient-to-r bg-red-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-[138%] font-semibold text-white mb-4">
                Website Maintenance & Support
            </h3>
            <p className="text-white text-lg font-light mb-4">
                Keep your website running smoothly with our ongoing maintenance and support services. We handle updates, security checks, and performance monitoring to ensure your site is always optimized.
            </p>
        </div>
    </div>
</div>

                       {/* <div className="mt-16">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <p className="text-gray-700 italic mb-4">
                                    {"Fi Agency’s web development services transformed our outdated website into a modern, functional site that is driving more conversions than ever."}
                                </p>
                                <p className="text-gray-900 font-bold">- Jessica, Founder of XYZ Solutions</p>
                            </div>
                          
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <p className="text-gray-700 italic mb-4">
                                    {"Our new e-commerce platform is fantastic. It’s fast, easy to navigate, and sales have increased since the relaunch. Fi Agency did a great job."}
                                </p>
                                <p className="text-gray-900 font-bold">- Michael, COO of ABC Retail</p>
                            </div>
                        </div>
                    </div> */}
                    <Brands/>

                    {/* Call to Action Section */}
                    <div className="mt-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Let’s Build Your Website</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Ready to launch a professional, high-performance website? Contact us today to discuss your web development needs.
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
