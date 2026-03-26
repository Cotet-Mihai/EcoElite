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

    // Culoarea aurie saturată pentru un look industrial premium
    const industrialGold = "rgb(205, 133, 63)";

    return (
        <div className="relative w-full h-[500px] bg-transparent flex items-center justify-center overflow-hidden rounded-4xl">
            {/* Grid-ul de fundal tip planșă tehnică - Adaptat pentru fundalul închis */}
            <div className="absolute inset-0 opacity-[0.05]"
                 style={{
                     backgroundImage: `linear-gradient(rgba(205, 133, 63, 0.2) 1px, transparent 1px), 
                                       linear-gradient(90deg, rgba(205, 133, 63, 0.2) 1px, transparent 1px)`,
                     backgroundSize: '40px 40px'
                 }}
            />

            <div className="relative flex flex-col items-center">
                {/* Elementul Geometric Central - Dimensiune Originală w-64 h-64 */}
                <div className="relative w-64 h-64 flex items-center justify-center">

                    {/* Cadru exterior fix */}
                    <div className="absolute inset-0 border border-primary-foreground/20 rounded-full scale-110 opacity-30" />

                    {/* Formele care se mișcă asimetric - Culoarea Aurie */}
                    <div
                        className="absolute inset-4 border-2 transition-transform duration-300 ease-out"
                        style={{
                            transform: `rotate(${scrollProgress * 360}deg) scale(${1 - scrollProgress * 0.2})`,
                            borderColor: industrialGold,
                            boxShadow: `0 0 15px ${industrialGold}33` // Glow subtil
                        }}
                    />
                    <div
                        className="absolute inset-8 border border-foreground/10 -rotate-12 transition-transform duration-500 ease-out"
                        style={{
                            transform: `rotate(${-scrollProgress * 180}deg)`,
                            borderColor: 'rgba(255, 255, 255, 0.1)'
                        }}
                    />

                    {/* Punctul central de focus */}
                    <div
                        className="w-2.5 h-2.5 rounded-full animate-pulse z-10"
                        style={{ backgroundColor: industrialGold, boxShadow: `0 0 15px ${industrialGold}` }}
                    />

                    {/* Liniile "busolă" - Înălțime originală 100vh */}
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute"
                            style={{
                                width: '1px',
                                height: '100vh',
                                transform: `rotate(${i * 90}deg)`,
                                background: `linear-gradient(to bottom, transparent, ${industrialGold}, transparent)`,
                                opacity: (1 - scrollProgress) * 0.2
                            }}
                        />
                    ))}
                </div>

                {/* Textul de legătură - Minimalist vertical */}
                <div className="mt-12 flex flex-col items-center space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.8em] text-foreground/60">
                        Spre Viitorul Circular
                    </span>
                    <div className="h-16 w-[1px] bg-gradient-to-b from-primary-foreground/40 to-transparent" />
                </div>
            </div>

            {/* Numere de coordonate tehnice în colțuri */}
            <div className="absolute top-10 left-10 font-mono text-[10px] text-foreground/20 uppercase tracking-widest leading-relaxed">
                Lat: 44.4268° N <br/> Lon: 26.1025° E
            </div>
            <div className="absolute bottom-10 right-10 font-mono text-[10px] text-foreground/20 uppercase tracking-widest text-right">
                Ref: ELITE_SEC_04 <br/> Status: Active
            </div>
        </div>
    );
}