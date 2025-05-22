import React from 'react';

export default function Footer() {
  return (
    <section className="relative z-20 bg-[#000000] text-white pt-10 w-full">
      <div className="max-w-[1280px] max-2xl:px-4 mx-auto py-4">
        {/* Upper div  */}
        <div className="flex flex-col md:flex-row">

          {/* Left side - Logo on top */}
          <div className="md:w-1/2 flex flex-col items-start -mt-8">
            <img src="logo/bzlogo.webp" alt="Logo" className="h-32 mb-4" />
            {/* You can optionally add some text or links under the logo here */}
          </div>

          {/* Right side - Content area */}
          <div className="md:w-1/2 flex flex-col md:flex-row">
            <div className="md:w-1/2 text-lg">
              <h3 className="mb-2">
                <a href="#" className="text-white relative group hover:text-white transition-all duration-300">
                  <span className="opacity-0 group-hover:opacity-100 absolute -left-4 transition-opacity duration-300">[</span>
                  About Us
                  <span className="opacity-0 group-hover:opacity-100 absolute -right-4 transition-opacity duration-300">]</span>
                </a>
              </h3>
              <h3>
                <a href="#" className="text-white relative group hover:text-white transition-all duration-300">
                  <span className="opacity-0 group-hover:opacity-100 absolute -left-4 transition-opacity duration-300">[</span>
                  Contribute
                  <span className="opacity-0 group-hover:opacity-100 absolute -right-4 transition-opacity duration-300">]</span>
                </a>
              </h3>
            </div>
            <div className="md:w-1/2 text-lg">
              <h3 className="mb-2">
                <a href="#" className="text-white relative group hover:text-white transition-all duration-300">
                  <span className="opacity-0 group-hover:opacity-100 absolute -left-4 transition-opacity duration-300">[</span>
                  Terms and Conditions
                  <span className="opacity-0 group-hover:opacity-100 absolute -right-4 transition-opacity duration-300">]</span>
                </a>
              </h3>
              <h3>
                <a href="#" className="text-white relative group hover:text-white transition-all duration-300">
                  <span className="opacity-0 group-hover:opacity-100 absolute -left-4 transition-opacity duration-300">[</span>
                  Contact Us
                  <span className="opacity-0 group-hover:opacity-100 absolute -right-4 transition-opacity duration-300">]</span>
                </a>
              </h3>
            </div>
          </div>
        </div>

        {/* Lower div */}
        <div className="text-center mt-10">
          Barua Zetu &copy; 2025. All rights reserved.
        </div>
      </div>
    </section>
  );
}
