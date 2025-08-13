"use client";

import React from "react";
import Hero from "./Hero";
import About from "./About";
import TrendingAdventures from "./TrendingAdventures";
import PopularDestinations from "./PopularDestinations";
import TravelResources from "./TravelResources";
import Divider from "../Comman/Divider";
import dynamic from "next/dynamic";

const ClientOnlyMap = dynamic(() => import("@/components/Comman/Map"), {
  ssr: false,
});

const Home = () => {
  return (
    <main className="px-4 py-5 lg:px-10 space-y-10">
      <Hero />
      <Divider isIcon />
      <About />
      <TrendingAdventures />
      <PopularDestinations />
      <TravelResources />
      <ClientOnlyMap />
    </main>
  );
};

export default Home;
