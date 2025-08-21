"use client";

import Image from "next/image";

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

  return (
    <main className="relative w-full bg-transparent text-black dark:text-white">
      {/* ================= Hero Section ================= */}
      <section className="relative py-24 text-center bg-black">
        <h1 className="text-5xl font-bold text-yellow-500 mb-4">Our Gallery</h1>
        <p className="text-lg">A glimpse of unforgettable moments we’ve created ✨</p>
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
