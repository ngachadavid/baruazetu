import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Connect() {
    return (
        <section className="max-w-[1280px] max-2xl:px-4 mx-auto px-6 py-20 text-[#1E2125]">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left: Connect */}
                <div className="w-full md:w-1/2 px-10 group">
                    <div className="bg-[#DDE6D5] px-6 flex flex-col justify-between h-full">
                        {/* Top: Connect + Image */}
                        <div className="flex justify-between items-start">
                            <h3 className="text-[48px] font-bold tracking-[-0.075em]">Contribute</h3>
                            <img src="/homepage/protestor.webp" alt="icon" className="w-44 h-32 object-contain" />
                        </div>

                        {/* Middle: Description */}
                        <p className="text-sm text-[#1E2125] mt-6 w-full md:w-[80%] mx-auto group-hover:underline transition-all duration-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum justo sed sapien ultrices, vel feugiat nisl convallis.
                        </p>

                        {/* Bottom: WITH US aligned bottom-right */}
                        <div className="flex justify-end items-center mt-auto gap-2 pt-6 relative">
                            <div className="absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <ArrowRight className="w-8 h-8" />
                            </div>
                            <span className="text-[48px] font-bold tracking-[-0.075em] group-hover:translate-x-2 transition-all duration-300">
                                share with us
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right: Newsletter */}
                <div className="w-full md:w-1/2 px-14 py-6">
                    <div className="bg-[#F0DADA] px-6 flex flex-col justify-between h-full rounded-md">
                        {/* Top: Heading */}
                        <div className="flex justify-between items-start">
                            <h3 className="text-[40px] font-bold tracking-[-0.075em]">News[letter]</h3>
                            {/* Optional Image Placeholder */}
                            {/* <img src="/some-icon.svg" alt="Icon" className="w-8 h-8" /> */}
                        </div>

                        {/* Middle: Waitlist */}
                        <div className="mt-10">
                            <span className="text-sm font-medium text-[#1E2125] mb-2 block">[Join the waitlist]</span>
                            <div className="w-full h-[1px] bg-black" />
                        </div>

                        {/* Bottom: Footer text aligned bottom-right */}
                        <div className="flex justify-end pt-6 mt-auto">
                            <span className="text-[40px] font-bold tracking-[-0.075em]">from the frontlines</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
