import React from "react";
import GridMotion from "@/components/GridMotion";

const paragraphChunks = [
  "Gen Z is not just the audience of the future — they’re the architects of the present.",
  "At Paper Theory’s Policy Practice, we actively engage young minds through research fellowships.",
  "We also run digital campaigns that empower participation in governance models.",
  "Young minds are encouraged to question, co-create, and contribute.",
  "Gen Z demands authenticity, transparency, and purpose.",
  "We shape systems that reflect those values in every project.",
  "From online civic challenges to youth-driven election initiatives, we build bridges.",
  "Next-gen citizens are given tools to make real-world impact.",
  "The future of governance deserves Gen Z’s voice and participation.",
  "We ensure that their ideas and feedback are part of every solution.",
];

const GridSection: React.FC = () => {
  const totalRows = 4;
  const cardsPerRow = 7;

  // Build items for GridMotion (desktop only)
  const items: React.ReactNode[] = [];

  // Top row placeholders
  for (let i = 0; i < cardsPerRow; i++) {
    items.push(
      <div
        key={`top-${i}`}
        style={{
          minHeight: "100px",
          borderRadius: "12px",
          background: "rgba(255,255,255,0.05)",
        }}
      />
    );
  }

  // Middle 2 rows with paragraph chunks
  const middleItems = paragraphChunks.map((text, index) => (
    <div
      key={`mid-${index}`}
      className="hidden sm:flex" // hidden on mobile
      style={{
        padding: "1rem",
        borderRadius: "12px",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(8px) saturate(1.2)",
        color: "white",
        fontWeight: 500,
        textAlign: "center",
        minHeight: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {text}
    </div>
  ));

  const middleRow1 = middleItems.slice(0, cardsPerRow);
  while (middleRow1.length < cardsPerRow)
    middleRow1.push(<div key={`m1-empty-${middleRow1.length}`} />);
  const middleRow2 = middleItems.slice(cardsPerRow, cardsPerRow * 2);
  while (middleRow2.length < cardsPerRow)
    middleRow2.push(<div key={`m2-empty-${middleRow2.length}`} />);

  items.push(...middleRow1, ...middleRow2);

  // Bottom row placeholders
  for (let i = 0; i < cardsPerRow; i++) {
    items.push(
      <div
        key={`bottom-${i}`}
        style={{
          minHeight: "100px",
          borderRadius: "12px",
          background: "rgba(255,255,255,0.05)",
        }}
      />
    );
  }

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        padding: "6rem 1rem 4rem 1rem",
        color: "white",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: 700,
          marginBottom: "3rem",
        }}
      >
        Why GenZ Matters?
      </h2>

      {/* Desktop GridMotion */}
      <div
        className="hidden sm:block"
        style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}
      >
        <GridMotion items={items} />
      </div>

      {/* Mobile stacked text + image */}
      <div className="sm:hidden flex flex-col items-center gap-6">
        {paragraphChunks.map((text, idx) => (
          <p
            key={`mobile-${idx}`}
            style={{
              fontSize: "1rem",
              fontWeight: 500,
              textAlign: "center",
              color: "white",
            }}
          >
            {text}
          </p>
        ))}

        {/* Example image */}
        <img
          src="https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop"
          alt="Gen Z"
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "12px",
            marginTop: "2rem",
          }}
        />
      </div>
    </section>
  );
};

export default GridSection;
