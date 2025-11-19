"use client";

import React from "react";
import Plasma from "@/components/Plasma";
import NavApp from "@/components/Base/Navbar";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {/* 🔥 Global Plasma Background */}
      <div className="fixed inset-0 -z-10">
        <Plasma
          color="#6A4C93"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>

      {/* 🔥 Global Navbar */}
      <div className="relative z-20">
        <NavApp />
      </div>

      {/* 🔻 Page Content */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
