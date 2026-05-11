"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { staggerContainer } from "@/lib/motion";
import {
    Battery, Container, Sun, Zap, Shield, Cpu,
    TrendingUp, Globe, ChevronDown, Award,
} from "lucide-react";

// ── Variants ───────────────────────────────────────────────────────────────
const fadeUp = {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const slideLeft = {
    hidden:  { opacity: 0, x: -36 },
    visible: { opacity: 1, x: 0,  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const slideRight = {
    hidden:  { opacity: 0, x: 36 },
    visible: { opacity: 1, x: 0,  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// ── 3-D floating sticker ───────────────────────────────────────────────────
function FloatSticker({
    children,
    delay = 0,
    tiltY = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    tiltY?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            <motion.div
                animate={{ y: [0, -11, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: delay + 0.3 }}
                style={{
                    perspective: 600,
                    transform: `perspective(600px) rotateY(${tiltY}deg)`,
                    filter: "drop-shadow(0 14px 36px rgba(0,0,0,0.14))",
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

// ── Marquee ticker ─────────────────────────────────────────────────────────
const TICKER = [
    "Commercial & Industrial BESS",
    "Utility-Scale Storage",
    "Solar + Storage Integration",
    "LFP Battery Technology",
    "Advanced Thermal Management",
    "PCS Integration",
    "Safety Systems",
    "Grid Support Solutions",
];

function Ticker() {
    return (
        <div className="overflow-hidden bg-brand-primary py-3 select-none">
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap"
            >
                {[...TICKER, ...TICKER].map((item, i) => (
                    <span key={i} className="inline-flex items-center gap-3 px-7 text-white text-sm font-semibold uppercase tracking-widest shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block" />
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

// ── Solutions data ─────────────────────────────────────────────────────────
const solutions = [
    {
        icon: Battery,
        title: "Commercial & Industrial Storage",
        desc: "Compact BESS cabinets for factories, campuses, commercial buildings, and energy-intensive sites.",
    },
    {
        icon: Container,
        title: "Utility-Scale BESS",
        desc: "Containerised storage systems for grid support, renewable integration, and large-scale deployment.",
    },
    {
        icon: Sun,
        title: "Solar + Storage Integration",
        desc: "Integrated solar modules, PCS, and storage platforms for reliable project-scale clean energy.",
    },
];

// ── Technology features ────────────────────────────────────────────────────
const techFeatures = [
    { name: "Battery Cell Architecture", icon: Battery,    desc: "Modular LFP cell layouts for serviceability" },
    { name: "Thermal Management",        icon: Zap,        desc: "Advanced cooling for all environments"        },
    { name: "Cabinet Design",            icon: Shield,     desc: "Robust outdoor-rated cabinets"                },
    { name: "PCS Integration",           icon: Cpu,        desc: "Seamless power conversion systems"            },
    { name: "Safety Systems",            icon: TrendingUp, desc: "Comprehensive monitoring & shutdown"          },
    { name: "Digital Platform",          icon: Globe,      desc: "Remote SCADA & BMS visibility"                },
];

// ── Main page ──────────────────────────────────────────────────────────────
export default function Home() {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroImgY  = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
    const heroFade  = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

    return (
        <main className="min-h-screen overflow-x-hidden">

            {/* ── HERO ────────────────────────────────────────────── */}
            <section ref={heroRef} className="relative min-h-screen flex items-center">
                {/* Parallax image */}
                <motion.div
                    className="absolute -top-[8%] -bottom-[8%] left-0 right-0"
                    style={{ y: heroImgY }}
                >
                    <Image
                        src="/home.jpg"
                        alt="Gigacore energy landscape"
                        fill
                        className="object-cover object-center"
                        priority
                        unoptimized
                    />
                </motion.div>

                {/* Soft left vignette for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/25 via-transparent to-transparent pointer-events-none" />

                {/* ── Floating 3-D stickers (desktop only) ───── */}
                <motion.div
                    style={{ opacity: heroFade }}
                    className="absolute inset-0 pointer-events-none hidden lg:block"
                >
                    {/* Sticker 1 — MWh */}
                    <div className="absolute right-[9%] top-[20%]">
                        <FloatSticker delay={0.9} tiltY={-8}>
                            <div className="bg-white rounded-2xl px-5 py-4 border border-gray-100"
                                style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.11), 0 0 0 1px rgba(255,255,255,0.9)" }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-11 h-11 rounded-xl bg-brand-primary flex items-center justify-center shrink-0">
                                        <Battery className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-[22px] font-black text-brand-secondary leading-none">500+</div>
                                        <div className="text-[11px] text-gray-500 font-semibold mt-0.5">MWh Deployed</div>
                                    </div>
                                </div>
                            </div>
                        </FloatSticker>
                    </div>

                    {/* Sticker 2 — Uptime (dark) */}
                    <div className="absolute right-[15%] top-[46%]">
                        <FloatSticker delay={1.15} tiltY={6}>
                            <div className="bg-brand-secondary rounded-2xl px-5 py-4"
                                style={{ boxShadow: "0 24px 64px rgba(8,18,50,0.28)" }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-11 h-11 rounded-xl bg-brand-primary flex items-center justify-center shrink-0">
                                        <Zap className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-[22px] font-black text-white leading-none">99%</div>
                                        <div className="text-[11px] text-white/55 font-semibold mt-0.5">System Uptime</div>
                                    </div>
                                </div>
                            </div>
                        </FloatSticker>
                    </div>

                    {/* Sticker 3 — Scale */}
                    <div className="absolute right-[5%] top-[64%]">
                        <FloatSticker delay={1.4} tiltY={-5}>
                            <div className="bg-white rounded-2xl px-5 py-4 border border-gray-100"
                                style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.10), 0 0 0 1px rgba(255,255,255,0.9)" }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0">
                                        <Globe className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-[22px] font-black text-brand-secondary leading-none">C&I</div>
                                        <div className="text-[11px] text-gray-500 font-semibold mt-0.5">+ Utility Scale</div>
                                    </div>
                                </div>
                            </div>
                        </FloatSticker>
                    </div>

                    {/* Spinning dashed ring */}
                    <div className="absolute right-[22%] top-[14%]">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                            className="w-20 h-20 rounded-full border-2 border-dashed border-brand-primary/25"
                        />
                    </div>

                    {/* Pulsing dot */}
                    <div className="absolute right-[28%] top-[70%]">
                        <motion.div
                            animate={{ scale: [1, 1.35, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                            className="w-4 h-4 rounded-full bg-brand-primary shadow-lg shadow-brand-primary/40"
                        />
                    </div>

                    {/* Small orbiting ring around sticker 1 */}
                    <div className="absolute right-[7%] top-[18%]">
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                            className="w-32 h-32 rounded-full border border-brand-primary/15"
                        />
                    </div>
                </motion.div>

                {/* Hero content */}
                <SectionWrapper className="relative z-10 pt-32 pb-24">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="max-w-3xl"
                    >
                        <motion.div variants={fadeUp} className="mb-6">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                                <motion.span
                                    animate={{ scale: [1, 1.4, 1] }}
                                    transition={{ duration: 1.8, repeat: Infinity }}
                                    className="w-1.5 h-1.5 rounded-full bg-white inline-block"
                                />
                                Gigacore Systems
                            </span>
                        </motion.div>

                        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-6 text-brand-secondary leading-tight">
                            Powering Solar +<br />
                            <span className="text-brand-primary">Storage Infrastructure</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-brand-secondary/75 mb-8 leading-relaxed max-w-xl">
                            Commercial, industrial, and utility-scale battery energy storage and solar solutions for reliable clean power deployment.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                            <Button href="/products" variant="primary">Explore Solutions</Button>
                            <Button href="/contact" variant="secondary">Talk to Us</Button>
                        </motion.div>
                    </motion.div>
                </SectionWrapper>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 9, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
                >
                    <ChevronDown className="w-6 h-6 text-brand-secondary/50" />
                </motion.div>
            </section>

            {/* ── TICKER ──────────────────────────────────────────── */}
            <Ticker />

            {/* ── SOLUTIONS ───────────────────────────────────────── */}
            <section className="py-12 bg-brand-light relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-brand-primary/5 -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-center mb-4 text-brand-secondary">
                            Built for Energy Reliability
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-center text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                            End-to-end storage and solar systems engineered for industrial-grade performance at any scale.
                        </motion.p>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {solutions.map((s, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 280, damping: 18 }}
                                    className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl hover:border-brand-primary/25 transition-shadow duration-300 group relative overflow-hidden cursor-pointer"
                                >
                                    {/* Gradient glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 to-brand-primary/6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                                    <div className="relative z-10">
                                        <motion.div
                                            whileHover={{ scale: 1.15, rotate: 6 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                            className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300"
                                        >
                                            <s.icon className="w-7 h-7" />
                                        </motion.div>
                                        <h3 className="text-xl font-bold mb-3 text-brand-secondary">{s.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">{s.desc}</p>
                                    </div>

                                    {/* Bottom sweep line */}
                                    <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-primary to-brand-primary/40 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* ── STATS BAND ──────────────────────────────────────── */}
            <section className="py-12 bg-brand-secondary relative overflow-hidden">

                <SectionWrapper>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
                        {[
                            { val: "500+",  label: "MWh Projects",      icon: Battery   },
                            { val: "C&I",   label: "& Utility Scale",   icon: Container },
                            { val: "LFP",   label: "Battery Chemistry", icon: Zap       },
                            { val: "24/7",  label: "Technical Support", icon: Shield    },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ scale: 1.06 }}
                                className="group cursor-default"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-primary transition-colors duration-300">
                                    <stat.icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="text-4xl font-black text-white mb-1">{stat.val}</div>
                                <div className="text-sm text-white/50 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>
            </section>

            {/* ── TECHNOLOGY ──────────────────────────────────────── */}
            <section className="py-12 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-brand-primary/4 blur-3xl pointer-events-none" />
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <motion.span variants={fadeUp} className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                            Technology
                        </motion.span>
                        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-5 text-brand-secondary">
                            Engineered for Performance
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-8 text-lg max-w-2xl mx-auto">
                            Clean system architecture focused on battery cell design, thermal management, PCS integration, cabinet engineering, and safety.
                        </motion.p>

                        <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            {techFeatures.map((f, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.04, y: -5 }}
                                    transition={{ type: "spring", stiffness: 360, damping: 20 }}
                                    className="flex items-start gap-4 p-5 bg-brand-light rounded-2xl border border-gray-100 text-left group hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0 group-hover:bg-brand-primary transition-colors duration-300">
                                        <f.icon className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-secondary text-sm leading-snug">{f.name}</p>
                                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{f.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            <Button href="/technology" variant="primary">View Technology</Button>
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* ── PRODUCTS ────────────────────────────────────────── */}
            <section className="py-12 bg-brand-secondary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-primary/10 -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
                            Storage and Solar Products
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-center text-white/70 mb-8 text-lg max-w-2xl mx-auto">
                            A complete portfolio from compact C&I cabinets to utility-scale containers, solar modules, and integrated systems.
                        </motion.p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            {[
                                { name: "C&I BESS Cabinets",        icon: Battery   },
                                { name: "Utility-Scale BESS",       icon: Container },
                                { name: "Solar Modules",            icon: Sun       },
                                { name: "Solar + Storage Systems",  icon: Zap       },
                            ].map((p, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    whileHover={{ scale: 1.06, y: -5 }}
                                    transition={{ type: "spring", stiffness: 320, damping: 18 }}
                                    className="p-6 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 text-center group cursor-pointer"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-brand-primary/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-primary transition-colors duration-300">
                                        <p.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="font-semibold text-white text-sm">{p.name}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div variants={fadeUp} className="text-center">
                            <Button href="/products" variant="primary">View All Products</Button>
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* ── ABOUT SPLIT ─────────────────────────────────────── */}
            <section className="py-12 bg-white relative overflow-hidden">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-10 items-center"
                    >
                        {/* Image column */}
                        <motion.div variants={slideLeft} className="order-2 md:order-1">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/1218%20Re_GOTION%20EN_260510_195022%20Image%5B5%5D.jpg"
                                    alt="Gigacore headquarters"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    unoptimized
                                />
                                {/* Floating badge over image */}
                                <div className="absolute bottom-5 left-5">
                                    <motion.div
                                        animate={{ y: [0, -7, 0] }}
                                        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                                        className="bg-white/90 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl flex items-center gap-3"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-brand-primary flex items-center justify-center shrink-0">
                                            <Award className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-brand-secondary">Trusted Partner</div>
                                            <div className="text-[10px] text-gray-500 leading-tight">Clean Energy Infrastructure</div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Text column */}
                        <motion.div variants={slideRight} className="order-1 md:order-2">
                            <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4 block">About Us</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-secondary">
                                About Gigacore Systems
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Gigacore Systems focuses on solar energy, battery energy storage, and integrated project deployment for commercial, industrial, and utility-scale customers. We deliver reliable, scalable solutions for clean energy infrastructure.
                            </p>
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* ── FINAL CTA ───────────────────────────────────────── */}
            <section className="py-12 bg-brand-light relative overflow-hidden">
                {/* Dot-grid texture */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-60"
                    style={{
                        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                    }}
                />
                {/* Soft glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-brand-primary/8 blur-3xl pointer-events-none" />

                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center relative z-10"
                    >
                        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6 text-brand-secondary">
                            Ready to build your solar + storage project?
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-lg text-gray-600 mb-6">
                            Contact our team to discuss project requirements and find the right solution.
                        </motion.p>
                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/contact" variant="primary">Talk to Us</Button>
                            <Button href="/products" variant="secondary">View Products</Button>
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

        </main>
    );
}
