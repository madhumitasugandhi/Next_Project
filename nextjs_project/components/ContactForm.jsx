// components/ContactForm.jsx
"use client";

export default function ContactForm() {
  return (
    <form className="max-w-2xl mx-auto flex flex-col gap-4">
      <input
        type="text"
        placeholder="Name"
        className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:ring-yellow-400 focus:border-yellow-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      />
      <input
        type="email"
        placeholder="Email"
        className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:ring-yellow-400 focus:border-yellow-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      />
      <input
        type="text"
        placeholder="Event Type"
        className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:ring-yellow-400 focus:border-yellow-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      />
      <textarea
        placeholder="Message"
        className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:ring-yellow-400 focus:border-yellow-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        rows={4}
      ></textarea>
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition hover:shadow-[0_0_20px_rgba(255,255,0,0.8)]"
      >
        Send Message
      </button>
    </form>
  );
}