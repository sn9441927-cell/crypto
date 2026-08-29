"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

const FAQ = () => {
    const [activeId, setActiveId] = useState<string | null>("faq-1");

    const faqData: FAQItem[] = [
        {
            id: "faq-1",
            question: "What are the advantages of using CrypGo?",
            answer: "CrypGo offers next-gen security, ultra-low transaction fees, and a highly intuitive interface designed for both beginners and pro traders."
        },
        {
            id: "faq-2",
            question: "Are there any hidden fees?",
            answer: "No. We believe in total transparency. All fees are clearly displayed before you confirm any transaction."
        },
        {
            id: "faq-3",
            question: "What is the pricing model?",
            answer: "We use a tier-based model where high-volume traders get significant discounts on maker and taker fees."
        },
        {
            id: "faq-4",
            question: "Is there a limit on transactions?",
            answer: "Standard accounts have wide limits, while verified business accounts enjoy unlimited transaction volumes."
        }
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden" id="faq">
            <div className="container mx-auto lg:max-w-screen-md px-4 sm:px-6 relative z-10">
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-white text-28 sm:text-36 md:text-40 lg:text-44 font-bold mb-3 sm:mb-4">Frequently Asked <span className="text-primary">Questions</span></h2>
                        <p className="text-muted text-sm sm:text-base md:text-lg px-2 sm:px-0">Still have questions? We're here to help you understand every detail.</p>
                    </motion.div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                    {faqData.map((faq, index) => {
                        const isOpen = activeId === faq.id;
                        return (
                            <motion.div
                                key={faq.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`group rounded-xl sm:rounded-2xl border transition-all duration-300 ${isOpen ? "bg-primary/5 border-primary/30" : "bg-darklight/20 border-white/5 hover:border-white/10"
                                    }`}
                            >
                                <button
                                    onClick={() => setActiveId(isOpen ? null : faq.id)}
                                    className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between text-left gap-3 sm:gap-4"
                                >
                                    <span className={`text-base sm:text-lg md:text-xl font-bold transition-colors flex-1 ${isOpen ? "text-primary" : "text-white group-hover:text-primary"}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all shrink-0 ${isOpen ? "bg-primary text-darkmode rotate-45" : "bg-white/5"}`}>
                                        <Icon icon="tabler:plus" className="text-20 sm:text-24 md:text-28" style={{ color: isOpen ? '#000' : '#f9ac20' }} />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 pt-2">
                                                <div className="h-px w-full bg-white/5 mb-4 sm:mb-6" />
                                                <p className="text-muted leading-relaxed text-sm sm:text-base md:text-lg">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-10 sm:mt-12 md:mt-16 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                        <span className="text-white text-sm sm:text-base">Still have questions?</span>
                        <button className="text-primary font-bold hover:underline text-sm sm:text-base">Contact Support</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
