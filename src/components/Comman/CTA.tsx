"use client";

import React from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import SubHeading from "./SubHeading";
import { images } from "@/data/assets";
import Image from "next/image";
import Button from "./Button";

const CTA = () => {
  return (
    <section className="w-full px-5 py-5">
      <div className="relative rounded-3xl overflow-hidden flex items-center justify-center py-[44px] px-[34px]">
        <Image
          src={images.cta}
          alt="cta"
          width={1320}
          height={460}
          className="w-full h-full object-cover absolute inset-0 z-10"
        />
        <div className="relative z-20 w-full bg-white rounded-3xl shadow-xl flex flex-col items-center px-4 md:px-12 py-12">
          <SubHeading
            heading="Get the Best Travel Hacks, Itineraries & Destination Guides"
            className="font-semibold text-center"
          />
          <p className="text-center text-base text-black mb-2">
            Join thousands of travelers who receive handpicked travel
            itineraries, insider tips, and special discounts on hotels &
            experiences.
            <br />
            <span className="text-base text-black/70">
              No spam, just pure wanderlust inspiration
            </span>
          </p>
          <form className="w-full lg:max-w-5/6 flex items-center mt-8 mb-4 lg:bg-black p-2.5 rounded-[48px] bg-none lg:flex-row flex-col gap-4 md:bg-black md:flex-row">
            <div className="flex flex-1 items-center bg-gray-100 rounded-[40px] py-4 px-2.5">
              <FaSearch className="text-2xl mr-2" />
              <input
                type="email"
                placeholder="Enter your email address..."
                className="flex-1 bg-transparent outline-none text-lg placeholder:text-gray-400"
              />
            </div>
            <Button
              label="Straight to Your Inbox"
              variant="primary"
              className="gap-2"
              icon={<FaArrowRight />}
            />
          </form>
          <p className="text-center text-black text-base mt-2">
            We respect your privacy. Unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
