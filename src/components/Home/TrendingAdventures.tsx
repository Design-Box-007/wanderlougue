import React from 'react'
import SubHeading from '../Comman/SubHeading'
import { images } from '@/data/assets'
import Image from 'next/image'
const TrendingAdventures = () => {
    return (
        <section className='space-y-10'>
            <SubHeading heading="Trending Hikes " />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 h-[90vh]'>
                <div className='rounded-3xl overflow-hidden flex justify-start items-end lg:row-span-2 relative'>
                    <Image src={images.trending1} alt="Trending Adventure" width={600} height={400} className='w-full h-full absolute inset-0 z-10 object-cover rounded-3xl brightness-75' />
                    <p className="text-3xl relative z-20 text-white pl-3 pb-1">Peak</p>
                </div>
                <div className='rounded-3xl overflow-hidden flex justify-start items-end relative'>
                    <Image src={images.trending2} alt="Trending Adventure" width={600} height={400} className='w-full h-full absolute inset-0 z-10 object-cover rounded-3xl brightness-75' />
                    <p className="text-3xl relative z-20 text-white pl-3 pb-1">Top hill</p>
                </div>
                <div className='rounded-3xl overflow-hidden flex justify-start items-end relative'>
                    <Image src={images.trending3} alt="Trending Adventure" width={600} height={400} className='w-full h-full absolute inset-0 z-10 object-cover rounded-3xl brightness-75' />
                    <p className="text-3xl relative z-20 text-white pl-3 pb-1">Discover</p>
                </div>
                <div className='rounded-3xl overflow-hidden flex justify-start items-end lg:col-span-2 relative'>
                    <Image src={images.trending4} alt="Trending Adventure" width={600} height={400} className='w-full h-full absolute inset-0 z-10 object-cover rounded-3xl brightness-75' />
                    <p className="text-3xl relative z-20 text-white pl-3 pb-1">Mountains</p>
                </div>
            </div>
        </section>
    )
}
export default TrendingAdventures 