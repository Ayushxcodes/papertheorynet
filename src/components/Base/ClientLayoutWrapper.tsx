"use client";

import React from "react";
import NavApp from "@/components/Base/Navbar";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* 🔥 Global Plasma Background */}
      <div className="fixed inset-0 -z-10">
        
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
