"use client";
import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle, Factory, Building2, ShieldCheck, ArrowRight } from "lucide-react";

const principles = [
    "Long-term alignment over transactional engagement",
    "Clear division of roles and responsibilities",
    "Transparency in technical and economic validation",
    "Deployment at meaningful industrial scale",
];

const partnerTypes = [
    {
        title: "Industrial & Offtake Partners",
        details: [
            "Existing demand anchors deployment and ensures offtake certainty",
            "Priority sectors include fertilizers, refining, metals, and industrial clusters",
            "Focus on real operating environments and commercial-scale supply chains",
        ],
        icon: Building2,
    },
    {
        title: "Public-Sector Collaboration",
        details: [
            "Pilot programs and large-scale demonstration projects",
            "Alignment with national infrastructure goals and energy transition mandates",
            "Structured support for bankable clean energy deployments",
        ],
        icon: ShieldCheck,
    },
    {
        title: "EPC & Infrastructure Partners",
        details: [
            "Integrated execution, construction, and commissioning capability",
            "Modular systems designed for established EPC workflows",
            "Safety, regulatory compliance, and repeatable deployment",
        ],
        icon: Factory,
    },
    {
        title: "Manufacturing & Localization Partners",
        details: [
            "Cost-effective fabrication and quality-controlled production",
            "Localization of components and domestic manufacturing",
            "Standardized modules for faster scale-up and replication",
        ],
        icon: ArrowRight,
    },
];

const revenueModels = [
    {
        title: "Equipment Sales",
        subtitle: "Upfront capital revenue",
        points: [
            "Factory-built modular systems",
            "Standardized units for predictable delivery",
            "Scalable production and reduced installation risk",
        ],
    },
    {
        title: "Service & O&M",
        subtitle: "Recurring revenue",
        points: [
            "Long-term maintenance agreements",
            "Performance support and remote monitoring",
            "Growing revenue with installed fleet expansion",
        ],
    },
    {
        title: "Project Partnerships",
        subtitle: "Shared deployment models",
        points: [
            "Joint venture and project finance structures",
            "Partner-aligned risk sharing",
            "Commercial-scale rollout with shared economics",
        ],
    },
];

export default function PartnershipPage() {
    return (
        <main className="bg-white">
            <section className="relative bg-gray-900 text-white py-28 sm:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.3),_transparent_45%)] opacity-80" />
                <SectionWrapper className="relative z-10">
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
                        <motion.span variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-primary mb-4 inline-block">Partnerships</motion.span>
                        <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.02] mb-6">Scale through aligned execution and institutional collaboration</motion.h1>
                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Gigacore seeks partners who bring industrial demand, manufacturing capability, execution strength, and capital discipline — not experimental proof-of-concept relationships.</motion.p>
                    </motion.div>
                </SectionWrapper>
            </section>

            <section className="py-24 bg-white">
                <SectionWrapper>
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
                        <motion.div variants={fadeUp} className="text-center mb-14">
                            <span className="text-brand-primary font-bold tracking-widest uppercase text-[12px] mb-3 block">Our Approach</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary">A disciplined partnership model with commercial focus</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">We structure partnerships around four core principles to ensure every engagement is positioned for industrial relevance and measurable outcomes.</p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="grid gap-6 md:grid-cols-2">
                            {principles.map((principle, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-3xl border border-gray-200 p-8 shadow-sm">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary mb-4">{idx + 1}</div>
                                    <p className="text-gray-700 leading-relaxed">{principle}</p>
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
                            <span className="text-brand-primary font-bold tracking-widest uppercase text-[12px] mb-3 block">Partner Types</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary">Who we engage with</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">Our engagements are designed for organisations that can support industrial deployment, infrastructure build-out, and long-term energy system operation.</p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="grid gap-6 lg:grid-cols-2">
                            {partnerTypes.map((partner) => (
                                <div key={partner.title} className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900">{partner.title}</h3>
                                        </div>
                                        <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                            <partner.icon className="w-6 h-6" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <ul className="space-y-3 text-gray-600">
                                        {partner.details.map((detail, idx) => (
                                            <li key={idx} className="flex gap-3 items-start">
                                                <CheckCircle className="w-4 h-4 mt-1 text-brand-primary shrink-0" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            <section className="py-24 bg-white">
                <SectionWrapper>
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
                        <motion.div variants={fadeUp} className="text-center mb-14">
                            <span className="text-brand-primary font-bold tracking-widest uppercase text-[12px] mb-3 block">Revenue Model</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary">Aligned financial structures for deployment and operation</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">We design partnership models with clear revenue pathways for equipment, services, and project collaboration.</p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="grid gap-6 lg:grid-cols-3">
                            {revenueModels.map((item) => (
                                <div key={item.title} className="bg-brand-light rounded-3xl border border-brand-primary/10 p-8 shadow-sm">
                                    <div className="text-sm uppercase tracking-[0.34em] font-bold text-brand-primary mb-3">{item.subtitle}</div>
                                    <h3 className="text-2xl font-bold text-brand-secondary mb-4">{item.title}</h3>
                                    <ul className="space-y-3 text-gray-600">
                                        {item.points.map((point, idx) => (
                                            <li key={idx} className="flex gap-3 items-start">
                                                <CheckCircle className="w-4 h-4 mt-1 text-brand-primary shrink-0" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            <section className="relative py-24 bg-brand-secondary text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <SectionWrapper className="relative z-10 text-center">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">Partner for scale and certainty</h2>
                        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">Gigacore is looking for partners who want to move from validated technology to dependable, deployable clean energy infrastructure.</p>
                        <Link href="/contact">
                            <Button variant="outline">Contact the partnerships team</Button>
                        </Link>
                    </motion.div>
                </SectionWrapper>
            </section>
        </main>
    );
}
