import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Logo Image - changes based on navbar background */}
            <div className="relative w-[140px] h-[36px] md:w-[180px] md:h-[46px] shrink-0">
                <Image
                    src="/black_logo.png"
                    alt="Gigacore Systems Logo"
                    fill
                    className="object-contain object-left"
                />
            </div>
        </div>
    );
}
