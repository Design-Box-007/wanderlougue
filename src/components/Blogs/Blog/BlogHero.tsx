'use client'

import React from 'react'
import { images } from '@/data/assets'
import { motion } from 'framer-motion'

const Blog = () => {
    return (
        <section className="relative bg-white w-full h-screen overflow-hidden rounded-3xl">
            {/* Foreground cut image appears first */}
            <motion.img
                src={images.blogHero2}
                alt="Foreground Cut"
                className="absolute inset-0 w-full h-full object-cover z-[3]"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
            />
            {/* Background image fades in next */}
            <motion.img
                src={images.blogHero1}
                alt="Mountains"
                className="absolute inset-0 w-full h-full object-cover z-[1]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
            />
            {/* 'Explore' text appears last */}
            <motion.h1
                className="absolute left-1/2 -translate-x-1/2 top-[43%] lg:top-[40%] -translate-y-1/2 text-[22.1vw]  text-white z-[2] leading-none whitespace-nowrap select-none"
                initial={{ y: 700 }}
                animate={{ y: 200 }}
                transition={{ duration: 1, delay: 2 }}
            >
                Traverse
            </motion.h1>
           
        </section>
    )
}

export default Blog
