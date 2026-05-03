"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import Button from "../ui/Button";
import { fadeUp, staggerContainer } from "@/lib/motion";
import * as THREE from "three";
// @ts-expect-error - Vanta library types not available
import CELLS from "vanta/dist/vanta.cells.min";

const BADGES = [
    "Solar + Storage",
    "C&I and Utility Scale",
    "LFP Battery Platforms",
    "Tier-One Solar Modules",
    "India-Focused Deployment",
];

export default function Hero() {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;

        if (!vantaEffect) {
            setVantaEffect(
                CELLS({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    color1: 0x00d563,
                    color2: 0x020617,
                    size: isMobile ? 1.0 : 1.8,
                    speed: 1.0,
                    distro: -1.0,
                    THREE: THREE,
                })
            );
        }
        return () => {
            if (vantaEffect) (vantaEffect as { destroy: () => void }).destroy();
        };
    }, [vantaEffect]);

    return (
        <section className="relative h-[100svh] min-h-[600px] md:min-h-[800px] flex items-center overflow-hidden bg-brand-secondary text-white">
            <div ref={vantaRef} className="absolute inset-0 z-0 opacity-100" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-brand-secondary/20 to-brand-secondary/90 z-10 pointer-events-none" />

            <SectionWrapper className="relative z-20 w-full">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl flex flex-col items-start text-left px-4 md:px-0 pt-16 md:pt-20"
                >
                    <motion.div variants={fadeUp} className="mb-6 md:mb-8">
                        <span className="text-brand-primary text-[15px] md:text-base font-bold tracking-widest uppercase">
                            Solar + Battery Energy Storage
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="text-[clamp(2.8rem,7vw,4.8rem)] sm:text-[5rem] md:text-[5.8rem] lg:text-[72px] font-bold tracking-tight mb-8 md:mb-10 leading-[1.05]"
                    >
                        Solar + Battery Energy Storage Solutions for India’s Next Energy Infrastructure
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="max-w-3xl text-lg md:text-xl text-gray-200 leading-relaxed mb-8"
                    >
                        Gigacore Systems helps commercial, industrial and utility-scale customers deploy advanced solar power and battery energy storage systems. We work with global technology partners to bring high-performance solar modules, LFP battery systems and integrated solar-plus-storage solutions to the Indian market.
                    </motion.p>

                    <motion.p
                        variants={fadeUp}
                        className="max-w-2xl text-base md:text-lg text-gray-300 leading-relaxed mb-10"
                    >
                        From C&I rooftops to utility-scale solar farms and grid-connected storage projects, Gigacore Systems supports customers with technology selection, system design, procurement coordination and deployment planning.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
                        {BADGES.map((badge) => (
                            <span
                                key={badge}
                                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
                            >
                                {badge}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Button href="/applications" variant="primary" size="lg" className="min-w-[200px]">
                            Explore Solutions
                        </Button>
                        <Button href="/contact" variant="outline" size="lg" className="min-w-[200px] text-white border-white/30">
                            Talk to Us
                        </Button>
                    </motion.div>
                </motion.div>
            </SectionWrapper>
        </section>
    );
}
