"use client";
import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Zap, DollarSign, Target, CheckCircle2, Shield, Clock, Users } from "lucide-react";

const customerBenefits = [
    {
        icon: Zap,
        title: "Superior Energy Efficiency",
        desc: "Laboratory-validated energy consumption of ~38 kWh/kg (AC wall-plug) vs conventional alternatives — a 20–30% reduction. This delivers measurable cost savings and environmental benefits for your operations."
    },
    {
        icon: DollarSign,
        title: "Competitive Economics",
        desc: "At the $2.75/kg cost threshold, clean power and storage become economically viable for heavy industry. For fertilizer, refining, and steel producers, the cost delta becomes bankable at plant level."
    },
    {
        icon: Shield,
        title: "Proven Technology",
        desc: "TRL 5-6 lab-validated systems with independent third-party certification. Our modular design scales from 1 to 5 kg/hr up to 25 to 50 kg/hr, reducing capex and enabling faster deployment."
    },
    {
        icon: Target,
        title: "Tailored Solutions",
        desc: "Every deployment is unique. We design solutions that integrate seamlessly with your existing infrastructure, operational requirements, and energy goals."
    },
    {
        icon: Clock,
        title: "Fast Implementation",
        desc: "Modular design allows for rapid deployment and scaling. Units can be commissioned quickly, minimizing downtime and accelerating your path to clean energy."
    },
    {
        icon: Users,
        title: "Expert Support",
        desc: "Comprehensive service from site assessment through operations and maintenance. Our team provides 24/7 monitoring, preventive maintenance, and performance optimization."
    }
];

export default function InvestmentThesis() {
    return (
        <section className="bg-white w-full py-[var(--spacing-section)] border-b border-gray-100">
            <SectionWrapper>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full flex flex-col gap-16"
                >
                    {/* Header */}
                    <motion.div variants={fadeUp} className="text-center mb-2">
                        <span className="text-brand-primary font-bold tracking-widest uppercase text-[12px] mb-4 block">
                            WHY CHOOSE US
                        </span>
                        <h2 className="text-[32px] md:text-[40px] font-bold text-brand-secondary tracking-tight mb-6">
                            The <span className="text-brand-primary">GigaCore Energy</span> Advantage
                        </h2>
                        <p className="text-[15px] sm:text-[16px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Advanced energy storage solutions designed specifically for industrial applications, delivering superior performance, reliability, and value.
                        </p>
                    </motion.div>

                    {/* Benefits Grid */}
                    <motion.div variants={fadeUp} className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {customerBenefits.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                                        <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 text-brand-primary">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-brand-secondary mb-3">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                </motion.div>
            </SectionWrapper>
        </section>
    );
}
