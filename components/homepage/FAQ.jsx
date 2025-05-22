'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: "What is the purpose of this initiative?",
            answer: "Barua Zetu ensures that personal reflections, narratives, and experiences are preserved—not just political accounts or mainstream media coverage. We hope to express ourselves authentically and help future generations understand how ordinary Kenyans experienced, interpreted, and were affected by the protests and their aftermath."
        },
        {
            question: "Who is behind this initiative?",
            answer: "The Barua Zetu – A Memory Project is curated and archived by Raini Sydney and Thomas Mutinda."
        },
        {
            question: "How will the material be used?",
            answer: "The stories will be archived in a public digital repository and may be published in a compiled anthology. They may also be used for research, exhibitions, and educational purposes. All submissions will be used strictly for non-commercial purposes."
        },
        {
            question: "Will I retain ownership of my submission?",
            answer: "Yes, you retain full ownership. By submitting, you grant permission for your work to be preserved and shared with proper credit, unless anonymity is requested."
        },
        {
            question: "Can I withdraw my submission later?",
            answer: "Yes. You may request removal of your content at any time by emailing baruazawakenya@gmail.com."
        },
        {
            question: "Are there any language/writing restrictions?",
            answer: "We currently accept submissions in English and Kiswahili. Eventually, we plan to welcome submissions in all Kenyan languages. We discourage the use of LLM/AI tools for story generation to ensure authenticity."
        },
        {
            question: "Is there a word limit for submission?",
            answer: "There is no strict word limit, but we recommend keeping submissions between 300 and 2000 words for readability."
        },
        {
            question: "How will the stories be shared with the public?",
            answer: "Submissions will be featured on a digital archive website, shared on social media, and may be included in community readings, printed volumes, and exhibitions."
        },
        {
            question: "How can I support beyond submitting?",
            answer: "You can help by sharing the call for submissions or volunteering as a transcriber, translator, or supporter via the provided form."
        },
        {
            question: "How can I contact Barua Zetu?",
            answer: "You can email the team at baruazawakenya@gmail.com."
        }
    ]


    // Toggle logic
    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className='w-full relative z-20 bg-[#F8F4E3] py-10 md:py-20'>
            <motion.section
            className="max-w-[1280px] max-2xl:px-4 mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <h2 className="text-3xl md:text-5xl font-bold mb-10">Frequently Asked Questions</h2>

            {faqs.map((faq, index) => (
                <div key={index} className="border-b border-black">
                    <button className="w-full py-4 flex items-start gap-4 text-left" onClick={() => toggleIndex(index)}>
                        <span className="text-base md:text-xl font-medium flex-1">
                            {faq.question}
                        </span>
                        <div className="w-6 h-6 flex-shrink-0 rounded-full border border-black flex items-center justify-center relative">
                            <span className="relative w-3 h-3 flex items-center justify-center">
                                <span
                                    className={`absolute w-3 h-0.5 bg-black transition-all duration-300 ${openIndex === index ? 'rotate-0' : ''}`}
                                />
                                <span
                                    className={`absolute h-3 w-0.5 bg-black transition-all duration-300 ${openIndex === index ? 'scale-y-0' : 'scale-y-100'}`}
                                />
                            </span>
                        </div>
                    </button>
                    {openIndex === index && (
                        <div className="pb-4 text-gray-700 text-sm md:text-lg font-[400]">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}

            {/* FAQ Schema */}
            <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(faq => ({
                        "@type": "Question",
                        name: faq.question,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: faq.answer
                        }
                    }))
                })}
            </Script>
        </motion.section>
        </section>
    )
}
