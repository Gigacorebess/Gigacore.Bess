"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";

const applications = [
    {
        title: "Commercial and industrial rooftops",
        desc: "Solar and storage solutions for factories, warehouses, and large commercial buildings.",
        image: "/home/Green Hydrogen Production.jpg",
        link: "/applications#commercial-rooftops"
    },
    {
        title: "Utility-scale solar plants",
        desc: "High-output module supply and storage systems for solar farms and energy infrastructure projects.",
        image: "/home/Green Ammonia.png",
        link: "/applications#utility-solar"
    },
    {
        title: "Solar farms with battery storage",
        desc: "Integrated solar-plus-storage systems for smoother generation and stronger grid support.",
        image: "/home/Hybrid Energy Integration.png",
        link: "/applications#solar-storage"
    },
    {
        title: "Manufacturing facilities",
        desc: "Reliable energy systems for industrial production, process load management and operational resilience.",
        image: "https://images.unsplash.com/photo-1518709590660-4f5faa0ef881?auto=format&fit=crop&q=80",
        link: "/applications#manufacturing"
    },
    {
        title: "Data centers and high-load users",
        desc: "Battery-backed generation for critical infrastructure, uptime assurance and demand-charge optimization.",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80",
        link: "/applications#data-centers"
    },
    {
        title: "Off-grid and weak-grid sites",
        desc: "Deployable solar and storage platforms for remote locations and constrained power networks.",
        image: "/home/On-Site Industrial Supply.png",
        link: "/applications#off-grid"
    },
    {
        title: "Renewable energy developers",
        desc: "Project-ready modules and storage systems for EPCs, developers and independent power producers.",
        image: "/home/Export-Linked Market Opportunities.jpg",
        link: "/applications#developers"
    },
    {
        title: "Peak shaving and demand-charge management",
        desc: "Storage-enabled load shifting to lower operating costs and improve tariff economics.",
        image: "/home/Proven Reliability.webp",
        link: "/applications#peak-shaving"
    },
];

export default function Applications() {
    return (
        <section className="py-[var(--spacing-section)] bg-white border-b border-gray-100">
            <SectionWrapper>
                <div className="max-w-5xl mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[36px] md:text-[52px] font-bold mb-6 leading-[1.15] text-brand-secondary"
                    >
                        Applications
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-brand-gray-600 font-light max-w-2xl leading-[1.75]"
                    >
                        Gigacore Systems supports solar and storage deployment across multiple project types.
                    </motion.p>
                </div>

                <div className="relative w-full overflow-hidden">
                    <div className="flex w-max animate-[wave-scroll_50s_linear_infinite] hover:[animation-play-state:paused]">
                        {applications.map((app, idx) => (
                            <Link href={app.link} key={idx} className="block group cursor-pointer flex-shrink-0 mx-4 w-[320px] md:w-[380px]">
                                <div className="flex flex-col h-full bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500">
                                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                                        <Image
                                            src={app.image}
                                            alt={app.title}
                                            fill
                                            className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 320px, 380px"
                                        />
                                    </div>

                                    <div className="flex flex-col flex-grow p-6">
                                        <h3 className="text-[length:var(--font-h3)] font-bold text-brand-secondary mb-3 leading-tight group-hover:text-brand-primary transition-colors">
                                            {app.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light flex-grow">
                                            {app.desc}
                                        </p>
                                        <div className="flex items-center text-brand-primary text-[15px] font-bold uppercase tracking-widest mt-auto group-hover:text-brand-hover transition-colors">
                                            View Application <ArrowUpRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
}
