import Image from 'next/image';
import React from 'react';
import Abt1 from "../../../public/Abt1.png";
import Abt2 from "../../../public/Abt 2.png";
import Abt3 from "../../../public/Abt 3.png";

export default function About() {
    return (
        <section id="about" className="py-16">
            <div className="container mx-auto text-center px-4 sm:px-6 lg:px-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">About Us</h2>
                <p className="text-lg text-gray-700 mb-8">
                    At Fi Agency, we are dedicated to transforming your vision into reality. Our team of experts specializes in digital marketing, web development, graphic design, branding, and social media management.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg border-2 border-transparent transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:-translate-y-2 hover:rotate-1">
                        <div className="flex justify-center mb-4">
                            <div className="w-20 h-20">
                                <Image src={Abt1} alt='Our Mission' className='rounded-sm'/>
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-gray-700">
                            Our mission is to deliver innovative solutions that drive success and growth for our clients. We strive to exceed expectations through our dedication and expertise.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg border-2 border-transparent transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:-translate-y-2 hover:rotate-1">
                        <div className="flex justify-center mb-4">
                            <div className="w-20 h-20">
                                <Image src={Abt2} alt='Our Vision' className='rounded-sm'/>
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                        <p className="text-gray-700">
                            We envision a world where businesses of all sizes can leverage the power of digital transformation to achieve their full potential and create lasting impact.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg border-2 border-transparent transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:-translate-y-2 hover:rotate-1">
                        <div className="flex justify-center mb-4">
                            <div className="w-20 h-20">
                                <Image src={Abt3} alt='Our Values' className='rounded-sm'/>
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
                        <p className="text-gray-700">
                            We believe in integrity, innovation, and collaboration. Our values guide us in building strong relationships with our clients and delivering exceptional results.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
