"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function TransitionBanner() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center my-16 bg-dark shadow-black drop-shadow-dark shadow-2xl drop-shadow-2xl"
        >
            {/* 1. Imaginea de Fundal cu Parallax */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 z-0 h-[100%] w-full"
            >
                <Image
                    src="/images/planet.png"
                    alt="Transition background"
                    fill
                    className="object-cover opacity-70 transition-opacity duration-700"
                    priority
                />
            </motion.div>

            {/* 2. Conținutul Text animat la intrare */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 text-center text-white px-6 select-none"
            >
                <h2 className="text-5xl md:text-5xl font-black italic uppercase tracking-tighter font-serif">
                   înainte pentru un mediu mai bun
                </h2>
                <p className="text-sm md:text-base font-light tracking-[0.5em] uppercase mt-2 opacity-80">
                    Scroll pentru a descoperi
                </p>
            </motion.div>

            {/* 4. Overlay decorativ (linii fine sau zgomot de fundal - opțional) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </section>
    );
}