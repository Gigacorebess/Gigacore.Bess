"use client";
import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { motion } from "framer-motion";
import { Battery, CloudSun, LayoutGrid } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const services = [
    {
        icon: Battery,
        title: "Battery Energy Storage",
        desc: "Advanced LFP-based storage systems for grid, commercial, industrial and renewable energy applications.",
    },
    {
        icon: CloudSun,
        title: "Solar Modules",
        desc: "High-efficiency solar modules for utility-scale, rooftop, commercial and industrial solar projects.",
    },
    {
        icon: LayoutGrid,
        title: "Solar + Storage Integration",
        desc: "Integrated solutions that combine solar generation with battery storage to improve reliability, flexibility and energy economics.",
    },
];

export default function SmarterPath() {
    return (
        <section className="relative py-[var(--spacing-section)] bg-gray-50 border-b border-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <SectionWrapper>
                <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-[length:var(--font-h1)] font-bold text-gray-900 mb-6 tracking-tight">
                            What We Do
                        </h2>
                        <p className="text-[16px] sm:text-[18px] text-gray-600 leading-relaxed">
                            Gigacore Systems provides integrated solar and battery storage solutions for customers who need cleaner, more reliable and more flexible power.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mb-16"
                >
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.10)] transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-3xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6">
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-4xl mx-auto text-center relative z-10"
                >
                    <div className="inline-block bg-white px-8 py-6 rounded-3xl border border-brand-primary/20 shadow-sm">
                        <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary" />
                        <p className="text-[16px] sm:text-[18px] text-gray-800 font-medium leading-relaxed">
                            Our focus areas include utility-scale battery energy storage, commercial and industrial storage, solar module supply, solar-plus-storage project design, peak-load management, backup power, renewable energy optimization and curtailment reduction.
                        </p>
                    </div>
                </motion.div>
            </SectionWrapper>
        </section>
    );
}
