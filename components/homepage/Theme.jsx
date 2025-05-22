'use client';

import React from 'react';
import { motion } from 'framer-motion';

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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i, number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: i * 0.3,
    }
  })
};

export default function Theme() {
  return (
    <section className='w-full relative z-20 bg-[#F8F4E3] py-10 md:py-20'>
      <div className="max-w-[1280px] max-2xl:px-4 mx-auto pt-0 pb-10 md:pb-20 space-y-6 md:space-y-12">
      {themes.map((item, index) => (
        <motion.div
          key={index}
          className="pb-4 md:pb-12 relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={index}
        >
          <div className="flex flex-col md:flex-row">
            <h2 className="md:w-1/3 font-bold text-base md:text-xl">
              {item.title}
            </h2>
            <div className="md:w-2/3 mt-1 md:mt-0 text-sm md:text-lg">
              {item.content}
            </div>
          </div>

          {/* Optional: keep the animated bottom border */}
          <div className="w-full h-px bg-black absolute bottom-0 left-0" />
        </motion.div>
      ))}
    </div>
    </section>
  );
}
