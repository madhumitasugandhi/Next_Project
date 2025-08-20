"use client";

import Image from "next/image";
import Link from "next/link";
import { Cinzel } from "next/font/google";
import { useEffect, useState } from "react";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  const [lights, setLights] = useState([]);

  // Generate random floating lights on client only
  useEffect(() => {
    const newLights = Array.from({ length: 15 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setLights(newLights);
  }, []);

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Home/hero.jpg"
        alt="Royal Events Background"
        fill
        className="object-cover -z-10 brightness-75"
      />

      {/* Floating Royal Lights */}
      {lights.map((light, index) => (
        <div
          key={index}
          style={{
            top: `${light.top}%`,
            left: `${light.left}%`,
            animationDelay: `${light.delay}s`,
          }}
          className="absolute bg-yellow-400 rounded-full w-2 h-2 animate-float"
        />
      ))}

      {/* Overlay Content */}
     <div className="flex flex-col items-center justify-center">
  <Image
    src="/logo.png"
    alt="Royal Events Logo"
    width={140}
    height={80}
    className="mb-4" // thoda niche gap ke liye
  />
  <h1 className={`text-4xl sm:text-6xl font-bold text-yellow-400 drop-shadow-lg ${cinzel.className}`}>
    Royal Events
  </h1>
  <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
    Making your moments <span className="text-yellow-300">unforgettable</span>.
  </p>
  <div className="mt-6 flex justify-center gap-4">
    <Link
  href="/services"
  className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-lg btn-glow"
>
  Explore Services
</Link>
<Link
  href="/contact"
  className="border border-yellow-400 text-white font-semibold px-6 py-3 rounded-lg shadow-lg btn-glow"
>
  Book Now
</Link>

  </div>
</div>

    </section>
  );
}
