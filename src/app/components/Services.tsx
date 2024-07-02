import React from 'react';
import Image from 'next/image';
import DigitalMarketingIcon from '../../../public/DM Icon.png';
import WebDevelopmentIcon from '../../../public/WEBDEV.png';
import GraphicDesigningIcon from '../../../public/GD.png';
import BrandingIcon from '../../../public/BD.png';
import SocialMediaManagementIcon from '../../../public/SMM.png';

export default function Services() {
    const services = [
        {
            title: 'Digital Marketing',
            description: 'Boost your online presence with our expert digital marketing strategies.',
            icon: DigitalMarketingIcon,
        },
        {
            title: 'Web Development',
            description: 'Get a stunning website that’s fast, secure, and easy to manage.',
            icon: WebDevelopmentIcon,
        },
        {
            title: 'Graphic Designing',
            description: 'Creative and eye-catching designs that make your brand stand out.',
            icon: GraphicDesigningIcon,
        },
        {
            title: 'Branding',
            description: 'Develop a strong, memorable brand identity with our branding services.',
            icon: BrandingIcon,
        },
        {
            title: 'Social Media Management',
            description: 'Engage your audience with our comprehensive social media management.',
            icon: SocialMediaManagementIcon,
        },
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Solutions For You</h2>
                {/* <p className="text-lg text-gray-700 mb-12">Ideal solutions to elevate your business.</p> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
                        >
                            <div className="flex justify-center mb-4">
                                <Image src={service.icon} alt={`${service.title} Icon`} width={64} height={64} />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-700 mb-4">{service.description}</p>
                            <a href="#" className="text-red-500 font-bold transition-colors hover:text-red-700">
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
