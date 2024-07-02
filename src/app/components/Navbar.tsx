'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import QuoteFormModal from "./QuoteFormModal";

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
            <header className="mb-8 border-b border-gray-300 py-4 shadow-lg">
                <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                    <Link href="#home">
                        <h1 className="text-2xl md:text-4xl font-bold text-slate-600">Fi
                            <span className="text-red-500"> Agency</span>
                        </h1>
                    </Link>

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
                    <div>
                        <Button className="transform bg-slate-700 transition duration-500 hover:scale-110 hover:bg-red-600" onClick={openModal}>
                            Get A Quote
                        </Button>
                    </div>
                </div>
            </header>
            <QuoteFormModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
}
