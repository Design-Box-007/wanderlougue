"use client";

import React from "react";
import SubHeading from "../Comman/SubHeading";
import { images } from "@/data/assets";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { cn } from "@/lib/utils"; // optional if you use clsx + tailwind-merge

interface DestinationsType {
  title: string;
  imgSrc: string;
  description: string;
}

const destinations: DestinationsType[] = [
  {
    title: "Valley",
    imgSrc: images.recommends5,
    description:
      "Explore breathtaking valleys with lush landscapes and scenic views.",
  },
  {
    title: "Skyline",
    imgSrc: images.recommends4,
    description:
      "Marvel at stunning skylines from the best vantage points around the world.",
  },
  {
    title: "Lake",
    imgSrc: images.recommends3,
    description:
      "Relax by tranquil lakes, perfect for peaceful getaways and water activities.",
  },
  {
    title: "River",
    imgSrc: images.recommends2,
    description:
      "Discover vibrant river destinations, ideal for adventure and exploration.",
  },
  {
    title: "Hills",
    imgSrc: images.recommends1,
    description:
      "Wander through rolling hills and enjoy panoramic countryside views.",
  },
];

const PopularDestinations = () => {
  return (
    <section className="w-full">
      <SubHeading
        heading={
          <>
            Recommended Popular <br /> Destinations
          </>
        }
        className="text-center"
      />

      <div className="w-full overflow-x-auto flex justify-center mt-8 pb-4 px-4 no-scrollbar">
        <div className="flex items-end justify-center relative min-w-[700px] md:min-w-0">
          {destinations.map((dest, idx) => {
            let heightClass = "h-[380px] z-10 shadow-md";
            if (idx === 2) heightClass = "h-[461px] z-30";
            else if (idx === 1 || idx === 3) heightClass = "h-[421px] z-20";

            const isCenter = idx === 2;
            const textAlignmentClass =
              idx === 3 || idx === 4 ? "flex-row-reverse" : "flex-row";

            return (
              <div
                key={dest.title}
                className={cn(
                  `relative rounded-3xl overflow-hidden flex-shrink-0 
     w-[180px] md:w-[220px] lg:w-[260px] -ml-5
     transition-transform duration-500 ease-in-out hover:z-50`,
                  heightClass,
                  idx === 0 && "ml-0" // keep first tile aligned
                )}
              >
                <div className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-105">
                  <Image
                    src={dest.imgSrc}
                    alt={dest.title}
                    fill
                    className="object-cover w-full h-full rounded-3xl"
                  />

                  <div
                    className={cn(
                      "absolute bottom-0 left-0 w-full flex items-end justify-between p-4",
                      textAlignmentClass
                    )}
                  >
                    <span className="text-white text-lg md:text-xl font-semibold">
                      {dest.title}
                    </span>
                    {isCenter && (
                      <button className="bg-white text-black rounded-full p-2 ml-2">
                        <FaArrowRight />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
