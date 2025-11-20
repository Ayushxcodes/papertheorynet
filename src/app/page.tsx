"use client";
import CircularGallerySection from "@/components/Landing/CircularGallerySection";
import SimpleHero from "@/components/Landing/HeroSection";
import ServicesCardSwap from "@/components/Landing/PolicySection";
import Hero from "@/components/Landing/TickerSection";
import React from "react";

const Homepage = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-white bg-opacity-90"
      style={{
        backgroundImage: "url('./vector.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 🔻 Page Content */}
      <SimpleHero />
      <CircularGallerySection />
      <ServicesCardSwap />
      <Hero/>
    </div>
  );
};

export default Homepage;
