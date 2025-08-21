"use client";

import Image from "next/image";
import Link from "next/link";
import { Cinzel } from "next/font/google";
import ContactForm from "@/components/ContactForm";
import { useState, useEffect } from "react";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
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
    <main className="relative w-full">
      {/* ================= Hero Section ================= */}
      <section className="relative w-full h-[90vh] flex flex-col items-center justify-center text-center text-white">
        <Image
          src="/Home/hero.jpg"
          alt="Royal Events Background"
          fill
          className="object-cover -z-10 brightness-75"
        />

        {/* Floating Lights */}
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

        <div className="px-6 flex flex-col items-center gap-4">
          <Image src="/logo.png" alt="Royal Events Logo" width={140} height={80} />
          <h1 className={`text-4xl sm:text-6xl font-bold text-yellow-400 drop-shadow-lg ${cinzel.className}`}>
            Royal Events
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
            Making your moments <span className="text-yellow-300">unforgettable</span>.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition hover:shadow-[0_0_20px_rgba(255,255,0,0.8)]"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="border border-yellow-400 hover:bg-yellow-400 hover:text-black text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition hover:shadow-[0_0_20px_rgba(255,255,0,0.8)]"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* ================= Services Section ================= */}
      <section className="py-20 px-6 bg-white/0 dark:bg-black/60 text-black dark:text-white relative z-10">

        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">
          Our Premium Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Wedding Planning 💍",
              desc: "From decor to management, we make your wedding moments unforgettable.",
              img: "/Service/wedding-decor.jpg",
            },
            {
              title: "Corporate Events 🏢",
              desc: "Seamless professional event execution for conferences & launches.",
              img: "/Service/corporate-decor.jpg",
            },
            {
              title: "Private Parties 🎉",
              desc: "Exclusive parties tailored to your style with premium arrangements.",
              img: "/Service/private-party-decor.jpg",
            },
          ].map((service, i) => (
            <div
              key={i}
              className={`group relative p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg 
        hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-transparent 
        hover:border-yellow-500`}
            >
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-yellow-500">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* ================= Special Moments Section ================= */}
      <section className="py-20 px-6 bg-white/0 dark:bg-black/60 text-black dark:text-white relative z-10">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-yellow-400">
          Special Moments We Create
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Baby Shower 💕", img: "/Special-Moment/babyshower.jpg" },
            { title: "Haldi ✨", img: "/Special-Moment/haldi.webp" },
            { title: "Mehndi 🥀", img: "/Special-Moment/mehndi.webp" },
            { title: "Namkaran ♥️", img: "/Special-Moment/namkaran.jpg" },
            { title: "Birthday 🤩", img: "/Special-Moment/birthday.webp" },
            { title: "Anniversary 💥", img: "/Special-Moment/anniversary.jpg" },
            { title: "Inauguration 🎉", img: "/Special-Moment/inauguration.jpeg" },
          ].map((event, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-yellow-500/40 transition-all duration-300"
            >
              <Image
                src={event.img}
                alt={event.title}
                width={350}
                height={250}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-yellow-400">{event.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* ================= About Section ================= */}
      <section className="py-20 px-6 bg-white/0 dark:bg-black/60 text-black dark:text-white relative z-10">

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">About Royal Events</h2>
            <p>
              Royal Events has been crafting unforgettable moments for weddings, corporate events, and private parties with elegance and perfection. Our team ensures every detail shines.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image src="/Logo.png" alt="About Royal Events" width={400} height={300} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* ================= Gallery Section ================= */}
      <section className="py-20 px-6 bg-white/0 dark:bg-black/60 text-black dark:text-white relative z-10">

        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <Image src="/gallery/1.jpg" alt="Event 1" width={300} height={200} className="rounded-lg" />
          <Image src="/gallery/2.jpg" alt="Event 2" width={300} height={200} className="rounded-lg" />
          <Image src="/gallery/3.jpg" alt="Event 3" width={300} height={200} className="rounded-lg" />
          <Image src="/gallery/4.jpg" alt="Event 4" width={300} height={200} className="rounded-lg" />
        </div>
      </section>

      {/* ================= Testimonials Section ================= */}
      <section className="py-20 px-6 bg-white/0 dark:bg-black/60 text-black dark:text-white relative z-10">

        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">What Our Clients Say</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
            <p>"Royal Events made our wedding truly magical. Every detail was perfect!"</p>
            <h4 className="mt-4 font-semibold">- Priya & Rahul</h4>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
            <p>"Professional and seamless corporate event. Highly recommended!"</p>
            <h4 className="mt-4 font-semibold">- Tech Corp</h4>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
            <p>"Our private party was unforgettable, thanks to the Royal Events team!"</p>
            <h4 className="mt-4 font-semibold">- Anjali Sharma</h4>
          </div>
        </div>
      </section>

      {/* ================= Contact Section ================= */}
      <section className="py-20 px-6 bg-white/0 dark:bg-black/60 text-black dark:text-white relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-yellow-400">Contact Us</h2>
        <ContactForm />
      </section>

      
    </main>
  );
}