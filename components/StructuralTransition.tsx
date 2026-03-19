"use client";

import React, { useEffect, useState } from "react";

export default function StructuralTransition() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(position / height);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative w-full h-[500px] bg-white/40 backdrop-blur-xl flex items-center justify-center overflow-hidden rounded-4xl ">
            {/* Grid-ul de fundal tip planșă tehnică */}
            <div className="absolute inset-0 opacity-[0.03]"
                 style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                     backgroundSize: '40px 40px' }}
            />

            <div className="relative flex flex-col items-center">
                {/* Elementul Geometric Central */}
                <div className="relative w-64 h-64 flex items-center justify-center">

                    {/* Cadru exterior fix */}
                    <div className="absolute inset-0 border border-primary/20 rounded-full scale-110" />

                    {/* Formele care se mișcă asimetric */}
                    <div
                        className="absolute inset-4 border-2 border-primary rotate-45 transition-transform duration-300 ease-out"
                        style={{ transform: `rotate(${scrollProgress * 360}deg) scale(${1 - scrollProgress * 0.2})` }}
                    />
                    <div
                        className="absolute inset-8 border border-foreground/10 -rotate-12 transition-transform duration-500 ease-out"
                        style={{ transform: `rotate(${-scrollProgress * 180}deg)` }}
                    />

                    {/* Punctul central de focus */}
                    <div className="w-2 h-2 bg-primary rounded-full animate-ping" />

                    {/* Liniile "busolă" care ies din centru */}
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-primary/30"
                            style={{
                                width: '1px',
                                height: '100vh',
                                transform: `rotate(${i * 90}deg)`,
                                opacity: 1 - scrollProgress
                            }}
                        />
                    ))}
                </div>

                {/* Textul de legătură - Minimalist vertical */}
                <div className="mt-12 flex flex-col items-center space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.8em] text-foreground">
                        Spre Viitorul Circular
                    </span>
                    <div className="h-16 w-[1px] bg-gradient-to-b from-primary to-transparent" />
                </div>
            </div>

            {/* Numere de coordonate tehnice în colțuri */}
            <div className="absolute top-10 left-10 font-mono text-[10px] text-foreground/20 uppercase tracking-widest">
                Lat: 44.4268° N <br/> Lon: 26.1025° E
            </div>
            <div className="absolute bottom-10 right-10 font-mono text-[10px] text-foreground/20 uppercase tracking-widest">
                Ref: ELITE_SEC_04
            </div>
        </div>
    );
}