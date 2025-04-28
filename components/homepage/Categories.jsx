'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CategoriesSection() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  
  const categories = [
    {
      id: 'before',
      title: 'Before the Protest',
      description: 'How did your life look? What plans did you have? What made up your belief system?',
      color: 'bg-amber-100'
    },
    {
      id: 'during',
      title: 'During the Protest',
      description: 'Where were you? What did you see? What were your expectations? What surprised or impressed you?',
      color: 'bg-orange-100'
    },
    {
      id: 'after',
      title: 'After the Protests',
      description: 'How has life changed? What do you believe in now? What are we willing to fight for?',
      color: 'bg-red-100'
    },
    {
      id: 'loss',
      title: 'Loss and Love',
      description: 'We lost people we stood beside. What was the demonstration of love among ourselves? Who surprised us?',
      color: 'bg-pink-100'
    },
    {
      id: 'awakening',
      title: 'The Awakening & The Descent',
      description: 'What do you believe or not believe now? How do you acknowledge these changes?',
      color: 'bg-purple-100'
    },
    {
      id: 'power',
      title: 'Power and Fear',
      description: 'How did institutions impact our bodies and spirits? How did we demonstrate our power and fears?',
      color: 'bg-blue-100'
    },
    {
      id: 'promise',
      title: 'Promise',
      description: 'What do we now commit ourselves to? The people, the future, and the ideologies we have dedicated ourselves to.',
      color: 'bg-green-100'
    },
    {
      id: 'regret',
      title: 'Regret',
      description: 'What we wish we had known earlier. What we might have wanted to do or say.',
      color: 'bg-yellow-100'
    },
    {
      id: 'awareness',
      title: 'What We Cannot Ignore Anymore',
      description: 'After the experience, we gained a new life. What do we see now that we used to overlook?',
      color: 'bg-teal-100'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Explore Themes</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Browse through the different dimensions of our collective experience. Each theme captures a unique aspect of the June 2024 protests and their impact on our lives.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className={`${category.color} rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                hoveredCategory === category.id ? 'shadow-lg scale-[1.02]' : 'shadow-sm'
              }`}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3">{category.title}</h3>
              <p className="text-gray-800">{category.description}</p>
              
              <div className="mt-6 flex justify-between items-center">
                <span className="text-sm font-semibold">Read stories</span>
                <svg 
                  className="w-5 h-5 transform transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}