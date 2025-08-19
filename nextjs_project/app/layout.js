import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
