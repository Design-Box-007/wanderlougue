import React from 'react'
import Hero from './Hero'
import About from './About'
import TrendingAdventures from './TrendingAdventures'
import PopularDestinations from './PopularDestinations'
import TravelResources from './TravelResources'
import Map from './Map'
import Documents from './Documents'
import CTA from '../Comman/CTA'
import Divider from '../Comman/Divider'

const Home = () => {
    return (
        <main className='px-4 py-5 lg:px-10 space-y-10'>
            <Hero />
            <Divider isIcon />
            <About />
            <TrendingAdventures />
            <PopularDestinations />
            <TravelResources />
            <Map />
            <Documents />
            <CTA />
        </main>
    )
}

export default Home