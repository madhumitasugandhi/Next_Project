import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Poppins } from "next/font/google";
import FloatingLights from "@/components/FloatingLights";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider>
          {/* Floating lights background */}
          <FloatingLights />

          {/* Main site content above lights */}
          <div className="relative z-10">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
