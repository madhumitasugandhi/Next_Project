"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Cinzel } from "next/font/google";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 shadow-md bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Royal Events Logo" width={40} height={40} />
          <span className={`text-2xl font-bold text-yellow-400 ${cinzel.className}`}>
            Royal Events
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <Link href="/about" className="hover:text-yellow-400">About</Link>
          <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
            <Link href="/gallery" className="hover:text-yellow-400">Gallery</Link>
          <Link href="/services" className="hover:text-yellow-400">Services</Link>
        
          
        </div>

        {/* Theme Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-black text-white">
          <Link href="/" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/services" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/gallery" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link href="/about" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
