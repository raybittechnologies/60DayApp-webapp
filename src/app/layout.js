import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";

export const metadata = {
  title: "60DayApp - Modern Web Solutions",
  description: "Building premium web applications in 60 days.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="w-full min-h-screen bg-bg-peach flex flex-col relative" suppressHydrationWarning>
        <ScrollProgress />
        <AnimatedBackground />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
