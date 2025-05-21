'use client'

import React, { useEffect, useRef, useState } from 'react';
import AboutCard from './Aboutcard';

export default function About() {
  const lineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const aboutData = [
    {
      bulletTitle: "Our Mission",
      mainTitle: "Preserving Memories",
      description: "We collect and archive personal narratives to ensure future generations understand this pivotal moment in Kenya's history.",
      mainImage: "/homepage/protestor.webp",
      floatingImage: "/homepage/protestor.webp"
    },
    {
      bulletTitle: "Our Community",
      mainTitle: "Voices United",
      description: "People from all backgrounds contribute their unique perspectives, creating a multifaceted record of lived experiences.",
      mainImage: "/homepage/protestor.webp",
      floatingImage: "/homepage/protestor.webp",
      isReversed: true
    },
    // {
    //   bulletTitle: "Our Impact",
    //   mainTitle: "Creating Legacy",
    //   description: "These stories have profound effects on how we understand ourselves and our shared history as Kenyans.",
    //   mainImage: "/homepage/protestor.webp",
    //   floatingImage: "/homepage/protestor.webp"
    // }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section comes into view
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
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
    <section className="max-w-[1280px] max-2xl:px-4 mx-auto py-10 md:py-20">
      <div className="">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-start mb-2">
          A Collective Memory
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
          <span className="font-semibold">Barua Zetu</span> archives the emotional, political, social, and personal perspectives that shaped the experiences. It
          records how lives changed, how our political consciousness was stirred and how we currently
          perceive our past, present and future. We acknowledge that these were not isolated incidents.
          Still, people had different experiences, and we look into recording and learning from these
          personal experiences and reflections.
        </p>

        {/* Two images side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[450px] w-full md:w-[80%] mx-auto">
          <div className="overflow-hidden">
            <img
              src="/homepage/protestor.webp"
              alt="People gathering during protests"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="hidden md:block overflow-hidden md:mt-12">
            <img
              src="/homepage/protestor.webp"
              alt="Written letters and memories"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      {/* <div>
        {aboutData.map((data, index) => (
          <AboutCard key={index} {...data} />
        ))}
      </div> */}


    </section>
  );
}