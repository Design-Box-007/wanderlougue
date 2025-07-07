'use client'
import React from 'react'
import Hero from './Hero'
import FoundersNote from './FoundersNote'
import Divider from '../Comman/Divider'
import AboutAuthor from './AboutAuthor'
import Features from './Features'

const AboutUs = () => {
  return (
    <main className='px-4 py-5 lg:px-10 space-y-10'>
      <Hero />
      <FoundersNote/>
      <Divider/>
      <AboutAuthor/>
      <Features/>
    </main>
  )
}

export default AboutUs
