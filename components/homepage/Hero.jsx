import React from 'react';

export default function Hero() {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row">
  {/* Left Section – we’ll add content here later */}
 <div className="w-full md:w-1/2 relative">
  {/* Black bottom 1/4 box */}
  <div className="absolute bottom-0 left-0 w-full h-[400px] bg-[#F0DADA]">
    <div className="absolute bottom-0 left-0 w-[70%] h-[250px] bg-black"></div>
  </div>
</div>

  {/* Right Section */}
  <div className="w-full md:w-1/2 flex flex-col px-6 py-12 md:px-12">
    <h1 className="text-[40px] md:text-[100px] font-bold text-[#1E2125] mb-4 tracking-[-0.05em]">
      Barua Zetu
    </h1>
    <p className="text-[20px] md:text-[28px] text-[#1E2125] leading-relaxed w-full md:w-[80%] px-2">
      <strong>Barua Zetu</strong> [Our Letters] is a memory project of Kenyans' reflections, stories, poems and other
      written expressions about our lives before, during and after the June 2024 protests.
    </p>
  </div>
</section>
  );
}
