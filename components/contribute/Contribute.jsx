import React from 'react';

export default function Contribute() {
  return (
    <section className="relative h-auto md:h-screen w-full flex flex-col md:flex-row">
      {/* Left Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-end px-4 md:px-10 py-10 md:py-10">
        <div className="text-left text-[#1E2125] space-y-4 w-full md:w-[80%]">
          <p className="font-semibold text-base md:text-lg">
            The primary goals of Barua Zetu are to:
          </p>
          <ul className="list-disc list-inside space-y-1 md:space-y-2 text-xs md:text-base">
            <li>Make space for reflection, grief, hope, rage, and clarity.</li>
            <li>Archive, in writing, what Kenyans saw, felt, did, and understood — to ensure future generations can remember the truth, complexity, and participation.</li>
            <li>Record the emotional, personal, and political impact of our individual experiences from a people-centred perspective.</li>
            <li>Inspire change by celebrating ourselves and recognising the promises we have made to ourselves and to each other.</li>
            <li>Promote respect for our different experiences and perceptions arising from the June 2024 protests.</li>
          </ul>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 relative mt-6 md:mt-0">
        <img
          src="/homepage/protestor.webp"
          alt="Contribute visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Center Overlay Section */}
      <div className="absolute top-[60%] md:top-1/3 left-0 right-0 -translate-y-1/2 z-10 px-2 md:px-4">
        <div className="bg-black text-white w-[70%] md:w-[30%] mx-auto flex flex-col justify-between gap-1 md:gap-2 px-2 md:px-6 py-2 md:py-8 text-[24px] md:text-[40px] tracking-[-0.075em] font-semibold">
          <span className="text-left">Contribute</span>
          <span className="text-center">to</span>
          <span className="text-right">Barua Zetu</span>
        </div>
      </div>
    </section>
  );
}
