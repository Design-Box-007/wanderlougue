'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { navLinks, NavLinksType } from '@/data/comman';
// import Image from 'next/image';

const Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <nav className="w-full z-[9999] fixed top-3 left-0 right-0 px-5">
            <div className="w-[95%] mx-auto rounded-full bg-white text-black shadow flex items-center justify-between px-8 py-3 mt-6">
                {/* Brand */}
                <Link href="/" className="text-xl font-urbanist uppercase font-bold tracking-tight mr-8">
                    Wanderlogue
                </Link>
                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-6 flex-1">
                    {navLinks.map((navlink: NavLinksType, index: number) => (
                        <li key={index} className="flex items-center">
                            <Link href={navlink.navHref || '#'} className="text-md font-medium px-3 py-1 hover:text-gray-700 transition">
                                {navlink.navTitle}
                            </Link>
                            {index !== navLinks.length - 1 && (
                                <span className="h-6 w-px bg-gray-300 mx-2" />
                            )}
                        </li>
                    ))}
                </ul>
                {/* Contact Button */}
                <Link href="/contact" className="hidden lg:block ml-8">
                    <button className="flex items-center gap-2 bg-black text-white rounded-full px-5 py-2 font-medium text-base shadow hover:bg-gray-900 transition">
                        <FaPhoneAlt className="text-lg" />
                        Contact Us
                    </button>
                </Link>
                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsMobileOpen(prev => !prev)}
                    className="lg:hidden ml-4 p-2 rounded focus:outline-none"
                >
                    {isMobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
            {/* Mobile Menu */}
            {isMobileOpen && (
                <div className="lg:hidden w-[95%] mx-auto bg-white rounded-3xl shadow flex flex-col items-center py-4 mt-2 gap-2">
                    {navLinks.map((navlink: NavLinksType, index: number) => (
                        <Link
                            key={index}
                            href={navlink.navHref || '#'}
                            className="text-lg font-medium px-4 py-2 w-full text-center hover:bg-gray-100 rounded"
                            onClick={() => setIsMobileOpen(false)}
                        >
                            {navlink.navTitle}
                        </Link>
                    ))}
                    <Link href="/contact" className="w-full flex justify-center mt-2">
                        <button className="flex items-center gap-2 bg-black text-white rounded-full px-5 py-2 font-medium text-base shadow hover:bg-gray-900 transition">
                            <FaPhoneAlt className="text-lg" />
                            Contact Us
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
