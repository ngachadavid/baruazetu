'use client'

import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';

export default function HeroSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [isLocked, setIsLocked] = useState(true);
  const [scale, setScale] = useState(0.3); 
  const lenisRef = useRef(null);
  const maxScaleRef = useRef(1);
  const previousScrollY = useRef(0);
  const contractionInProgress = useRef(false);

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

    // Calculate max scale based on container and image dimensions
    if (containerRef.current && imageRef.current) {
      maxScaleRef.current = containerRef.current.offsetWidth / imageRef.current.offsetWidth;
    }

    const handleScroll = (e) => {
      if (!containerRef.current || !imageRef.current) return;
      if (!isLocked) return;

      e.preventDefault();

      const delta = e.deltaY;
      const scaleStep = 0.01;
      
      // Determine direction and adjust scale accordingly
      let newScale;
      if (delta > 0) {
        // Scrolling down - expand
        newScale = Math.min(maxScaleRef.current, scale + scaleStep);
      } else {
        // Scrolling up - contract
        newScale = Math.max(0.3, scale - scaleStep);
      }

      setScale(newScale);

      // Unlock scrolling only when fully expanded
      if (newScale >= maxScaleRef.current) {
        setIsLocked(false);
        document.body.style.overflow = "auto";
      }
      
      // Always keep image scaling to current scale value
      imageRef.current.style.transform = `scale(${newScale})`;
    };

    // Handle gradual contraction when returning to the hero section
    const handleScrollReturn = () => {
      const currentScrollY = window.scrollY;
      
      // If we're near the top and were previously scrolled down
      if (currentScrollY < 50 && previousScrollY.current > currentScrollY) {
        // Re-lock if we're at the very top but contracting hasn't started yet
        if (currentScrollY === 0 && !contractionInProgress.current && !isLocked) {
          setIsLocked(true);
          document.body.style.overflow = "hidden";
          contractionInProgress.current = true;
          
          // Start gradual contraction animation
          const startContractionAnimation = () => {
            const currentScale = parseFloat(imageRef.current.style.transform.replace('scale(', '').replace(')', '') || maxScaleRef.current);
            const targetScale = 0.3;
            const step = 0.02;
            
            if (currentScale > targetScale) {
              const newScale = Math.max(targetScale, currentScale - step);
              setScale(newScale);
              imageRef.current.style.transform = `scale(${newScale})`;
              requestAnimationFrame(startContractionAnimation);
            } else {
              contractionInProgress.current = false;
            }
          };
          
          requestAnimationFrame(startContractionAnimation);
        }
      }
      
      previousScrollY.current = currentScrollY;
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('scroll', handleScrollReturn);
    
    // Manage scroll locking initially
    if (isLocked) {
      document.body.style.overflow = "hidden";
    }

    // Clean up on unmount
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('scroll', handleScrollReturn);
      document.body.style.overflow = "auto";
      lenisRef.current.destroy();
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