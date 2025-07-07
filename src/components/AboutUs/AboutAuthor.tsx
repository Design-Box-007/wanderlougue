import Image from 'next/image';
import SubHeading from '../Comman/SubHeading';
import { images } from '@/data/assets';
import Divider from '../Comman/Divider';


const AboutAuthor = () => {
    return (
        <section className="py-8 px-4 md:px-12">
            <SubHeading heading={"Who's Behind This Blog?"} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-6">
                {/* Image */}
                <div className="md:col-span-1 overflow-hidden rounded-3xl md:h-[500px]">
                    <Image
                        src={images.author}
                        alt="Author"
                        width={259}
                        height={400}
                        className="rounded-3xl object-cover w-full h-full shadow-lg"
                    />
                </div>

                {/* Text */}
                <div className="md:col-span-2 flex flex-col h-full justify-between">
                    {/* Name and Position */}
                    <div className='space-y-2'>
                        <div className='flex justify-between items-center'>
                            <h3 className="text-4xl font-semibold text-custom-dark-1">Timothy Wilson</h3>
                            <p className="text-xl text-custom-dark-2">Founder & Chairman</p>
                        </div>
                        <Divider />
                        {/* Bio */}
                        <p className="text-2xl text-neutral-700">
                            {"Hi, I'm Timothy Wilson, a full-time traveler, photographer, and storyteller. With over [X] years of travel experience across [X] countries, I share my firsthand experiences, travel itineraries, and practical tips to help you navigate the world like a pro. My goal is to create a space where travelers can find reliable and authentic travel guides that make planning a trip effortless."}
                        </p>
                    </div>

                    {/* Fun Facts */}
                    <div className='space-y-6'>
                        <h3 className="text-3xl font-semibold text-custom-dark-1">Fun Facts About Me:</h3>
                        <ul className="list-disc text-xl list-inside text-custom-dark-2 space-y-6">
                            <li>I have traveled to over 12 countries (and counting!).</li>
                            <li>My most unforgettable travel experience? Watching the Northern Lights in Iceland.</li>
                            <li>My favorite food from around the world? Pad Thai from Thailand.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutAuthor;
