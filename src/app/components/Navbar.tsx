'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import QuoteFormModal from "./QuoteFormModal";
import Image from 'next/image';
import Logo from '../../../public/LogoN.png';

const Links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
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

                    {/* Navigation Links */}
                    <div className="flex-1 flex justify-center">
                        <nav className="hidden gap-8 lg:flex">
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
                    <div>
                        <Button className="transform bg-red-600 transition duration-500 hover:scale-110 hover:bg-red-600" onClick={openModal}>
                            Get A Quote
                        </Button>
                    </div>
                </div>
            </header>
            <QuoteFormModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
}
