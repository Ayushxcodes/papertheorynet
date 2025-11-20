"use client";
import CircularGallerySection from "@/components/Landing/CircularGallerySection";
import SimpleHero from "@/components/Landing/HeroSection";
import ServicesCardSwap from "@/components/Landing/PolicySection";
import Hero from "@/components/Landing/TickerSection";
import ScrollSection from "@/components/Landing/WhyGenzMatterSection";
import React from "react";

const Homepage = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-opacity-90"
      style={{
        backgroundImage: "url('./vector.jpg')",
        backgroundSize: "cover", // <-- change here
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 🔻 Page Content */}
      <SimpleHero />
      <CircularGallerySection />
      <ServicesCardSwap />
      <Hero />
      <ScrollSection />
    </div>
  );
};

export default Homepage;
