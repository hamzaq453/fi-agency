'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import QuoteFormModal from "./QuoteFormModal";
import Image from 'next/image';
import Logo from '../../../public/Logo.png';

const Links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <>
            <header className="mb-8 border-b border-gray-300 py-0 shadow-lg">
                <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                    {/* Logo Section */}
                    <Link href="/">
                        <div className="flex items-center">
                            <Image src={Logo} alt="Logo" width={200} height={200} />
                        </div>
                    </Link>

                    {/* Navigation Links for Larger Screens */}
                    <div className="hidden lg:flex flex-1 justify-center">
                        <nav className="flex gap-8">
                            {Links.map((link, idx) => (
                                <div key={idx}>
                                    <a
                                        className="text-lg font-normal transition duration-300 text-slate-700 hover:text-red-600 hover:border-b-2 hover:border-primary"
                                        href={link.href}>
                                        {link.name}
                                    </a>
                                </div>
                            ))}
                        </nav>
                    </div>

                    {/* Quote Button */}
                    <div className="hidden lg:block">
                        <Button className="transform bg-red-600 transition duration-500 hover:scale-110 hover:bg-red-600" onClick={openModal}>
                            Get A Quote
                        </Button>
                    </div>

                    {/* Hamburger Icon for Small Screens */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 focus:outline-none hover:text-red-600"
                        >
                            {/* Icon for Hamburger Menu */}
                            {isMenuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-gray-50 border-t border-gray-300">
                        <nav className="flex flex-col items-center gap-4 py-4">
                            {Links.map((link, idx) => (
                                <a
                                    key={idx}
                                    className="text-lg font-normal transition duration-300 text-slate-700 hover:text-red-600"
                                    href={link.href}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button
                                className="transform bg-red-600 transition duration-500 hover:scale-110 hover:bg-red-600"
                                onClick={() => {
                                    toggleMenu();
                                    openModal();
                                }}
                            >
                                Get A Quote
                            </Button>
                        </nav>
                    </div>
                )}
            </header>
            <QuoteFormModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
}
