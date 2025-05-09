'use client'

import React, { useEffect, useRef, useState } from 'react';

const themes = [
  {
    title: 'Before The Protest',
    content: `Life carried on in quiet negotiations. We planned, tolerated, ignored. Some of us believed change was slow. Some had already given up. Our lives moved in rhythms we thought we understood—even when they hurt.`
  },
  {
    title: 'During The Protest',
    content: `The streets spoke. Rage, fear, love, resistance—all collided. We gathered. We watched. We stood still or moved fast. We made decisions—some instinctive, others heavy. We met power, and we met each other.`
  },
  {
    title: 'After The Protest',
    content: `The silence returned—but we were no longer the same. Our families, our streets, our beliefs—they shifted. Some of us lost people. Some found new clarity. Some are still learning how to live with what we saw, did, or didn't do.`
  }
];

export default function Theme() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="max-w-[1280px] max-2xl:px-4 mx-auto pt-0 pb-10 md:pb-20 space-y-6 md:space-y-12"
    >
      {themes.map((item, index) => (
        <div key={index} className="pb-4 md:pb-12 relative">
          {/* Content wrapper */}
          <div className="flex flex-col md:flex-row">
            <h2 className="md:w-1/3 font-bold text-base md:text-xl">
              {item.title}
            </h2>
            <div 
              className="md:w-2/3 mt-1 md:mt-0 text-sm md:text-lg overflow-hidden"
            >
              <div 
                className="transform"
                style={{
                  transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
                  transitionDelay: `${index * 0.3}s`
                }}
              >
                {item.content}
              </div>
            </div>
          </div>
          
          {/* Full-width bottom border with animation */}
          <div className="w-full h-px bg-transparent absolute bottom-0 left-0 overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-black"
              style={{
                width: isVisible ? '100%' : '0%',
                transition: 'width 1.2s ease-in-out',
                transitionDelay: `${index * 0.3}s`
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}