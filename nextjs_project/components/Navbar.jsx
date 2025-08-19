"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav
      className="w-full px-6 py-4 flex items-center justify-between shadow-md"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <h1 className="text-xl font-bold">MyWebsite</h1>
      <ul className="flex gap-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}
