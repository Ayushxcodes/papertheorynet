"use client";

import React from "react";
import NavApp from "@/components/Base/Navbar";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: "url('./background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 🔥 Global Navbar */}
      <div className="relative z-20">
        <NavApp />
      </div>

      {/* 🔻 Page Content */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
