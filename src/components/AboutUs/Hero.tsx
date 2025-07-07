'use client'

import React from 'react'
import { images } from '@/data/assets'
import { motion } from 'framer-motion'
import { MdOutlineMenuBook, MdOutlineTravelExplore } from 'react-icons/md'

const Hero = () => {
    return (
        <section className="relative bg-white w-full h-screen overflow-hidden rounded-3xl">
            {/* Foreground cut image appears first */}
            <motion.img
                src={images.abouthero2}
                alt="Foreground Cut"
                className="absolute inset-0 w-full h-full object-cover z-[3]"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
            />
            {/* Background image fades in next */}
            <motion.img
                src={images.abouthero1}
                alt="Mountains"
                className="absolute inset-0 w-full h-full object-cover z-[1]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
            />
            {/* 'Explore' text appears last */}
            <motion.h1
                className="absolute font-monteserrat left-2/5 -translate-x-1/2 top-[46%] lg:top-[45%] -translate-y-1/2 text-[160px] text-white z-[2] font-semibold leading-none whitespace-nowrap select-none flex flex-col items-center"
                initial={{ y: 400 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 2 }}
            >
                <span className='w-full text-right'>Discover</span> 
                <span className='w-full text-right text-[120px] font-callheart font-normal'>Your Own</span>
                <span className='w-full text-right'>Path</span>
            </motion.h1>

        </section>
    )
}

export default Hero
