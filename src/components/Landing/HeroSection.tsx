"use client";

import TextType from "@/components/TextType";
import SplitText from "@/components/SplitText";
import CircularText from "@/components/CircularText";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
    <section className="relative w-full h-screen flex items-center justify-between px-10 text-white overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="max-w-xl relative z-10 flex flex-col gap-10">
        <div>
          <SplitText
            text="Reimagining Governance. Engineering Impact."
            className="text-5xl font-bold leading-tight"
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

        <div className="text-lg text-gray-300 max-w-lg">
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
      <div className="hidden md:flex w-1/2 h-full relative justify-center items-center">
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
                opacity: isTop ? 1 : 0.6, // slightly faded for background images
              }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            />
          );
        })}
      </div>
    </section>
  );
}
