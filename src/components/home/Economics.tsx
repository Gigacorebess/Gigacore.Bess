"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp } from "@/lib/motion";
import Image from "next/image";

const PROJECT_TYPES = [
    {
        title: "C&I Solar + Storage",
        desc: "For factories, warehouses, commercial buildings, campuses and industrial facilities.",
    },
    {
        title: "Utility-Scale Storage",
        desc: "For renewable developers, IPPs, grid-connected storage projects and energy infrastructure platforms.",
    },
    {
        title: "Solar Module Supply",
        desc: "For EPCs, developers and project owners requiring reliable high-efficiency solar modules.",
    },
    {
        title: "Hybrid Energy Systems",
        desc: "For projects combining solar generation, battery storage, power conversion and control systems.",
    },
];

export default function Economics() {
    return (
        <section className="py-[var(--spacing-section)] bg-brand-light border-b border-gray-100 overflow-hidden">
            <SectionWrapper>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full lg:w-1/2"
                    >
                        <h2 className="text-[36px] md:text-[52px] font-bold leading-[1.15] text-brand-secondary mb-6">
                            Project Types We Support
                        </h2>
                        <p className="text-xl text-brand-gray-600 font-light leading-[1.75] mb-10 max-w-xl">
                            Gigacore Systems supports solar and storage deliveries across a wide range of customer and project models. We align products, design and execution for practical deployment.
                        </p>

                        <div className="grid grid-cols-1 gap-6">
                            {PROJECT_TYPES.map((item, idx) => (
                                <div key={idx} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                                    <h3 className="text-2xl font-semibold text-brand-secondary mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-base">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full lg:w-1/2"
                    >
                        <div className="relative aspect-[16/9] w-full bg-brand-light border border-gray-100 p-2 rounded-[32px] overflow-hidden">
                            <Image
                                src="/home/Designed Around.png"
                                alt="Solar and battery energy storage project map"
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
