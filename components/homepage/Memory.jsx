const Memory = () => {
    return (
      <div className="w-full flex justify-end px-6 py-16 mr-48">
        {/* Container with top border */}
        <div className="w-full max-w-4xl border-t-2 border-black pt-8">
          {/* Bullet and Title */}
          <div className="flex items-center space-x-3 justify-start mb-8">
            <div className="w-2 h-2 rounded-full bg-black"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              Our Collective Memory
            </h2>
          </div>
  
          <div className="max-w-3xl mx-auto text-start text-lg leading-relaxed">
            <span className="font-semibold">Barua Zetu</span> archives Kenyans' reflections, stories, and expressions about the June 2024 protests. 
            We believe that these experiences—whether of hope, grief, rage, or clarity—must be recorded in our own words.
          </div>
  
          {/* Side-by-side image and text */}
          <div className="flex items-start space-x-8 mt-12">
            {/* Image */}
            <div className="w-2/3">
              <img src="/homepage/protestor.webp" alt="Memory image" className="w-full h-96 object-cover rounded-lg" />
            </div>
  
            {/* Text */}
            <div className="w-1/3 text-sm leading-relaxed">
              <p>
                Each voice matters. Each perspective adds dimension to our understanding. 
                Through these collected testimonies, we ensure that the future generation will remember the truth, complexity, and participation of this pivotal moment in our history.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Memory;
  