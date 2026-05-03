"use client";
import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Globe, TrendingUp, BarChart3, Building2, Briefcase, CheckCircle, Target, ShieldCheck, Zap, TrendingDown, Factory } from "lucide-react";

const marketStats = [
    { label: "Global Demand", value: "95 MTPA", detail: "Existing industrial hydrogen consumption across fertilizers, refining, methanol, and steel." },
    { label: "Renewable Price", value: "$0.03–$0.05/kWh", detail: "Competitive clean electricity pricing in high-growth solar markets." },
    { label: "Industrial Scale", value: "500+ GW", detail: "Renewable energy targets driving large-scale storage and industrial demand." },
];

const marketDrivers = [
    { title: "Policy and decarbonization", description: "Governments are accelerating emissions reduction in heavy industry and utilities.", icon: Target },
    { title: "Demand stability", description: "Large industrial consumers require reliable, continuous energy supply.", icon: ShieldCheck },
    { title: "Cost thresholds", description: "Adoption depends on clear unit economics rather than speculative pricing.", icon: ArrowRight },
];

const indiaAdvantages = [
    { title: "Low electricity cost", value: "$0.03–$0.05/kWh", icon: TrendingDown, description: "Competitive renewable energy pricing enables cost-effective clean energy solutions." },
    { title: "Large industrial base", value: "10–12 GW demand", icon: Building2, description: "Established industrial infrastructure provides immediate demand for energy storage systems." },
    { title: "National commitment", value: "Infrastructure support", icon: Globe, description: "Government policies and infrastructure investments support clean energy deployment." },
];

export default function MarketPage() {
    return (
        <main className="bg-white">
            <section className="relative bg-gray-900 text-white py-28 sm:py-32">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.3),_transparent_45%)] opacity-80" />
                <SectionWrapper className="relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.span variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-primary mb-4 inline-block">
                            Market Insight
                        </motion.span>
                        <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.02] mb-6">
                            Industrial demand for clean energy is already established — the question is economics.
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Gigacore's market strategy focuses on proven demand centers, cost-competitive deployment models, and partners who can scale with established infrastructure.
                        </motion.p>
                        <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                            <Button href="/partnership" variant="primary">Partner with us</Button>
                            <Link href="/products"><Button variant="secondary">See solutions</Button></Link>
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            <section className="py-24 bg-gray-50">
                <SectionWrapper>
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
                        <motion.div variants={fadeUp} className="text-center mb-14">
                            <span className="text-brand-primary font-bold tracking-widest uppercase text-[12px] mb-3 block">Market Scale</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">A market shaped by existing industrial infrastructure</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">The hydrogen market is not speculative demand — it is built on decades of industrial consumption and established energy supply chains. Gigacore targets this momentum with solutions that match real-world economics.</p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="grid gap-6 md:grid-cols-3">
                            {marketStats.map((item) => (
                                <div key={item.label} className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
                                    <div className="text-[14px] uppercase tracking-[0.24em] font-bold text-brand-primary mb-4">{item.label}</div>
                                    <div className="text-4xl font-bold text-gray-900 mb-4">{item.value}</div>
                                    <p className="text-gray-600 leading-relaxed">{item.detail}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            <section className="py-24 bg-white">
                <SectionWrapper>
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
                        <motion.div variants={fadeUp} className="grid gap-6 lg:grid-cols-3">
                            {marketDrivers.map((item) => (
                                <div key={item.title} className="bg-gray-50 rounded-3xl border border-gray-200 p-8 shadow-sm hover:border-brand-primary/40 transition-all">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-5 text-brand-primary">
                                        <item.icon className="w-6 h-6" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            <section className="py-24 bg-brand-light">
                <SectionWrapper>
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
                        <motion.div variants={fadeUp} className="text-center mb-14">
                            <span className="text-brand-primary font-bold tracking-widest uppercase text-[12px] mb-3 block">Regional Advantage</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary">India as a first market: economics before hype</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">In markets with low renewable electricity costs and industrial demand, the economics for clean energy systems are clear. We are focused on regions where this advantage is already real.</p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="grid gap-6 md:grid-cols-3">
                            {indiaAdvantages.map((item) => (
                                <div key={item.title} className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-5 text-brand-primary">
                                        <item.icon className="w-6 h-6" strokeWidth={1.5} />
                                    </div>
                                    <div className="text-xl font-bold text-gray-900 mb-3">{item.value}</div>
                                    <h3 className="text-lg font-semibold text-brand-secondary mb-2">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <SectionWrapper className="relative z-10 text-center">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">The market is real — now build the infrastructure.</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">Projects that match existing industrial demand and strong economics are the most investable. Gigacore is positioned to deliver those outcomes with partners who understand execution.</p>
                        <Link href="/contact">
                            <Button variant="primary">Contact our market team</Button>
                        </Link>
                    </motion.div>
                </SectionWrapper>
            </section>
        </main>
    );
}
