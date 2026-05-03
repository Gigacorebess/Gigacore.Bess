from pathlib import Path

pages = {
    Path(r"c:\Users\calyc\Documents\Gigacore.Bess\src\app\economics\page.tsx"): '''"use client";
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
''',
    Path(r"c:\Users\calyc\Documents\Gigacore.Bess\src\app\market\page.tsx"): '''"use client";
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
    { title: "Low electricity cost", value: "$0.03–$0.05/kWh", icon: TrendingDown },
    { title: "Large industrial base", value: "10–12 GW demand", icon: Building2 },
    { title: "National commitment", value: "Infrastructure support", icon: Globe },
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
''',
    Path(r"c:\Users\calyc\Documents\Gigacore.Bess\src\app\partnership\page.tsx"): '''"use client";
import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle, Target, Factory, Building2, ShieldCheck, ArrowRight } from "lucide-react";

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
'''
}

for path, text in pages.items():
    path.write_text(text, encoding='utf-8')
    print(f'Wrote {path}')
