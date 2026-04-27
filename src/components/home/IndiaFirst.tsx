"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function IndiaFirst() {
    return (
        <section className="py-12 md:py-20 bg-white border-b border-gray-100 overflow-hidden">
            <SectionWrapper className="max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">

                    {/* Image Side - Map/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group">
                            <Image
                                src="/home/build.png"
                                alt="Built for India's Scale"
                                fill
                                className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-secondary/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
                            <span className="h-px w-8 bg-brand-primary"></span>
                            <span className="text-brand-primary font-bold uppercase tracking-widest text-[15px]">
                                India-First, Globally Relevant
                            </span>
                        </motion.div>

                        <motion.h2 variants={fadeUp} className="text-2xl md:text-4xl font-bold mb-4 leading-tight text-brand-secondary">
                            Built for <span className="text-gradient-green-glow font-bold">India's Scale</span> - Relevant Worldwide
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-gray-600 text-[15px] sm:text-[16px] mb-8 leading-relaxed">
                            India represents one of the world’s most demanding hydrogen markets: price-sensitive, scale-intensive, and policy-driven.
                        </motion.p>

                        <motion.div variants={fadeUp} className="space-y-8">
                            <div className="pl-6 border-l-2 border-brand-primary">
                                <h4 className="font-bold text-xl mb-3 text-brand-secondary">India Strategy</h4>
                                <ul className="space-y-1.5 text-gray-600 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                                        Alignment to India’s National Green Hydrogen Mission
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                                        Compatibility with domestic manufacturing and localization
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                                        Readiness for PSU-led and private industrial deployment
                                    </li>
                                </ul>
                            </div>

                            <div className="pl-6 border-l-2 border-gray-200">
                                <h4 className="font-bold text-xl mb-3 text-gray-400">Global Relevance</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    At the same time, the underlying economics and architecture are applicable to global industrial markets seeking cost-competitive green hydrogen.
                                </p>
                            </div>
                        </motion.div>

                    </motion.div>

                </div>
            </SectionWrapper>
        </section>
    );
}
