
import { Quicksand } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Quicksand({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Navbar />
    </main>
  );
}
