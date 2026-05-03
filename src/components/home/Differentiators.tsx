"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import { Plus, Minus } from "lucide-react";

const BENEFITS = [
    {
        title: "Global Technology Access",
        description: "Solar and storage platforms from established international manufacturers.",
    },
    {
        title: "India Market Focus",
        description: "Solutions designed for Indian tariffs, solar conditions, grid constraints and industrial energy needs.",
    },
    {
        title: "Integrated Approach",
        description: "Solar, storage, controls, power conversion and project planning considered together.",
    },
    {
        title: "Execution-Oriented",
        description: "Focused on practical project development, vendor coordination and deployment readiness.",
    },
];

export default function Differentiators() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-[var(--spacing-section)] bg-brand-secondary text-white border-t border-white/10">
            <SectionWrapper>
                <div className="mb-12 text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[length:var(--font-h1)] font-bold mb-8 leading-[1.0] tracking-tight"
                    >
                        <span className="text-white">Why Gigacore Systems.</span><br />
                        <span className="text-brand-primary">Built for Deployment.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[length:var(--font-intro)] text-white font-light max-w-2xl leading-[1.75]"
                    >
                        We combine global product access, India-focused project understanding and practical execution support. Our role is to help customers evaluate the right technology, structure the right system and move quickly from discussion to implementation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <div className="space-y-0 border-t border-white/20">
                        {BENEFITS.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="border-b border-white/20"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between py-8 text-left group transition-all duration-300"
                                >
                                    <span className={`text-[length:var(--font-h3)] font-bold transition-colors ${openIndex === idx ? 'text-brand-primary' : 'text-white group-hover:text-brand-primary'}`}>
                                        {item.title}
                                    </span>
                                    <span className={`flex items-center justify-center w-8 h-8 transition-colors ${openIndex === idx ? 'text-brand-primary' : 'text-white/50 group-hover:text-brand-primary'}`}>
                                        {openIndex === idx ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {openIndex === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-white text-[15px] sm:text-[16px] leading-relaxed pb-8 pr-4">
                                                {item.description}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative w-full h-[300px] lg:h-full lg:min-h-[500px] bg-brand-dark/50 border border-white/10 overflow-hidden"
                    >
                        <Image
                            src="/home/build.png"
                            alt="Industrial solar and battery energy installation"
                            fill
                            className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 border border-white/10 z-10 pointer-events-none" />
                    </motion.div>
                </div>
            </SectionWrapper>
        </section>
    );
}
