import { Quicksand } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import Banner from "@/components/Banner";

const inter = Quicksand({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Navbar />
      <Hero />
      <Banner />
    </main>
  );
}
