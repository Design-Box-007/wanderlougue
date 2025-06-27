import React from 'react'
import Image from 'next/image'
import { images } from '@/data/assets'
import Button from '../Comman/Button'
import { FaArrowRight } from 'react-icons/fa'
import Divider from '../Comman/Divider'

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
                        loading='lazy'
                    />
                </div>
                <div className="w-full lg:w-[60%] flex flex-col justify-between">
                    <div className='flex flex-row gap-2 w-full'>
                        <div className='h-full'><Image src={images.about2} alt="Travelers celebrating" width={600} height={400} className="h-full w-full object-cover rounded-3xl" loading='lazy' /></div>
                        <div className='h-full'><Image src={images.about3} alt="Travelers celebrating" width={600} height={400} className="h-full w-full object-cover rounded-3xl" loading='lazy' /></div>
                    </div>
                    {/* divider */}
                    <Divider />
                    <div className='space-y-6'>
                        <p className='text-base md:text-lg lg:text-2xl italic'>
                            {"Welcome to Wanderlogue, your go-to guide for planning perfect trips! Whether you're a budget traveler, adventure seeker, or luxury explorer, I share firsthand travel experiences, packing lists, local tips, and detailed itineraries to make your journey hassle-free."}
                        </p>
                        {/* Buttons */}
                        <div className="flex flex-col lg:flex-row gap-4 w-full max-w-2xl justify-start">
                            <Button
                                label="Meet the Author"
                                icon={<FaArrowRight />}
                                variant="primary"
                                className="text-lg px-6 py-3"
                            />
                            <Button
                                label="Read Their Stories"
                                icon={<FaArrowRight />}
                                variant="secondary"
                                className="text-lg px-6 py-3"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About 