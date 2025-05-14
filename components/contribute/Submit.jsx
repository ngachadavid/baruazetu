import React from 'react';
import SubmissionForm from './SubmissionForm';

export default function Submit() {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-end px-4 md:px-10 py-10 md:py-10">
      
        <div className="text-left text-[#1E2125] space-y-4 w-full md:w-[80%]">
          <p className="text-xs md:text-base">
           Barua Zetu is a space for reflection, remembrance, and truth-telling. It exists to honor what Kenyans saw, felt, and did—capturing the emotional, personal, and political impact of the June 2024 protests. Through collective memory, it preserves the complexity of our experiences, celebrates resilience, and affirms the promises we’ve made to ourselves and each other, while respecting the diverse perspectives that shape our understanding.       
          </p>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 relative mt-6 md:mt-0">
        <SubmissionForm />
      </div>
    </section>
  );
}
