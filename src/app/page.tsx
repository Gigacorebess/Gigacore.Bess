"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/motion";

const fadeUp_ = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 bg-white overflow-hidden">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.h1 variants={fadeUp_} className="text-5xl md:text-7xl font-bold mb-6 text-brand-secondary leading-tight">
                            Powering Solar + Storage Infrastructure
                        </motion.h1>
                        <motion.p variants={fadeUp_} className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                            Gigacore Systems delivers commercial, industrial, and utility-scale battery energy storage and solar energy solutions for reliable clean power deployment.
                        </motion.p>
                        <motion.div variants={fadeUp_} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/products" variant="primary">
                                Explore Solutions
                            </Button>
                            <Button href="/products" variant="secondary">
                                View Products
                            </Button>
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* Solutions Section */}
            <section className="py-24 bg-gray-50">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.h2 variants={fadeUp_} className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand-secondary">
                            Built for Energy Reliability
                        </motion.h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Commercial & Industrial Storage",
                                    desc: "Compact BESS cabinets for factories, campuses, commercial buildings, and energy-intensive sites.",
                                },
                                {
                                    title: "Utility-Scale BESS",
                                    desc: "Containerized storage systems for grid support, renewable integration, and large-scale deployment.",
                                },
                                {
                                    title: "Solar + Storage Integration",
                                    desc: "Integrated solar modules, PCS, and storage platforms for reliable project-scale clean energy.",
                                },
                            ].map((solution, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp_}
                                    className="p-8 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                                >
                                    <h3 className="text-xl font-bold mb-3 text-brand-secondary">{solution.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{solution.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* Technology Preview */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        <motion.h2 variants={fadeUp_} className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand-secondary">
                            Engineered for Performance
                        </motion.h2>
                        <div className="grid md:grid-cols-5 gap-6">
                            {[
                                "Battery Cell Architecture",
                                "Thermal Management",
                                "Cabinet Design",
                                "PCS Integration",
                                "Safety Systems",
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp_}
                                    className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-center hover:border-green-500 transition-colors"
                                >
                                    <p className="font-semibold text-gray-800">{feature}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* Products Preview */}
            <section className="py-24 bg-gray-50">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        <motion.h2 variants={fadeUp_} className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand-secondary">
                            Storage and Solar Products
                        </motion.h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                "C&I BESS Cabinets",
                                "Utility-Scale BESS Containers",
                                "Solar Modules",
                                "Solar + Storage Systems",
                            ].map((product, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp_}
                                    className="p-8 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow text-center"
                                >
                                    <p className="font-semibold text-gray-800">{product}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* Company Section */}
            <section className="py-24 bg-white">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <motion.h2 variants={fadeUp_} className="text-4xl md:text-5xl font-bold mb-8 text-brand-secondary">
                            About Gigacore Systems
                        </motion.h2>
                        <motion.p variants={fadeUp_} className="text-lg text-gray-600 leading-relaxed mb-8">
                            Gigacore Systems focuses on solar energy, battery energy storage, and integrated project deployment for commercial, industrial, and utility-scale customers. We deliver reliable, scalable solutions for clean energy infrastructure.
                        </motion.p>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-brand-secondary text-white">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <motion.h2 variants={fadeUp_} className="text-4xl md:text-5xl font-bold mb-8">
                            Ready to build your solar + storage project?
                        </motion.h2>
                        <motion.div variants={fadeUp_} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/contact" variant="outline">
                                Talk to Us
                            </Button>
                            <Button href="/products" variant="secondary">
                                View Products
                            </Button>
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>
        </main>
    );
}
