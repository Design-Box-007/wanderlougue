'use client'

import React from 'react'
import { images } from '@/data/assets'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className="relative bg-white w-full h-screen overflow-hidden rounded-3xl">
            {/* Foreground cut image appears first */}
            <motion.img
                src={images.main}
                alt="Foreground Cut"
                className="absolute inset-0 w-full h-full object-cover z-[3]"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
            />
            {/* Background image fades in next */}
            <motion.img
                src={images.neilRosenstechUnsplash}
                alt="Mountains"
                className="absolute inset-0 w-full h-full object-cover z-[1]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
            />
            {/* 'Explore' text appears last */}
            <motion.h1
                className="absolute font-monteserrat left-1/2 -translate-x-1/2 top-[43%] lg:top-[40%] -translate-y-1/2 text-[25vw] font-medium text-white z-[2] leading-none whitespace-nowrap select-none"
                initial={{ y: 400 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 2 }}
            >
                Explore
            </motion.h1>
            {/* Description text (static) */}
            <div className="absolute px-4 w-full flex flex-col gap-4 lg:flex-row justify-center lg:justify-between items-center bottom-8 text-white z-[4] text-lg drop-shadow-md">
                <p className="text-center lg:text-left">
                    Ultimate Travel Guides: Expert Tips, Packing Lists & Itineraries for Every Destination
                </p>
                {/* <div className="flex gap-4">
                    <button className="flex items-center cursor-pointer gap-2 px-4 py-2 rounded-full transition text-white border border-white/30 backdrop-blur">
                        <MdOutlineMenuBook className="text-2xl" />
                        <span className="font-medium">Read</span>
                    </button>
                    <button className="flex items-center cursor-pointer gap-2 px-4 py-2 rounded-full transition text-white border border-white/30 backdrop-blur">
                        <MdOutlineTravelExplore className="text-2xl" />
                        <span className="font-medium">Explore</span>
                    </button>
                </div> */}
            </div>
        </section>
    )
}

export default Hero
