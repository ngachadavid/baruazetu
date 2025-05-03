import About from "@/components/homepage/About";
import CategoriesSection from "@/components/homepage/Categories";
// import Hero from "@/components/homepage/Hero";
import HeroSection from "@/components/homepage/HeroSection";
import MemoryShowcase from "@/components/homepage/History";
import IntroductionSection from "@/components/homepage/Intro";
import Memory from "@/components/homepage/Memory";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* <HeroSection />
    <About /> */}
    <div className="overflow-x-hidden">
      <HeroSection />
      <div className="">
        <About />
        {/* <IntroductionSection /> */}
      </div>
      {/* <CategoriesSection /> */}
    </div>
    </>
  );
}
