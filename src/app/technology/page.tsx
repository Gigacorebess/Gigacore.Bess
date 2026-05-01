"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Check, Battery, Zap, Thermometer } from "lucide-react";
import Button from "@/components/ui/Button";
import * as THREE from "three";
// @ts-ignore
import HALO from "vanta/dist/vanta.halo.min";
import SplitSection from "@/components/ui/SplitSection";

export default function TechnologyPage() {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                HALO({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    baseColor: 0x00D563,
                    backgroundColor: 0x111827,
                    size: 1.5,
                    amplitudeFactor: 1.2,
                    xOffset: 0.1,
                    yOffset: 0.1,
                    THREE: THREE
                })
            );
        }
        return () => {
            if (vantaEffect) (vantaEffect as any).destroy();
        };
    }, [vantaEffect]);

    return (
        <main className="bg-white">

            {/* 1. Hero Section */}
            <section ref={vantaRef} className="relative h-screen min-h-[800px] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-0" />

                <SectionWrapper className="relative h-full flex flex-col justify-center items-center text-center text-white z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[length:var(--font-hero)] font-bold tracking-tight mb-6 leading-[1.1] drop-shadow-lg"
                    >
                        Battery Storage <span className="text-brand-primary">Technology</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-2xl text-gray-200 max-w-2xl drop-shadow-lg"
                    >
                        Advanced LFP-based energy storage systems for industrial deployment
                    </motion.p>
                </SectionWrapper>
            </section>

            {/* 2. Intro Section */}
            <section className="py-[calc(var(--spacing-section)*1.5)] bg-white text-center">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto flex flex-col items-center"
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl md:text-4xl lg:text-5xl leading-tight font-medium text-gray-800 mb-8 max-w-4xl"
                        >
                            Gigacore Systems focuses on advanced <span className="text-brand-primary font-bold">LFP-based battery energy storage systems</span> for commercial, industrial and utility-scale energy applications
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="text-lg text-gray-700 max-w-3xl"
                        >
                            Our platform approach combines battery cells, liquid-cooled packs, outdoor cabinets, PCS integration, communication systems, thermal management and safety architecture — designed for high energy density, long cycle life, reliable outdoor operation and industrial-grade performance.
                        </motion.p>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. LFP Battery Chemistry */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/Technology/battery-cells.jpg"
                imageAlt="LFP Battery Cells"
                subtitle="Battery Technology"
                title="LFP Battery Chemistry"
                content={
                    <>
                        <p>
                            Lithium Iron Phosphate (LFP) battery systems are widely used for stationary energy storage because of their superior safety characteristics, extended cycle life, excellent thermal stability and suitability for large-scale deployment.
                        </p>
                        <ul className="space-y-2 mt-6">
                            {[
                                "Higher thermal stability and inherent safety",
                                "Extended cycle life (3,000+ cycles at 80% capacity)",
                                "Lower risk of thermal runaway",
                                "Ideal for outdoor and extreme-environment deployment",
                                "Proven performance across global commercial and utility projects"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-brand-primary">
                                        <Check className="w-4 h-4" strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* 4. Liquid-Cooled Architecture */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/Technology/cooling-system.jpg"
                imageAlt="Liquid Cooling System"
                subtitle="Thermal Management"
                title="Liquid-Cooled Battery Architecture"
                content={
                    <>
                        <p>
                            Intelligent liquid cooling systems are essential for maintaining battery performance, consistency and long-term reliability. Liquid cooling helps distribute heat evenly across battery cells, reducing temperature gradients and extending system lifespan.
                        </p>
                        <div className="space-y-1.5 mt-6">
                            {[
                                "Improves temperature control and cell consistency",
                                "Enables higher charge/discharge rates safely",
                                "Extends overall system lifecycle",
                                "Reduces maintenance requirements",
                                "Supports reliable operation in diverse climates"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-1.5 p-3 bg-white border border-brand-primary/10 rounded-lg shadow-sm">
                                    <div className="w-2 h-2 bg-brand-primary rounded-full shrink-0" />
                                    <span className="font-medium text-gray-800">{item}</span>
                                </div>
                            ))}
                        </div>
                    </>
                }
            />

            {/* 5. Modular Cabinet Design */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/Technology/cabinet-design.jpg"
                imageAlt="Modular Cabinet Design"
                subtitle="System Architecture"
                title="Modular Cabinet and Container Design"
                content={
                    <>
                        <p>
                            Our systems are deployed as scalable building blocks: commercial & industrial outdoor cabinets, all-in-one ESS units with integrated PCS, DC battery cabinets, and utility-scale containerized systems. This modular approach enables flexibility across project sizes and use cases.
                        </p>
                        <ul className="grid grid-cols-1 gap-2 mt-6">
                            {["C&I Outdoor Cabinets (261–836 kWh)", "All-in-One ESS (100–125 kW integrated)", "DC-Only Cabinets (external PCS)", "Containerized Utility Scale (5–20 MWh)", "PV-Storage Charging Systems"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2.5 text-gray-700">
                                    <div className="p-0.5 rounded-full bg-brand-primary/10 text-brand-primary">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* 6. PCS and Controls Integration */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/Technology/pcs-integration.jpg"
                imageAlt="PCS Integration"
                subtitle="Power Conversion"
                title="PCS and Controls Integration"
                content={
                    <>
                        <p>
                            Power Conversion Systems (PCS) are the bridge between DC battery energy and AC grid power. Our PCS integrations support intelligent charge/discharge control, grid interface protocols, solar-plus-storage charging and sophisticated battery management algorithms.
                        </p>
                        <ul className="space-y-2 mt-6">
                            {[
                                "Converts DC battery energy to AC grid-compatible power",
                                "Supports peak shaving, load shifting and backup power modes",
                                "Enables solar charging, storage and discharge sequencing",
                                "Integrated communication with battery management systems",
                                "Supports grid interconnection standards and protocols"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium bg-gradient-to-r from-brand-primary/5 to-white p-3 rounded-lg border border-brand-primary/10 shadow-sm">
                                    <Check className="w-4 h-4 text-brand-primary shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* 7. Safety and Compliance */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/Technology/safety-systems.jpg"
                imageAlt="Safety Systems"
                subtitle="Protection & Standards"
                title="Safety and Compliance Architecture"
                content={
                    <>
                        <p>
                            Industrial BESS systems are engineered with multi-layer safety architecture: IP-rated outdoor cabinets, integrated fire suppression, advanced battery management, electrical protection systems, communication interfaces, and compliance with international standards.
                        </p>
                        <div className="mt-6 space-y-3">
                            <div>
                                <p className="font-semibold text-gray-900 mb-2">Physical & Environmental Protection</p>
                                <ul className="space-y-1 ml-4">
                                    {["IP55-rated outdoor cabinets", "Thermal and shock protection", "Corrosion-resistant materials"].map((item, i) => (
                                        <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900 mb-2">Electrical & Fire Safety</p>
                                <ul className="space-y-1 ml-4">
                                    {["Multi-layer fire suppression", "Battery thermal monitoring", "Electrical isolation systems"].map((item, i) => (
                                        <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900 mb-2">Standards & Certifications</p>
                                <ul className="space-y-1 ml-4">
                                    {["UL9540, UL1973 (Energy Storage)", "IEC62477, IEC61000 (Grid Compatibility)", "UN38.3, UN3480 (Transportation)", "NFPA68/69 (Explosion Protection)"].map((item, i) => (
                                        <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </>
                }
            />

            {/* 8. Communication and Control */}
            <section className="py-[var(--spacing-section)] bg-white">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="max-w-3xl">
                            <motion.span variants={fadeUp} className="text-brand-primary font-bold tracking-widest uppercase text-[12px] mb-3 block">Integration</motion.span>
                            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Communication Interfaces</motion.h2>
                            <motion.p variants={fadeUp} className="text-lg text-gray-700 mb-10">
                                Our BESS systems support multiple communication protocols for seamless grid and plant integration, remote monitoring and predictive maintenance.
                            </motion.p>

                            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { icon: Zap, title: "CAN Protocol", desc: "Industrial real-time control and diagnostics" },
                                    { icon: Battery, title: "RS485/Modbus", desc: "Legacy SCADA and building management systems" },
                                    { icon: Thermometer, title: "Ethernet", desc: "Modern IP-based grid and cloud monitoring" },
                                    { icon: Check, title: "DNP3 / IEC60870-5-104", desc: "Utility-grade grid interconnection protocols" },
                                ].map((item, i) => (
                                    <motion.div key={i} variants={fadeUp} className="p-6 border border-gray-200 rounded-lg hover:border-brand-primary hover:shadow-lg transition-all">
                                        <item.icon className="w-8 h-8 text-brand-primary mb-4" />
                                        <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-700 text-sm">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 9. Applications */}
            <section className="py-[var(--spacing-section)] bg-gray-50">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={fadeUp} className="text-center mb-12">
                            <span className="text-brand-primary font-bold tracking-widest uppercase text-[12px] mb-3 block">Use Cases</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">BESS Applications</h2>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                Gigacore BESS systems are deployed across a wide range of commercial, industrial and utility applications.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Peak Shaving",
                                    desc: "Reduce demand charges by storing energy during low-cost periods and discharging during peak demand."
                                },
                                {
                                    title: "Renewable Integration",
                                    desc: "Smooth solar and wind generation, enabling higher renewable penetration and grid stability."
                                },
                                {
                                    title: "Backup Power",
                                    desc: "Provide critical backup power to facilities during grid outages or emergency conditions."
                                },
                                {
                                    title: "Energy Arbitrage",
                                    desc: "Participate in wholesale markets by charging during low-price periods and discharging during high-price periods."
                                },
                                {
                                    title: "Microgrids",
                                    desc: "Enable islanding and autonomous microgrids for improved resilience and energy independence."
                                },
                                {
                                    title: "Solar + Storage",
                                    desc: "Integrate solar generation with energy storage for seamless 24/7 renewable power supply."
                                },
                            ].map((app, i) => (
                                <motion.div key={i} variants={fadeUp} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-brand-primary hover:shadow-lg transition-all">
                                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{app.title}</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">{app.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 10. Product Lineup */}
            <section className="py-[var(--spacing-section)] bg-white">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                            Complete Product Portfolio
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                            From compact 261 kWh C&I cabinets to 20 MWh utility-scale containerized systems, Gigacore offers flexible BESS solutions for every project scale.
                        </motion.p>
                        <motion.div variants={fadeUp}>
                            <Link href="/products">
                                <Button variant="primary" size="lg">
                                    View All Products
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 11. CTA Section */}
            <section className="py-[var(--spacing-section)] bg-white">
                <SectionWrapper>
                    <div className="relative rounded-3xl overflow-hidden bg-brand-primary shadow-[0_0_40px_rgba(0,213,99,0.4)] border border-brand-primary/30 text-center py-16 px-6 md:px-12 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-accent opacity-90 z-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-0" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-[length:var(--font-h1)] font-bold text-white mb-6 drop-shadow-md">Ready to Deploy?</h2>
                            <p className="text-[15px] sm:text-[16px] text-white/95 mb-10 max-w-3xl mx-auto leading-[1.5]">
                                Discuss your BESS requirements with our energy storage specialists. We'll help you select the right system configuration for your facility, use case and budget.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/products">
                                    <Button variant="secondary" size="md" className="w-full sm:w-auto">
                                        Explore Products
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button variant="primary" size="md" className="!bg-white !text-brand-primary hover:!bg-gray-50 w-full sm:w-auto">
                                        Contact Our Team
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

        </main>
    );
}
