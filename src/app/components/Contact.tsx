'use client'
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import QuoteFormModal from './QuoteFormModal';
import Link from 'next/link';

export default function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
        <section id="contact" className="bg-white py-16">
            <div className="container mx-auto text-center px-4 sm:px-6 lg:px-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact</h2>
                <p className="text-lg text-gray-700 mb-8">
                    Reach out to us through any of the following methods. We look forward to hearing from you!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-red-50 flex flex-col items-center">
                        <FaEnvelope className="text-4xl text-red-500 mb-4 animate-bounce" />
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Email</h3>
                        <p className="text-gray-700">info@fiagency.com</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-red-50 flex flex-col items-center">
                        <FaPhone className="text-4xl text-red-500 mb-4 animate-bounce" />
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Phone</h3>
                        <p className="text-gray-700">+1 234 567 890</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-red-50 flex flex-col items-center">
                        <FaWhatsapp className="text-4xl text-red-500 mb-4 animate-bounce" />
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">WhatsApp</h3>
                        <p className="text-gray-700">+1 234 567 890</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-red-50 flex flex-col items-center">
                        <Link href={'https://www.instagram.com/fi_marketing_agency?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='} target='_blank' className="flex flex-col items-center">
                        <FaInstagram className="text-4xl text-red-500 mb-4 animate-bounce" />
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Instagram</h3>
                        <p className="text-gray-700 text-sm">@fi_marketing_agency</p>
                        </Link>
                    </div>
                </div>
                <div>
                    <Button onClick={openModal} className="mt-16 px-10 transform transition duration-500 hover:scale-110 hover:bg-red-600">
                        Get A Quote
                    </Button>
                </div>
            </div>
            <QuoteFormModal isOpen={isModalOpen} onClose={closeModal} />
        </section>
    );
}
