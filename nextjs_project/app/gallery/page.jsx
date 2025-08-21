"use client";

import Image from "next/image";
import { Cinzel } from "next/font/google";
import { useEffect, useState } from "react";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Gallery() {
  const images = [
    "/Service/wedding-decor.jpg",
    "/Service/corporate-decor.jpg",
    "/Service/private-party-decor.jpg",
    "/Special-Moment/birthday.webp",
    "/Special-Moment/wedding-anniversary.jpg",
    "/Special-Moment/haldi.webp",
    "/Special-Moment/mehndi.webp",
    "/Special-Moment/namkaran.jpg",
    "/Special-Moment/inauguration.jpeg",
  ];

  const [lights, setLights] = useState([]);
    useEffect(() => {
      const newLights = [...Array(10)].map(() => ({
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 90 + 5}%`,
        animationDelay: `${Math.random() * 4}s`,
      }));
      setLights(newLights);
    }, []);

  return (
    <main className="relative w-full bg-transparent text-black dark:text-white">
      {/* ================= Hero Section ================= */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center text-white">
        <Image
          src="/Home/hero.jpg"
          alt="Services Hero"
          fill
          className="object-cover -z-10 brightness-75"
        />
        <div className="z-10 px-6">
          <h1 className={`text-5xl font-bold text-yellow-400 drop-shadow-lg ${cinzel.className}`}>
            Our Gallery
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            A glimpse of unforgettable moments we’ve created ✨
          </p>
        </div>
        {lights.map((light, i) => (
          <div
            key={i}
            style={{
              top: light.top,
              left: light.left,
              animationDelay: light.animationDelay,
            }}
            className="absolute bg-yellow-400 rounded-full w-2 h-2 animate-float"
          />
        ))}
      </section>

      {/* ================= Gallery Grid ================= */}
      <section className="py-20 px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {images.map((src, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-lg 
              hover:shadow-yellow-500/40 transition-all duration-300"
            >
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                width={400}
                height={300}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 
              group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-lg font-semibold text-yellow-400">Royal Events ✨</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
