"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import { Eye, Mail } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

type Product = {
  name: string;
  capacity: string;
  type: string;
  category: string;
  specs?: {
    energyCapacity: string;
    batteryCell: string;
    configuration: string;
    cooling: string;
    ipRating: string;
    communication: string;
    dimensions: string;
    weight: string;
    maxAltitude: string;
    certifications: string;
  };
};

const products: {
  ci_bess: Product[];
  utility_bess: Product[];
  solar: Product[];
  integrated: Product[];
} = {
  ci_bess: [
    {
      name: "C&I Outdoor BESS Cabinet — 760 kWh",
      capacity: "760 kWh",
      type: "Outdoor Cabinet",
      category: "Battery Energy Storage",
      specs: {
        energyCapacity: "760 kWh",
        batteryCell: "300Ah",
        configuration: "2P396S",
        cooling: "Liquid-cooled",
        ipRating: "IP55",
        communication: "CAN, RS485, Ethernet",
        dimensions: "2400 × 1400 × 2500 mm",
        weight: "≈ 8000 kg",
        maxAltitude: "≤ 2000 m (derating above)",
        certifications: "UL9540A, UL9540, UL1973, UN38.3, UN3480, NFPA68, IEC62477-1, IEC 61000-6-2/4, IEC 63056, IEC 62619, IEC 60730-1, GB/T 36276"
      }
    },
    {
      name: "C&I Outdoor BESS Cabinet — 836 kWh",
      capacity: "836 kWh",
      type: "Outdoor Cabinet",
      category: "Battery Energy Storage",
      specs: {
        energyCapacity: "836 kWh",
        batteryCell: "314Ah",
        configuration: "1P416S",
        cooling: "Liquid-cooled",
        ipRating: "IP55",
        communication: "CAN, RS485, Ethernet",
        dimensions: "2400 × 1400 × 2420 mm",
        weight: "≈ 8000 kg",
        maxAltitude: "≤ 3000 m (derating above)",
        certifications: "UL9540, UL1973, UL9540A, NFPA68, IEC62477, IEC61000, IEC63056, IEC62619, IEC60730, UN3480"
      }
    },
    {
      name: "C&I Outdoor BESS Cabinet — 522 kWh",
      capacity: "522 kWh",
      type: "Outdoor Cabinet",
      category: "Battery Energy Storage",
      specs: {
        energyCapacity: "522 kWh",
        batteryCell: "314Ah",
        configuration: "1P260S",
        cooling: "Liquid-cooled",
        ipRating: "IP55",
        communication: "CAN, RS485, Ethernet",
        dimensions: "1900 × 1400 × 2420 mm",
        weight: "≈ 8000 kg",
        maxAltitude: "≤ 4000 m (derating above)",
        certifications: "UL9540, UL1973, UL1741, UL9540A, NFPA68, NFPA69, UN3480"
      }
    },
    {
      name: "C&I Outdoor BESS Cabinet — 261 kWh",
      capacity: "261 kWh",
      type: "Outdoor Cabinet",
      category: "Battery Energy Storage",
      specs: {
        energyCapacity: "261 kWh",
        batteryCell: "314Ah",
        configuration: "1P260S",
        cooling: "Liquid-cooled",
        ipRating: "IP55",
        communication: "CAN, RS485, Ethernet",
        dimensions: "1120 × 1350 × 2420 mm",
        weight: "≈ 3500 kg",
        maxAltitude: "≤ 4000 m (derating above)",
        certifications: "UL9540, UL1973, UL1741, UL9540A, NFPA68, NFPA69, UN3480"
      }
    },
    {
      name: "All-in-One ESS — 125 kW / 261 kWh",
      capacity: "125 kW / 261 kWh",
      type: "Integrated System",
      category: "Battery Energy Storage",
      specs: {
        energyCapacity: "261 kWh",
        batteryCell: "314Ah",
        configuration: "1P260S",
        cooling: "Natural (PCS) + Liquid (Battery)",
        ipRating: "IP55",
        communication: "RS485 / Ethernet",
        dimensions: "800 × 1152 × 2373 mm",
        weight: "≈ 2600 kg",
        maxAltitude: "≤ 3000 m (derating above 2000m)",
        certifications: "IEC62619, IEC62477, IEC61000, UN38.3"
      }
    },
    {
      name: "DC Battery Cabinet — 261 kWh",
      capacity: "261 kWh",
      type: "DC Cabinet",
      category: "Battery Energy Storage",
      specs: {
        energyCapacity: "261 kWh",
        batteryCell: "314Ah",
        configuration: "1P260S",
        cooling: "Liquid-cooled",
        ipRating: "IP55",
        communication: "RS485 / Ethernet × 2",
        dimensions: "1120 × 1350 × 2420 mm",
        weight: "≈ 2550 kg",
        maxAltitude: "≤ 4000 m (derating above)",
        certifications: "IEC62619, IEC62477, IEC61000, UN38.3"
      }
    },
    {
      name: "PV-Storage Charging All-in-One ESS — 100 kW / 261 kWh",
      capacity: "100 kW / 261 kWh",
      type: "Integrated System",
      category: "Solar + Storage Systems",
      specs: {
        energyCapacity: "261 kWh",
        batteryCell: "314Ah",
        configuration: "1P260S",
        cooling: "Liquid-cooled",
        ipRating: "IP55",
        communication: "RS485 / Ethernet × 2",
        dimensions: "1500 × 1350 × 2420 mm",
        weight: "≈ 2650 kg",
        maxAltitude: "≤ 4000 m (derating above 2000m)",
        certifications: "IEC62619, IEC62477, IEC61000, IEC63056, UN38.3, UN3480"
      }
    },
    {
      name: "All-in-One ESS — 100 kW / 211 kWh",
      capacity: "100 kW / 211 kWh",
      type: "Integrated System",
      category: "Battery Energy Storage",
      specs: {
        energyCapacity: "211 kWh",
        batteryCell: "300Ah",
        configuration: "1P176S",
        cooling: "Liquid-cooled",
        ipRating: "IP55",
        communication: "RS485 / Ethernet",
        dimensions: "1340 × 1300 × 2300 mm",
        weight: "≈ 2600 kg",
        maxAltitude: "≤ 3000 m",
        certifications: "IEC62619, IEC62477, IEC61000, UN38.3"
      }
    },
  ],
  utility_bess: [
    {
      name: "Utility-Scale Containerized BESS — 20 MWh",
      capacity: "20 MWh",
      type: "Containerized System",
      category: "Battery Energy Storage",
      specs: {
        energyCapacity: "20 MWh",
        batteryCell: "314Ah",
        configuration: "1P104S × 4 × 48",
        cooling: "Liquid-cooled",
        ipRating: "IP55",
        communication: "CAN, RS485, Ethernet",
        dimensions: "Containerized",
        weight: "Variable",
        maxAltitude: "≤ 2000 m",
        certifications: "UL9540A, UL9540, UL1973, UN38.3, UN3480, NFPA68, IEC62477-1, IEC 61000-6-2/4, IEC 63056, IEC 62619, IEC 60730-1"
      }
    },
    {
      name: "Utility-Scale Containerized BESS — 7 MWh",
      capacity: "7 MWh",
      type: "Containerized System",
      category: "Battery Energy Storage",
      specs: {
        energyCapacity: "7 MWh",
        batteryCell: "588Ah",
        configuration: "1P104S × 4 × 9",
        cooling: "Liquid-cooled",
        ipRating: "IP55",
        communication: "CAN, RS485, Ethernet",
        dimensions: "Containerized",
        weight: "Variable",
        maxAltitude: "≤ 2000 m",
        certifications: "UL9540, UL1973, UL9540A, NFPA68, IEC62477, IEC61000, IEC63056, IEC62619, IEC60730, UN3480"
      }
    },
    {
      name: "Utility-Scale Containerized BESS — 5 MWh",
      capacity: "5 MWh",
      type: "Containerized System",
      category: "Battery Energy Storage",
      specs: {
        energyCapacity: "5 MWh",
        batteryCell: "314Ah",
        configuration: "1P104S × 4 × 12",
        cooling: "Liquid-cooled",
        ipRating: "IP55",
        communication: "CAN, RS485, Ethernet",
        dimensions: "Containerized",
        weight: "Variable",
        maxAltitude: "≤ 2000 m",
        certifications: "UL9540, UL1973, UL1741, UL9540A, NFPA68, NFPA69, UN3480"
      }
    },
  ],
  solar: [
    { name: "High-Efficiency Monocrystalline Solar Module", capacity: "400–550 W", type: "Monocrystalline", category: "Solar Modules" },
    { name: "Utility-Scale Bifacial Solar Module", capacity: "400–550 W", type: "Bifacial", category: "Solar Modules" },
    { name: "N-Type High-Power Solar Module", capacity: "550–650 W", type: "N-Type", category: "Solar Modules" },
    { name: "Anti-Soiling Solar Module", capacity: "400–550 W", type: "Self-Cleaning", category: "Solar Modules" },
    { name: "Premium Bifacial Solar Module", capacity: "400–550 W", type: "Premium Bifacial", category: "Solar Modules" },
  ],
  integrated: [
    { name: "Solar Shifting System", capacity: "Variable", type: "Integrated", category: "Solar + Storage Systems" },
    { name: "Backup Power System", capacity: "Variable", type: "Integrated", category: "Solar + Storage Systems" },
    { name: "Grid Support System", capacity: "Variable", type: "Integrated", category: "Solar + Storage Systems" },
  ],
};

function ProductCard({ product, onViewSpecs, onRequestQuote }: {
  product: Product;
  onViewSpecs: (product: Product) => void;
  onRequestQuote: (product: Product) => void;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
    >
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
        <div className="space-y-1 text-sm text-gray-600">
          <p><span className="font-medium">Capacity:</span> {product.capacity}</p>
          <p><span className="font-medium">Type:</span> {product.type}</p>
          <p><span className="font-medium">Category:</span> {product.category}</p>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => onViewSpecs(product)}
          className="flex items-center gap-2 px-4 py-2 text-brand-primary border border-brand-primary rounded-lg hover:bg-brand-primary hover:text-white transition-colors text-sm"
        >
          <Eye className="w-4 h-4" />
          View Specs
        </button>
        <button
          onClick={() => onRequestQuote(product)}
          className="flex items-center gap-2 px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors text-sm"
        >
          <Mail className="w-4 h-4" />
          Request Quote
        </button>
      </div>
    </motion.div>
  );
}

function SpecsModal({ product, isOpen, onClose }: {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen || !product || !product.specs) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div><span className="font-medium">Energy Capacity:</span> {product.specs.energyCapacity}</div>
            <div><span className="font-medium">Battery Cell:</span> {product.specs.batteryCell}</div>
            <div><span className="font-medium">Configuration:</span> {product.specs.configuration}</div>
            <div><span className="font-medium">Cooling:</span> {product.specs.cooling}</div>
            <div><span className="font-medium">IP Rating:</span> {product.specs.ipRating}</div>
            <div><span className="font-medium">Communication:</span> {product.specs.communication}</div>
            <div><span className="font-medium">Dimensions:</span> {product.specs.dimensions}</div>
            <div><span className="font-medium">Weight:</span> {product.specs.weight}</div>
            <div><span className="font-medium">Max Altitude:</span> {product.specs.maxAltitude}</div>
            <div className="md:col-span-2"><span className="font-medium">Certifications:</span> {product.specs.certifications}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ci_bess");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showSpecsModal, setShowSpecsModal] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<Product | null>(null);

  const handleViewSpecs = (product: Product) => {
    setSelectedProduct(product);
    setShowSpecsModal(true);
  };

  const handleRequestQuote = (product: Product) => {
    setQuoteProduct(product);
    setShowQuoteForm(true);
  };

  const getCurrentProducts = () => {
    switch (selectedCategory) {
      case "ci_bess": return products.ci_bess;
      case "utility_bess": return products.utility_bess;
      case "solar": return products.solar;
      case "integrated": return products.integrated;
      default: return products.ci_bess;
    }
  };

  const getCategoryTitle = () => {
    switch (selectedCategory) {
      case "ci_bess": return "Commercial & Industrial BESS";
      case "utility_bess": return "Utility-Scale BESS";
      case "solar": return "Solar Modules";
      case "integrated": return "Integrated Systems";
      default: return "Products";
    }
  };

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
      <section className="py-12 bg-gray-50">
        <SectionWrapper>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-4"
          >
            {[
              { id: "ci_bess", name: "C&I BESS", desc: "Compact cabinets for commercial & industrial sites" },
              { id: "utility_bess", name: "Utility-Scale BESS", desc: "Containerized systems for large-scale deployment" },
              { id: "solar", name: "Solar Modules", desc: "High-efficiency solar panels for various applications" },
              { id: "integrated", name: "Integrated Systems", desc: "Complete solar + storage solutions" },
            ].map((category) => (
              <motion.button
                key={category.id}
                variants={fadeUp}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-lg border text-left transition-all ${
                  selectedCategory === category.id
                    ? "bg-brand-primary text-white border-brand-primary shadow-lg"
                    : "bg-white text-gray-700 border-gray-300 hover:border-brand-primary"
                }`}
              >
                <h3 className="font-bold mb-2">{category.name}</h3>
                <p className={`text-sm ${selectedCategory === category.id ? "text-white/80" : "text-gray-600"}`}>
                  {category.desc}
                </p>
              </motion.button>
            ))}
          </motion.div>
        </SectionWrapper>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white">
        <SectionWrapper>
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              {getCategoryTitle()}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getCurrentProducts().map((product, idx) => (
                <ProductCard
                  key={`${product.name}-${idx}`}
                  product={product}
                  onViewSpecs={handleViewSpecs}
                  onRequestQuote={handleRequestQuote}
                />
              ))}
            </div>
          </motion.div>
        </SectionWrapper>
      </section>

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
                Contact Our Team
              </Button>
              <Button href="/technology" variant="secondary">
                Learn About Technology
              </Button>
            </motion.div>
          </motion.div>
        </SectionWrapper>
      </section>

      {/* Modals */}
      <SpecsModal
        product={selectedProduct}
        isOpen={showSpecsModal}
        onClose={() => setShowSpecsModal(false)}
      />

      {showQuoteForm && quoteProduct && (
        <QuoteRequestForm
          selectedProduct={quoteProduct.name}
          selectedCategory={quoteProduct.category}
          onClose={() => setShowQuoteForm(false)}
        />
      )}
    </main>
  );
}