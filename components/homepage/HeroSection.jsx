'use client'

import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [isLocked, setIsLocked] = useState(true);
  const [scale, setScale] = useState(0.3);
  const lenisRef = useRef(null);
  const maxScaleRef = useRef(1);
  const previousScrollY = useRef(0);
  const contractionInProgress = useRef(false);

  // Text animation variants
  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: -20 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0,
      y: -10 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.9
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const descriptionVariants = {
    hidden: { 
      opacity: 0,
      y: 30 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 1.5
      }
    }
  };

  const arrowVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delay: 2,
        duration: 0.5
      }
    }
  };

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
      className="h-screen w-full sticky top-0 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute top-4 w-full max-w-4xl px-6 text-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <h1 className="text-[120px] font-bold tracking-tight">
            {Array.from("BARUA ZETU").map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>
        
        <motion.p 
          className="text-xl md:text-2xl mt-4 italic"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          A Memory Project
        </motion.p>
      </div>

      <div
        ref={imageRef}
        className="z-50 bg-red-500"
        style={{
          transform: `scale(${scale})`,
          transition: "transform 0.1s ease-out",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "relative"
        }}
      >
        <img src="/homepage/pr0.jpg" alt="Hero image" className="w-full h-full object-cover" />
      </div>

      {/* Bottom div - will be visible when scaled to full size, with animation */}
      <div className="absolute bottom-10 w-full max-w-4xl px-6 z-10 flex flex-col items-center">
        <motion.p 
          className="font-work-sans text-lg font-bold text-center"
          variants={descriptionVariants}
          initial="hidden"
          animate="visible"
        >
          Barua Zetu (Our Letters) is a memory project of Kenyans' reflections, stories, poems and other
          written expressions about our lives before, during and after the June 2024 protests.
        </motion.p>

        {/* Pulsating Down Arrow with delayed fade-in */}
        <motion.div 
          className="mt-6 animate-bounce"
          variants={arrowVariants}
          initial="hidden"
          animate="visible"
        >
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}