'use client';
import CircularGallerySection from "@/components/Landing/CircularGallerySection";
import SimpleHero from "@/components/Landing/HeroSection";
import ServicesCardSwap from "@/components/Landing/PolicySection";
import React from "react";

const Homepage = () => {
  return (
    <div className="relative w-full h-full bg-black opacity-90">
      {/* 🔥 Full-Page Plasma Background */}
      <div className="fixed inset-0 -z-10">
        <img src='./background.jpg' />
      </div>

      {/* 🔻 Page Content */}
      <SimpleHero />
      <CircularGallerySection />
      <ServicesCardSwap />
    </div>
  );
};

export default Homepage;
