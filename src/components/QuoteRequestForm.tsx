"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Copy, CheckCircle } from "lucide-react";

interface QuoteRequestFormProps {
    selectedProduct: string;
    selectedCategory: string;
    onClose: () => void;
}

interface FormData {
    companyName: string;
    contactPerson: string;
    email: string;
    phone: string;
    projectLocation: string;
    companyType: string;
    projectName: string;
    capacity: string;
    storageDuration: string;
    capacityBasis: string;
    application: string[];
    scope: string;
    pcsRequired: string;
    pcsRating: string;
    transformerRequired: string;
    gridConnectionVoltage: string;
    emsRequired: string;
    coolingPreference: string;
    batteryChemistry: string;
    ipRating: string;
    operatingTemp: string;
    performanceReq: string;
    fireSuppression: string;
    certifications: string[];
    deliveryBasis: string;
    installationRequired: string;
    timeline: string;
    warranty: string;
    paymentTerms: string;
    documents: string[];
    notes: string;
}

export default function QuoteRequestForm({ selectedProduct, selectedCategory, onClose }: QuoteRequestFormProps) {
    const [formData, setFormData] = useState<FormData>({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        projectLocation: "",
        companyType: "",
        projectName: "",
        capacity: "",
        storageDuration: "",
        capacityBasis: "",
        application: [],
        scope: "",
        pcsRequired: "",
        pcsRating: "",
        transformerRequired: "",
        gridConnectionVoltage: "",
        emsRequired: "",
        coolingPreference: "",
        batteryChemistry: "",
        ipRating: "",
        operatingTemp: "",
        performanceReq: "",
        fireSuppression: "",
        certifications: [],
        deliveryBasis: "",
        installationRequired: "",
        timeline: "",
        warranty: "",
        paymentTerms: "",
        documents: [],
        notes: "",
    });

    const [showSummary, setShowSummary] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleInputChange = (field: keyof FormData, value: string | string[] | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleArrayChange = (field: keyof FormData, value: string, checked: boolean) => {
        setFormData(prev => ({
            ...prev,
            [field]: checked
                ? [...(prev[field] as string[]), value]
                : (prev[field] as string[]).filter(item => item !== value)
        }));
    };

    const generateSummary = () => {
        const summary = `
Request a Quote

Selected Product: ${selectedProduct}
Category: ${selectedCategory}

Customer Details:
- Company: ${formData.companyName}
- Contact: ${formData.contactPerson}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Location: ${formData.projectLocation}
- Company Type: ${formData.companyType}

Project Basics:
- Project Name: ${formData.projectName}
- Capacity: ${formData.capacity}
- Storage Duration: ${formData.storageDuration}
- Capacity Basis: ${formData.capacityBasis}
- Applications: ${formData.application.join(", ")}

Technical Requirements:
- Scope: ${formData.scope}
- PCS Required: ${formData.pcsRequired}
- PCS Rating: ${formData.pcsRating}
- Transformer: ${formData.transformerRequired}
- Grid Voltage: ${formData.gridConnectionVoltage}
- EMS/SCADA: ${formData.emsRequired}
- Cooling: ${formData.coolingPreference}
- Battery Chemistry: ${formData.batteryChemistry}
- IP Rating: ${formData.ipRating}
- Operating Temp: ${formData.operatingTemp}
- Performance: ${formData.performanceReq}
- Fire Suppression: ${formData.fireSuppression}
- Certifications: ${formData.certifications.join(", ")}

Commercial:
- Delivery Basis: ${formData.deliveryBasis}
- Installation: ${formData.installationRequired}
- Timeline: ${formData.timeline}
- Warranty: ${formData.warranty}
- Payment Terms: ${formData.paymentTerms}

Documents Required:
${formData.documents.join(", ")}

Additional Notes:
${formData.notes}
        `.trim();

        return summary;
    };

    const handleGenerateInquiry = () => {
        setShowSummary(true);
    };

    const handleCopySummary = async () => {
        const summary = generateSummary();
        await navigator.clipboard.writeText(summary);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleEmailInquiry = () => {
        const summary = generateSummary();
        const subject = `Quote Request — ${selectedProduct} — ${formData.companyName}`;
        const body = encodeURIComponent(summary);
        window.open(`mailto:info@gigacore.systems?subject=${encodeURIComponent(subject)}&body=${body}`);
    };

    if (showSummary) {
        return (
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-900">Inquiry Summary</h2>
                            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="bg-gray-50 p-4 rounded-lg mb-6 whitespace-pre-wrap text-sm font-mono">
                                {generateSummary()}
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={handleCopySummary}
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    {copied ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                                    {copied ? "Copied!" : "Copy Summary"}
                                </button>

                                <button
                                    onClick={handleEmailInquiry}
                                    className="flex items-center gap-2 px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    Email This Request
                                </button>
                            </div>

                            <p className="text-sm text-gray-600 mt-4">
                                Copy this summary or email it to info@gigacore.systems for your project quote.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        );
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto"
                    onClick={e => e.stopPropagation()}
                >
                    <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                        <h2 className="text-xl font-bold text-gray-900">Request a Quote</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="p-6">
                        <div className="bg-blue-50 p-4 rounded-lg mb-6">
                            <p className="text-sm text-blue-700 mb-1">Tell us what you need so our team can prepare the right technical and commercial response.</p>
                            <p className="font-semibold text-blue-900">Product: {selectedProduct}</p>
                            <p className="text-blue-700">Category: {selectedCategory}</p>
                        </div>

                        <form className="space-y-6">
                            {/* Your Details */}
                            <div>
                                <h3 className="text-lg font-semibold mb-4 text-gray-900">Your Details</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                            value={formData.companyName}
                                            onChange={(e) => handleInputChange("companyName", e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person *</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                            value={formData.contactPerson}
                                            onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange("email", e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                            value={formData.phone}
                                            onChange={(e) => handleInputChange("phone", e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">City/State *</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                            value={formData.projectLocation}
                                            onChange={(e) => handleInputChange("projectLocation", e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Company Type</label>
                                        <select
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                            value={formData.companyType}
                                            onChange={(e) => handleInputChange("companyType", e.target.value)}
                                        >
                                            <option value="">Select type</option>
                                            <option value="Developer">Developer</option>
                                            <option value="EPC">EPC</option>
                                            <option value="C&I Customer">C&I Customer</option>
                                            <option value="Utility">Utility</option>
                                            <option value="Government">Government</option>
                                            <option value="Investor">Investor</option>
                                            <option value="Consultant">Consultant</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Solar Modules Specific Fields */}
                            {selectedCategory === "Solar Modules" && (
                                <>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Solar Project Requirements</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Solar Project Capacity</label>
                                                <input
                                                    type="text"
                                                    placeholder="e.g., 1 MW, 500 kW"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.capacity}
                                                    onChange={(e) => handleInputChange("capacity", e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Module Quantity Required</label>
                                                <input
                                                    type="text"
                                                    placeholder="e.g., 2000 modules"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.projectName}
                                                    onChange={(e) => handleInputChange("projectName", e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Target Module Wattage</label>
                                                <select
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.capacityBasis}
                                                    onChange={(e) => handleInputChange("capacityBasis", e.target.value)}
                                                >
                                                    <option value="">Select wattage</option>
                                                    <option value="400-450W">400-450W</option>
                                                    <option value="450-500W">450-500W</option>
                                                    <option value="500-550W">500-550W</option>
                                                    <option value="550-650W">550-650W</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Module Type Preference</label>
                                                <select
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.scope}
                                                    onChange={(e) => handleInputChange("scope", e.target.value)}
                                                >
                                                    <option value="">Select type</option>
                                                    <option value="Monocrystalline">Monocrystalline</option>
                                                    <option value="Bifacial">Bifacial</option>
                                                    <option value="N-Type">N-Type</option>
                                                    <option value="Anti-Soiling">Anti-Soiling</option>
                                                    <option value="No preference">No preference</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Application</label>
                                                <select
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.companyType}
                                                    onChange={(e) => handleInputChange("companyType", e.target.value)}
                                                >
                                                    <option value="">Select application</option>
                                                    <option value="Rooftop">Rooftop</option>
                                                    <option value="Ground-mount">Ground-mount</option>
                                                    <option value="Carport">Carport</option>
                                                    <option value="Floating">Floating</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Site Type</label>
                                                <select
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.pcsRequired}
                                                    onChange={(e) => handleInputChange("pcsRequired", e.target.value)}
                                                >
                                                    <option value="">Select site type</option>
                                                    <option value="Commercial">Commercial</option>
                                                    <option value="Industrial">Industrial</option>
                                                    <option value="Utility">Utility</option>
                                                    <option value="Residential">Residential</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Location</label>
                                                <input
                                                    type="text"
                                                    placeholder="Port or site location"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.deliveryBasis}
                                                    onChange={(e) => handleInputChange("deliveryBasis", e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Required Delivery Timeline</label>
                                                <input
                                                    type="text"
                                                    placeholder="e.g., 3-6 months"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.timeline}
                                                    onChange={(e) => handleInputChange("timeline", e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Certifications Required</label>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                                {[
                                                    "IEC 61215", "IEC 61730", "UL 1703", "CEC Listed", "TUV", "Other"
                                                ].map((cert) => (
                                                    <label key={cert} className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            className="mr-2"
                                                            checked={formData.certifications.includes(cert)}
                                                            onChange={(e) => handleArrayChange("certifications", cert, e.target.checked)}
                                                        />
                                                        <span className="text-sm">{cert}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Battery Energy Storage Specific Fields */}
                            {selectedCategory === "Battery Energy Storage" && (
                                <>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-4 text-gray-900">BESS Requirements</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Required BESS Capacity</label>
                                                <input
                                                    type="text"
                                                    placeholder="e.g., 1 MWh, 500 kWh"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.capacity}
                                                    onChange={(e) => handleInputChange("capacity", e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Storage Duration</label>
                                                <select
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.storageDuration}
                                                    onChange={(e) => handleInputChange("storageDuration", e.target.value)}
                                                >
                                                    <option value="">Select duration</option>
                                                    <option value="1 hour">1 hour</option>
                                                    <option value="2 hours">2 hours</option>
                                                    <option value="4 hours">4 hours</option>
                                                    <option value="6 hours">6 hours</option>
                                                    <option value="8 hours">8 hours</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Application / Use Case</label>
                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                                    {[
                                                        "Solar shifting", "Peak shaving", "Backup power", "Captive power",
                                                        "Grid support", "Energy arbitrage", "Frequency regulation", "Renewable integration", "Other"
                                                    ].map((app) => (
                                                        <label key={app} className="flex items-center">
                                                            <input
                                                                type="checkbox"
                                                                className="mr-2"
                                                                checked={formData.application.includes(app)}
                                                                onChange={(e) => handleArrayChange("application", app, e.target.checked)}
                                                            />
                                                            <span className="text-sm">{app}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">PCS Requirement</label>
                                                <select
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.pcsRequired}
                                                    onChange={(e) => handleInputChange("pcsRequired", e.target.value)}
                                                >
                                                    <option value="">Select option</option>
                                                    <option value="Included">Included</option>
                                                    <option value="Not included">Not included</option>
                                                    <option value="Need recommendation">Need recommendation</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Transformer Requirement</label>
                                                <select
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.transformerRequired}
                                                    onChange={(e) => handleInputChange("transformerRequired", e.target.value)}
                                                >
                                                    <option value="">Select option</option>
                                                    <option value="Included">Included</option>
                                                    <option value="Not included">Not included</option>
                                                    <option value="Need recommendation">Need recommendation</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Grid Connection Voltage</label>
                                                <select
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.gridConnectionVoltage}
                                                    onChange={(e) => handleInputChange("gridConnectionVoltage", e.target.value)}
                                                >
                                                    <option value="">Select voltage</option>
                                                    <option value="415 V">415 V</option>
                                                    <option value="690 V">690 V</option>
                                                    <option value="11 kV">11 kV</option>
                                                    <option value="33 kV">33 kV</option>
                                                    <option value="66 kV">66 kV</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">EMS / SCADA Requirement</label>
                                                <select
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.emsRequired}
                                                    onChange={(e) => handleInputChange("emsRequired", e.target.value)}
                                                >
                                                    <option value="">Select option</option>
                                                    <option value="Included">Included</option>
                                                    <option value="Not included">Not included</option>
                                                    <option value="Need recommendation">Need recommendation</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Cooling Preference</label>
                                                <select
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.coolingPreference}
                                                    onChange={(e) => handleInputChange("coolingPreference", e.target.value)}
                                                >
                                                    <option value="">Select preference</option>
                                                    <option value="Liquid cooled">Liquid cooled</option>
                                                    <option value="Air cooled">Air cooled</option>
                                                    <option value="Need recommendation">Need recommendation</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Timeline</label>
                                                <input
                                                    type="text"
                                                    placeholder="e.g., 6-12 months"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.timeline}
                                                    onChange={(e) => handleInputChange("timeline", e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Required Documents</label>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                                {[
                                                    "Datasheet", "GA drawing", "SLD", "P&ID", "Test certificates",
                                                    "O&M manual", "Warranty terms", "Technical proposal", "Commercial offer"
                                                ].map((doc) => (
                                                    <label key={doc} className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            className="mr-2"
                                                            checked={formData.documents.includes(doc)}
                                                            onChange={(e) => handleArrayChange("documents", doc, e.target.checked)}
                                                        />
                                                        <span className="text-sm">{doc}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Solar + Storage Systems Specific Fields */}
                            {selectedCategory === "Solar + Storage Systems" && (
                                <>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Solar + Storage Requirements</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Solar Capacity Required</label>
                                                <input
                                                    type="text"
                                                    placeholder="e.g., 1 MW, 500 kW"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.capacity}
                                                    onChange={(e) => handleInputChange("capacity", e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">BESS Capacity Required</label>
                                                <input
                                                    type="text"
                                                    placeholder="e.g., 1 MWh, 500 kWh"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.projectName}
                                                    onChange={(e) => handleInputChange("projectName", e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Storage Duration</label>
                                                <select
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.storageDuration}
                                                    onChange={(e) => handleInputChange("storageDuration", e.target.value)}
                                                >
                                                    <option value="">Select duration</option>
                                                    <option value="1 hour">1 hour</option>
                                                    <option value="2 hours">2 hours</option>
                                                    <option value="4 hours">4 hours</option>
                                                    <option value="6 hours">6 hours</option>
                                                    <option value="8 hours">8 hours</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Use Case</label>
                                                <select
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.companyType}
                                                    onChange={(e) => handleInputChange("companyType", e.target.value)}
                                                >
                                                    <option value="">Select use case</option>
                                                    <option value="Solar shifting">Solar shifting</option>
                                                    <option value="Peak shaving">Peak shaving</option>
                                                    <option value="Backup power">Backup power</option>
                                                    <option value="Grid support">Grid support</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Grid Connection Voltage</label>
                                                <select
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.gridConnectionVoltage}
                                                    onChange={(e) => handleInputChange("gridConnectionVoltage", e.target.value)}
                                                >
                                                    <option value="">Select voltage</option>
                                                    <option value="415 V">415 V</option>
                                                    <option value="690 V">690 V</option>
                                                    <option value="11 kV">11 kV</option>
                                                    <option value="33 kV">33 kV</option>
                                                    <option value="66 kV">66 kV</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">PCS / Transformer Requirement</label>
                                                <select
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.pcsRequired}
                                                    onChange={(e) => handleInputChange("pcsRequired", e.target.value)}
                                                >
                                                    <option value="">Select option</option>
                                                    <option value="Included">Included</option>
                                                    <option value="Not included">Not included</option>
                                                    <option value="Need recommendation">Need recommendation</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">EMS / SCADA Requirement</label>
                                                <select
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.emsRequired}
                                                    onChange={(e) => handleInputChange("emsRequired", e.target.value)}
                                                >
                                                    <option value="">Select option</option>
                                                    <option value="Included">Included</option>
                                                    <option value="Not included">Not included</option>
                                                    <option value="Need recommendation">Need recommendation</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Timeline</label>
                                                <input
                                                    type="text"
                                                    placeholder="e.g., 6-12 months"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    value={formData.timeline}
                                                    onChange={(e) => handleInputChange("timeline", e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Additional Notes - Common for all */}
                            <div>
                                <h3 className="text-lg font-semibold mb-4 text-gray-900">Additional Notes</h3>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                        value={formData.notes}
                                        onChange={(e) => handleInputChange("notes", e.target.value)}
                                        placeholder="Any additional requirements or questions..."
                                    />
                                </div>
                            </div>






                        </form>

                        <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200">
                            <button
                                onClick={onClose}
                                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Close
                            </button>
                            <button
                                onClick={handleGenerateInquiry}
                                className="px-6 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors"
                            >
                                Prepare Inquiry Summary
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}