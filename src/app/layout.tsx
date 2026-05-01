import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'Gigacore Systems | Solar & Battery Energy Storage Solutions',
    description: 'Gigacore Systems provides solar module and battery energy storage solutions for commercial, industrial and utility-scale energy projects in India.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={clsx(inter.className, "antialiased bg-white text-gray-900")}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
