"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";

const fadeUp = {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const technologies = [
    {
        title: "Battery Cell Architecture",
        description: "Modular cell and pack layouts designed for serviceability and reliability. Our architecture supports easy replacement and maintenance for long-term operational efficiency.",
        image: "/Battery%20Cell%20Architecture.jpg",
    },
    {
        title: "Thermal Management",
        description: "Advanced cooling pathways and temperature stability systems ensure reliable operation across varying environmental conditions. Optimised thermal design extends battery life.",
        image: "/Thermal%20Management.png",
    },
    {
        title: "Cabinet Design",
        description: "Robust outdoor cabinets with service access and comprehensive protection. Compact footprint maximises space efficiency while maintaining operational accessibility.",
        image: "/Cabinet%20Design.png",
    },
    {
        title: "PCS Integration",
        description: "Power conversion systems with integrated controls, cabling, and monitoring. Seamless integration for efficient energy flow and system-level performance optimisation.",
        image: "/PCS%20Integration.png",
    },
    {
        title: "Safety Systems",
        description: "Comprehensive monitoring, alarms, and emergency shutdown systems. Fire-suppression-ready architecture ensures maximum safety in all deployment scenarios.",
        image: "/safty.jpg",
    },
];

export default function TechnologyPage() {
    return (
        <main className="min-h-screen">

            {/* ─── HERO ─────────────────────────────────────────────── */}
            <section className="relative pt-32 pb-24 overflow-hidden min-h-[65vh] flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src="/1218%20Re_GOTION%20EN_260510_195022%20Image%5B10%5D.jpg"
                        alt="Battery cell technology"
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                </div>
                <SectionWrapper className="relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        {/* text on a frosted backdrop — no full-screen overlay */}
                        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-xl">
                            <motion.span variants={fadeUp} className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                                Technology
                            </motion.span>
                            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold mb-5 text-brand-secondary leading-tight">
                                Engineered for Reliable Energy Storage
                            </motion.h1>
                            <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed">
                                Clean system architecture focused on battery performance, cooling, PCS integration, cabinet design, and safety.
                            </motion.p>
                        </div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* ─── TECHNOLOGY SECTIONS ──────────────────────────────── */}
            {technologies.map((tech, idx) => (
                <section key={idx} className={`py-10 ${idx % 2 === 0 ? "bg-white" : "bg-brand-light"}`}>
                    <SectionWrapper>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className={`flex flex-col ${tech.image ? (idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse") : ""} gap-10 md:gap-16 items-center`}
                        >
                            {/* Text */}
                            <motion.div variants={fadeUp} className={tech.image ? "flex-1" : "max-w-2xl mx-auto text-center"}>
                                <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-3 block">
                                    0{idx + 1}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold mb-5 text-brand-secondary">{tech.title}</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">{tech.description}</p>
                            </motion.div>

                            {/* Image — only rendered when image exists */}
                            {tech.image && (
                                <motion.div variants={fadeUp} className="flex-1 w-full">
                                    <Image
                                        src={tech.image}
                                        alt={tech.title}
                                        width={900}
                                        height={700}
                                        className="w-full h-auto rounded-2xl shadow-xl"
                                        unoptimized
                                    />
                                </motion.div>
                            )}
                        </motion.div>
                    </SectionWrapper>
                </section>
            ))}

            {/* ─── MATERIAL SCIENCE ─────────────────────────────────── */}
            <section className="py-10 bg-white">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={fadeUp} className="text-center mb-5">
                            <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-3 block">Material Science</span>
                            <h2 className="text-4xl font-bold text-brand-secondary">Technical Strength</h2>
                        </motion.div>
                        <motion.div variants={fadeUp} className="relative w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/1218%20Re_GOTION%20EN_260510_195022%20conv%2011.png"
                                alt="Technical Strength — Material Science"
                                width={1400}
                                height={787}
                                className="w-full h-auto"
                                unoptimized
                            />
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* ─── DIGITAL SCIENCE ──────────────────────────────────── */}
            <section className="py-10 bg-brand-light">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={fadeUp} className="text-center mb-5">
                            <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-3 block">Digital</span>
                            <h2 className="text-4xl font-bold text-brand-secondary">Digital Science Platform</h2>
                        </motion.div>
                        <motion.div variants={fadeUp} className="relative w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/ChatGPT%20Image%20May%2011%2C%202026%2C%2012_16_16%20PM.png"
                                alt="Digital Science Platform"
                                width={1400}
                                height={787}
                                className="w-full h-auto"
                                unoptimized
                            />
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* ─── VERIFICATION PLATFORM ────────────────────────────── */}
            <section className="py-10 bg-white">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={fadeUp} className="text-center mb-5">
                            <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-3 block">Validation</span>
                            <h2 className="text-4xl font-bold text-brand-secondary">Verification Platform</h2>
                        </motion.div>
                        <motion.div variants={fadeUp} className="relative w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/1218%20Re_GOTION%20EN_260510_195022%20conv%2013.png"
                                alt="Verification Platform"
                                width={1400}
                                height={787}
                                className="w-full h-auto"
                                unoptimized
                            />
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* ─── CTA ──────────────────────────────────────────────── */}
            <section className="py-10 bg-brand-secondary">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-6 text-white">
                            Ready to explore our solutions?
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-lg mb-8 text-white/80">
                            Contact our team to learn more about our technology platform.
                        </motion.p>
                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/products" variant="primary">Explore Products</Button>
                            <Button href="/contact" variant="outline">Contact Our Team</Button>
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

        </main>
    );
}
