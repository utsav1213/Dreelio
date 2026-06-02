import Benefits from "@/sections/Benefits";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";
import Review from "@/sections/Reviews";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoTicker/>
      <Benefits />
      <Features />
      <Review/>
    </main>
  );
}
