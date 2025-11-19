import React, { useState, useRef, useEffect } from "react";

const SyncScrollPolicy = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const policyPoints = [
    {
      title: "Data Privacy Protection",
      description:
        "We prioritize the security and confidentiality of your personal information with industry-leading encryption standards.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    },
    {
      title: "Transparent Operations",
      description:
        "Our commitment to transparency ensures you always know how your data is being used and protected.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    },
    {
      title: "User Control & Rights",
      description:
        "You maintain full control over your information with the ability to access, modify, or delete your data at any time.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    },
    {
      title: "Secure Infrastructure",
      description:
        "Our systems are built on enterprise-grade security infrastructure with regular audits and compliance checks.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    },
    {
      title: "Compliance Standards",
      description:
        "We adhere to international data protection regulations including GDPR, CCPA, and other regional standards.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
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
            Our Policies
          </h1>
          <p className="text-md md:text-lg text-gray-400 mb-8 md:mb-12">
            Understanding our commitment to your security and privacy
          </p>

          {policyPoints.map((point, index) => (
            <div
              key={index}
              className={`p-4 md:p-6 rounded-lg border-2 transition-all duration-300 mb-6 md:mb-12 flex items-center min-h-[200px] md:h-[calc(100vh-200px)] ${
                activeIndex === index
                  ? "border-purple-500 shadow-lg"
                  : "border-gray-700"
              }`}
            >
              <div className="flex items-start w-full">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold mr-4">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-100 mb-2 md:mb-3">
                    {point.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
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
