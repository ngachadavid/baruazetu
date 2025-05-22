'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row sticky top-0">
      {/* Right Section (Text) */}
      <div className="w-full md:w-1/2 flex flex-col px-2 pt-4 md:pt-12 md:px-6 order-1 md:order-2">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-[60px] md:text-[100px] font-bold text-[#1E2125] mb-4 tracking-[-0.05em]"
        >
          Barua Zetu
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="text-[16px] md:text-[28px] text-[#1E2125] leading-relaxed w-full md:w-[80%] px-2"
        >
          <strong>Barua Zetu</strong> [Our Letters] is a memory project of Kenyans' reflections, stories, poems and other
          written expressions about our lives before, during and after the June 2024 protests.
        </motion.p>
      </div>
      
      {/* Left Section (Boxes) */}
      <div className="w-[95%] md:w-1/2 flex flex-col flex-grow justify-end order-2 md:order-1">
        <motion.div
          initial={{ opacity: 0, x: -100, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
          className="w-full h-[350px] md:h-[400px] bg-[#F0DADA] flex items-end"
        >
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.4, ease: 'easeOut', delay: 0.6 }}
            className="w-[95%] h-[330px] md:h-[350px] bg-[#DDE6D5]"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}