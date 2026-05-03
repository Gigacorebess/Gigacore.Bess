"use client";
import React from "react";
import { motion } from "framer-motion";
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
            <section className="relative pt-32 pb-24 bg-white overflow-hidden">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.h1 variants={fadeUp_} className="text-5xl md:text-7xl font-bold mb-6 text-brand-secondary leading-tight">
                            Contact Us
                        </motion.h1>
                        <motion.p variants={fadeUp_} className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                            Ready to discuss your solar and storage project? Get in touch with our team.
                        </motion.p>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* Contact Information */}
            <section className="py-24 bg-gray-50">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.h2 variants={fadeUp_} className="text-4xl font-bold text-center mb-16 text-brand-secondary">
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
            <section className="py-24 bg-white">
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