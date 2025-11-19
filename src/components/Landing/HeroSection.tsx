"use client";

import TextType from "@/components/TextType";
import SplitText from "@/components/SplitText";
import CircularText from "@/components/CircularText";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import TrueFocus from "@/components/TrueFocus";

// Precompute offsets outside the component to avoid impure functions in render
const IMAGES = [
  "/thumbnail-1-0.png",
  "/thumbnail-1-1.png",
  "/thumbnail-1-2.png",
  "/thumbnail-1-3.png",
  "/thumbnail-1-4.png",
];

const OFFSETS = IMAGES.map(() => ({
  x: Math.random() * 80 - 40, // -40 to 40px
  y: Math.random() * 80 - 40, // -40 to 40px
  rotate: Math.random() * 15 - 7.5, // -7.5 to 7.5 deg
}));

export default function HeroSection() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle top image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen md:h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-10 text-white overflow-hidden pt-20 md:pt-0">
      {/* LEFT CONTENT */}
      <div className="max-w-xl relative z-10 flex flex-col gap-8 md:gap-10">
        <div>
          <SplitText
            text="Reimagining Governance. Engineering Impact."
            className="text-4xl md:text-5xl font-bold leading-tight"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        <div className="text-base md:text-lg text-gray-300 max-w-lg">
          <TextType
            text={[
              "We are a new-age policy, campaign, and strategy practice that blends human understanding with data intelligence to design change that matters.",
            ]}
            typingSpeed={50}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#learn-more"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 text-center"
          >
            Learn More
          </a>
          <a
            href="#get-started"
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-black transition-all duration-300 text-center"
          >
            Get Started
          </a>
        </div>

        <div className="relative mt-5">
          <div className="absolute left-[-120px] top-0 opacity-40 scale-125">
            <CircularText
              text="PAPER*THEORY*NET*"
              onHover="speedUp"
              spinDuration={20}
              className="text-white"
            />
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE STACK */}
      <div className="hidden md:flex left-10 w-1/2 h-full relative justify-center items-center mt-10 md:mt-0">
        {IMAGES.map((img, index) => {
          const { x, y, rotate } = OFFSETS[index];
          const isTop = index === currentIndex;

          return (
            <motion.img
              key={img}
              src={img}
              alt={`hero-stack-${index}`}
              className="absolute w-[360px] h-[360px] rounded-xl object-cover shadow-[0_0_20px_rgba(255,0,150,0.5)] border-2 border-pink-400"
              style={{ zIndex: isTop ? 10 : index }}
              animate={{
                scale: isTop ? 1 : 0.9,
                x,
                y,
                rotate,
                opacity: isTop ? 1 : 0.6,
              }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            />
          );
        })}
      </div>

      {/* TRUE FOCUS COMPONENT AT BOTTOM */}
      <div className="w-full flex justify-center mt-16 md:mt-20">
        <TrueFocus
          sentence="Paper Theory"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>
    </section>
  );
}
