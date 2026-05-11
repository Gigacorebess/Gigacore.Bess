"use client";
import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import SplitSection from "@/components/ui/SplitSection";
import Image from "next/image";
import { Target, Zap, Rocket, ShieldCheck, UserCheck, CheckCircle } from "lucide-react";

export default function CompanyPage() {
    return (
        <main className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/ChatGPT%20Image%20May%2011%2C%202026%2C%2012_08_00%20PM.png"
                        alt="Gigacore headquarters"
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                </div>
                <SectionWrapper className="relative h-full flex flex-col justify-center items-center text-center z-10">
                    <div className="bg-white/75 backdrop-blur-md rounded-2xl px-8 py-8 md:px-14 md:py-10 shadow-xl max-w-2xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-[length:var(--font-hero)] font-bold tracking-tight mb-4 leading-tight text-brand-secondary"
                        >
                            About <span className="text-brand-primary">Gigacore</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg text-gray-600 max-w-xl"
                        >
                            Advancing solar and battery energy storage systems for real-world industrial deployment.
                        </motion.p>
                    </div>
                </SectionWrapper>
            </section>

            {/* 2. Intro Section */}
            <section className="py-[var(--spacing-section)] bg-white text-center">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto flex flex-col items-center"
                    >
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-normal leading-relaxed text-gray-800 mb-8">
                            Gigacore is a climate-technology company focused on advancing next-generation solar and battery energy storage systems designed for real-world industrial deployment.
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-[length:var(--font-body)] text-gray-600 mb-5 max-w-3xl leading-relaxed">
                            We address a fundamental challenge: how to deliver reliable solar and battery storage at the <span className="text-brand-primary font-bold">scale and cost required by industry</span>, without relying on incremental improvements to legacy technologies.
                        </motion.p>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. Mission */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/Our%20Mission.jpg"
                imageAlt="Our Mission"
                unoptimized
                subtitle="Purpose"
                title="Our Mission"
                content={
                    <>
                        <p className="mb-6">
                            To enable the global transition to clean energy by developing innovative solar and battery energy storage solutions that are economically viable, industrially scalable, and deployable where energy demand already exists.
                        </p>
                        <div className="p-4 bg-white rounded-lg border-l-4 border-brand-primary shadow-sm">
                            <p className="text-brand-primary font-medium italic">
                                &quot;Clean energy solutions must compete on fundamentals - cost, reliability, and scale - to achieve lasting impact.&quot;
                            </p>
                        </div>
                    </>
                }
            />

            {/* 4. Vision */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/Our%20Vision.jpg"
                imageAlt="Our Vision"
                unoptimized
                subtitle="Aspiration"
                title="Our Vision"
                content={
                    <>
                        <p className="mb-6">
                            Gigacore envisions a future where solar and battery storage are not niche solutions, but core industrial assets. We see a world where energy infrastructure is decoupled from carbon intensity without compromising reliability or economic output.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex gap-3 items-center text-gray-700 font-medium">
                                <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" />
                                Establish new global benchmarks for efficiency
                            </li>
                            <li className="flex gap-3 items-center text-gray-700 font-medium">
                                <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" />
                                Support large-scale industrial decarbonization
                            </li>
                            <li className="flex gap-3 items-center text-gray-700 font-medium">
                                <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" />
                                Prioritize deployment and impact over demonstration
                            </li>
                        </ul>
                    </>
                }
            />

            {/* 5. Why Gigacore Exists */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/Why%20Gigacore%20Exists.jpg"
                imageAlt="The Challenge"
                unoptimized
                subtitle="The Challenge"
                title="Why Gigacore Exists"
                content={
                    <>
                        <p className="mb-6">
                            Conventional solar-plus-storage systems often struggle to meet the cost and reliability thresholds required for widespread industrial adoption.
                        </p>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center shrink-0 text-brand-primary font-bold text-sm">1</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Molecular Rethink</h4>
                                    <p className="text-gray-600 text-sm">Rethinking how energy is delivered at the molecular level.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center shrink-0 text-brand-primary font-bold text-sm">2</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Advanced Physics</h4>
                                    <p className="text-gray-600 text-sm">Applying a proprietary next-gen electrochemical system architecture.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center shrink-0 text-brand-primary font-bold text-sm">3</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Scalability First</h4>
                                    <p className="text-gray-600 text-sm">Designing systems around efficiency and massive scalability.</p>
                                </div>
                            </div>
                        </div>
                    </>
                }
            />

            {/* 6 & 7. Technology Philosophy + Industrial Deployment */}
            <section className="py-[var(--spacing-section)]" style={{ background: "linear-gradient(135deg, #c8daf5 0%, #ddeaf9 45%, #c4d8f2 100%)" }}>
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
                    >
                        {/* Technology Philosophy — light card */}
                        <motion.div
                            variants={fadeUp}
                            whileHover={{ y: -4 }}
                            transition={{ type: "spring", stiffness: 280 }}
                            className="rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-xl transition-shadow duration-300" style={{ background: "linear-gradient(145deg, #f0f6ff 0%, #e2eef8 100%)" }}
                        >
                            <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-5">
                                <Zap className="w-6 h-6 text-brand-primary" />
                            </div>
                            <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-2 block">Innovation</span>
                            <h2 className="text-2xl font-bold mb-4 text-brand-secondary">Technology Philosophy</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                Rather than optimizing existing infrastructure, we focus on integrated solar and battery system architectures that deliver lower total lifecycle energy cost and higher operational reliability.
                            </p>
                            <ul className="space-y-3">
                                {["Precision energy delivery", "Moderate operating conditions", "Distributed interaction architectures"].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-center text-gray-700 text-sm font-medium">
                                        <CheckCircle className="w-4 h-4 text-brand-primary shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Industrial Deployment — light card */}
                        <motion.div
                            variants={fadeUp}
                            whileHover={{ y: -4 }}
                            transition={{ type: "spring", stiffness: 280 }}
                            className="rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-xl transition-shadow duration-300" style={{ background: "linear-gradient(145deg, #f0f6ff 0%, #e2eef8 100%)" }}
                        >
                            <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-5">
                                <Rocket className="w-6 h-6 text-brand-primary" />
                            </div>
                            <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-2 block">Execution</span>
                            <h2 className="text-2xl font-bold mb-4 text-brand-secondary">Industrial Deployment</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                The objective is to move beyond laboratory success toward commercially relevant, infrastructure-grade systems.
                            </p>
                            <ul className="space-y-3">
                                {["Continuous operation requirements", "EPC compatibility", "Third-party validation"].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-center text-gray-700 text-sm font-medium">
                                        <CheckCircle className="w-4 h-4 text-brand-primary shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 8. Global Impact */}
            <section className="relative min-h-[480px] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/ChatGPT%20Image%20May%2011%2C%202026%2C%2012_42_12%20PM.png"
                        alt="Global Impact"
                        fill
                        className="object-cover object-center"
                        unoptimized
                    />
                </div>
                <SectionWrapper className="relative z-10 py-16">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-lg"
                    >
                        <div className="bg-white/85 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-xl">
                            <motion.span variants={fadeUp} className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-3 block">
                                Reach
                            </motion.span>
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-5 text-brand-secondary leading-tight">
                                Global Impact, Practical Focus
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-gray-600 mb-6 leading-relaxed">
                                While the technology has global relevance, deployment strategy emphasizes regions and sectors where solar-plus-storage demand is immediate and substantial.
                            </motion.p>
                            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                                {["Data Centers", "Manufacturing", "Utilities", "Industrial Clusters"].map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* Solutions Built Around Your Site */}
            <section className="py-[var(--spacing-section)] bg-white border-y border-brand-primary/5">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <motion.div variants={fadeUp} className="text-center mb-6">
                            <span className="text-brand-primary font-bold tracking-widest uppercase text-[12px] mb-3 block">Customer Solutions</span>
                            <h2 className="text-[length:var(--font-h1)] font-bold text-brand-secondary mb-4">
                                Solutions Built Around <span className="text-brand-primary">Your Site</span>
                            </h2>
                            <p className="text-[15px] sm:text-[16px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Every deployment is unique. We design solutions that integrate seamlessly with your existing infrastructure, operational requirements, and energy goals.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Site Assessment & Design",
                                    icon: Target,
                                    description: "Comprehensive evaluation of your energy needs, grid connection, and infrastructure to create a tailored solution.",
                                    features: [
                                        "Load analysis and energy modeling",
                                        "Grid interconnection planning",
                                        "Regulatory compliance review",
                                        "Custom system architecture design"
                                    ]
                                },
                                {
                                    title: "Turnkey Implementation",
                                    icon: Zap,
                                    description: "End-to-end project execution from engineering to commissioning, ensuring seamless integration with your operations.",
                                    features: [
                                        "Detailed engineering and procurement",
                                        "Factory testing and quality assurance",
                                        "Professional installation services",
                                        "Comprehensive commissioning support"
                                    ]
                                },
                                {
                                    title: "Operations & Maintenance",
                                    icon: ShieldCheck,
                                    description: "Ongoing system optimization and support to maximize performance and minimize downtime throughout the system's lifecycle.",
                                    features: [
                                        "24/7 monitoring and remote diagnostics",
                                        "Preventive maintenance programs",
                                        "Performance optimization services",
                                        "Extended warranty and support packages"
                                    ]
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-brand-light rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-brand-blue-100">
                                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 text-brand-primary">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-secondary mb-3">{item.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                                    <ul className="space-y-2">
                                        {item.features.map((feature, j) => (
                                            <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                                                <CheckCircle className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* Full-Chain Manufacturing */}
            <section className="py-12 bg-white">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={fadeUp} className="text-center mb-6">
                            <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-3 block">Manufacturing</span>
                            <h2 className="text-4xl font-bold text-brand-secondary">Full-Chain Manufacturing</h2>
                            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Integrated supply chain from cell production to system deployment, ensuring quality at every stage.</p>
                        </motion.div>
                        <motion.div variants={fadeUp} className="relative w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/1218%20Re_GOTION%20EN_260510_195022%20conv%2025.png"
                                alt="Full-Chain Manufacturing"
                                width={1400}
                                height={787}
                                className="w-full h-auto"
                                unoptimized
                            />
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* Strategy */}
            <section className="py-12 bg-brand-light">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={fadeUp} className="text-center mb-6">
                            <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-3 block">Strategy</span>
                            <h2 className="text-4xl font-bold text-brand-secondary">Corporate Strategy</h2>
                            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Our strategic roadmap for delivering sustainable energy solutions at industrial scale.</p>
                        </motion.div>
                        <motion.div variants={fadeUp} className="relative w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/1.png"
                                alt="Corporate Strategy"
                                width={1400}
                                height={787}
                                className="w-full h-auto"
                                unoptimized
                            />
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* Partners */}
            <section className="py-12 bg-white">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={fadeUp} className="text-center mb-6">
                            <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-3 block">Ecosystem</span>
                            <h2 className="text-4xl font-bold text-brand-secondary">Global Partners</h2>
                            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Working with leading industrial operators, infrastructure developers, and public-sector enterprises worldwide.</p>
                        </motion.div>
                        <motion.div variants={fadeUp} className="relative w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/1218%20Re_GOTION%20EN_260510_195022%20conv%2023.png"
                                alt="Global Partners"
                                width={1400}
                                height={787}
                                className="w-full h-auto"
                                unoptimized
                            />
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* Sustainability */}
            <section className="py-12 bg-brand-light">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={fadeUp} className="text-center mb-6">
                            <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-3 block">Sustainability</span>
                            <h2 className="text-4xl font-bold text-brand-secondary">ESG Commitment</h2>
                            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Our commitment to environmental, social, and governance principles across all operations and products.</p>
                        </motion.div>
                        <motion.div variants={fadeUp} className="relative w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/1218%20Re_GOTION%20EN_260510_195022%20conv%2027.png"
                                alt="ESG Commitment"
                                width={1400}
                                height={787}
                                className="w-full h-auto"
                                unoptimized
                            />
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 9. Credibility */}
            <section className="py-[var(--spacing-section)] bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="max-w-4xl mx-auto text-center mb-8">
                        <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h2 className="text-[length:var(--font-h1)] font-bold mb-6 text-brand-secondary">Commitment to <span className="text-gradient-green-glow">Credibility</span></h2>
                        <p className="text-[15px] sm:text-[16px] text-gray-600 mb-6 leading-relaxed">
                            We prioritize long-term credibility over short-term visibility. We build trust through measurable performance, transparent milestones, and structured validation.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                            <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <UserCheck className="w-6 h-6 text-brand-primary" />
                                    <h4 className="text-[16px] sm:text-[18px] font-bold text-brand-secondary">Collaboration-Driven Growth</h4>
                                </div>
                                <p className="text-gray-600 mb-4">Growth is pursued through partnerships that align technical capability with execution scale.</p>
                                <ul className="space-y-2">
                                    <li className="text-sm text-gray-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Industrial operators</li>
                                    <li className="text-sm text-gray-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Public-sector enterprises</li>
                                    <li className="text-sm text-gray-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Infrastructure developers</li>
                                </ul>
                            </div>
                            <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <Rocket className="w-6 h-6 text-brand-primary" />
                                    <h4 className="text-[16px] sm:text-[18px] font-bold text-brand-secondary">Looking Ahead</h4>
                                </div>
                                <p className="text-gray-600 mb-4">The company’s journey is defined not by hype, but by execution.</p>
                                <ul className="space-y-2">
                                    <li className="text-sm text-gray-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Advancing technology readiness</li>
                                    <li className="text-sm text-gray-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Performance at scale</li>
                                    <li className="text-sm text-gray-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Enabling industrial adoption</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* Talent */}
            <section className="py-12 bg-white">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={fadeUp} className="text-center mb-6">
                            <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-3 block">Our Team</span>
                            <h2 className="text-4xl font-bold text-brand-secondary">People Behind the Mission</h2>
                            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">A multidisciplinary team of engineers, scientists, and industry professionals driving clean energy innovation.</p>
                        </motion.div>
                        <motion.div variants={fadeUp} className="relative w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/ChatGPT%20Image%20May%2011%2C%202026%2C%2012_39_17%20PM.png"
                                alt="Our Team"
                                width={1400}
                                height={787}
                                className="w-full h-auto"
                                unoptimized
                            />
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 10. CTA Section */}
            <section className="py-[var(--spacing-section)] lg:py-[var(--spacing-section)] bg-brand-secondary">
                <SectionWrapper className="text-center">
                    <h2 className="text-[length:var(--font-h1)] font-bold text-white mb-6">Engage with Gigacore</h2>
                    <p className="text-[15px] sm:text-[16px] text-gray-300 mb-5 max-w-2xl mx-auto leading-relaxed">
                        We work with partners who approach solar and storage as industrial assets and strategic infrastructure.
                    </p>
                    <Link href="/contact">
                        <Button variant="primary" size="md" className="w-full sm:w-auto min-w-[220px] whitespace-nowrap shadow-glow">
                            Strategic Discussions
                        </Button>
                    </Link>
                </SectionWrapper>
            </section>

        </main>
    );
}
