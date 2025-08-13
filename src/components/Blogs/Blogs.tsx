"use client";
import React from "react";
import Blog from "./Blog/BlogHero";
import Divider from "../Comman/Divider";
import BlogSection from "./Blog/Categories";
import dynamic from "next/dynamic";

const ClientOnlyMap = dynamic(() => import("@/components/Comman/Map"), {
  ssr: false,
});

const Blogs = () => {
  return (
    <main className="px-4 py-5 lg:px-10 space-y-10">
      <Blog />
      <Divider />
      <BlogSection />
      <ClientOnlyMap/>
    </main>
  );
};

export default Blogs;
