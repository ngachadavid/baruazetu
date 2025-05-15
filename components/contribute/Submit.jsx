import React from 'react';
import SubmissionForm from './SubmissionForm';

export default function Submit() {
  return (
    <section className="w-full h-auto md:h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left Content Section */}
      <div className="w-full md:w-1/2 px-4 md:px-10 py-4 md:py-10 flex flex-col justify-between h-full">
        {/* Top section */}
        <div className="bg-[#DDE6D5] text-black w-[60%] flex flex-col justify-between gap-1 md:gap-2 px-2 md:px-6 py-2 md:py-8 text-[24px] md:text-[40px] tracking-[-0.075em] font-semibold mb-10">
          <span className="text-left">Contribute</span>
          <span className="text-center">to</span>
          <span className="text-right">Barua Zetu</span>
        </div>

        {/* Bottom section (existing paragraph) */}
        <div className="text-left text-[#1E2125] space-y-4 w-full md:w-[80%]">
          <p className="text-sm md:text-base">
            Barua Zetu is a space for reflection, remembrance, and truth-telling. It exists to honor what Kenyans saw, felt, and did—capturing the emotional, personal, and political impact of the June 2024 protests. Through collective memory, it preserves the complexity of our experiences, celebrates resilience, and affirms the promises we’ve made to ourselves and each other, while respecting the diverse perspectives that shape our understanding.
          </p>
        </div>
      </div>

      {/* Right (Scrollable) Form Section */}
      <div className="w-full md:w-1/2 h-full overflow-y-auto">
        <SubmissionForm />
      </div>
    </section>

  );
}
