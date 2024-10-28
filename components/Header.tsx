// components/Header.tsx
"use client";

import React, { useState, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Raleway } from "next/font/google";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // For burger icon

const raleway = Raleway({
  subsets: ["latin"],
  weight: "500",
});

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`sticky top-0 bg-blue-500 flex items-center justify-between text-white p-4 w-full ${raleway.className} z-10`}
    >
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center w-full">
        <div className="flex space-x-4">
          <NavLink href="#home" pathname={pathname}>
            Home
          </NavLink>
          <NavLink href="#introduction" pathname={pathname}>
            Introduction
          </NavLink>
          <NavLink href="#litreview" pathname={pathname}>
            Literature Review
          </NavLink>
          <NavLink href="#domain" pathname={pathname}>
            Domain
          </NavLink>
          <NavLink href="#milestones" pathname={pathname}>
            Milestones
          </NavLink>
          <NavLink href="#features" pathname={pathname}>
            Features
          </NavLink>
          <NavLink href="#documents" pathname={pathname}>
            Documents
          </NavLink>
          <NavLink href="#tools-and-technologies" pathname={pathname}>
            Tools & Technologies
          </NavLink>
          <NavLink href="#publications" pathname={pathname}>
            Publication Details
          </NavLink>
          <NavLink href="#team" pathname={pathname}>
            Team
          </NavLink>
          <NavLink href="#contact" pathname={pathname}>
            Contact Us
          </NavLink>
        </div>
      </nav>

      {/* Burger menu for mobile */}
      <div className="md:hidden flex justify-end w-full" onClick={toggleMenu}>
        {isOpen ? (
          <AiOutlineClose size={30} className="text-white" />
        ) : (
          <AiOutlineMenu size={30} className="text-white" />
        )}
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-blue-500 flex flex-col items-center space-y-4 p-4">
          <NavLink href="#home" pathname={pathname}>
            Home
          </NavLink>
          <NavLink href="#introduction" pathname={pathname}>
            Introduction
          </NavLink>
          <NavLink href="#litreview" pathname={pathname}>
            Literature Review
          </NavLink>
          <NavLink href="#domain" pathname={pathname}>
            Domain
          </NavLink>
          <NavLink href="#milestones" pathname={pathname}>
            Milestones
          </NavLink>
          <NavLink href="#features" pathname={pathname}>
            Features
          </NavLink>
          <NavLink href="#documents" pathname={pathname}>
            Documents
          </NavLink>
          <NavLink href="#tools-and-technologies" pathname={pathname}>
            Tools & Technologies
          </NavLink>
          <NavLink href="#publications" pathname={pathname}>
            Publication Details
          </NavLink>
          <NavLink href="#team" pathname={pathname}>
            Team
          </NavLink>
          <NavLink href="#contact" pathname={pathname}>
            Contact Us
          </NavLink>
        </nav>
      )}
    </header>
  );
};

// A reusable NavLink component to handle active state and links
interface NavLinkProps {
  href: string;
  pathname: string;
  children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, pathname, children }) => {
  const isActive = pathname === href;
  return (
    <Link href={href} className={`hover:text-gray-400 ${isActive ? "text-yellow-300" : ""}`}>
      {children}
    </Link>
  );
};

export default Header;
