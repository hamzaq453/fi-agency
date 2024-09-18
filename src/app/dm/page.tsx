"use client"

import { Button } from '@/components/ui/button';
import Head from 'next/head';
import QuoteFormModal from '../components/QuoteFormModal';
import { useState } from 'react';

export default function DMPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div>
      <Head>
        <title>Digital Marketing Services | Fi Marketing Agency</title>
        <meta
          name="description"
          content="Boost your business with our tailored digital marketing services, including SEO, PPC, Social Media Marketing, and more. Contact us today!"
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Digital Marketing Services</h1>
          <p className="mt-4 text-lg">
            Grow your online presence and drive results with our comprehensive digital marketing solutions. We specialize in SEO, social media, PPC, and content marketing.
          </p>
          <a href="#contact" className="mt-6 inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg">
            Get a Free Consultation
          </a>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Our Digital Marketing Services</h2>
          <p className="mt-4 text-gray-600">
            Explore our full range of services to boost your business online.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Search Engine Optimization (SEO)</h3>
              <p className="mt-4 text-gray-600">
                Improve your website’s ranking and drive organic traffic with our advanced SEO strategies.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Pay-Per-Click (PPC)</h3>
              <p className="mt-4 text-gray-600">
                Maximize your ROI with targeted PPC campaigns on Google Ads and other platforms.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Social Media Marketing</h3>
              <p className="mt-4 text-gray-600">
                Build a strong social media presence and engage your audience on platforms like Facebook, Instagram, and LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Why Choose Our Digital Marketing Services?</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <i className="fas fa-chart-line text-4xl text-blue-600"></i>
              <h3 className="mt-4 text-xl font-semibold">Data-Driven Approach</h3>
              <p className="mt-4 text-gray-600">
                We rely on data and analytics to drive your digital marketing strategies and achieve measurable results.
              </p>
            </div>
            <div>
              <i className="fas fa-user-friends text-4xl text-blue-600"></i>
              <h3 className="mt-4 text-xl font-semibold">Personalized Strategy</h3>
              <p className="mt-4 text-gray-600">
                We tailor our services to meet the unique needs of your business and industry.
              </p>
            </div>
            <div>
              <i className="fas fa-award text-4xl text-blue-600"></i>
              <h3 className="mt-4 text-xl font-semibold">Proven Results</h3>
              <p className="mt-4 text-gray-600">
                Our clients have seen significant growth in traffic, conversions, and ROI with our digital marketing services.
              </p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <p className="text-gray-600">
                “Fi Marketing Agency helped us boost our online traffic by 300%! Their digital marketing strategies truly work.”
              </p>
              <p className="mt-4 text-lg font-semibold">- John Doe, CEO of Example Corp</p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <p className="text-gray-600">
                “Their expertise in SEO and PPC has transformed our business. We’ve seen tremendous growth in sales.”
              </p>
              <p className="mt-4 text-lg font-semibold">- Jane Smith, Founder of Example Co.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Ready to Grow Your Business?</h2>
          <p className="mt-4">Contact us today and get a free consultation for your digital marketing strategy.</p>
          <Button onClick={openModal} className="px-8 sm:px-12 py-2 sm:py-3 transform bg-red-600 text-white font-semibold transition duration-500 hover:scale-110 hover:bg-red-600">
            Get A Quote
          </Button>
        </div>
      </section>
      <QuoteFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
