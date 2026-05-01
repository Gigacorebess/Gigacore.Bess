"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Check, Grid3x3, Container, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import * as THREE from "three";
// @ts-ignore
import HALO from "vanta/dist/vanta.halo.min";
import SplitSection from "@/components/ui/SplitSection";

export default function ProductsPage() {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("c-i");

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

    const CheckItem = ({ text }: { text: string }) => (
        <li className="flex items-start gap-2.5 text-gray-700">
            <Check className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
            <span className="font-medium">{text}</span>
        </li>
    );

    const ProductCard = ({ product }: any) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
        >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
            <div className="space-y-4">
                <div>
                    <h4 className="font-bold text-brand-primary text-sm uppercase tracking-wider mb-3">Technical Specifications</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.specs.map((spec: any, idx: number) => (
                            <div key={idx} className="flex flex-col bg-gray-50 p-3 rounded">
                                <span className="text-xs uppercase tracking-wider text-gray-600 font-semibold">{spec.label}</span>
                                <span className="text-sm md:text-base font-medium text-gray-900 mt-1">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {product.highlights && (
                    <div>
                        <h4 className="font-bold text-brand-primary text-sm uppercase tracking-wider mb-2">Key Features</h4>
                        <ul className="space-y-1.5">
                            {product.highlights.map((highlight: string, idx: number) => (
                                <CheckItem key={idx} text={highlight} />
                            ))}
                        </ul>
                    </div>
                )}
                {product.features && (
                    <div>
                        <h4 className="font-bold text-brand-primary text-sm uppercase tracking-wider mb-2">Features</h4>
                        <ul className="space-y-1.5">
                            {product.features.map((feature: string, idx: number) => (
                                <CheckItem key={idx} text={feature} />
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </motion.div>
    );

    const ciProducts = [
        {
            name: "C&I Outdoor BESS Cabinet — 760 kWh",
            specs: [
                { label: "Energy Capacity", value: "760 kWh" },
                { label: "Battery Cell", value: "300Ah" },
                { label: "Configuration", value: "2P396S" },
                { label: "Cooling", value: "Liquid-cooled" },
                { label: "IP Rating", value: "IP55" },
                { label: "Communication", value: "CAN, RS485, Ethernet" },
                { label: "Dimensions", value: "2400 × 1400 × 2500 mm" },
                { label: "Weight", value: "≈ 8000 kg" },
                { label: "Max Altitude", value: "≤ 2000 m (derating above)" },
                { label: "Certifications", value: "UL9540A, UL9540, UL1973, UN38.3, UN3480, NFPA68, IEC62477-1, IEC 61000-6-2/4, IEC 63056, IEC 62619, IEC 60730-1, GB/T 36276" },
            ],
            features: [
                "Industrial-grade outdoor deployment",
                "Liquid cooling for extended lifespan",
                "Multi-layer protection and safety systems",
                "Modular architecture for scalable deployment"
            ]
        },
        {
            name: "C&I Outdoor BESS Cabinet — 836 kWh",
            specs: [
                { label: "Energy Capacity", value: "836 kWh" },
                { label: "Battery Cell", value: "314Ah" },
                { label: "Configuration", value: "1P416S" },
                { label: "Cooling", value: "Liquid-cooled" },
                { label: "IP Rating", value: "IP55" },
                { label: "Communication", value: "CAN, RS485, Ethernet" },
                { label: "Dimensions", value: "2400 × 1400 × 2420 mm" },
                { label: "Weight", value: "≈ 8000 kg" },
                { label: "Max Altitude", value: "≤ 3000 m (derating above)" },
                { label: "Certifications", value: "UL9540, UL1973, UL9540A, NFPA68, IEC62477, IEC61000, IEC63056, IEC62619, IEC60730, UN3480" },
            ]
        },
        {
            name: "C&I Outdoor BESS Cabinet — 522 kWh",
            specs: [
                { label: "Energy Capacity", value: "522 kWh" },
                { label: "Battery Cell", value: "314Ah" },
                { label: "Configuration", value: "1P260S" },
                { label: "Cooling", value: "Liquid-cooled" },
                { label: "IP Rating", value: "IP55" },
                { label: "Communication", value: "CAN, RS485, Ethernet" },
                { label: "Dimensions", value: "1900 × 1400 × 2420 mm" },
                { label: "Weight", value: "≈ 8000 kg" },
                { label: "Max Altitude", value: "≤ 4000 m (derating above)" },
                { label: "Certifications", value: "UL9540, UL1973, UL1741, UL9540A, NFPA68, NFPA69, UN3480" },
            ]
        },
        {
            name: "C&I Outdoor BESS Cabinet — 261 kWh",
            specs: [
                { label: "Energy Capacity", value: "261 kWh" },
                { label: "Battery Cell", value: "314Ah" },
                { label: "Configuration", value: "1P260S" },
                { label: "Cooling", value: "Liquid-cooled" },
                { label: "IP Rating", value: "IP55" },
                { label: "Communication", value: "CAN, RS485, Ethernet" },
                { label: "Dimensions", value: "1120 × 1350 × 2420 mm" },
                { label: "Weight", value: "≈ 3500 kg" },
                { label: "Max Altitude", value: "≤ 4000 m (derating above)" },
                { label: "Certifications", value: "UL9540, UL1973, UL1741, UL9540A, NFPA68, NFPA69, UN3480" },
            ]
        },
        {
            name: "All-in-One ESS — 125 kW / 261 kWh",
            specs: [
                { label: "System Type", value: "All-in-One ESS" },
                { label: "Battery Cell", value: "314Ah" },
                { label: "PCS Capacity", value: "125 kW" },
                { label: "DC Capacity", value: "261 kWh" },
                { label: "Cooling", value: "Natural (PCS) + Liquid (Battery)" },
                { label: "IP Rating", value: "IP55" },
                { label: "Communication", value: "RS485 / Ethernet" },
                { label: "Dimensions", value: "800 × 1152 × 2373 mm" },
                { label: "Weight", value: "≈ 2600 kg" },
                { label: "Max Altitude", value: "≤ 3000 m (derating above 2000m)" },
                { label: "Certifications", value: "IEC62619, IEC62477, IEC61000, UN38.3" },
            ],
            features: [
                "Integrated battery and power conversion",
                "Ready for immediate deployment",
                "Reduced installation and site preparation"
            ]
        },
        {
            name: "DC Battery Cabinet — 261 kWh",
            specs: [
                { label: "System Type", value: "DC Cabinet" },
                { label: "Energy Capacity", value: "261 kWh" },
                { label: "Battery Cell", value: "314Ah" },
                { label: "Cooling", value: "Liquid-cooled" },
                { label: "IP Rating", value: "IP55" },
                { label: "Communication", value: "RS485 / Ethernet × 2" },
                { label: "Dimensions", value: "1120 × 1350 × 2420 mm" },
                { label: "Weight", value: "≈ 2550 kg" },
                { label: "Max Altitude", value: "≤ 4000 m (derating above)" },
                { label: "Certifications", value: "IEC62619, IEC62477, IEC61000, UN38.3" },
            ],
            features: [
                "Battery-only configuration",
                "Pairs with external PCS for flexibility",
                "Ideal for retrofit or custom integration"
            ]
        },
        {
            name: "PV-Storage Charging ESS — 100 kW / 261 kWh",
            specs: [
                { label: "System Type", value: "PV-Storage Charging ESS" },
                { label: "Battery Cell", value: "314Ah" },
                { label: "PCS Capacity", value: "100 kW" },
                { label: "DC Capacity", value: "261 kWh" },
                { label: "Cooling", value: "Liquid-cooled" },
                { label: "IP Rating", value: "IP55" },
                { label: "Communication", value: "RS485 / Ethernet × 2" },
                { label: "Dimensions", value: "1500 × 1350 × 2420 mm" },
                { label: "Weight", value: "≈ 2650 kg" },
                { label: "Max Altitude", value: "≤ 4000 m (derating above 2000m)" },
                { label: "Certifications", value: "IEC62619, IEC62477, IEC61000, IEC63056, UN38.3, UN3480" },
            ],
            features: [
                "Optimized for solar + storage projects",
                "Direct PV charging capability",
                "Seamless solar integration"
            ]
        },
        {
            name: "All-in-One ESS — 100 kW / 211 kWh",
            specs: [
                { label: "System Type", value: "All-in-One ESS" },
                { label: "Battery Cell", value: "300Ah" },
                { label: "PCS Capacity", value: "100 kW" },
                { label: "DC Capacity", value: "211 kWh" },
                { label: "Cooling", value: "Liquid-cooled" },
                { label: "IP Rating", value: "IP55" },
                { label: "Communication", value: "RS485 / Ethernet" },
                { label: "Dimensions", value: "1340 × 1300 × 2300 mm" },
                { label: "Weight", value: "≈ 2600 kg" },
            ],
            features: [
                "Compact integrated design",
                "High energy density",
                "Space-efficient deployment"
            ]
        },
    ];

    const utilityProducts = [
        {
            name: "Utility-Scale BESS Container — 20 MWh",
            specs: [
                { label: "Energy Capacity", value: "20 MWh" },
                { label: "Battery Cell", value: "314Ah" },
                { label: "Configuration", value: "1P104S × 4 × 48" },
                { label: "Cooling", value: "Liquid-cooled" },
                { label: "IP Rating", value: "IP55" },
                { label: "Communication", value: "CAN, RS485, Ethernet" },
            ],
            highlights: [
                "25-year design lifespan",
                "7-layer protection system",
                "Reliable operation in extreme environments",
                "Ultra-high capacity and optimized land use",
                "Multilingual smart control platform for improved O&M efficiency"
            ]
        },
        {
            name: "Utility-Scale BESS Container — 7 MWh",
            specs: [
                { label: "Energy Capacity", value: "7 MWh" },
                { label: "Battery Cell", value: "588Ah" },
                { label: "Configuration", value: "1P104S × 4 × 9" },
                { label: "Cooling", value: "Liquid-cooled" },
                { label: "IP Rating", value: "IP55" },
                { label: "Communication", value: "CAN, RS485, Ethernet" },
                { label: "Capacity per Container", value: "7.04 MWh" },
            ],
            highlights: [
                "Multi-level fire suppression system",
                "25% less land use",
                "Smart cooling with <3°C cell temperature deviation",
                "Flexible deployment in harsh environments",
                "Containerized for rapid installation"
            ]
        },
        {
            name: "Utility-Scale BESS Container — 5 MWh",
            specs: [
                { label: "Energy Capacity", value: "5 MWh" },
                { label: "Battery Cell", value: "314Ah" },
                { label: "Configuration", value: "1P104S × 4 × 12" },
                { label: "Cooling", value: "Liquid-cooled" },
                { label: "IP Rating", value: "IP55" },
            ],
            highlights: [
                "Built-in safety from cell to system",
                "Higher energy density with reduced footprint",
                "Cooling designed for long operating life",
                "Flexible layout for scalable deployment",
                "Ideal for distributed renewable projects"
            ]
        },
    ];

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
                        Battery Energy Storage <span className="text-brand-primary">Systems</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-2xl text-gray-200 max-w-2xl drop-shadow-lg"
                    >
                        Advanced LFP battery storage solutions for commercial, industrial and utility-scale energy projects
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
                            Advanced LFP battery energy storage solutions for <span className="text-brand-primary font-bold">commercial, industrial and utility-scale</span> energy projects
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="text-lg text-gray-700 max-w-3xl mb-12"
                        >
                            Our portfolio supports peak shaving, renewable energy integration, backup power, grid stability, curtailment reduction and solar-plus-storage deployment.
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            className="text-base text-gray-600 max-w-3xl italic"
                        >
                            The product portfolio includes outdoor C&I cabinets, all-in-one ESS systems, PV-storage charging systems, DC cabinets and utility-scale containerized BESS platforms. Systems are designed for high energy density, liquid cooling, outdoor deployment, IP-rated protection, communication integration and long-term project performance.
                        </motion.p>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. Category Selector */}
            <section className="py-8 bg-gray-50 sticky top-20 z-40 border-b border-gray-200">
                <SectionWrapper>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <button
                            onClick={() => setSelectedCategory("c-i")}
                            className={`px-4 md:px-6 py-2.5 rounded-lg font-medium transition-all ${
                                selectedCategory === "c-i"
                                    ? "bg-brand-primary text-white shadow-lg"
                                    : "bg-white text-gray-700 border border-gray-300 hover:border-brand-primary"
                            }`}
                        >
                            <Grid3x3 className="w-4 h-4 inline mr-2" />
                            Commercial & Industrial
                        </button>
                        <button
                            onClick={() => setSelectedCategory("utility")}
                            className={`px-4 md:px-6 py-2.5 rounded-lg font-medium transition-all ${
                                selectedCategory === "utility"
                                    ? "bg-brand-primary text-white shadow-lg"
                                    : "bg-white text-gray-700 border border-gray-300 hover:border-brand-primary"
                            }`}
                        >
                            <Container className="w-4 h-4 inline mr-2" />
                            Utility-Scale
                        </button>
                    </div>
                </SectionWrapper>
            </section>

            {/* 4. C&I Products */}
            {selectedCategory === "c-i" && (
                <section className="py-[var(--spacing-section)] bg-white">
                    <SectionWrapper>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Commercial & Industrial BESS</h2>
                            <p className="text-lg text-gray-700 max-w-3xl mb-12">
                                Commercial and industrial BESS systems are designed for factories, campuses, commercial buildings, data centers, warehouses and high-load energy users. These systems support demand management, backup power, solar self-consumption, tariff optimization and operational resilience.
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {ciProducts.map((product, idx) => (
                                    <ProductCard key={idx} product={product} />
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-12 p-8 bg-gradient-to-r from-brand-primary/10 to-brand-primary/5 rounded-lg border border-brand-primary/20"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to discuss a C&I BESS project?</h3>
                                <p className="text-gray-700 mb-6">
                                    Gigacore Systems designs custom BESS configurations based on your facility requirements, energy profile and budget. Contact us to discuss system sizing, use case optimization and deployment timeline.
                                </p>
                                <Link href="/contact">
                                    <Button variant="primary" size="md">
                                        Request Project Consultation
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </SectionWrapper>
                </section>
            )}

            {/* 5. Utility-Scale Products */}
            {selectedCategory === "utility" && (
                <section className="py-[var(--spacing-section)] bg-white">
                    <SectionWrapper>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Utility-Scale BESS</h2>
                            <p className="text-lg text-gray-700 max-w-3xl mb-12">
                                Utility-scale BESS systems are designed for renewable energy developers, IPPs, grid-connected storage projects and large energy infrastructure platforms. These systems support renewable integration, peak shifting, grid support, energy arbitrage and large-scale solar-plus-storage deployment.
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {utilityProducts.map((product, idx) => (
                                    <ProductCard key={idx} product={product} />
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-12 p-8 bg-gradient-to-r from-brand-primary/10 to-brand-primary/5 rounded-lg border border-brand-primary/20"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Planning a utility-scale BESS or solar + storage project?</h3>
                                <p className="text-gray-700 mb-6">
                                    Gigacore Systems works with renewable developers, IPPs and grid operators to design large-scale energy storage systems. Contact us to discuss capacity requirements, site conditions, interconnection and financing options.
                                </p>
                                <Link href="/contact">
                                    <Button variant="primary" size="md">
                                        Plan Your Project
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </SectionWrapper>
                </section>
            )}

            {/* 6. Global CTA */}
            <section className="py-[var(--spacing-section)] bg-gradient-to-b from-gray-50 to-white">
                <SectionWrapper>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Planning a Solar + Storage or BESS Project?
                        </h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Discuss system size, use case, site conditions and deployment model with our energy storage specialists. We'll help you design the right BESS solution for your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button variant="primary" size="lg">
                                    Discuss a BESS Project
                                </Button>
                            </Link>
                            <Link href="/technology">
                                <Button variant="secondary" size="lg">
                                    Learn About Our Technology
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </SectionWrapper>
            </section>

        </main>
    );
}
