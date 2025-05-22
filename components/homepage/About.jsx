'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

export default function About() {
  return (
    <section className='w-full relative z-20 bg-[#F8F4E3] py-10 md:py-20 border-t border-black'>
      <div className=" max-w-[1280px] max-2xl:px-4 mx-auto ">
      <div>
        {/* Heading + Paragraph block */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-start mb-2">
            A Collective Memory
          </h2>

          {/* Static top border */}
          <div className="w-full h-px bg-black mb-4" />

          <p className="text-sm md:text-base text-start mx-auto mb-16">
            <span className="font-semibold">Barua Zetu</span> archives the emotional, political, social, and personal perspectives that shaped the experiences. It
            records how lives changed, how our political consciousness was stirred and how we currently
            perceive our past, present and future. We acknowledge that these were not isolated incidents.
            Still, people had different experiences, and we look into recording and learning from these
            personal experiences and reflections.
          </p>
        </motion.div>

        {/* Images block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-[80%] mx-auto">
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          >
            <img
              src="/homepage/pr0.jpg"
              alt="People gathering during protests"
              className="w-full h-[450px] object-cover rounded-sm"
            />
          </motion.div>

          <motion.div
            className="hidden md:block overflow-hidden md:mt-12"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          >
            <img
              src="/homepage/protestor.webp"
              alt="Written letters and memories"
              className="w-full h-[450px] object-cover rounded-sm"
            />
          </motion.div>
        </div>
      </div>
    </div>
    </section>
  );
}
