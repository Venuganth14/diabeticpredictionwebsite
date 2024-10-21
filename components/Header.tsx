// components/Header.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "500",
});

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className={`sticky top-0 bg-blue-500 items-center justify-center text-white p-4 w-screen ${raleway.className} z-10`}>
      <nav className="flex justify-center">
        <div className="flex space-x-4">
          <Link href="#home" className={`hover:text-gray-400 ${pathname === "/" ? "text-yellow-300" : ""}`}>
            Home
          </Link>
          <Link href="#introduction" className={`hover:text-gray-400 ${pathname === "/" ? "text-yellow-300" : ""}`}>
            Introduction
          </Link>
          <Link href="#litreview" className={`hover:text-gray-400 ${pathname === "/" ? "text-yellow-300" : ""}`}>
            Literature Review
          </Link>
          <Link href="#domain" className={`hover:text-gray-400 ${pathname === "/" ? "text-yellow-300" : ""}`}>
            Domain
          </Link>
          <Link href="#milestones" className={`hover:text-gray-400 ${pathname === "/" ? "text-yellow-300" : ""}`}>
            Milestones
          </Link>
          <Link href="#features" className={`hover:text-gray-400 ${pathname === "/" ? "text-yellow-300" : ""}`}>
            Features
          </Link>
          <Link href="#documents" className={`hover:text-gray-400 ${pathname === "/" ? "text-yellow-300" : ""}`}>
            Documents
          </Link>
          <Link href="#tools-and-technologies" className={`hover:text-gray-400 ${pathname === "/" ? "text-yellow-300" : ""}`}>
            Tools & Technologies
          </Link>
          <Link href="#publications" className={`hover:text-gray-400 ${pathname === "/" ? "text-yellow-300" : ""}`}>
            Publication Details
          </Link>
          <Link href="#team" className={`hover:text-gray-400 ${pathname === "/" ? "text-yellow-300" : ""}`}>
            Team
          </Link>
          <Link href="#contact" className={`hover:text-gray-400 ${pathname === "/" ? "text-yellow-300" : ""}`}>
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
