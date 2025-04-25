"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [expansionComplete, setExpansionComplete] = useState(false);
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (expansionComplete) return;
      
      const scrollPosition = window.scrollY;
      const maxScroll = window.innerHeight * 0.8; // Adjust this value to control how much scroll is needed
      const progress = Math.min(scrollPosition / maxScroll, 1);
      
      setScrollProgress(progress);
      
      if (progress >= 1) {
        setExpansionComplete(true);
      }
      
      // Prevent default scrolling behavior during expansion
      if (!expansionComplete && progress < 1) {
        window.scrollTo(0, progress * maxScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [expansionComplete]);

  return (
    <>
      {/* Sticky hero section */}
      <div 
        ref={sectionRef}
        className={`fixed top-0 left-0 w-full h-full ${expansionComplete ? 'pointer-events-none opacity-0' : ''}`}
        style={{
          zIndex: 10,
          transition: 'opacity 0.5s ease-out',
        }}
      >
        <div className="flex flex-col h-full items-center justify-between text-center">
          {/* Top: Title and Tagline */}
          <div className="mt-4">
            <h1 className="font-archivo text-6xl md:text-8xl font-bold tracking-tight">
              BARUA ZETU
            </h1>
            <p className="font-work-sans text-xl md:text-2xl mt-4 italic">
              A Memory Project
            </p>
          </div>
          
          {/* Middle: Image - expands based on scroll */}
          <div 
            ref={imageContainerRef}
            className="transition-all duration-300 ease-out"
            style={{
              position: 'absolute',
              width: `${20 + scrollProgress * 80}%`, 
              height: `${40 + scrollProgress * 60}%`, // Starts smaller, grows more
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Image
              src="/homepage/pr0.jpg"
              alt="Barua Zetu Memory Project"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Bottom: Description */}
          <div 
            className="max-w-2xl mb-16"
            style={{
              opacity: 1 - scrollProgress * 1.5,
              transition: 'opacity 0.3s ease-out'
            }}
          >
            <p className="font-work-sans text-lg">
              Barua Zetu (Our Letters) is a memory project of Kenyans' reflections, stories, poems and other
              written expressions about our lives before, during and after the June 2024 protests.
            </p>
          </div>
          
          {/* Scroll indicator */}
          <div 
            className="absolute bottom-2 w-full text-center"
            style={{
              opacity: 1 - scrollProgress * 2,
              transition: 'opacity 0.3s ease-out'
            }}
          >
            <p className="font-work-sans text-sm animate-bounce">
              Scroll to expand
            </p>
          </div>
        </div>
      </div>

      {/* Spacer to push content down */}
      <div style={{ height: expansionComplete ? '0px' : '100vh' }} />
    </>
  );
}