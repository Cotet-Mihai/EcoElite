"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GroundedNatureBackground() {
    // Culoarea solidă cerută
    const BRAND_DARK = "#28402e";
    // O variantă infinit mai deschisă a aceleiași culori pentru stratul din spate (ca să avem profunzime)
    const LIGHTER_GREEN = "#3a5a41";

    const { scrollYProgress } = useScroll();

    const yBack = useTransform(scrollYProgress, [0, 1], [300, 0]);
    const yFront = useTransform(scrollYProgress, [0, 1], [500, 100]);

    return (
        <div className="fixed inset-0 z-[-1] bg-[#fdfdfd] overflow-hidden pointer-events-none">

            {/* 1. Glow-ul - Îl lăsăm foarte discret sau îl scoatem dacă vrem "flat design" */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    background: `radial-gradient(circle at 70% 20%, ${BRAND_DARK} 0%, transparent 60%)`,
                    filter: "blur(100px)"
                }}
            />

            {/* 2. Dealul din depărtare (Solid - Culoare secundară) */}
            <motion.div
                style={{ y: yBack }}
                className="absolute bottom-[-400px] left-0 w-full"
            >
                <svg
                    viewBox="0 0 1440 1000"
                    className="w-full h-[1000px]" // FĂRĂ OPACITY
                    preserveAspectRatio="none"
                >
                    <path
                        fill={LIGHTER_GREEN} // O nuanță ușor diferită ca să se vadă unde se termină unul și începe altul
                        d="M0,100 Q360,50 720,100 T1440,100 V1000 H0 Z"
                    />
                </svg>
            </motion.div>

            {/* 3. Dealul principal (Solid - Culoarea de bază) */}
            <motion.div
                style={{ y: yFront }}
                className="absolute bottom-[-250px] left-0 w-full"
            >
                <svg
                    viewBox="0 0 1440 1000"
                    className="w-full h-[1000px]" // FĂRĂ OPACITY
                    preserveAspectRatio="none"
                >
                    <path
                        fill={BRAND_DARK}
                        d="M0,150 Q360,100 720,150 T1440,150 V1000 H0 Z"
                    />
                </svg>
            </motion.div>

            {/* 4. Textura Grain - Esențială acum pentru a nu părea "plastic" */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
            />
        </div>
    );
}