'use client'

import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';

export default function HeroSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [isLocked, setIsLocked] = useState(true);
  const [scale, setScale] = useState(0.3); 
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf); 

    const handleScroll = (e) => {
      if (!containerRef.current || !imageRef.current) return;

      if (!isLocked) return; 

      e.preventDefault(); 

      const container = containerRef.current;
      const image = imageRef.current;
      const maxScale = container.offsetWidth / image.offsetWidth; 

      let newScale = scale + 0.01; 

      if (newScale <= maxScale) {
        setScale(newScale); 
      }

      // If image has fully expanded, unlock the scroll
      if (newScale >= maxScale) {
        setIsLocked(false);
        document.body.style.overflow = "auto"; 
        image.style.transform = `scale(${maxScale})`; // Set final scale
      }
    };

    // Lock scrolling while the image expands
    const lockScroll = () => {
      if (isLocked) {
        document.body.style.overflow = "hidden"; // Disable body scroll
        window.addEventListener("wheel", handleScroll, { passive: false });
      } else {
        window.removeEventListener("wheel", handleScroll);
      }
    };

    lockScroll();

    // Clean up on unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
      document.body.style.overflow = "auto"; // Restore body scroll
      lenisRef.current.destroy(); // Destroy Lenis on unmount
    };
  }, [isLocked, scale]);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full sticky top-0 bg-white flex items-center justify-center overflow-hidden z-50"
    >
      <div
        ref={imageRef}
        className="bg-black"
        style={{
          transform: `scale(${scale})`,
          transition: "transform 0.1s ease-out",
          width: "100%",
          height: "100%",
          objectFit: "cover", 
        }}
      />
    </div>
  );
}
