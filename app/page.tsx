import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-#0284c7 flex justify-center items-center flex-col 
    overflow-hidden mx-auto">
      <Navbar />
      <div className = "max-w-7xl w-full bg-">
        <Hero/>
          <div>
          </div>
      </div>
    </main>
  );
}
