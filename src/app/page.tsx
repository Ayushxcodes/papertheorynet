"use client";
import CircularGallerySection from "@/components/Landing/CircularGallerySection";
import SimpleHero from "@/components/Landing/HeroSection";
import ServicesCardSwap from "@/components/Landing/PolicySection";
import React from "react";

const Homepage = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-black bg-opacity-90"
      style={{
        backgroundImage: "url('./background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 🔻 Page Content */}
      <SimpleHero />
      <CircularGallerySection />
      <ServicesCardSwap />
    </div>
  );
};

export default Homepage;
