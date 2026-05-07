"use client";

import CircularGallery from "@/components/CircularGallery";

export default function CircularGallerySection() {
  return (
    <section className="relative w-full py-20 flex justify-center items-center overflow-hidden">
      <div className="relative w-full h-[60vh] sm:h-[500px] md:h-[600px]">
        <CircularGallery
          bend={3} // controls curvature
          textColor="#ffffff"
          borderRadius={0.05} // slight rounding
          scrollEase={0.02} // smoothness of scroll
        />
      </div>
    </section>
  );
}
