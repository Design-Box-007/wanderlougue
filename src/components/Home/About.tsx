import React from "react";
import Image from "next/image";
import { images } from "@/data/assets";
import Button from "../Comman/Button";
import { FaArrowRight } from "react-icons/fa";
import Divider from "../Comman/Divider";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full space-y-10 lg:h-[95vh]">
      <div className="flex flex-col lg:flex-row gap-4 w-full h-full">
        {/* Left image */}
        <div className="w-full lg:w-[40%] h-full rounded-3xl overflow-hidden">
          <Image
            src={images.about1}
            alt="Family by the lake"
            width={600}
            height={400}
            className="w-full h-full object-cover rounded-3xl"
            loading="lazy"
          />
        </div>
        <div className="w-full lg:w-[60%] flex flex-col justify-between">
          <div className="flex flex-row gap-2 w-full">
            <div className="h-full">
              <Image
                src={images.about2}
                alt="Travelers celebrating"
                width={600}
                height={400}
                className="h-full w-full object-cover rounded-3xl"
                loading="lazy"
              />
            </div>
            <div className="h-full">
              <Image
                src={images.about3}
                alt="Travelers celebrating"
                width={600}
                height={400}
                className="h-full w-full object-cover rounded-3xl"
                loading="lazy"
              />
            </div>
          </div>
          {/* divider */}
          <Divider />
          <div className="space-y-6">
            <p className="text-base md:text-lg lg:text-2xl italic">
              At Wanderlogue, we believe you don’t need a tour guide or a trip
              planner to create an unforgettable journey. This blog is dedicated
              to helping you plan every detail of your adventure independently —
              from route mapping and budget breakdowns to local insights and
              hidden gems. 
              </p>
             <p className="text-base md:text-lg lg:text-2xl italic">
             <span className="font-bold">We give minute attention to what really matters:</span>  how
              to plan smarter, travel deeper, and explore like a true traveler —
              not just a tourist. Whether you{"'"}re navigating unfamiliar streets,
              discovering off-the-beaten-path destinations, or figuring out
              local transport, Wanderlogue has you covered.
               </p>
              <p className="text-base md:text-lg lg:text-2xl italic">
              Explore every
              country with confidence, curiosity, and complete freedom — one
              detail-packed guide at a time.
              </p>
           
            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-4 w-full max-w-2xl justify-start">
              <Button
                label="Meet the Author"
                icon={<FaArrowRight />}
                variant="primary"
                className="text-lg px-6 py-3 flex gap-5"
              />
              <Link href={"/about-us"}>
              <Button
                label="Meet the Author to – About Us"
                icon={<FaArrowRight />}
                variant="secondary"
                className="text-lg px-6 py-3 flex gap-5"
              />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
