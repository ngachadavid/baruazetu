'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function AboutCard({
  bulletTitle,
  mainTitle,
  description,
  mainImage,
  floatingImage,
}) {
  const containerRef = useRef(null)
  const lineRef = useRef(null)
  const [lineVisible, setLineVisible] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineVisible(true)
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) observer.observe(containerRef.current)

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const bulletVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.4
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }

  const floatingImageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.8
      }
    }
  }

  return (
    <div 
      ref={containerRef} 
      className="relative grid grid-cols-1 md:grid-cols-[0.55fr_0.45fr] gap-8 py-10"
    >
      {/* Floating image between content and image column */}
      <motion.div 
        className="hidden md:block absolute left-[60%] top-[78%] transform -translate-x-1/2 -translate-y-1/2 w-2/3 max-w-xl z-50 rounded-xl overflow-hidden shadow-xl"
        variants={floatingImageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <img
          src={floatingImage || "/homepage/protestor.webp"}
          alt="Floating visual accent"
          className="w-[80%] h-56 object-cover"
        />
      </motion.div>

      {/* Content div */}
      <motion.div 
        className="w-full flex flex-col justify-center px-6 md:px-20 z-20"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Animated top line */}
        <div ref={lineRef} className="w-full h-px bg-transparent relative mb-6 overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-black"
            style={{
              width: lineVisible ? '100%' : '0%',
              transition: 'width 1.2s ease-in-out'
            }}
          />
        </div>

        {/* Two-column text layout */}
        <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
          {/* Left small bullet title */}
          <motion.div 
            className="mb-4 md:mb-0 md:w-1/4"
            variants={bulletVariants}
          >
            <h2 className="text-xs md:text-sm font-semibold tracking-wide uppercase">
              • {bulletTitle || "A Collective Memory"}
            </h2>
          </motion.div>

          {/* Right large heading and description */}
          <div className="md:w-3/4">
            <motion.h3 
              className="text-2xl md:text-[80px] font-bold leading-[1.05] mb-3"
              variants={titleVariants}
            >
              {mainTitle || "Stories That Shape Us"}
            </motion.h3>
            <motion.p 
              className="text-base md:text-xl text-gray-600 leading-snug"
              variants={descriptionVariants}
            >
              {description || "Discover personal stories and moments that reflect the essence of our shared identity. Each contribution is a living thread in the fabric of our community."}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Image div */}
      <motion.div 
        className="w-full h-[80vh] md:h-screen overflow-hidden z-20"
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <img
          src={mainImage || "/homepage/protestor.webp"}
          alt="Main section image"
          className="w-full h-full object-cover object-right"
        />
      </motion.div>
    </div>
  )
}