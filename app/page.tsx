import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoTicker/>
    </main>
  );
}
