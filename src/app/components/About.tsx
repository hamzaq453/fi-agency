import Link from 'next/link';
import React from 'react';
import { FaBullseye, FaRocket, FaChartLine, FaHandshake } from 'react-icons/fa';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto w-[90%] px-8 lg:px-16">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">About Us</h2>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-red-500">Unlocking Your Online Potential</h3>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16">
                    {/* Left Side - About Text */}
                    <div className="lg:w-1/2 text-black space-y-6">
                        <p className="text-lg leading-relaxed">
                            FI Marketing Agency offers comprehensive marketing solutions, creative campaigns, and innovative strategies to boost brand awareness and drive measurable results. With a deep expertise in digital technologies and multi-channel advertising, we engage audiences and elevate businesses&apos; online presence effectively.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Our mission is to turn your vision into reality by employing strategies that align with your unique brand goals, ensuring a meaningful impact in your industry.
                        </p>
                    </div>

                    {/* Right Side - Points with Icons */}
                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex items-center space-x-4 border p-4 rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition duration-200">
                            <FaRocket className="text-red-500 text-4xl" />
                            <div>
                                <h4 className="font-semibold text-gray-800">Strategic Visionaries</h4>
                                <p className="text-sm text-gray-500">We craft visionary strategies that propel your brand forward.</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition duration-200">
                            <FaBullseye className="text-red-500 text-4xl" />
                            <div>
                                <h4 className="font-semibold text-gray-800">Results-Driven Approach</h4>
                                <p className="text-sm text-gray-500">Our focus is on achieving measurable results for every campaign.</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition duration-200">
                            <FaChartLine className="text-red-500 text-4xl" />
                            <div>
                                <h4 className="font-semibold text-gray-800">Multi-Channel Mastery</h4>
                                <p className="text-sm text-gray-500">Expertise across various platforms to maximize brand reach.</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition duration-200">
                            <FaHandshake className="text-red-500 text-4xl" />
                            <div>
                                <h4 className="font-semibold text-gray-800">Client-Centric Collaboration</h4>
                                <p className="text-sm text-gray-500">We prioritize strong, collaborative partnerships with our clients.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action Button */}
                <div className="text-center mt-16">
                    <Link href="https://calendly.com/ceofimarketing/meeting">
                        <button className="bg-red-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-600 transition duration-200">
                            Get Free Consultation Now
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
