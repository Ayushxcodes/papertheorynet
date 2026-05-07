"use client";

import React, { useState, useRef, useEffect } from "react";

const SyncScrollPolicy = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const policyPoints = [
    {
      title: "Policy Research & Advisory",
      description:
        "We decode policy challenges through rigorous research and stakeholder mapping, helping governments and institutions design programs that are efficient, inclusive, and future-ready. Policy with purpose. Governance with clarity.",
      subpoints: [
        "Digital Infrastructure",
        "Media and Entertainment",
        "Cyber Security",
        "Clean Energy",
        "Rural Development",
        "Smart Village Solution",
      ],
      image:
        "https://images.unsplash.com/photo-1581091870621-3d8c79d11c16?w=800&h=600&fit=crop",
    },
    {
      title: "Election & Campaign Management",
      description:
        "From ground-level data to narrative strategy, we design end-to-end election campaigns that resonate with people — not just voters. Emotion meets precision. Strategy meets trust.",
      subpoints: [
        "Candidate Profiling",
        "Surveys",
        "Events",
        "Audio Visual Communication",
        "Pain Point Analysis and Delivery",
        "Digital Media Amplification",
        "Public and Media Relation",
      ],
      image:
        "https://images.unsplash.com/photo-1598300055533-b15b0f2e7c63?w=800&h=600&fit=crop",
    },
    {
      title: "Data Intelligence & Analytics",
      description:
        "We use behavioral data, survey insights, and sentiment analysis to build predictive models for policy outcomes, voter behavior, and campaign optimization. Numbers with a heartbeat.",
      subpoints: [],
      image:
        "https://images.unsplash.com/photo-1564866657312-9f7ec1b4f14b?w=800&h=600&fit=crop",
    },
    {
      title: "Government Project Management",
      description:
        "We partner with ministries, departments, and agencies to manage and execute projects that deliver tangible results. Our approach ensures accountability, agility, and alignment with long-term goals. Delivering governance that works.",
      subpoints: [],
      image:
        "https://images.unsplash.com/photo-1581093588401-2b89f3cf1d39?w=800&h=600&fit=crop",
    },
    {
      title: "Strategic Communication Design",
      description:
        "We craft narratives that make governance relatable. From citizen campaigns to awareness films, our creative strategies simplify complexity and connect emotionally. Because good governance deserves good storytelling.",
      subpoints: [],
      image:
        "https://images.unsplash.com/photo-1591696205602-17b6f2d9ff10?w=800&h=600&fit=crop",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (leftRef.current) {
        const scrollTop = leftRef.current.scrollTop;
        const itemHeight = leftRef.current.scrollHeight / policyPoints.length;
        const newIndex = Math.min(
          Math.floor(scrollTop / itemHeight),
          policyPoints.length - 1
        );
        setActiveIndex(newIndex);

        if (rightRef.current) {
          rightRef.current.scrollTop = scrollTop;
        }
      }
    };

    const leftDiv = leftRef.current;
    if (leftDiv) {
      leftDiv.addEventListener("scroll", handleScroll);
      return () => leftDiv.removeEventListener("scroll", handleScroll);
    }
  }, [policyPoints.length]);

  return (
    <div className="w-full flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Left Side - Text Content */}
      <div
        ref={leftRef}
        className="w-full md:w-1/2 h-1/2 md:h-full overflow-y-scroll scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        <div className="p-6 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-md md:text-lg text-gray-400 mb-8 md:mb-12">
            Empowering governance, campaigns, and data-driven decisions.
          </p>

          {policyPoints.map((point, index) => (
            <div
              key={index}
              className={`p-4 md:p-6 rounded-lg border-2 transition-all duration-300 mb-6 md:mb-12 flex flex-col min-h-[200px] md:h-[calc(100vh-200px)] ${
                activeIndex === index
                  ? "border-purple-500 shadow-lg"
                  : "border-gray-700"
              }`}
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-100 mb-2 md:mb-3">
                {point.title}
              </h2>
              <p className="text-gray-300 leading-relaxed mb-2">
                {point.description}
              </p>
              {point.subpoints.length > 0 && (
                <ul className="list-disc list-inside text-gray-400 mt-2">
                  {point.subpoints.map((sub, i) => (
                    <li key={i}>{sub}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Images */}
      <div
        ref={rightRef}
        className="w-full md:w-1/2 h-1/2 md:h-full overflow-y-scroll scroll-smooth pointer-events-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="p-6 md:p-12 pt-32">
          {policyPoints.map((point, index) => (
            <div
              key={index}
              className="relative mb-6 md:mb-12 min-h-[200px] md:h-[calc(100vh-200px)]"
            >
              <img
                src={point.image}
                alt={point.title}
                className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
                  activeIndex === index ? "opacity-100" : "opacity-40"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 md:p-8 rounded-lg">
                <h3
                  className={`text-white text-2xl md:text-3xl font-bold transition-opacity duration-500 ${
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {point.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SyncScrollPolicy;
