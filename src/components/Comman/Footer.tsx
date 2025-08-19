import React from "react";
import Link from "next/link";
import {
  navLinks,
  NavLinksType,
  socialMedia,
  SocialMediaLinks,
} from "@/data/comman";
import { images } from "@/data/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full px-5 pb-5 pt-10">
      <div className="h-auto lg:min-h-[500px] p-2.5 rounded-2xl overflow-hidden relative">
        <Image
          src={images.footer}
          alt="footer-bg"
          width={1320}
          height={632}
          className="w-full h-full brightness-75 object-cover absolute inset-0 z-10"
        />
        <h2 className="relative z-20 font-poppins font-semibold text-white lg:text-[14vw] text-[12vw] md:text-[12vw] text-center">
          Wanderlogue
        </h2>
        <div className="px-4 py-5 rounded-2xl h-[258px] overflow-hidden flex flex-col justify-between gap-4 z-20 relative backdrop-blur-[24px] bg-[#0000000F]">
          <div>
            <nav className="flex flex-col gap-4 lg:flex-row lg:items-center justify-between">
              {/* logo */}
              <div className="text-xl font-bold text-white flex flex-row items-center gap-2 flex-1">
                <Link
                  href="/"
                  className="text-white w-[100px] text-3xl font-semibold font-radjdhani"
                >
                  Wanderlogue
                </Link>
              </div>
              {/* Desktop Navigation Links */}
              <ul className="rounded-[20px] flex flex-col lg:flex-row gap-2 text-white flex-[3] justify-center">
                {navLinks.map((navlink: NavLinksType, index: number) => (
                  <Link
                    href={navlink.navHref || "#"}
                    key={index}
                    className={`pr-4 mr-4 ${
                      index !== navLinks.length - 1
                        ? "lg:border-r-white lg:border-r-[1px]"
                        : ""
                    }`}
                    passHref
                  >
                    <li className="hover:text-white cursor-pointer">
                      {navlink.navTitle}
                    </li>
                  </Link>
                ))}
              </ul>

              <ul className="rounded-[20px] flex gap-5 text-white flex-1 lg:justify-end">
                {socialMedia.map(
                  ({ link, icon: Icon }: SocialMediaLinks, index: number) => (
                    <a href={link} key={index}>
                      <Icon size={20} className="text-white" />
                    </a>
                  )
                )}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col lg:flex-row justify-between w-full items-center gap-4 text-white">
            <p>Copyright © 2025 Wanderlogue. All rights reserved.</p>
            <div className="flex flex-row gap-4 text-white">
              <p>Terms and Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
