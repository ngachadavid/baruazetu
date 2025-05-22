'use client'
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Connect() {

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

    return (
       <section className='w-full relative z-20 bg-[#F8F4E3] py-10 md:py-20'>
         <motion.section
            className="max-w-[1280px] max-2xl:px-4 mx-auto px-0 md:px-6 py-6 md:py-20 text-[#1E2125]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left: Connect */}
                <div className="w-full md:w-1/2 px-0 md:px-10">
                    <Link href="/contribute" className="block h-full">
                        <div className="bg-[#DDE6D5] px-6 flex flex-col justify-between h-full group">
                            {/* Top: Connect + Image */}
                            <div className="flex justify-between items-start">
                                <h3 className="text-[24px] md:text-[48px] font-bold tracking-[-0.075em]">Contribute</h3>
                                <img src="/homepage/protestor.webp" alt="icon" className="w-20 md:w-44 h-12 md:h-32 object-contain" />
                            </div>

                            {/* Middle: Description */}
                            <p className="text-xs md:not-visited:text-sm text-[#1E2125] mt-6 w-full md:w-[80%] mx-auto group-hover:underline transition-all duration-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum justo sed sapien ultrices, vel feugiat nisl convallis.
                            </p>

                            {/* Bottom: WITH US aligned bottom-right */}
                            <div className="flex justify-end items-center mt-auto gap-2 pt-6 relative">
                                <div className="absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <ArrowRight className="w-8 h-8" />
                                </div>
                                <span className="text-[24px] md:text-[48px] font-bold tracking-[-0.075em] group-hover:translate-x-2 transition-all duration-300">
                                    share with us
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Right: Newsletter */}
                <div className="w-full md:w-1/2 px-4 md:px-14 py-4 md:py-6">
                    <div className="bg-[#F0DADA] px-6 flex flex-col justify-between h-full rounded-md">
                        {/* Top: Heading */}
                        <div className="flex justify-between items-start">
                            <h3 className="text-[20px] md:text-[40px] font-bold tracking-[-0.075em]">News[letter]</h3>
                        </div>

                        {/* Middle: Waitlist */}
                        <div className="mt-10">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs md:text-sm font-medium text-[#1E2125]">[Join the waitlist]</span>
                                <ArrowRight className="w-5 h-5 text-[#1E2125]" />
                            </div>
                            <div className="w-full h-[1px] bg-black" />
                        </div>

                        {/* Bottom: Footer text aligned bottom-right */}
                        <div className="flex justify-end pt-6 mt-auto">
                            <span className="text-[20px] md:text-[40px] font-bold tracking-[-0.075em]">from the frontlines</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
       </section>
    );
}
