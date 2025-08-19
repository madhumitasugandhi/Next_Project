import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full text-center py-6 mt-10 border-t"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
        borderColor: "var(--foreground)",
      }}>
      {/* main footer */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">MySite</h2>
          <p className="text-sm mt-2">
            Build amazing websites with Next.js + Tailwind 🚀
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li><Link href="/" className="hover:text-black dark:hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-black dark:hover:text-white">About</Link></li>
            <li><Link href="/services" className="hover:text-black dark:hover:text-white">Services</Link></li>
            <li><Link href="/contact" className="hover:text-black dark:hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Follow Us</h3>
          <div className="mt-2 flex space-x-4">
            <Link href="#" className="hover:text-black dark:hover:text-white">YouTube</Link>
            <Link href="#" className="hover:text-black dark:hover:text-white"> Facebook</Link>
            <Link href="#" className="hover:text-black dark:hover:text-white"> Instagram</Link>
          </div>
        </div>
      </div>

      {/* sub-footer */}
      <div className="border-t border-gray-300 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} MySite. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
