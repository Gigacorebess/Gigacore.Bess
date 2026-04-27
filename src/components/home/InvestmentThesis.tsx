"use client";
import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Zap, DollarSign, Target, CheckCircle2, Hexagon, TrendingUp, Presentation, LogOut } from "lucide-react";

const atAGlance = [
    { label: "Current Performance", value: "~38 kWh/kg", desc: "AC wall-plug measurement — full system load validated across multiple runs" },
    { label: "Pilot Milestone", value: "Sustain 38 kWh/kg at scale", desc: "Independent third-party certification of 1 kg H₂/hr pilot module required" },
    { label: "Current Status", value: "TRL 5-6 Lab Validated", desc: "Bench-scale proven; structured pilot programme next" },
    { label: "Market Inflection", value: "$2.75/kg cost parity", desc: "Ammonia & refining parity relevant addressable segment" },
    { label: "Series A Raise", value: "$20M (full Phase 1)", desc: "18-month runway covering pilot, demo, team, BD" }
];

const financialDetails = [
    { label: "Investor Equity", value: "33% pure equity", desc: "No preferences, no ratchet, no liquidation priority" },
    { label: "Post-Money Valuation", value: "$60.6M", desc: "Pre-pilot, pre-demo, pre-customer venture-stage entry point" },
    { label: "Strategic Exit Target", value: "36-60 months post-pilot validation", desc: "IP acquisition by Tier 1 industrial; multiple credible acquirers" },
    { label: "Exit Framing", value: "Science/IP asset acquisition", desc: "Exit thesis is strategic IP value not EBITDA or revenue multiples" },
    { label: "Return Basis", value: "Valuation re-rating at milestones", desc: "Each validation milestone (pilot → cost cert → offtake) re-rates the asset" },
    { label: "Primary Market", value: "India: ammonia & refining", desc: "IFFCO, KRIBHCO cost parity unlocks immediate switching" },
    { label: "IP Status", value: "Patent application in preparation", desc: "Technology managed as trade secret with NDA-gated disclosure pending filing" }
];

const returnScenarios = [
    { name: "CONSERVATIVE", timing: "36-60 months post-pilot", multiple: "3.0×", val: "3× post-money", investor: "$52M proceeds", moic: "3.0×", irr: "55%" },
    { name: "BASE CASE", timing: "36-60 months post-pilot", multiple: "4.0×", val: "4× post-money", investor: "$69M proceeds", moic: "3.9×", irr: "74%" },
    { name: "UPSIDE", timing: "36-60 months post-pilot", multiple: "5.0×", val: "5× post-money", investor: "$87M proceeds", moic: "4.9×", irr: "90%" }
];

const whyNow = [
    {
        icon: Zap,
        title: "Different Physics",
        desc: "Laboratory-validated energy consumption of ~38 kWh/kg (AC wall-plug) vs 50 to 55 kWh/kg for conventional electrolysis — a 20–30% reduction. This is not an optimisation of existing technology. It operates on a fundamentally different electrochemical mechanism."
    },
    {
        icon: DollarSign,
        title: "$2.75/kg Cost Threshold",
        desc: "At this price, green hydrogen reaches parity with grey ammonia. For fertilizer, refining, and steel producers, the cost delta becomes bankable at plant level."
    },
    {
        icon: Target,
        title: "Industrial Customer Discussions",
        desc: "India's largest fertilizer cooperative has published a net-zero roadmap. Preliminary commercial discussions are underway. A formal LOI depends on independent pilot validation. No commitment has been made."
    },
    {
        icon: CheckCircle2,
        title: "Policy Support",
        desc: "India SIGHT ($530M), the EU hydrogen strategy, and the US IRA create non-dilutive funding pathways. GigaCore is targeting $2 to $5M in grants alongside renewable PPA support."
    },
    {
        icon: Hexagon,
        title: "Modular Design",
        desc: "Units scale from 1 to 5 kg/hr up to 25 to 50 kg/hr. This reduces capex at each stage and allows faster deployment than monolithic electrolyser plants."
    },
    {
        icon: TrendingUp,
        title: "18-Month Validation Path",
        desc: "The pilot runs across three milestones: commissioning at Month 6, independent cost certification at Month 12, and demo commissioning at Month 18. Each milestone achieved improves the commercial and investment position."
    },
    {
        icon: Presentation,
        title: "Entry Point",
        desc: "Post-money valuation is $60.6M at $20M raise for 33% equity. This is pre-pilot, pre-demo, and pre-customer. The full upside from each validation milestone remains ahead."
    },
    {
        icon: LogOut,
        title: "Exit Pathway",
        desc: "The intended exit is acquisition by a Tier 1 industrial buyer: EPC groups, industrial gas producers, or large-scale ammonia and refining operators. Each has a clear rationale for acquiring validated hydrogen IP. Acquisition is the appropriate exit at this stage."
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
                    <motion.div variants={fadeUp} className="text-left mb-2">
                        <span className="text-brand-primary font-bold tracking-widest uppercase text-[12px] mb-4 block">
                            STRATEGIC OVERVIEW
                        </span>
                        <h2 className="text-[32px] md:text-[40px] font-bold text-brand-secondary tracking-tight mb-6">
                            Investment Thesis <span className="text-brand-primary">At A Glance</span>
                        </h2>
                    </motion.div>

                    {/* Table 1: At a Glance (Responsive Grid) */}
                    <motion.div variants={fadeUp} className="w-full border border-gray-200 rounded-xl shadow-sm mb-4 overflow-hidden">
                        {/* Header Row (Hidden on mobile) */}
                        <div className="hidden md:grid grid-cols-4 bg-[#0b1320] text-white">
                            <div className="py-4 pl-6 pr-4 font-bold uppercase tracking-wider text-[13px]">METRIC</div>
                            <div className="py-4 px-4 font-bold uppercase tracking-wider text-[13px] border-l border-white/10">VALUE</div>
                            <div className="py-4 pl-4 pr-6 font-bold uppercase tracking-wider text-[13px] border-l border-white/10 col-span-2">SIGNIFICANCE</div>
                        </div>
                        {/* Data Rows */}
                        <div className="bg-white flex flex-col divide-y divide-gray-200">
                            {atAGlance.map((row, idx) => (
                                <div key={idx} className="grid grid-cols-1 md:grid-cols-4 hover:bg-gray-50 transition-colors">
                                    <div className="py-3 md:py-5 pl-4 md:pl-6 pr-4 font-bold text-gray-900 bg-gray-50 md:bg-transparent">
                                        <span className="md:hidden text-[15px] text-gray-500 uppercase tracking-wider block mb-1 font-semibold">METRIC</span>
                                        {row.label}
                                    </div>
                                    <div className="py-3 md:py-5 px-4 md:border-l border-gray-200 text-brand-primary font-medium">
                                        <span className="md:hidden text-[15px] text-gray-500 uppercase tracking-wider block mb-1 font-semibold">VALUE</span>
                                        {row.value}
                                    </div>
                                    <div className="py-3 md:py-5 pl-4 md:pl-4 pr-4 md:pr-6 md:border-l border-gray-200 text-gray-600 col-span-1 md:col-span-2">
                                        <span className="md:hidden text-[15px] text-gray-500 uppercase tracking-wider block mb-1 font-semibold">SIGNIFICANCE</span>
                                        {row.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Table 2: Financial Details (Responsive Grid) */}
                    <motion.div variants={fadeUp} className="w-full border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                        {/* Header Row (Hidden on mobile) */}
                        <div className="hidden md:grid grid-cols-4 bg-[#0b1320] text-white">
                            <div className="py-4 pl-6 pr-4 font-semibold uppercase tracking-wider text-[13px]">FINANCIALS & STRUCTURE</div>
                            <div className="py-4 px-4 font-semibold uppercase tracking-wider text-[13px] border-l border-white/10">DETAILS</div>
                            <div className="py-4 pl-4 pr-6 font-semibold uppercase tracking-wider text-[13px] border-l border-white/10 col-span-2">IMPLICATION</div>
                        </div>
                        {/* Data Rows */}
                        <div className="bg-white flex flex-col divide-y divide-gray-200">
                            {financialDetails.map((row, idx) => (
                                <div key={idx} className="grid grid-cols-1 md:grid-cols-4 hover:bg-gray-50 transition-colors">
                                    <div className="py-3 md:py-5 pl-4 md:pl-6 pr-4 font-bold text-gray-900 bg-gray-50 md:bg-transparent">
                                        <span className="md:hidden text-[15px] text-gray-500 uppercase tracking-wider block mb-1 font-semibold">FINANCIALS</span>
                                        {row.label}
                                    </div>
                                    <div className="py-3 md:py-5 px-4 md:border-l border-gray-200 text-brand-primary font-medium">
                                        <span className="md:hidden text-[15px] text-gray-500 uppercase tracking-wider block mb-1 font-semibold">DETAILS</span>
                                        {row.value}
                                    </div>
                                    <div className="py-3 md:py-5 pl-4 md:pl-4 pr-4 md:pr-6 md:border-l border-gray-200 text-gray-600 col-span-1 md:col-span-2">
                                        <span className="md:hidden text-[15px] text-gray-500 uppercase tracking-wider block mb-1 font-semibold">IMPLICATION</span>
                                        {row.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Table 3: Scenarios (Responsive Grid) */}
                    <motion.div variants={fadeUp} className="w-full">
                        <h3 className="text-xl font-bold text-brand-secondary uppercase tracking-tight mb-6 pb-2 border-b-2 border-brand-primary inline-block">
                            Illustrative Return Scenarios <span className="text-gray-400 font-medium whitespace-nowrap">($20M Raise • 33% Equity)</span>
                        </h3>
                        <div className="w-full border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                            {/* Header Row (Hidden on mobile) */}
                            <div className="hidden lg:grid grid-cols-7 bg-[#0b1320] text-white">
                                <div className="py-4 pl-6 pr-2 font-semibold uppercase tracking-wider text-[15px]">SCENARIO</div>
                                <div className="py-4 px-2 font-semibold uppercase tracking-wider text-[15px] border-l border-white/10">TIMING</div>
                                <div className="py-4 px-2 font-semibold uppercase tracking-wider text-[15px] border-l border-white/10">MULTIPLE</div>
                                <div className="py-4 px-2 font-semibold uppercase tracking-wider text-[15px] border-l border-white/10">EXIT VAL.</div>
                                <div className="py-4 px-2 font-semibold uppercase tracking-wider text-[15px] border-l border-white/10">INVESTOR</div>
                                <div className="py-4 px-2 font-semibold uppercase tracking-wider text-[15px] border-l border-white/10">MOIC</div>
                                <div className="py-4 pl-2 pr-6 font-semibold uppercase tracking-wider text-[15px] border-l border-white/10">~IRR</div>
                            </div>
                            {/* Data Rows */}
                            <div className="bg-white flex flex-col divide-y divide-gray-300 lg:divide-y-0 lg:divide-y">
                                {returnScenarios.map((row, idx) => (
                                    <div key={idx} className="grid grid-cols-2 lg:grid-cols-7 hover:bg-gray-50 transition-colors divide-y divide-gray-100 lg:divide-y-0 lg:border-b lg:border-gray-200 last:border-0 relative">
                                        <div className="py-3 lg:py-4 pl-4 lg:pl-6 pr-2 font-bold uppercase col-span-2 lg:col-span-1 bg-gray-50 lg:bg-transparent" style={{ color: idx === 0 ? "#F59E0B" : idx === 1 ? "#10B981" : "#059669" }}>
                                            {row.name}
                                        </div>
                                        <div className="py-3 lg:py-4 px-4 lg:px-2 border-r lg:border-r-0 lg:border-l border-gray-100 lg:border-gray-200 text-gray-600">
                                            <span className="lg:hidden text-[10px] text-gray-400 uppercase tracking-wider block mb-1 font-semibold">TIMING</span>
                                            {row.timing}
                                        </div>
                                        <div className="py-3 lg:py-4 px-4 lg:px-2 lg:border-l border-gray-200 font-medium text-gray-900">
                                            <span className="lg:hidden text-[10px] text-gray-400 uppercase tracking-wider block mb-1 font-semibold">MULTIPLE</span>
                                            {row.multiple}
                                        </div>
                                        <div className="py-3 lg:py-4 px-4 lg:px-2 border-r lg:border-r-0 lg:border-l border-gray-100 lg:border-gray-200 text-gray-600">
                                            <span className="lg:hidden text-[10px] text-gray-400 uppercase tracking-wider block mb-1 font-semibold">EXIT VAL.</span>
                                            {row.val}
                                        </div>
                                        <div className="py-3 lg:py-4 px-4 lg:px-2 lg:border-l border-gray-200 font-bold text-gray-900">
                                            <span className="lg:hidden text-[10px] text-gray-400 uppercase tracking-wider block mb-1 font-semibold">INVESTOR</span>
                                            {row.investor}
                                        </div>
                                        <div className="py-3 lg:py-4 px-4 lg:px-2 border-r lg:border-r-0 lg:border-l border-gray-100 lg:border-gray-200 font-bold" style={{ color: idx === 0 ? "#F59E0B" : idx === 1 ? "#10B981" : "#059669" }}>
                                            <span className="lg:hidden text-[10px] text-gray-400 uppercase tracking-wider block mb-1 font-semibold">MOIC</span>
                                            {row.moic}
                                        </div>
                                        <div className="py-3 lg:py-4 px-4 lg:px-2 lg:border-l border-gray-200 font-bold" style={{ color: idx === 0 ? "#F59E0B" : idx === 1 ? "#10B981" : "#059669" }}>
                                            <span className="lg:hidden text-[10px] text-gray-400 uppercase tracking-wider block mb-1 font-semibold">~IRR</span>
                                            {row.irr}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Section: Why Gigacore Energy Now? */}
                    <motion.div variants={fadeUp} className="w-full pt-10">
                        <h3 className="text-2xl lg:text-3xl font-bold text-brand-secondary uppercase tracking-tight mb-10 pb-4 border-b-2 border-brand-primary w-full">
                            The Case for <span className="text-brand-primary">GigaCore Energy</span>
                        </h3>
                        <div className="flex flex-col gap-8">
                            {whyNow.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="flex flex-col sm:flex-row gap-6 items-start group">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-[#0b1320] flex items-center justify-center border-l-4 border-brand-primary transition-transform group-hover:scale-105 duration-300">
                                            <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-brand-primary opacity-80" strokeWidth={1.5} />
                                        </div>
                                        <div className="flex-1 pt-1 pb-4 border-b border-gray-100 last:border-0">
                                            <h4 className="text-[18px] sm:text-[20px] font-bold text-brand-primary mb-2 leading-tight">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed text-[15px] sm:text-[16px]">
                                                {item.desc}
                                            </p>
                                        </div>
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
