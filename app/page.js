import About from "@/components/homepage/About";
// import Hero from "@/components/homepage/Hero";
import HeroSection from "@/components/homepage/HeroSection";
import IntroductionSection from "@/components/homepage/Intro";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* <HeroSection />
    <About /> */}
    <div className="overflow-x-hidden">
      <HeroSection />
      <div className="">
        <IntroductionSection />
      </div>
    </div>
    </>
  );
}
