"use client";
import React from "react";
import Blog from "./Blog/BlogHero";
import Divider from "../Comman/Divider";
import BlogSection from "./Blog/Categories";

 

const Blogs = () => {
  return (
    <main className="px-4 py-5 lg:px-10 space-y-10">
      <Blog />
      <Divider />
      <BlogSection />
    </main>
  );
};

export default Blogs;
