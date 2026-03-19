"use client";

import React, { useEffect, useRef } from "react";

export default function ScannerTransition() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollProgress = useRef(0);
    const time = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        const GRID_SIZE = 35;

        // CULOAREA TA: #5ea500 în format RGB -> 94, 165, 0
        const BRAND_RGB = "94, 165, 0";

        const resize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = 400;
            }
        };

        const handleScroll = () => {
            if (!container) return;
            const rect = container.getBoundingClientRect();
            const viewHeight = window.innerHeight;

            let progress = (viewHeight - rect.top) / (viewHeight + rect.height);
            progress = Math.max(0, Math.min(1, progress));
            scrollProgress.current = progress;
        };

        const drawGrid = () => {
            if (!ctx || !canvas) return;

            time.current += 0.02;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const cols = Math.floor(canvas.width / GRID_SIZE) + 2;
            const rows = Math.floor(canvas.height / GRID_SIZE) + 2;
            const scannerY = scrollProgress.current * canvas.height;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    let x = i * GRID_SIZE;
                    let y = j * GRID_SIZE;

                    const wave = Math.sin(time.current + y * 0.05 + x * 0.05) * 3;
                    x += wave;

                    const distToScanner = Math.abs(y - scannerY);
                    let dotSize = 1.2;
                    let opacity = 0.1;
                    let isPrimary = false;

                    if (distToScanner < 100) {
                        const intensity = 1 - (distToScanner / 100);
                        dotSize = 1.2 + intensity * 3;
                        opacity = 0.1 + intensity * 0.8;
                        isPrimary = true;
                    }

                    ctx.beginPath();
                    ctx.arc(x, y, dotSize, 0, Math.PI * 2);

                    // MODIFICARE AICI: Folosim BRAND_RGB pentru bilele active
                    ctx.fillStyle = isPrimary
                        ? `rgba(${BRAND_RGB}, ${opacity})`
                        : `rgba(0, 0, 0, ${opacity})`;
                    ctx.fill();
                }
            }

            // Linia de scanare - actualizată să fie o variantă a culorii tale
            ctx.beginPath();
            ctx.moveTo(0, scannerY);
            ctx.lineTo(canvas.width, scannerY);
            ctx.strokeStyle = `rgba(${BRAND_RGB}, 0.3)`; // Linie subtilă din brand color
            ctx.lineWidth = 1;
            ctx.stroke();

            animationFrameId = requestAnimationFrame(drawGrid);
        };

        resize();
        handleScroll();
        drawGrid();

        window.addEventListener("resize", resize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[400px] bg-white/50 backdrop-blur-sm flex items-center justify-center overflow-hidden border-y border-black/5 rounded-4xl"
        >
            <div
                className="absolute inset-0 z-0"
                style={{
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                    maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                }}
            >
                <canvas ref={canvasRef} className="w-full h-full" />
            </div>

            <div className="relative z-10 flex flex-col items-center pointer-events-none text-center px-6">
                {/* Linia decorativă de sus - folosim culoarea brand prin clasă Tailwind dacă e definită, sau style */}
                <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-[#5ea500]" />

                <div className="my-10 bg-[#5ea500]/5 backdrop-blur-xs px-7 py-2 rounded-3xl">
                    <span className="text-[12px] uppercase tracking-[0.8em] font-black text-foreground/40 block mb-3">
                        SISTEM ACTIV
                    </span>
                    <h3 className="font-serif text-3xl md:text-5xl text-foreground font-bold tracking-tighter">
                        Precizie în <span className="italic text-[#5ea500]">SORTARE</span>
                    </h3>
                </div>

                <div className="w-[1px] h-20 bg-gradient-to-t from-transparent to-[#5ea500]" />
            </div>
        </div>
    );
}