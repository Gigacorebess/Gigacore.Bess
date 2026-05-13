"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import { Eye, Mail, ZoomIn, X, ShieldCheck, Cpu, LayoutGrid, Battery, Zap, RefreshCw, ChevronRight, Leaf, Wifi, Award } from "lucide-react";

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
    {
      name: "High-Efficiency Monocrystalline Solar Module", capacity: "400–550 W", type: "Monocrystalline", category: "Solar Modules",
      specs: { energyCapacity: "400–550 W", batteryCell: "Monocrystalline PERC", configuration: "60 / 72 cells", cooling: "Passive (natural convection)", ipRating: "IP68 (junction box)", communication: "N/A", dimensions: "1722 × 1134 × 35 mm", weight: "21.5 kg", maxAltitude: "≤ 5500 m", certifications: "IEC 61215, IEC 61730, UL 1703, MCS, CE" }
    },
    {
      name: "Utility-Scale Bifacial Solar Module", capacity: "400–550 W", type: "Bifacial", category: "Solar Modules",
      specs: { energyCapacity: "400–550 W", batteryCell: "Bifacial PERC", configuration: "144 half-cut cells", cooling: "Passive (natural convection)", ipRating: "IP68 (junction box)", communication: "N/A", dimensions: "2094 × 1038 × 35 mm", weight: "24.9 kg", maxAltitude: "≤ 5500 m", certifications: "IEC 61215, IEC 61730, UL 1703, CE" }
    },
    {
      name: "N-Type High-Power Solar Module", capacity: "550–650 W", type: "N-Type", category: "Solar Modules",
      specs: { energyCapacity: "550–650 W", batteryCell: "N-Type TOPCon", configuration: "132 / 144 half-cut cells", cooling: "Passive (natural convection)", ipRating: "IP68 (junction box)", communication: "N/A", dimensions: "2256 × 1133 × 35 mm", weight: "28.0 kg", maxAltitude: "≤ 5500 m", certifications: "IEC 61215, IEC 61730, UL 1703, TÜV, CE" }
    },
    {
      name: "Anti-Soiling Solar Module", capacity: "400–550 W", type: "Self-Cleaning", category: "Solar Modules",
      specs: { energyCapacity: "400–550 W", batteryCell: "Monocrystalline PERC", configuration: "72 half-cut cells", cooling: "Passive (natural convection)", ipRating: "IP68 (junction box)", communication: "N/A", dimensions: "1960 × 992 × 40 mm", weight: "22.5 kg", maxAltitude: "≤ 5500 m", certifications: "IEC 61215, IEC 61730, CE, ISO 9001" }
    },
    {
      name: "Premium Bifacial Solar Module", capacity: "400–550 W", type: "Premium Bifacial", category: "Solar Modules",
      specs: { energyCapacity: "400–550 W", batteryCell: "Bifacial N-Type", configuration: "120 half-cut cells", cooling: "Passive (natural convection)", ipRating: "IP68 (junction box)", communication: "N/A", dimensions: "1979 × 1002 × 35 mm", weight: "23.0 kg", maxAltitude: "≤ 5500 m", certifications: "IEC 61215, IEC 61730, UL 1703, MCS, TÜV, CE" }
    },
  ],
  integrated: [
    {
      name: "Solar Shifting System", capacity: "Variable", type: "Integrated", category: "Solar + Storage Systems",
      specs: { energyCapacity: "Customisable (10–500 kWh)", batteryCell: "LFP / NMC", configuration: "Solar PV + BESS + Inverter", cooling: "Forced air / liquid (site-specific)", ipRating: "IP54 (cabinet)", communication: "RS485, Modbus TCP, CAN, 4G/WiFi", dimensions: "Site-specific", weight: "Site-specific", maxAltitude: "≤ 3000 m", certifications: "IEC 62619, UL 9540, CE, ISO 9001" }
    },
    {
      name: "Backup Power System", capacity: "Variable", type: "Integrated", category: "Solar + Storage Systems",
      specs: { energyCapacity: "Customisable (5–200 kWh)", batteryCell: "LFP", configuration: "Solar PV + BESS + ATS", cooling: "Forced air", ipRating: "IP55 (cabinet)", communication: "RS485, Modbus TCP, 4G/WiFi", dimensions: "Site-specific", weight: "Site-specific", maxAltitude: "≤ 3000 m", certifications: "IEC 62619, UL 9540, CE, IEC 61000" }
    },
    {
      name: "Grid Support System", capacity: "Variable", type: "Integrated", category: "Solar + Storage Systems",
      specs: { energyCapacity: "Customisable (100 kWh – 10 MWh)", batteryCell: "LFP", configuration: "Solar PV + BESS + Grid-Tie Inverter", cooling: "Liquid cooling (optional)", ipRating: "IP54 (cabinet)", communication: "Modbus TCP, IEC 61850, SCADA, 4G", dimensions: "Site-specific", weight: "Site-specific", maxAltitude: "≤ 3000 m", certifications: "IEC 62619, UL 9540, IEEE 1547, CE" }
    },
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
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
        </div>

        <div className="p-6">
          {product.specs ? (
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
          ) : (
            <div className="text-sm text-gray-600 space-y-2">
              <p><span className="font-medium">Capacity:</span> {product.capacity}</p>
              <p><span className="font-medium">Type:</span> {product.type}</p>
              <p><span className="font-medium">Category:</span> {product.category}</p>
              <p className="mt-4 text-gray-500">Full specifications are available on request. Please use the &quot;Request Quote&quot; button to contact our team.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ImageLightbox({ src, alt, isOpen, onClose }: {
  src: string; alt: string; isOpen: boolean; onClose: () => void;
}) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors" aria-label="Close">
        <X className="w-6 h-6" />
      </button>
      <div className="relative w-full max-w-6xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
        <img src={src} alt={alt} className="w-full h-auto max-h-[90vh] object-contain rounded-lg" />
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
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

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
      <section className="pt-24 overflow-hidden relative">
        {/* Mobile background — scales to viewport width */}
        <div
          className="absolute inset-0 sm:hidden bg-no-repeat bg-top"
          style={{ backgroundImage: "url('/product%20hero.png')", backgroundSize: "100% auto" }}
        />
        {/* Desktop background — natural pixel size */}
        <div
          className="absolute inset-0 hidden sm:block bg-no-repeat bg-top"
          style={{ backgroundImage: "url('/product%20hero.png')", backgroundSize: "auto" }}
        />
        {/* Main hero: text + featured card */}
        <SectionWrapper className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="pt-6 max-w-3xl"
          >
            {/* Label */}
            <motion.p variants={fadeUp} className="text-brand-accent uppercase tracking-[0.2em] text-xs font-bold mb-4">
              Powering a Sustainable Future
            </motion.p>

            {/* Heading */}
            <motion.h1 variants={fadeUp} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-secondary leading-[1.05] mb-4">
              Energy Storage<br />Solutions
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={fadeUp} className="text-gray-700 text-base sm:text-lg mb-6 max-w-md">
              Advanced battery systems for every need. Scalable. Intelligent. Built for tomorrow.
            </motion.p>

            {/* Feature badges */}
            <motion.div variants={fadeUp} className="border-y border-gray-300 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-300">
                {[
                  { icon: <ShieldCheck className="w-4 h-4 text-brand-accent" />, label: "Safe & Reliable", sub: "LiFePO₄ Technology" },
                  { icon: <Cpu className="w-4 h-4 text-brand-accent" />, label: "Smart BMS", sub: "Intelligent Control" },
                  { icon: <LayoutGrid className="w-4 h-4 text-brand-accent" />, label: "Scalable Design", sub: "From Home to Grid" },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-3 py-3 sm:py-4 sm:px-5 first:sm:pl-0 last:sm:pr-0">
                    {b.icon}
                    <div>
                      <p className="font-bold text-sm text-brand-secondary">{b.label}</p>
                      <p className="text-xs text-gray-500">{b.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Featured GRID card */}
            <motion.div
              variants={fadeUp}
              className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-2xl p-4 sm:p-6 shadow-sm"
            >
              {/* Mobile: stacked, Desktop: horizontal */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                {/* Title */}
                <div className="shrink-0">
                  <p className="text-brand-accent text-[10px] font-extrabold uppercase tracking-[0.2em] mb-1">Featured</p>
                  <h2 className="text-3xl sm:text-4xl font-black text-brand-secondary leading-none">GRID</h2>
                  <p className="text-xs text-gray-500 mt-1 font-medium">Utility-Scale Energy Storage System</p>
                </div>

                <div className="hidden sm:block w-px self-stretch bg-gray-300/60" />

                {/* Specs — 3-col grid on mobile */}
                <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-x-6 gap-y-3 flex-1">
                  {[
                    { icon: <Battery className="w-4 h-4" />, value: "5 MWh",         label: "Energy Capacity" },
                    { icon: <Zap className="w-4 h-4" />,     value: "2.5 MW",        label: "Output Power" },
                    { icon: <RefreshCw className="w-4 h-4" />, value: "6000+ Cycles", label: "LFP Battery" },
                  ].map((spec) => (
                    <div key={spec.label} className="flex items-start sm:items-center gap-2">
                      <span className="text-brand-primary mt-0.5 sm:mt-0">{spec.icon}</span>
                      <div>
                        <p className="font-bold text-xs sm:text-sm text-brand-secondary leading-tight">{spec.value}</p>
                        <p className="text-[9px] sm:text-[10px] text-gray-500">{spec.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hidden sm:block w-px self-stretch bg-gray-300/60" />

                {/* CTAs */}
                <div className="flex flex-row sm:flex-col gap-3 sm:gap-2 shrink-0">
                  <Button href="/contact" variant="primary" className="text-sm flex-1 sm:flex-none text-center justify-center">
                    Request Quote
                  </Button>
                  <button
                    onClick={() => {
                      setSelectedCategory("utility_bess");
                      document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-xs font-semibold text-brand-secondary flex items-center justify-center gap-1 hover:text-brand-primary transition-colors flex-1 sm:flex-none"
                  >
                    View Full Specs <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Product cards row */}
        <div className="relative z-10 mt-8 px-4 sm:px-6 lg:px-10 pb-8">
          <div className="max-w-[1440px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {[
              { img: "/Gigacore%20Home%203000.png",   label: "Residential", name: "Home 3000",    desc: "Home mobile energy storage product." },
              { img: "/EPLVS%20intelligent.png",      label: "Portable",    name: "EPLVS",        desc: "Intelligent mobile charging pile." },
              { img: "/Gigacore%20EDGE.png",          label: "Commercial",  name: "EDGE",         desc: "C&I energy storage cabinet." },
              { img: "/Gigacore%20G0300.png",         label: "Utility",     name: "Go300",        desc: "Large energy storage battery cell." },
              { img: "/storage%20battery%20cell.png", label: "Modular",     name: "Battery Cell", desc: "High-cycle LFP cell technology." },
            ].map((card) => (
              <motion.div
                key={card.name}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.96, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-[0_12px_40px_rgba(74,125,180,0.25)] transition-shadow duration-300"
                style={{ transformOrigin: "bottom center" }}
              >
                {/* Top accent line */}
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-brand-primary to-brand-primary/40 transition-all duration-500" />

                {/* Image area */}
                <div className="bg-gradient-to-b from-gray-50/80 to-white/60 flex items-center justify-center px-4 pt-5 pb-3 h-28 sm:h-36">
                  <img
                    src={card.img}
                    alt={card.name}
                    className="h-full w-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="px-4 pb-4 pt-2">
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-brand-primary/70 mb-1">{card.label}</p>
                  <h4 className="font-bold text-brand-secondary text-sm leading-tight group-hover:text-brand-primary transition-colors duration-200">{card.name}</h4>
                  <p className="text-[10px] text-gray-400 mt-1 leading-relaxed hidden sm:block">{card.desc}</p>
                </div>

                {/* Bottom arrow bar */}
                <div className="flex items-center justify-between px-4 pb-3 pt-0">
                  <div className="h-px flex-1 bg-gray-100 group-hover:bg-brand-primary/20 transition-colors duration-300" />
                  <span className="ml-3 flex items-center justify-center w-6 h-6 rounded-full border border-gray-200 group-hover:border-brand-primary group-hover:bg-brand-primary transition-all duration-300">
                    <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      {/* Feature Strip */}
      <section className="bg-white border-y border-gray-100">
        <SectionWrapper>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100"
          >
            {[
              { icon: <Leaf className="w-6 h-6" />,        title: "Sustainable Energy",  desc: "Clean power for a better tomorrow.",        color: "from-emerald-50 to-white" },
              { icon: <Wifi className="w-6 h-6" />,        title: "Smart Connectivity",  desc: "Monitor and control from anywhere.",         color: "from-sky-50 to-white" },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "Unmatched Safety",    desc: "Multi-layer protection you can trust.",      color: "from-blue-50 to-white" },
              { icon: <Award className="w-6 h-6" />,       title: "Built to Last",       desc: "Premium components. Proven performance.",    color: "from-indigo-50 to-white" },
            ].map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className={`group flex items-start gap-5 bg-gradient-to-br ${f.color} hover:from-brand-light hover:to-white transition-all duration-300 px-8 py-8 cursor-default`}
              >
                <span className="shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  {f.icon}
                </span>
                <div className="pt-0.5">
                  <p className="font-bold text-brand-secondary text-base mb-1">{f.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>
      </section>

      {/* Product Overview Images */}
      <section className="py-16 bg-[#F8FAFB]">
        {/* Heading — constrained */}
        <SectionWrapper>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} className="text-brand-primary font-extrabold uppercase tracking-[0.18em] text-[11px] mb-2 text-center">Our Technology</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-brand-secondary text-center mb-10">Product Range Overview</motion.h2>
          </motion.div>
        </SectionWrapper>

        {/* Cards — full width */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="px-4 sm:px-6 lg:px-8"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: "Energy Storage", title: "BESS Product Range", src: "/ChatGPT%20Image%20May%2011%2C%202026%2C%2012_11_02%20PM.png", alt: "Energy Storage Products" },
                { label: "Battery Technology", title: "Cell Technology",  src: "/ChatGPT%20Image%20May%2011%2C%202026%2C%2012_19_28%20PM.png", alt: "Battery Cell Technology" },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp} className="group flex flex-col">
                  {/* Text outside the card */}
                  <div className="mb-4 px-1">
                    <p className="text-brand-primary font-extrabold uppercase tracking-[0.18em] text-[10px] mb-1.5">{item.label}</p>
                    <h3 className="text-2xl sm:text-3xl font-bold text-brand-secondary">{item.title}</h3>
                  </div>

                  {/* Card — image only, full bleed */}
                  <div className="relative rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_16px_48px_rgba(74,125,180,0.18)] transition-shadow duration-500 border border-gray-100">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto object-contain block group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
      </section>

      {/* Category Overview */}
      <section className="py-12 bg-brand-light">
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
      <section id="products-section" className="py-12 bg-white">
        <SectionWrapper>
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
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
      <section className="py-12 bg-brand-secondary text-white">
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
              <Button href="/technology" variant="primary">
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

      <ImageLightbox
        src={lightboxImage?.src ?? ""}
        alt={lightboxImage?.alt ?? ""}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </main>
  );
}