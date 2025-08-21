"use client";

import Image from "next/image";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function About() {
  return (
    <main className="relative w-full bg-white/80 dark:bg-black/80 text-black dark:text-white">

      
      {/* ================= Hero / Header Section ================= */}
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center bg-yellow-400 dark:bg-black">
        <Image
          src="/About/about.jpg"
          alt="About Royal Events"
          fill
          className="object-cover -z-10 brightness-75"
        />
        <h1 className={`text-4xl sm:text-6xl font-bold text-black dark:text-yellow-400 ${cinzel.className} drop-shadow-lg`}>
          About Royal Events
        </h1>
      </section>

      {/* ================= Owner & Story Section ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">Meet the Founder</h2>
          <p className="mb-4">
            Royal Events was founded by <span className="font-semibold">Chirag S. Annadate</span> on <span className="font-semibold">1st July 2022</span>. Since then, we have been creating unforgettable memories and magical experiences for our clients.
          </p>
          <p className="mb-4">
            We specialize in a wide range of events including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Baby-Shower </li>
            <li>Haldi </li>
            <li>Mehndi </li>
            <li>Namkaran </li>
            <li>Birthday </li>
            <li>Anniversary </li>
            <li>Inauguration </li>
          </ul>
          <p className="mt-6 font-semibold">
            📲 Contact: <span className="text-yellow-400">9011787193</span>
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/About/Founder.png" // Organizer photo
            alt="Chirag S. Annadate"
            width={350}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* ================= Why Choose Us Section ================= */}
      <section className="py-20 px-6 bg-yellow-50 dark:bg-black text-black dark:text-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Why Choose Royal Events?</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">Expert Planning</h3>
            <p>Every event is meticulously planned by experienced professionals.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">Personalized Touch</h3>
            <p>We tailor every detail to match your vision and style.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">Memorable Experiences</h3>
            <p>We create moments that you and your guests will cherish forever.</p>
          </div>
        </div>
      </section>

      {/* ================= Call to Action ================= */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">Ready to Plan Your Event?</h2>
        <p className="mb-6">Reach out to us today and let's make your special day unforgettable!</p>
        <a
          href="tel:9011787193"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition hover:shadow-[0_0_20px_rgba(255,215,0,0.8)]"
        >
          Call Now
        </a>
      </section>
      
    </main>
  );
}
