"use client";

import React from "react";
import InfiniteMenu from "@/components/InfiniteMenu";

const galleryItems = [
  {
    image: "https://picsum.photos/300/300?grayscale",
    link: "https://google.com/",
    title: "Item 1",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/400/400?grayscale",
    link: "https://google.com/",
    title: "Item 2",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/500/500?grayscale",
    link: "https://google.com/",
    title: "Item 3",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/600/600?grayscale",
    link: "https://google.com/",
    title: "Item 4",
    description: "This is pretty cool, right?",
  },
];

const GalleryPage: React.FC = () => {
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "4rem 1rem",
        boxSizing: "border-box",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: 700,
          marginBottom: "3rem",
        }}
      >
        Gallery
      </h1>

      <div
        style={{
          height: "600px",
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <InfiniteMenu items={galleryItems} />
      </div>
    </main>
  );
};

export default GalleryPage;
