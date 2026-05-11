import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    // Gotion-style corporate blue palette
                    primary: "#4A7DB4",   // Corporate steel blue
                    secondary: "#0D2137", // Dark navy (headings, dark sections)
                    accent: "#E8621C",    // Gotion orange (CTAs, highlights)
                    dark: "#0D2137",      // Dark navy
                    light: "#EBF3FA",     // Light blue-gray (section backgrounds)
                    blue: {
                        50:  "#EBF3FA",
                        100: "#D6E8F5",
                        200: "#ADC9EB",
                        300: "#7FACDA",
                        400: "#5690CB",
                        500: "#4A7DB4",  // Primary
                        600: "#3A6A9A",
                        700: "#2D5480",
                        800: "#1F3D66",
                        900: "#12274C",
                        950: "#0D2137",  // Secondary / dark
                    },
                    gray: {
                        50:  "#F9FAFB",
                        100: "#F3F4F6",
                        200: "#E5E7EB",
                        300: "#D1D5DB",
                        400: "#9CA3AF",
                        500: "#6B7280",
                        600: "#4B5563",
                        700: "#374151",
                        800: "#3E3E3E",
                        900: "#111827",
                        950: "#030712",
                    }
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "hero-glow": "conic-gradient(from 90deg at 50% 50%, #0D2137 0%, #1B3A6B 50%, #0D2137 100%)",
            },
            boxShadow: {
                'sm':         '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                'card':       '0 4px 12px rgba(0, 0, 0, 0.08)',
                'card-hover': '0 8px 16px rgba(0, 0, 0, 0.12)',
                'lg':         '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'xl':         '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                '2xl':        '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                'glow':       '0 0 20px rgba(74, 125, 180, 0.35)',
                'glow-lg':    '0 0 40px rgba(74, 125, 180, 0.25)',
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem',
                '34': '8.5rem',
            },
            animation: {
                'fade-in-up':    'fadeInUp 0.8s ease-out forwards',
                'fade-in':       'fadeIn 1s ease-out forwards',
                'slow-zoom':     'slowZoom 20s linear infinite alternate',
                'slide-up':      'slideUp 0.6s ease-out',
                'slide-in-right':'slideInRight 0.5s ease-out',
                'pulse-glow':    'pulseGlow 2s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%':   { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%':   { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slowZoom: {
                    '0%':   { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.1)' },
                },
                slideUp: {
                    '0%':   { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInRight: {
                    '0%':   { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(74, 125, 180, 0.3)' },
                    '50%':      { boxShadow: '0 0 40px rgba(74, 125, 180, 0.5)' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
