"use client";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { Cinzel } from "next/font/google";
import { useEffect, useState } from "react";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Contact() {

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
    <main className="relative w-full bg-transparent">
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
              Contact Us
            </h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              We’re here to make your events unforgettable ✨
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

  {/* Info Cards */}
  <section className="py-16 px-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-15">
    {[
      { title: "📍 Our Location", desc: "Near Maliwal Gas Godown, Jyoti Nagar, Jatharpeth, Akola" },
      { title: "📞 Contact Number", desc: "+91 9011787193" },
    ].map((info, i) => (
      <div
        key={i}
        className="p-6 bg-black border border-white/20 rounded-xl shadow-lg hover:shadow-yellow-400/40 transition-all"
      >
        <h3 className="text-xl font-semibold text-yellow-500 mb-2">{info.title}</h3>
        <p className="text-black dark:text-white">{info.desc}</p>
      </div>
    ))}
  </section>

  {/* Founder Section */}
  <section className="py-16 px-6 max-w-full mx-auto text-center bg-black">
    <Image
      src="/Logo.png"
      alt="Founder"
      width={150}
      height={150}
      className="mx-auto rounded-full shadow-lg mb-6"
    />
    <h2 className="text-3xl font-bold text-yellow-500">Chirag S. Annadate</h2>
    <p className="mt-2 text-black dark:text-white">Founder, Royal Events</p>
    <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition">
      Fix a Meeting
    </button>
  </section>

  {/* Contact Form + Map */}
  <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
    {/* Contact Form */}
    <div className="p-8 bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg h-[500px] flex flex-col">
      <h2 className="text-2xl font-bold text-yellow-500 mb-6">Send us a Message</h2>
      <div className="flex-1 overflow-y-auto text-black dark:text-white">
        <ContactForm />
      </div>
    </div>

    {/* Google Map */}
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-lg">
      <iframe
        className="w-full h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.4854152054025!2d77.0030001!3d20.7095001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6bd8f45c8d7c3%3A0x7f43bffb6a74c2e3!2sNear%20Maliwal%20Gas%20Godown%2C%20Jyoti%20Nagar%2C%20Jatharpeth%2C%20Akola!5e0!3m2!1sen!2sin!4v1724253461234"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</main>

  );
}
