"use client";
import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function EconomicsPage() {
    const highlights = [
        {
            title: "Lower lifecycle energy cost",
            description: "Optimized integration of solar and battery systems reduces total delivered energy cost for industrial operations.",
        },
        {
            title: "Modular capital deployment",
            description: "Factory-built energy systems with standardized configurations lower installation and commissioning risk.",
        },
        {
            title: "Grid-aware performance",
            description: "Systems engineered for peak demand management, renewable smoothing, and reliable energy delivery.",
        },
    ];

    const metrics = [
        { label: "System Efficiency", value: "> 92%", description: "Net energy delivered to site after storage conversion and losses." },
        { label: "Operational Availability", value: "> 99%", description: "Designed for continuous industrial operation with maintenance windows built in." },
        { label: "Modular Deployment", value: "Up to 20 MW", description: "Scalable system blocks for commercial, industrial, and utility-scale projects." },
    ];

    return (
        <main className="bg-white">
            <section className="relative pt-32 pb-24 bg-white overflow-hidden">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <motion.span variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-primary mb-4 inline-block">
                            Economic Advantage
                        </motion.span>
                        <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Practical economics for solar and energy storage at scale
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Gigacore Systems delivers integrated solar and battery storage solutions designed to lower total energy costs, improve operating reliability, and accelerate project payback for industrial customers.
                        </motion.p>
                        <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                            <Button href="/contact" variant="primary">
                                Talk to Us
                            </Button>
                            <Button href="/products" variant="secondary">
                                View Products
                            </Button>
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            <section className="py-20 bg-gray-50">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center text-brand-secondary mb-12">
                            Economic Strengths
                        </motion.h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                                >
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </SectionWrapper>
            </section>

            <section className="py-24 bg-white">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center text-gray-900 mb-12">
                            Cost Metrics That Matter
                        </motion.h2>
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {metrics.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="bg-gray-50 border border-gray-200 rounded-3xl p-8"
                                >
                                    <div className="text-xl font-semibold text-brand-primary mb-3">{item.label}</div>
                                    <div className="text-4xl font-bold text-gray-900 mb-4">{item.value}</div>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div variants={fadeUp} className="bg-brand-secondary rounded-3xl p-10 text-white text-center">
                            <h3 className="text-3xl font-bold mb-4">System-level efficiency drives value</h3>
                            <p className="max-w-3xl mx-auto text-gray-100 leading-relaxed">
                                By optimizing the end-to-end flow of solar power through storage and site use, Gigacore Systems reduces delivered energy cost and improves reliability, making clean energy a stronger commercial choice.
                            </p>
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            <section className="py-24 bg-brand-secondary text-white">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-6">
                            Results that matter for project sponsors
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-lg text-gray-200 mb-10 leading-relaxed">
                            We focus on practical metrics: lower total energy cost, faster payback, dependable operation, and modular deployment that fits real industrial timelines.
                        </motion.p>
                        <Link href="/contact">
                            <Button variant="primary">
                                Speak with our team
                            </Button>
                        </Link>
                    </motion.div>
                </SectionWrapper>
            </section>
        </main>
    );
}
