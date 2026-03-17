"use client";

import React from "react";

export default function StatsRibbon() {
    const textGreen = "1.591 acțiuni în comunitate / 285.000 tone DEEE colectate / 1.000 puncte naționale de colectare / ";
    const textBlack = "1.000 puncte naționale de colectare / 285.000 tone DEEE colectate / 1.591 acțiuni în comunitate / ";

    return (
        <div className="relative w-full overflow-hidden py-32 bg-background flex flex-col items-center justify-center">

            <div className="relative z-10 w-[120%] -left-[10%] rotate-[-3deg] bg-primary/60 py-6 shadow-lg">
                <div className="flex whitespace-nowrap animate-marquee-infinite-reverse text-black font-bold uppercase text-2xl md:text-6xl">
                    {/* Repetăm de 4 ori pentru siguranță pe ecrane UltraWide */}
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="mx-4">{textGreen}</span>
                    ))}
                </div>
            </div>

            <div className="absolute z-20 w-[120%] -left-[10%] rotate-[3deg] bg-black py-6 shadow-2xl mt-4">
                <div className="flex whitespace-nowrap animate-marquee-infinite text-white font-bold uppercase text-2xl md:text-6xl">
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="mx-4">{textBlack}</span>
                    ))}
                </div>
            </div>

        </div>
    );
}