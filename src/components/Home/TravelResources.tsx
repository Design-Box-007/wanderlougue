import React from 'react'
import SubHeading from '../Comman/SubHeading'
import { images } from '@/data/assets'
import Image from 'next/image'
import { FaSuitcase, FaHotel, FaUtensils, FaHiking, FaArrowRight } from 'react-icons/fa'

const resources = [
    {
        title: 'Packing Lists',
        description: 'What to pack for different climates & activities.',
        icon: <FaSuitcase />,
    },
    {
        title: 'Hotel Reviews',
        description: 'Best accommodations for budget & luxury travelers.',
        icon: <FaHotel />,
    },
    {
        title: 'Local Food Guide',
        description: 'Must-try dishes & restaurant recommendations.',
        icon: <FaUtensils />,
    },
    {
        title: 'Hiking & Adventure',
        description: 'Best hiking trails & safety tips.',
        icon: <FaHiking />,
    },
]




const TravelResources = () => {
    return (
        <section className='space-y-[60px]'>
            <SubHeading heading="Essential Travel Resources" />
            <div className='space-y-[56px]'>
                <div className='flex flex-col md:flex-row justify-between gap-4 w-full lg:h-[516px]'>
                    <div className='rounded-lg overflow-hidden relative h-full w-full lg:w-[40%]'>
                        <Image src={images.essentials1} alt="Travel Resources" className='absolute inset-0 w-full h-full z-10' width={544} height={516} />
                        <p className='text-base md:text-md lg:text-lg relative pl-2 pb-3 text-white'>
                            Photography tips
                        </p>
                    </div>
                    <div className='rounded-lg overflow-hidden relative h-full w-full lg:w-[35%]'>
                        <Image src={images.essentials2} alt="Travel Resources" className='absolute inset-0 w-full h-full z-10' width={432} height={516} />
                        <p className='text-base md:text-md lg:text-lg relative pl-2 pb-3 text-white'>
                            Backpack hacks
                        </p>
                    </div>
                    <div className='rounded-lg overflow-hidden relative h-full w-full lg:w-[25%]'>
                        <Image src={images.essentials3} alt="Travel Resources" className='absolute inset-0 w-full h-full z-10' width={321} height={516} />
                        <p className='text-base md:text-md lg:text-lg relative pl-2 pb-3 text-white'>
                            Tent Essentials
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    {resources.map((resource, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-3 items-center gap-6 py-6 border-b border-black"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-2xl text-black">{resource.icon}</span>
                                <h3 className="text-xl font-semibold text-black whitespace-nowrap">
                                    {resource.title}
                                </h3>
                            </div>

                            {/* Description (middle column) */}
                            <p className="text-base text-black">{resource.description}</p>
                            {/* Icon + Title (left column) */}

                            {/* Arrow (right column) */}
                            <FaArrowRight className="text-black -rotate-45 justify-self-end" />
                        </div>
                    ))}
                </div>
            </div>


        </section>
    )
}
export default TravelResources 