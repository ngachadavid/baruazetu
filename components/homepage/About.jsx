'use client'

import React, { useEffect, useRef, useState } from 'react';

export default function About() {
  const lineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section comes into view
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-xl md:text-4xl font-bold text-start mb-2">
          • A Collective Memory
        </h2>
        
        {/* Top line with animation */}
        <div ref={lineRef} className="w-full h-px bg-transparent relative mb-4 overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-black"
            style={{
              width: isVisible ? '100%' : '0%',
              transition: 'width 1.2s ease-in-out'
            }}
          />
        </div>
        
        {/* Description */}
        <p className="text-sm md:text-base text-start mx-auto mb-16">
          <span className="font-semibold">Barua Zetu</span> archives Kenyans' reflections, stories, and expressions about the June 2024 protests.
          We believe that these experiences—whether of hope, grief, rage, or clarity—must be recorded in our own words.
        </p>
        
        {/* Two images side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden">
            <img
              src="/homepage/protestor.webp"
              alt="People gathering during protests"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          
          <div className="aspect-[4/5] overflow-hidden md:mt-12">
            <img
              src="/homepage/protestor.webp"
              alt="Written letters and memories"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}