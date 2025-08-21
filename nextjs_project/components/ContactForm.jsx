"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    event: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp number (apna number)
    const phoneNumber = "919011787193"; // India ke liye 91 prefix

    const text = `Hello Royal Events 🎉
👤 Name: ${formData.name}
📞 Contact: ${formData.phone}
🎊 Event Type: ${formData.event}
📝 Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank"); // new tab me WhatsApp open hoga

    // Form reset
    setFormData({
      name: "",
      phone: "",
      event: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto flex flex-col gap-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:ring-yellow-400 focus:border-yellow-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      />
      <input
        type="text"
        name="phone"
        placeholder="Contact Number"
        value={formData.phone}
        onChange={handleChange}
        required
        className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:ring-yellow-400 focus:border-yellow-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      />
      <input
        type="text"
        name="event"
        placeholder="Event Type"
        value={formData.event}
        onChange={handleChange}
        className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:ring-yellow-400 focus:border-yellow-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:ring-yellow-400 focus:border-yellow-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      ></textarea>
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition hover:shadow-[0_0_20px_rgba(255,255,0,0.8)]"
      >
        Send Message on WhatsApp
      </button>
    </form>
  );
}
