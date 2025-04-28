'use client'

import { motion } from 'framer-motion';

export default function IntroductionSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-10"
      >
        {/* Introduction Text */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">Our Collective Memory</h2>
          
          <p className="text-lg md:text-xl leading-relaxed">
            <span className="font-semibold">Barua Zetu</span> ("Our Letters") archives Kenyans' reflections, stories, and expressions about the June 2024 protests. We believe that these experiences—whether of hope, grief, rage, or clarity—must be recorded in our own words.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed">
            Each voice matters. Each perspective adds dimension to our understanding. Through these collected testimonies, we ensure that the future generation will remember the truth, complexity, and participation of this pivotal moment in our history.
          </p>
        </motion.div>

        {/* Project Goals */}
        <motion.div variants={itemVariants} className="bg-white bg-opacity-60 rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Goals</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="h-2 w-2 mt-3 rounded-full bg-black mr-3"></div>
                <p className="text-lg">Create space for authentic expression—reflection, grief, hope, rage, and clarity</p>
              </div>
              
              <div className="flex items-start">
                <div className="h-2 w-2 mt-3 rounded-full bg-black mr-3"></div>
                <p className="text-lg">Archive what Kenyans saw, felt, did, and understood during this historic period</p>
              </div>
              
              <div className="flex items-start">
                <div className="h-2 w-2 mt-3 rounded-full bg-black mr-3"></div>
                <p className="text-lg">Record the emotional, personal, and political impact from a people-centered perspective</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="h-2 w-2 mt-3 rounded-full bg-black mr-3"></div>
                <p className="text-lg">Inspire change by celebrating ourselves and honoring our collective promises</p>
              </div>
              
              <div className="flex items-start">
                <div className="h-2 w-2 mt-3 rounded-full bg-black mr-3"></div>
                <p className="text-lg">Promote respect for our different experiences and perceptions</p>
              </div>
              
              <div className="flex items-start">
                <div className="h-2 w-2 mt-3 rounded-full bg-black mr-3"></div>
                <p className="text-lg">Create a truthful historical record for future generations</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="text-center py-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Share Your Story</h3>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Your experience matters. Whether you were on the streets, supporting from afar, or observing from a distance—your perspective is an essential thread in the tapestry of our collective memory.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-opacity-80 transition-all">
            Contribute Your Letter
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}