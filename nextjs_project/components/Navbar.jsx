// components/Navbar.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function Navbar() {
  return (
   <nav className="w-full sticky top-0 z-50 shadow-md transition-colors duration-300"
     style={{ backgroundColor: "var(--nav-bg)" }}>

  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo + Brand */}
    <div className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Royal Events Logo"
        width={40}
        height={40}
      />
      <span  className={`text-2xl font-bold text-yellow-600 dark:text-yellow-400 ${cinzel.className}`}>
        Royal Events
      </span>
    </div>

    {/* Nav Links */}
    <div className="hidden md:flex gap-6">
      <Link href="/" className="hover:text-yellow-600 dark:hover:text-yellow-400">Home</Link>
      <Link href="/services" className="hover:text-yellow-600 dark:hover:text-yellow-400">Services</Link>
      <Link href="/gallery" className="hover:text-yellow-600 dark:hover:text-yellow-400">Gallery</Link>
      <Link href="/about" className="hover:text-yellow-600 dark:hover:text-yellow-400">About</Link>
      <Link href="/contact" className="hover:text-yellow-600 dark:hover:text-yellow-400">Contact</Link>
    </div>

    {/* Theme Toggle */}
    <ThemeToggle />
  </div>
</nav>

  );
}
