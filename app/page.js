import About from "@/components/homepage/About";
// import Hero from "@/components/homepage/Hero";
import HeroSection from "@/components/homepage/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* <HeroSection />
    <About /> */}
    <div className="overflow-x-hidden">
      <HeroSection />
      <div className=" p-10">
        <About />
      </div>
    </div>
    </>
  );
}
