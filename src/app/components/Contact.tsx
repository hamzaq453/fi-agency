'use client';
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
    <section id="contact" className="bg-white py-8 sm:py-16">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-8">Contact</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
          Reach out to us through any of the following methods. We look forward to hearing from you!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-red-50 flex flex-col items-center">
            <a href="mailto:fimarketingagency01@gmail.com" className="flex flex-col items-center">
              <FaEnvelope className="text-3xl sm:text-4xl text-red-500 mb-2 sm:mb-4 animate-bounce" />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">Email</h3>
              <p className="text-sm sm:text-base text-gray-700">fimarketingagency01@gmail.com</p>
            </a>
          </div>
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-red-50 flex flex-col items-center">
            <a href="tel:+923204619431" className="flex flex-col items-center">
              <FaPhone className="text-3xl sm:text-4xl text-red-500 mb-2 sm:mb-4 animate-bounce" />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">Phone</h3>
              <p className="text-sm sm:text-base text-gray-700">Call Now!</p>
            </a>
          </div>
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-red-50 flex flex-col items-center">
            <Link href="https://wa.me/14198137181" className="flex flex-col items-center" target="_blank">
              <FaWhatsapp className="text-3xl sm:text-4xl text-red-500 mb-2 sm:mb-4 animate-bounce" />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">WhatsApp</h3>
              <p className="text-sm sm:text-base text-gray-700">+1 419 8137181</p>
            </Link>
          </div>
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-red-50 flex flex-col items-center">
            <Link href="https://www.instagram.com/fimarketingagency?igsh=cWxqYjFsbWlvZGdp" target="_blank" className="flex flex-col items-center">
              <FaInstagram className="text-3xl sm:text-4xl text-red-500 mb-2 sm:mb-4 animate-bounce" />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">Instagram</h3>
              <p className="text-sm sm:text-base text-gray-700">@fimarketingagency</p>
            </Link>
          </div>
        </div>
        <div className="mt-8 sm:mt-16">
          <Button onClick={openModal} className="px-8 sm:px-12 py-2 sm:py-3 transform bg-red-600 text-white font-semibold transition duration-500 hover:scale-110 hover:bg-red-600">
            Get A Quote
          </Button>
        </div>
      </div>
      <QuoteFormModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}
