"use client";
import { Cinzel } from "next/font/google";
import { useEffect, useState } from "react";


const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

import Image from "next/image";

export default function Services() {
  const services = [
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
    {
      title: "Birthday Celebrations 🎂",
      desc: "Make your birthdays unforgettable with creative themes & decor.",
      img: "/Special-Moment/birthday.webp",
    },
    {
      title: "Anniversaries 💕",
      desc: "Celebrate love with elegant arrangements & unforgettable memories.",
      img: "/Special-Moment/wedding-anniversary.jpg",
    },
    {
      title: "Special Ceremonies ✨",
      desc: "From Baby Showers to Inaugurations — we cover it all!",
      img: "/Special-Moment/babyshower.jpg",
    },
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
    <main className="relative w-full bg-transparent text-black dark:text-white ">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center text-white">
        <Image
          src="/Home/hero.jpg"
          alt="Services Hero"
          fill
          className="object-cover -z-10 brightness-75"
        />
        <div className="z-10 px-6">
          <h1 className={`text-5xl font-bold text-yellow-400 drop-shadow-lg ${cinzel.className}`}>
            Our Services
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Crafting unforgettable experiences for every occasion ✨
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

      {/* Services Grid */}
      <section className="py-20 px-6  relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-yellow-500">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <div
  key={i}
  className="group relative p-8 rounded-2xl bg-white dark:bg-gray-900 
  shadow-lg shadow-gray-300/40 dark:shadow-black/40 
  hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300 
  border border-transparent hover:border-yellow-500"
>

              <div className="overflow-hidden rounded-xl mb-6">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500 "
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-yellow-500">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
