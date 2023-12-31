import { Quicksand } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Line from "@/components/Line";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";

const inter = Quicksand({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Navbar />
      <Line evenly={false} />
      <Hero />
      <Line evenly={true} />
      <Banner />
      <Line evenly={false} />
      <About />
      <Line evenly={true} />
      <Portfolio />
      <Line evenly={false} />
      <Contact />
      <Line evenly={true} />
      <Footer />
    </main>
  );
}
