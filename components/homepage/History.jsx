'use client'

import { useRef, useEffect, useState } from "react";
import Memory from "./Memory";

const MemoryShowcase = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setScrollPosition(container.scrollLeft);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Width of each memory section
  const sectionWidth = 100; // vw percentage
  
  return (
    <div className="w-full py-16 relative overflow-hidden">
      <h2 className="text-4xl font-bold mb-8 text-center px-6">Our Memories</h2>
      
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto overflow-y-hidden no-scrollbar w-full"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="flex relative" style={{ width: `${sectionWidth * 3}vw` }}>
          {/* Memory sections with transform translation */}
          <section 
            className="relative w-full h-auto" 
            style={{ 
              width: `${sectionWidth}vw`,
              transform: `translateX(${-scrollPosition * 0.2}px)` 
            }}
          >
            <Memory index={0} />
          </section>
          
          <section 
            className="relative w-full h-auto bg-gray-100" 
            style={{ 
              width: `${sectionWidth}vw`,
              transform: `translateX(${-scrollPosition * 0.5}px)` 
            }}
          >
            <Memory index={1} />
          </section>
          
          <section 
            className="relative w-full h-auto bg-gray-200" 
            style={{ 
              width: `${sectionWidth}vw`,
              transform: `translateX(${-scrollPosition * 0.8}px)` 
            }}
          >
            <Memory index={2} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default MemoryShowcase;