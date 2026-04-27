"use client";
import React, { useEffect, useRef } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { useInView, useMotionValue, animate } from "framer-motion";

const smallRow = [
    { value: 30, suffix: "%", label: "Less energy than conventional electrolysis", subtext: "(observed)" },
    { value: 38, suffix: "%", label: "Lower LCOH target", subtext: "($2.75 vs $4.40/kg)" },
    { value: 99.95, decimals: 2, suffix: "%", label: "Hydrogen purity output", subtext: "(dry gas basis, 0°C, 1 atm)" },
    { isStatic: true, staticText: "Zero", label: "Precious metal catalysts required", subtext: "" }
];

const midRow = [
    { value: 38, suffix: "\n", suffix2: " kWh/kg", label: "Observed System Energy", subtext: "AC wall-plug measurement (full system load)" },
    { prefix: "$", value: 2.75, decimals: 2, suffix: "/kg", label: "LCOH Target", subtext: "Parity with grey ammonia (pilot certification required)" },
    { prefix: "TRL ", value: 5, value2: 6, label: "Technology Readiness", subtext: "Lab-validated • pre-commercial pilot stage" }
];

const AnimatedNumber = ({ value, value2 = undefined, from = 0, prefix = "", suffix = "", suffix2 = "", decimals = 0, isStatic = false, staticText = "" }: any) => {
    const ref = useRef<HTMLSpanElement>(null);
    const ref2 = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(from);
    const motionValue2 = useMotionValue(from);
    const isInView = useInView(ref, { once: true, margin: "0px" });

    useEffect(() => {
        if (!isStatic && isInView) {
            animate(motionValue, value, {
                duration: 1.6,
                ease: "easeOut"
            });
            if (value2 !== undefined) {
                animate(motionValue2, value2, {
                    duration: 1.6,
                    ease: "easeOut"
                });
            }
        }
    }, [isInView, value, value2, motionValue, motionValue2, isStatic]);

    useEffect(() => {
        if (isStatic) return;
        const unsubscribe = motionValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = latest.toFixed(decimals);
            }
        });
        return unsubscribe;
    }, [motionValue, decimals, isStatic]);

    useEffect(() => {
        if (isStatic || value2 === undefined) return;
        const unsubscribe = motionValue2.on("change", (latest) => {
            if (ref2.current) {
                ref2.current.textContent = latest.toFixed(decimals);
            }
        });
        return unsubscribe;
    }, [motionValue2, decimals, isStatic, value2]);

    if (isStatic) {
        return (
            <span className="tabular-nums tracking-tight">
                {prefix}{staticText}{suffix}
                {suffix2 && <span className="text-[28px] lg:text-[40px] leading-none ml-1 font-bold">{suffix2}</span>}
            </span>
        );
    }

    return (
        <span className="tabular-nums tracking-tight">
            {prefix}<span ref={ref}>{from.toFixed(decimals)}</span>
            {value2 !== undefined && (
                <>
                    <span>–</span><span ref={ref2}>{from.toFixed(decimals)}</span>
                </>
            )}
            {suffix}
            {suffix2 && <span className="text-[28px] lg:text-[40px] leading-none ml-1 font-bold">{suffix2}</span>}
        </span>
    );
};

export default function SimpleMetrics() {
    // Adjusted AnimatedNumber implementation to allow thinner fonts based on parent class
    return (
        <section className="bg-white w-full border-b border-gray-100 pb-16">
            <SectionWrapper className="py-[var(--spacing-section)]">
                <div className="w-full">
                    {/* Title */}
                    <div className="mb-12 border-b border-gray-200 pb-4">
                        <h2 className="text-[20px] lg:text-[24px] tracking-tight">
                            <span className="text-brand-secondary font-medium">Next Gen Hydrogen Reactor Technology - </span><span className="text-brand-primary font-bold">Green Hydrogen Production</span>
                        </h2>
                    </div>

                    {/* Comparisons */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12">
                        {/* Conventional */}
                        <div className="flex flex-col items-start relative lg:pr-10">
                            <div className="text-[15px] font-bold tracking-widest uppercase text-gray-400 mb-4">Conventional Electrolysis</div>
                            <div className="flex items-baseline mb-4 text-gray-800">
                                <span className="text-[56px] lg:text-[72px] font-medium tracking-tighter leading-none">
                                    <AnimatedNumber value={50} value2={55} />
                                </span>
                                <span className="text-[24px] lg:text-[32px] leading-none ml-2 font-bold text-gray-800">kWh/kg</span>
                            </div>
                            <div className="space-y-1 text-gray-600 font-medium text-[15px]">
                                <p>LCOH $4.40/kg</p>
                                <p>Alkaline • PEM • SOEC</p>
                                <p>Precious metal catalysts required</p>
                            </div>
                        </div>

                        {/* Gigacore */}
                        <div className="flex flex-col items-start relative lg:pl-16 lg:border-l lg:border-gray-200">
                            <div className="w-full h-px bg-gray-200 mb-8 lg:hidden" />
                            <div className="text-[15px] font-bold tracking-widest uppercase text-brand-primary mb-4">Gigacore Next Gen Hydrogen Reactor</div>
                            <div className="text-[56px] lg:text-[72px] font-medium tracking-tighter text-brand-primary leading-none mb-4 flex items-baseline">
                                <AnimatedNumber value={38} suffix="" suffix2="kWh/kg" />
                            </div>
                            <div className="space-y-1 text-gray-800 font-medium text-[15px]">
                                <p>Target LCOH $2.75/kg (pilot-stage)</p>
                                <p>Proprietary next-gen electrochemical reactor</p>
                                <p>No precious metals. Near-ambient operation</p>
                            </div>
                        </div>
                    </div>

                    {/* 4 Small Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
                        {smallRow.map((metric, idx) => (
                            <div key={idx} className="flex flex-col items-start w-full border-t border-gray-300 pt-6">
                                <div className="text-[64px] lg:text-[80px] font-light tracking-tighter text-brand-primary flex items-start leading-[1] mb-2 min-h-[70px]">
                                    <AnimatedNumber {...metric} />
                                </div>
                                <h3 className="text-[16px] font-bold text-gray-900 leading-snug">
                                    {metric.label}
                                </h3>
                                {metric.subtext && (
                                    <p className="text-[14px] text-gray-600 mt-1 font-medium">
                                        {metric.subtext}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* 3 Mid Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-16">
                        {midRow.map((metric, idx) => (
                            <div key={idx} className="flex flex-col items-start w-full border-t border-gray-300 pt-6">
                                <div className="text-[64px] lg:text-[80px] font-light tracking-tighter text-brand-primary flex items-start leading-[1] mb-2 min-h-[70px]">
                                    <AnimatedNumber {...metric} />
                                </div>
                                <h3 className="text-[16px] font-bold text-gray-900 leading-snug">
                                    {metric.label}
                                </h3>
                                <p className="text-[14px] text-gray-600 mt-1 font-medium">
                                    {metric.subtext}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
}
