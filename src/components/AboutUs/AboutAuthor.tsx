import Image from "next/image";
import SubHeading from "../Comman/SubHeading";
import { images } from "@/data/assets";
import Divider from "../Comman/Divider";

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
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-4xl font-semibold text-custom-dark-1">
                Acshaya Arun
              </h3>
              <p className="text-xl text-custom-dark-2">Founder & Chairman</p>
            </div>
            <Divider />
            {/* Bio */}
            <p className="text-2xl text-neutral-700 font-bold">
              Hi, I{"'"}m Acshaya Arun – traveler, explorer, and mom on a mission to
              make every journey count.
            </p>

            <p className="text-2xl text-neutral-700">
              My travel story began in 2017, when I met a fellow travel
              enthusiast. Since then, life has been a beautiful adventure — from
              spontaneous road trips to planned hikes across mountains and
              beaches, and now traveling with our kids in tow. For us, taking a
              break doesn’t mean staying still — it means heading out to the
              mountains, chasing sunrises, hiking trails, diving into new
              adventures, and creating meaningful memories as a family. Travel
              has taught us that you don’t need a luxury budget to explore the
              world — just thoughtful planning, curiosity, and a love for
              experiences over things.
            </p>

            <p className="text-2xl text-neutral-700">
              We’ve learned how to travel smart, travel light, and travel on a
              budget, all while making space for savings and what matters most —
              our family.
            </p>
          </div>

          {/* Fun Facts */}
          <div className="space-y-6 mt-6">
            <h3 className="text-3xl font-semibold text-custom-dark-1">
              Fun Facts About Me:
            </h3>
            <ul className="list-disc list-outside text-xl text-custom-dark-2 space-y-6 pl-6">
              <li >
                I’m a Business Analyst and the proud founder of Pixel Panda –
                where creativity meets data-driven strategy.
              </li>
              <li>
                I’ve fallen in love with hiking and diving, and never say no to
                a new trail or a deep-sea dive.
              </li>
              <li>
                Cooking while I travel is my newest (and most delicious)
                addiction — there{"'"}s nothing like making a local dish in a new
                country.
              </li>
              <li>
                I{"'"}m passionate about showing that traveling with kids can be
                enriching, fun, and totally doable.
              </li>
              <li>
                Join me on Wanderlogue as I share honest travel guides, budget
                itineraries, and offbeat experiences to help you plan your next
                great escape — no travel agent required.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
