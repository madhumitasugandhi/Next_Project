import Image from "next/image";
import Link from "next/link";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});


export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-42 text-center md:text-left">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2">
            <Image src="/Logo.png" alt="Royal Events Logo" width={40} height={40} />
            <span className={`text-2xl font-bold text-yellow-400 ${cinzel.className}`}>Royal Events</span>
          </div>
          <p className="text-sm text-gray-400">
            Creating unforgettable memories since 2022 ✨
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h4 className="text-yellow-400 font-semibold mt-4">Contact</h4>
          <p className="hover:text-yellow-400">Chirag S. Annadate</p>
          <p> Near Maliwal Gas Godown, Jyoti Nagar, Jatharpeth, Akola</p>
          <p> 9011787193</p>
        </div>

        {/* Social Links */}
        <div className="space-y-3">
          <h4 className="text-yellow-400 font-semibold">Follow Us</h4>
          <Link
            href="https://www.instagram.com/royal_events__akola/"
            target="_blank"
            className="text-gray-300 hover:text-yellow-400"
          >
            Instagram
          </Link>
        </div>
      </div>

      {/* Sub-Footer */}
      <div className="bg-[#0A0A0A] py-4 text-center text-sm text-gray-400 border-t border-gray-800">
        © {new Date().getFullYear()} Royal Events. All rights reserved.
      </div>
    </footer>
  );
}
