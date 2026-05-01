export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
    featured?: boolean;
    content: {
        type: "paragraph" | "heading" | "list";
        text?: string;
        items?: string[];
    }[];
}

export const BLOG_CATEGORIES = [
    "All",
    "Solar & Storage Technology",
    "Industrial Deployment",
    "Sustainability",
    "Market Insights",
    "Partnerships",
    "Company News",
    "Research & Innovation",
    "Policy & Regulation",
];

export const blogPosts: BlogPost[] = [
    {
        slug: "solar-plus-storage-scale-up-strategies",
        title: "Solar + Storage Scale-Up Strategies for India",
        excerpt:
            "How integrated solar and battery systems can deliver reliable power, stabilize grids and support industrial growth across India.",
        category: "Solar & Storage Technology",
        date: "January 28, 2026",
        image: "/blog/solar-storage-scale-up.png",
        featured: true,
        content: [
            {
                type: "paragraph",
                text: "Integrated solar and battery storage systems are reshaping how developers and energy users approach clean power. By combining high-performance PV modules with reliable LFP storage platforms, projects can balance generation and demand more effectively.",
            },
            {
                type: "heading",
                text: "The Value of Hybrid Systems",
            },
            {
                type: "paragraph",
                text: "Hybrid systems reduce reliance on intermittent power by storing excess solar energy and releasing it during peak demand. This creates opportunities for peak shaving, demand-charge reduction and better utilization of renewable generation.",
            },
            {
                type: "heading",
                text: "Deployment Best Practices",
            },
            {
                type: "paragraph",
                text: "Successful deployment depends on careful technology selection, system sizing and grid integration. The right combination of solar modules, battery chemistry and inverter controls can simplify operations and improve lifetime performance.",
            },
            {
                type: "list",
                items: [
                    "High-efficiency solar modules for stronger generation",
                    "LFP energy storage for reliable discharge profiles",
                    "System-level design for smooth charge/discharge cycles",
                    "Project controls that optimize energy use and economics",
                ],
            },
            {
                type: "heading",
                text: "Project Outcomes",
            },
            {
                type: "paragraph",
                text: "For commercial and industrial customers, hybrid solar-plus-storage systems can improve resilience, reduce energy costs and support sustainability targets while strengthening local grid flexibility.",
            },
        ],
    },
    {
        slug: "solar-storage-growth-in-manufacturing",
        title: "Solar + Storage Growth in Manufacturing Facilities",
        excerpt:
            "Why manufacturing sites and large industrial campuses are turning to combined solar and battery solutions for energy resilience and cost control.",
        category: "Industrial Deployment",
        date: "January 15, 2026",
        image: "/blog/manufacturing-solar-storage.png",
        content: [
            {
                type: "paragraph",
                text: "Manufacturing facilities face rising energy costs, demand charges and the need for reliable uptime. Solar generation paired with battery storage enables these sites to manage peak loads and provide backup during grid interruptions.",
            },
            {
                type: "heading",
                text: "Reducing Demand Charges",
            },
            {
                type: "paragraph",
                text: "Battery storage can shift consumption away from high-tariff periods, lowering demand charges and improving overall operational margins for energy-intensive industries.",
            },
            {
                type: "heading",
                text: "Supporting Continuous Operation",
            },
            {
                type: "paragraph",
                text: "By pairing solar with storage, facilities can maintain critical loads during grid instability while also capturing daytime solar energy for later use.",
            },
            {
                type: "heading",
                text: "The Implementation Path",
            },
            {
                type: "paragraph",
                text: "A successful project begins with load profiling, solar resource assessment, and an integrated design that balances generation, storage capacity and controls.",
            },
        ],
    },
    {
        slug: "solar-module-market-innovation-2026",
        title: "Solar Module Market Innovation in 2026",
        excerpt:
            "A look at the latest module technologies driving higher efficiency, greater reliability and lower levelized energy costs.",
        category: "Market Insights",
        date: "December 20, 2025",
        image: "/blog/solar-module-innovation.png",
        content: [
            {
                type: "paragraph",
                text: "The solar module market continues to evolve rapidly, with new module architectures delivering better performance and resilience in diverse project environments.",
            },
            {
                type: "heading",
                text: "High-Power Module Trends",
            },
            {
                type: "paragraph",
                text: "Manufacturers are pushing module power ratings higher while improving temperature coefficients and bifacial output for utility-scale and rooftop applications.",
            },
            {
                type: "heading",
                text: "Performance in Challenging Conditions",
            },
            {
                type: "paragraph",
                text: "Dust-resistant, anti-reflective and bifacial modules are proving valuable in demanding climates, helping projects maintain energy yield over long duty cycles.",
            },
            {
                type: "list",
                items: [
                    "JA Solar high-performance modules",
                    "Trina Solar Vertex series for utility deployments",
                    "JinkoSolar bifacial and anti-dust platforms",
                    "TOPCon modules for higher efficiency generation",
                ],
            },
            {
                type: "paragraph",
                text: "Optimizing module selection is a critical step for developers and EPCs who want to balance initial capital and long-term energy productivity.",
            },
        ],
    },
    {
        slug: "policy-frameworks-for-solar-storage",
        title: "Policy Frameworks for Solar + Storage Adoption",
        excerpt:
            "Examining how emerging regulations and incentives can accelerate commercial and utility-scale solar-plus-storage deployment.",
        category: "Policy & Regulation",
        date: "December 5, 2025",
        image: "/blog/policy-solar-storage.png",
        content: [
            {
                type: "paragraph",
                text: "Regulatory support is essential for scaling solar and storage projects. Clear frameworks, tariffs and grid interconnection rules help unlock investment and reduce deployment risk.",
            },
            {
                type: "heading",
                text: "Market Signals and Incentives",
            },
            {
                type: "paragraph",
                text: "Incentives for renewable energy plus storage can improve project bankability while encouraging flexible, grid-supportive installations.",
            },
            {
                type: "heading",
                text: "Aligning Infrastructure Goals",
            },
            {
                type: "paragraph",
                text: "Policies that integrate renewable targets with storage planning help ensure energy systems remain stable as more solar capacity is added.",
            },
        ],
    },
    {
        slug: "infrastructure-pathways-for-solar-storage",
        title: "Infrastructure Pathways for Solar + Storage",
        excerpt:
            "How project developers are structuring solar and storage infrastructure for long-term reliability and grid integration.",
        category: "Industrial Deployment",
        date: "November 18, 2025",
        image: "/blog/solar-storage-infrastructure.png",
        content: [
            {
                type: "paragraph",
                text: "Building solar-plus-storage infrastructure requires a practical approach to site design, balance-of-plant, and connection to existing grid assets.",
            },
            {
                type: "heading",
                text: "Distributed and Grid-Connected Solutions",
            },
            {
                type: "paragraph",
                text: "Projects can be configured for behind-the-meter industrial use or front-of-meter grid services, each with different technical and commercial priorities.",
            },
            {
                type: "heading",
                text: "Modularity for Scale",
            },
            {
                type: "paragraph",
                text: "Modular solar and storage deployments allow capacity to grow with demand while minimizing upfront risk and simplifying commissioning.",
            },
        ],
    },
    {
        slug: "battery-storage-safety-and-standards",
        title: "Battery Storage Safety and Standards",
        excerpt:
            "A practical look at the safety standards and design best practices that support battery energy storage deployment.",
        category: "Research & Innovation",
        date: "November 2, 2025",
        image: "/blog/battery-storage-safety.png",
        content: [
            {
                type: "paragraph",
                text: "Battery energy storage systems require rigorous safety and design standards to ensure reliable performance across applications.",
            },
            {
                type: "heading",
                text: "Standards and Compliance",
            },
            {
                type: "paragraph",
                text: "International guidance from organizations such as IEEE and IEC helps define safe installation, fire prevention and operational management for battery systems.",
            },
            {
                type: "heading",
                text: "Designing for Resilience",
            },
            {
                type: "paragraph",
                text: "Incorporating thermal management, monitoring and fail-safe controls from the outset supports long-term asset reliability.",
            },
        ],
    },
    {
        slug: "strategic-partnerships-accelerating-solar-deployment",
        title: "Strategic Partnerships: Accelerating Solar Adoption",
        excerpt:
            "How collaboration between developers, manufacturers and operators accelerates commercial solar and storage projects.",
        category: "Partnerships",
        date: "October 15, 2025",
        image: "/blog/solar-partnerships.png",
        content: [
            {
                type: "paragraph",
                text: "Successful solar and storage deployment depends on partnerships that bring together technology, project execution and customer expertise.",
            },
            {
                type: "heading",
                text: "Developer-Manufacturer Collaboration",
            },
            {
                type: "paragraph",
                text: "Working closely with module and battery suppliers helps ensure project specifications are matched to real-world performance expectations.",
            },
            {
                type: "heading",
                text: "Project Delivery Alignment",
            },
            {
                type: "paragraph",
                text: "Clear roles and coordinated execution reduce schedule risk and support smoother commissioning of solar-plus-storage assets.",
            },
        ],
    },
    {
        slug: "sustainability-metrics-for-solar-projects",
        title: "Sustainability Metrics for Solar Projects",
        excerpt:
            "Beyond carbon savings, a practical framework for evaluating solar and storage performance across lifecycle metrics.",
        category: "Sustainability",
        date: "October 1, 2025",
        image: "/blog/solar-sustainability.png",
        content: [
            {
                type: "paragraph",
                text: "Evaluating solar projects requires a broad set of sustainability metrics including energy yield, land use, material sourcing and end-of-life planning.",
            },
            {
                type: "heading",
                text: "Lifecycle Performance",
            },
            {
                type: "paragraph",
                text: "Lifecycle assessment helps compare module and storage choices across manufacturing, operation and decommissioning stages.",
            },
            {
                type: "heading",
                text: "Resource Efficiency",
            },
            {
                type: "paragraph",
                text: "Reducing material intensity, improving recycling and extending system life are key levers for overall sustainability.",
            },
        ],
    },
    {
        slug: "gigacore-approach-to-scalable-solar-storage",
        title: "Gigacore's Approach to Scalable Solar + Storage",
        excerpt:
            "An inside look at how Gigacore develops solar and storage systems designed for industrial scale and commercial viability.",
        category: "Company News",
        date: "September 15, 2025",
        image: "/blog/gigacore-solar-storage.png",
        content: [
            {
                type: "paragraph",
                text: "At Gigacore, our approach to solar and storage deployment is rooted in practical design, industrial reliability and market readiness.",
            },
            {
                type: "heading",
                text: "Practical System Design",
            },
            {
                type: "paragraph",
                text: "We focus on solutions that can be scaled, integrated and delivered with the confidence required by commercial and utility customers.",
            },
            {
                type: "heading",
                text: "Built for Industry",
            },
            {
                type: "paragraph",
                text: "Every design decision is evaluated against operational demands, installation practicality, and long-term performance expectations.",
            },
        ],
    },
];
