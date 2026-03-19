import React from "react";

export default function StatsRibbon() {
    const primaryText = "1.591 acțiuni în comunitate / 285.000 tone DEEE colectate / 1.000 puncte naționale de colectare / ";
    const secondaryTest = "1.000 puncte naționale de colectare / 285.000 tone DEEE colectate / 1.591 acțiuni în comunitate / ";

    return(
        <div className={'relative w-full pb-42 md:pb-58 pt-20 flex flex-col items-center justify-center overflow-hidden'}>
            <div className="relative overflow-hidden z-10 w-[130%] -left-[10%] rotate-[-10deg] md:rotate-[-3deg] bg-secondary py-6 shadow-lg">
                <div className="whitespace-nowrap animate-marquee-infinite-reverse text-secondary-foreground font-bold uppercase text-2xl md:text-6xl">
                    {/* Repetăm de 4 ori pentru siguranță pe ecrane UltraWide */}
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="mx-4">{primaryText}</span>
                    ))}
                </div>
            </div>

            <div className="absolute overflow-hidden z-20 w-[120%] -left-[10%] top-[50%] rotate-[3deg] bg-primary py-6 shadow-2xl mt-4">
                <div className="whitespace-nowrap animate-marquee-infinite text-foreground font-bold uppercase text-2xl md:text-6xl">
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="mx-4">{secondaryTest}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}