import React from 'react';

export default function Hero() {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row">
      {/* Right Section (Text) - Move this first for mobile */}
      <div className="w-full md:w-1/2 flex flex-col px-2 py-12 md:px-6 order-1 md:order-2">
        <h1 className="text-[60px] md:text-[100px] font-bold text-[#1E2125] mb-4 tracking-[-0.05em]">
          Barua Zetu
        </h1>
        <p className="text-[20px] md:text-[28px] text-[#1E2125] leading-relaxed w-full md:w-[80%] px-2">
          <strong>Barua Zetu</strong> [Our Letters] is a memory project of Kenyans' reflections, stories, poems and other
          written expressions about our lives before, during and after the June 2024 protests.
        </p>
      </div>

      {/* Left Section (Boxes) - Now appears second on mobile */}
      <div className="w-[85%] md:w-1/2 flex flex-col justify-end order-2 md:order-none">
        <div className="w-full h-[400px] bg-[#F0DADA] flex items-end">
          <div className="w-[90%] h-[350px] bg-[#DDE6D5]"></div>
        </div>
      </div>
    </section>
  );
}
