"use client";

import { useEffect, useRef, useState, useMemo } from "react";

const stepsData = [
    { id: "01", label: "Preluare & Logistică", desc: "Colectăm DEEE-urile cu flotă proprie.", icon: <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z M12 22V12 M20 7l-8 5-8-5 M12 12l8 5 M12 12L4 17 M16 4.5L8 9.5" /> },
    { id: "02", label: "Sortare Inițială", desc: "Scanare și clasificare materiale.", icon: <path d="M19.5 13.5L16.5 16.5L19.5 19.5 M4.5 13.5L7.5 16.5L4.5 19.5 M12 3V21 M12 3H16.5C18.1569 3 19.5 4.34315 19.5 6V9 M12 21H7.5C5.84315 21 4.5 19.6569 4.5 18V15 M7.5 3H12V21H7.5C5.84315 21 4.5 19.6569 4.5 18V6C4.5 4.34315 5.84315 3 7.5 3Z M12 10.5H19.5 M12 13.5H19.5" /> },
    { id: "03", label: "Dezasamblare", desc: "Extracție componente valoroase.", icon: <path d="M3 7H21 M6 10L3 7L6 4 M21 17H3 M18 14L21 17L18 20 M7 10H17V14H7V10Z" /> },
    { id: "04", label: "Tocare & Separare", desc: "Mărunțire și separare magnetică.", icon: <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z M12 12L16 16 M12 12L8 8 M16 8L8 16 M12 7V17M17 12H7" /> },
    { id: "05", label: "Rafinare", desc: "Lingouri de puritate înaltă.", icon: <path d="M10 21V19C10 17.8954 10.8954 17 12 17V17C13.1046 17 14 17.8954 14 19V21 M6 3H18L21 7V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7L6 3Z M10 7L12 9L14 7 M10 11L12 13L14 11" /> },
    { id: "06", label: "Certificare", desc: "Reintroducere în circuit.", icon: <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z M7 12L10 15L17 8" /> },
];

export default function RecyclingRoadmap() {
    const svgRef = useRef<SVGSVGElement>(null);
    const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [pathD, setPathD] = useState("");

    const stepPositions = useMemo(() => {
        return stepsData.map((step, index) => ({
            ...step,
            col: index,
            row: index % 2 === 0 ? 0 : 1
        }));
    }, []);

    const updatePath = () => {
        if (!svgRef.current || window.innerWidth < 1024) return;
        const svgRect = svgRef.current.getBoundingClientRect();
        const coords = nodeRefs.current
            .map(node => {
                if (!node) return null;
                const r = node.getBoundingClientRect();
                return { x: r.left - svgRect.left + r.width / 2, y: r.top - svgRect.top + r.height / 2 };
            })
            .filter((c): c is { x: number; y: number } => c !== null);

        if (coords.length < 2) return;

        let d = `M ${coords[0].x} ${coords[0].y}`;
        for (let i = 0; i < coords.length - 1; i++) {
            const curr = coords[i];
            const next = coords[i+1];
            const midX = curr.x + (next.x - curr.x) / 2;
            d += ` H ${midX} V ${next.y} H ${next.x}`;
        }
        setPathD(d);
    };

    useEffect(() => {
        updatePath();
        window.addEventListener('resize', updatePath);
        return () => window.removeEventListener('resize', updatePath);
    }, []);

    return (
        <section className="relative bg-transparent py-12">
            <div className="max-w-6xl mx-auto px-6">

                {/* Desktop/Tablet Layout (Grid with SVG Lines) */}
                <div className="relative hidden lg:block min-h-[300px]">
                    <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible opacity-30">
                        <path d={pathD} fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/20" />
                        <path
                            d={pathD}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary-foreground"
                            style={{
                                strokeDasharray: '20, 100',
                                animation: 'pcbFlow 3s linear infinite',
                                filter: 'drop-shadow(0 0 8px var(--primary-foreground))'
                            }}
                        />
                    </svg>

                    <div className="grid grid-cols-6 grid-rows-2 gap-4 absolute inset-0">
                        {stepPositions.map((step, i) => (
                            <div
                                key={step.id}
                                className="relative flex flex-col items-center justify-center"
                                style={{ gridColumnStart: step.col + 1, gridRowStart: step.row + 1 }}
                            >
                                <div className="group relative flex flex-col items-center text-center">
                                    <div
                                        ref={el => { nodeRefs.current[i] = el; }}
                                        className="w-14 h-14 bg-background border border-white/10 rounded-2xl flex items-center justify-center z-10 transition-all duration-500 group-hover:border-primary-foreground/50 group-hover:scale-110 group-hover:bg-primary-foreground/5"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-primary-foreground">
                                            {step.icon}
                                        </svg>
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground leading-none mb-1 group-hover:text-primary-foreground transition-colors italic">
                                            {step.label}
                                        </h4>
                                        <p className="text-[9px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 max-w-[110px]">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Layout (2 columns, simple indicators) */}
                <div className="lg:hidden grid grid-cols-2 gap-y-12 gap-x-6">
                    {stepsData.map((step) => (
                        <div key={step.id} className="flex flex-col items-center text-center group">
                            <div className="relative">
                                {/* Indicator număr pas mic */}
                                <span className="absolute -top-2 -right-2 bg-primary-foreground text-background text-[8px] font-black px-1.5 py-0.5 rounded-md z-20">
                                    {step.id}
                                </span>
                                <div className="w-16 h-16 bg-foreground/[0.03] border border-white/10 rounded-2xl flex items-center justify-center mb-4 transition-colors group-active:border-primary-foreground/50">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-primary-foreground">
                                        {step.icon}
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-foreground mb-1">
                                {step.label}
                            </h4>
                            <p className="text-[10px] text-muted-foreground leading-tight px-2">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

            <style jsx>{`
                @keyframes pcbFlow {
                    from { stroke-dashoffset: 120; }
                    to { stroke-dashoffset: 0; }
                }
            `}</style>
        </section>
    );
}