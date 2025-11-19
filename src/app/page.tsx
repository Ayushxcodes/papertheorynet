'use client';
import CircularGallerySection from "@/components/Landing/CircularGallerySection";
import SimpleHero from "@/components/Landing/HeroSection";
import ServicesCardSwap from "@/components/Landing/PolicySection";
import Plasma from "@/components/Plasma";
import React from "react";

const Homepage = () => {
  return (
    <div className="relative w-full h-full bg-black opacity-90">
      {/* 🔥 Full-Page Plasma Background */}
      <div className="fixed inset-0 -z-10">
        <Plasma
          color="#6A4C93"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>
      

      {/* 🔻 Page Content */}
      <SimpleHero />
      <CircularGallerySection/>
      <ServicesCardSwap/>
  
    </div>
  );
};

export default Homepage;
