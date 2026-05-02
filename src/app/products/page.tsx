"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

type Product = {
  name: string;
  capacity: string;
  type: string;
  app: string;
};

const products: {
  ci_bess: Product[];
  utility_bess: Product[];
  solar: Product[];
  integrated: Product[];
} = {
  ci_bess: [
    { name: "C&I Outdoor BESS Cabinet", capacity: "760 kWh", type: "Outdoor Cabinet", app: "Commercial & Industrial" },
    { name: "C&I Outdoor BESS Cabinet", capacity: "836 kWh", type: "Outdoor Cabinet", app: "Commercial & Industrial" },
    { name: "C&I Outdoor BESS Cabinet", capacity: "522 kWh", type: "Outdoor Cabinet", app: "Commercial & Industrial" },
    { name: "C&I Outdoor BESS Cabinet", capacity: "261 kWh", type: "Outdoor Cabinet", app: "Commercial & Industrial" },
    { name: "All-in-One ESS", capacity: "125 kW / 261 kWh", type: "Integrated System", app: "Commercial & Industrial" },
    { name: "DC Battery Cabinet", capacity: "261 kWh", type: "DC Cabinet", app: "Commercial & Industrial" },
    { name: "PV-Storage Charging All-in-One ESS", capacity: "100 kW / 261 kWh", type: "Integrated System", app: "Solar + Storage" },
    { name: "All-in-One ESS", capacity: "100 kW / 211 kWh", type: "Integrated System", app: "Commercial & Industrial" },
  ],
  utility_bess: [
    { name: "Utility-Scale Containerized BESS", capacity: "20 MWh", type: "Containerized System", app: "Utility-Scale" },
    { name: "Utility-Scale Containerized BESS", capacity: "7 MWh", type: "Containerized System", app: "Utility-Scale" },
    { name: "Utility-Scale Containerized BESS", capacity: "5 MWh", type: "Containerized System", app: "Utility-Scale" },
  ],
  solar: [
    { name: "High-Efficiency Monocrystalline Solar Module", capacity: "400–550 W", type: "Monocrystalline", app: "Solar" },
    { name: "Utility-Scale Bifacial Solar Module", capacity: "400–550 W", type: "Bifacial", app: "Utility-Scale" },
    { name: "N-Type High-Power Solar Module", capacity: "550–650 W", type: "N-Type", app: "High-Efficiency" },
    { name: "Anti-Soiling Solar Module", capacity: "400–550 W", type: "Self-Cleaning", app: "Solar" },
    { name: "Premium Bifacial Solar Module", capacity: "400–550 W", type: "Premium Bifacial", app: "Utility-Scale" },
  ],
  integrated: [
    { name: "Solar Shifting System", capacity: "Variable", type: "Integrated", app: "Peak Demand" },
    { name: "Backup Power System", capacity: "Variable", type: "Integrated", app: "Emergency Power" },
    { name: "Grid Support System", capacity: "Variable", type: "Integrated", app: "Grid Services" },
  ],
};

function ProductTable({
  title,
  products,
  capacityLabel = "Capacity",
  bg = "bg-white",
}: {
  title: string;
  products: Product[];
  capacityLabel?: string;
  bg?: string;
}) {
  return (
    <section className={`py-24 ${bg}`}>
      <SectionWrapper>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-12 text-brand-secondary">
            {title}
          </motion.h2>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <motion.table variants={fadeUp} className="w-full min-w-[820px] text-left">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="py-4 px-4 font-bold text-brand-secondary">Product Name</th>
                  <th className="py-4 px-4 font-bold text-brand-secondary">{capacityLabel}</th>
                  <th className="py-4 px-4 font-bold text-brand-secondary">Type</th>
                  <th className="py-4 px-4 font-bold text-brand-secondary">Application</th>
                  <th className="py-4 px-4 font-bold text-brand-secondary">Action</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product, idx) => (
                  <tr key={`${product.name}-${product.capacity}-${idx}`} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 text-gray-800 font-medium">{product.name}</td>
                    <td className="py-4 px-4 text-gray-600">{product.capacity}</td>
                    <td className="py-4 px-4 text-gray-600">{product.type}</td>
                    <td className="py-4 px-4 text-gray-600">{product.app}</td>
                    <td className="py-4 px-4">
                      <Button href="/contact" variant="primary" size="sm">
                        Request Quote
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </motion.div>
      </SectionWrapper>
    </section>
  );
}

export default function ProductsPage() {
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
            <motion.p variants={fadeUp} className="uppercase tracking-[0.22em] text-sm font-semibold text-brand-primary mb-4">
              Products
            </motion.p>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-6 text-brand-secondary leading-tight">
              Storage and Solar Products
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Battery storage and solar technologies for commercial, industrial, and utility-scale energy projects.
            </motion.p>
          </motion.div>
        </SectionWrapper>
      </section>

      {/* Category Overview */}
      <section className="py-24 bg-gray-50">
        <SectionWrapper>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { name: "C&I BESS", icon: "⚡" },
              { name: "Utility-Scale BESS", icon: "🔋" },
              { name: "Solar Modules", icon: "☀️" },
              { name: "Integrated Systems", icon: "🔌" },
            ].map((category, idx) => (
              <motion.div
                key={category.name}
                variants={fadeUp}
                className="p-8 bg-white rounded-2xl border border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <p className="font-semibold text-gray-800">{category.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>
      </section>

      <ProductTable title="Commercial & Industrial BESS" products={products.ci_bess} bg="bg-white" />

      <ProductTable title="Utility-Scale BESS" products={products.utility_bess} bg="bg-gray-50" />

      <ProductTable title="Solar Modules" products={products.solar} capacityLabel="Power Rating" bg="bg-white" />

      <ProductTable title="Integrated Systems" products={products.integrated} bg="bg-gray-50" />

      {/* CTA Section */}
      <section className="py-24 bg-brand-secondary text-white">
        <SectionWrapper>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-8">
              Need custom specifications?
            </motion.h2>

            <motion.p variants={fadeUp} className="text-lg mb-8 text-white/80">
              Contact our team to discuss your project requirements, storage duration, solar integration, and deployment needs.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="outline">
                Request Quote
              </Button>
            </motion.div>
          </motion.div>
        </SectionWrapper>
      </section>
    </main>
  );
}