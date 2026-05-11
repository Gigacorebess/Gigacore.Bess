import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import { LinkedinIcon } from "../ui/SocialIcons";

export default function Footer() {
    return (
        <footer className="bg-brand-secondary text-gray-400">

            {/* ── Main grid ── */}
            <SectionWrapper className="pt-16 pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

                    {/* 1 — Brand */}
                    <div className="sm:col-span-2 lg:col-span-1 space-y-5">
                        <Link href="/" className="inline-block">
                            <div className="relative w-[150px] h-[40px]">
                                <Image
                                    src="/white_logo.png"
                                    alt="Gigacore Systems"
                                    fill
                                    className="object-contain object-left"
                                    unoptimized
                                />
                            </div>
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            Solar and battery energy storage solutions for commercial, industrial, and utility-scale projects.
                        </p>
                        <a
                            href="https://www.linkedin.com/company/gigacore-energy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-primary transition-colors duration-200 text-gray-400 hover:text-white"
                        >
                            <LinkedinIcon className="w-4 h-4" />
                        </a>
                    </div>

                    {/* 2 — Products */}
                    <div>
                        <p className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Products</p>
                        <ul className="space-y-3 text-sm">
                            {[
                                { name: "C&I BESS Cabinets", href: "/products" },
                                { name: "Utility-Scale BESS", href: "/products" },
                                { name: "Solar Modules", href: "/products" },
                                { name: "Integrated Systems", href: "/products" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-white transition-colors duration-200 flex items-center gap-1.5 group">
                                        <span className="w-1 h-1 rounded-full bg-brand-primary/60 group-hover:bg-brand-primary transition-colors" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3 — Company */}
                    <div>
                        <p className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Company</p>
                        <ul className="space-y-3 text-sm">
                            {[
                                { name: "About Us", href: "/company" },
                                { name: "Our Team", href: "/company/team" },
                                { name: "Technology", href: "/technology" },
                                { name: "Contact", href: "/contact" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-white transition-colors duration-200 flex items-center gap-1.5 group">
                                        <span className="w-1 h-1 rounded-full bg-brand-primary/60 group-hover:bg-brand-primary transition-colors" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4 — Contact */}
                    <div>
                        <p className="text-white text-sm font-semibold uppercase tracking-widest mb-5">Get in Touch</p>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <a href="mailto:info@gigacore.systems" className="flex items-start gap-3 hover:text-white transition-colors duration-200 group">
                                    <Mail className="w-4 h-4 mt-0.5 text-brand-primary shrink-0" />
                                    <span>info@gigacore.systems</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+911202443724" className="flex items-start gap-3 hover:text-white transition-colors duration-200 group">
                                    <Phone className="w-4 h-4 mt-0.5 text-brand-primary shrink-0" />
                                    <span>+91-120-2443724</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 mt-0.5 text-brand-primary shrink-0" />
                                <span className="leading-relaxed">B-37, Sector - 1<br />Noida - 201 301, Delhi NCR</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </SectionWrapper>

            {/* ── Divider ── */}
            <div className="border-t border-white/10" />

            {/* ── Bottom bar ── */}
            <SectionWrapper className="py-5">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Gigacore Systems Pvt. Ltd. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </SectionWrapper>

        </footer>
    );
}
