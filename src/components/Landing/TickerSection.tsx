import { useState } from "react";
import ScrollVelocity from "@/components/ScrollVelocity";

export default function Hero() {
  const [velocity, setVelocity] = useState(100); // default value

  return (
    <ScrollVelocity
      texts={["Paper Theory", "Paper Theory"]}
      velocity={velocity}
      className="custom-scroll-text"
    />
  );
}
