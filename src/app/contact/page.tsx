"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { staggerContainer } from "@/lib/motion";
import { Mail, Phone, MapPin } from "lucide-react";

const fadeUp_ = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 min-h-screen flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src="/1218%20Re_GOTION%20EN_260510_195022%20Image%5B28%5D.jpg"
                        alt="Gigacore headquarters"
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                </div>
                <SectionWrapper className="relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="max-w-xl mx-auto text-center"
                    >
                        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-xl">
                            <motion.h1 variants={fadeUp_} className="text-4xl md:text-6xl font-bold mb-4 text-brand-secondary leading-tight">
                                Contact Us
                            </motion.h1>
                            <motion.p variants={fadeUp_} className="text-lg text-gray-600 leading-relaxed">
                                Ready to discuss your solar and storage project? Get in touch with our team.
                            </motion.p>
                        </div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* Contact Information */}
            <section className="py-12 bg-brand-light">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.h2 variants={fadeUp_} className="text-4xl font-bold text-center mb-8 text-brand-secondary">
                            Get In Touch
                        </motion.h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Email */}
                            <motion.div variants={fadeUp_} className="text-center">
                                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Mail className="w-8 h-8 text-brand-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">Email</h3>
                                <p className="text-gray-600 mb-4">
                                    For project inquiries and technical discussions
                                </p>
                                <a
                                    href="mailto:info@gigacore.systems"
                                    className="text-brand-primary font-semibold hover:underline"
                                >
                                    info@gigacore.systems
                                </a>
                            </motion.div>

                            {/* Phone */}
                            <motion.div variants={fadeUp_} className="text-center">
                                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Phone className="w-8 h-8 text-brand-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">Phone</h3>
                                <p className="text-gray-600 mb-4">
                                    Speak directly with our technical team
                                </p>
                                <a
                                    href="tel:+91-120-2443724"
                                    className="text-brand-primary font-semibold hover:underline"
                                >
                                    +91-120-2443724
                                </a>
                            </motion.div>

                            {/* Location */}
                            <motion.div variants={fadeUp_} className="text-center">
                                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <MapPin className="w-8 h-8 text-brand-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">Location</h3>
                                <p className="text-gray-600 mb-4">
                                    India Headquarters
                                </p>
                                <address className="text-gray-600 not-italic">
                                    B-37, Sector - 1<br />
                                    Noida - 201 301<br />
                                    Delhi NCR, India
                                </address>
                            </motion.div>
                        </div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* Project Inquiry Note */}
            <section className="py-12 bg-white">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <motion.h2 variants={fadeUp_} className="text-3xl font-bold mb-8 text-brand-secondary">
                            Project-Specific Inquiries
                        </motion.h2>
                        <motion.p variants={fadeUp_} className="text-lg text-gray-600 mb-8">
                            For BESS and solar project quotations, please use the product-specific Request Quote form so our team can prepare the correct techno-commercial proposal.
                        </motion.p>
                        <motion.div variants={fadeUp_} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/products"
                                className="px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors"
                            >
                                View Products
                            </a>
                            <a
                                href="mailto:info@gigacore.systems?subject=General%20Inquiry"
                                className="px-6 py-3 border border-brand-primary text-brand-primary rounded-lg font-semibold hover:bg-brand-primary hover:text-white transition-colors"
                            >
                                Send General Inquiry
                            </a>
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>
        </main>
    );
}