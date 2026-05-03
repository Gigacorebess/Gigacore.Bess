"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";

const fadeUp_ = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TechnologyPage() {
    const technologies = [
        {
            title: "Battery Cell Architecture",
            description: "Modular cell and pack layouts designed for serviceability and reliability. Our architecture supports easy replacement and maintenance for long-term operational efficiency.",
            image: "/Technology/System Architecture.png",
        },
        {
            title: "Thermal Management",
            description: "Advanced cooling pathways and temperature stability systems ensure reliable operation across varying environmental conditions. Optimized thermal design extends battery life.",
            image: "/Technology/Designed for Industrial Operating Conditions.png",
        },
        {
            title: "Cabinet Design",
            description: "Robust outdoor cabinets with service access and comprehensive protection. Compact footprint maximizes space efficiency while maintaining operational accessibility.",
            image: "/Technology/Scalability Through Modularity.png",
        },
        {
            title: "PCS Integration",
            description: "Power conversion systems with integrated controls, cabling, and monitoring. Seamless integration for efficient energy flow and system-level performance optimization.",
            image: "/Technology/Integration with Industrial & Energy Systems.jpg",
        },
        {
            title: "Safety Systems",
            description: "Comprehensive monitoring, alarms, and emergency shutdown systems. Fire-suppression-ready architecture ensures maximum safety in all deployment scenarios.",
            image: "/Technology/Technology Readiness & Validation Path.jpg",
        },
    ];

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 bg-white overflow-hidden">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.h1 variants={fadeUp_} className="text-5xl md:text-7xl font-bold mb-6 text-brand-secondary leading-tight">
                            Engineered for Reliable Energy Storage
                        </motion.h1>
                        <motion.p variants={fadeUp_} className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                            Clean system architecture focused on battery performance, cooling, PCS integration, cabinet design, and safety.
                        </motion.p>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* Technology Sections */}
            {technologies.map((tech, idx) => (
                <section key={idx} className={`py-24 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <SectionWrapper>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
                        >
                            {/* Text Content */}
                            <motion.div variants={fadeUp_} className="flex-1">
                                <h2 className="text-4xl font-bold mb-6 text-brand-secondary">{tech.title}</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">{tech.description}</p>
                            </motion.div>

                            {/* Image */}
                            <motion.div variants={fadeUp_} className="flex-1">
                                <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                                    <img
                                        src={tech.image}
                                        alt={tech.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.backgroundColor = "#e5e7eb";
                                            (e.target as HTMLImageElement).style.display = "flex";
                                            (e.target as HTMLImageElement).style.alignItems = "center";
                                            (e.target as HTMLImageElement).style.justifyContent = "center";
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </SectionWrapper>
                </section>
            ))}

            {/* CTA Section */}
            <section className="py-24 bg-brand-secondary text-white">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <motion.h2 variants={fadeUp_} className="text-4xl font-bold mb-8">
                            Ready to explore our solutions?
                        </motion.h2>
                        <motion.p variants={fadeUp_} className="text-lg mb-8">
                            Contact our team to learn more about our technology platform.
                        </motion.p>
                        <motion.div variants={fadeUp_} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/products" className="px-6 py-3 bg-white text-brand-primary rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                                Explore Products
                            </a>
                            <a href="/contact" className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-brand-primary transition-colors">
                                Contact Our Team
                            </a>
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>
        </main>
    );
}