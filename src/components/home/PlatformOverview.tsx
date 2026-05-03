import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import Image from "next/image";

const MODULE_BRANDS = [
    {
        title: "JA Solar",
        desc: "High-performance solar modules and solar-storage solutions for utility-scale, distributed commercial and rooftop applications.",
    },
    {
        title: "Trina Solar",
        desc: "Advanced Vertex series modules designed for high power output, reliability and lower levelized cost of energy.",
    },
    {
        title: "JinkoSolar",
        desc: "Tiger Neo, bifacial, anti-dust and specialized module platforms for high-output solar generation.",
    },
];

export default function PlatformOverview() {
    return (
        <section className="py-[var(--spacing-section)] bg-brand-light border-b border-gray-100 overflow-hidden">
            <SectionWrapper>
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex-1 w-full lg:w-1/2"
                    >
                        <h2 className="text-[34px] md:text-[48px] font-bold mb-6 leading-[1.15] text-brand-secondary">
                            Solar Modules
                        </h2>
                        <p className="text-brand-gray-600 text-[15px] sm:text-[16px] leading-relaxed mb-10 max-w-xl">
                            Gigacore Systems works with leading global solar module platforms for high-efficiency photovoltaic projects across utility, commercial and industrial segments.
                        </p>
                        <p className="text-brand-gray-600 text-[15px] sm:text-[16px] leading-relaxed mb-10 max-w-xl">
                            Our solar offering includes high-power modules for ground-mounted projects, rooftop solar applications, bifacial modules, TOPCon technology modules and specialized modules designed for demanding environments.
                        </p>

                        <div className="grid grid-cols-1 gap-4">
                            {MODULE_BRANDS.map((brand, idx) => (
                                <div key={idx} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                                    <h3 className="text-[20px] font-semibold text-brand-secondary mb-3">{brand.title}</h3>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{brand.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full lg:w-1/2"
                    >
                        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                            <Image
                                src="/home/A Different Architecture.png"
                                alt="Solar module deployment illustration"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                </div>
            </SectionWrapper>
        </section>
    );
}
