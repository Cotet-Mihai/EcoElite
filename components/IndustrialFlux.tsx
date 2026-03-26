"use client";

import React, { useEffect, useRef } from "react";

export default function IndustrialFlux() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;

        const resize = () => {
            // Ne asigurăm că canvas-ul se extinde pe toată lățimea dar păstrează o înălțime vizibilă
            canvas.width = window.innerWidth;
            canvas.height = 400; // Ajustează dacă textul tău are nevoie de mai mult spațiu vertical
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;
            // 1. Adăugăm referința canvas-ului ca proprietate a clasei
            canvasRef: HTMLCanvasElement;

            // 2. Cerem canvas-ul în constructor
            constructor(canvasElement: HTMLCanvasElement) {
                this.canvasRef = canvasElement;
                this.x = Math.random() * this.canvasRef.width;
                this.y = Math.random() * this.canvasRef.height;
                // Mișcare lentă pentru un look premium
                this.vx = (Math.random() - 0.5) * 0.1;
                this.vy = (Math.random() - 0.5) * 0.1;
                this.size = Math.random() * 2 + 1; // Puțin mai vizibile
                // Forțăm culoarea AURIU / AMBER saturată
                this.color = "rgb(205, 133, 63)"; // Peru (Peru) - nuanță saturată de ocu/amber
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // 3. Folosim this.canvasRef aici
                if (this.x < 0 || this.x > this.canvasRef.width) this.vx *= -1;
                if (this.y < 0 || this.y > this.canvasRef.height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

                // Setăm culoarea solidă (fără transparență)
                ctx.fillStyle = this.color;

                // Adăugăm un efect de strălucire (glow) pentru a "tăia" prin fundalul închis
                ctx.shadowBlur = 8;
                ctx.shadowColor = "rgb(205, 133, 63)"; // Același auriu pentru glow

                ctx.fill();

                // Resetăm shadow-ul pentru a nu afecta liniile rețelei
                ctx.shadowBlur = 0;
            }
        }

        const init = () => {
            particles = [];
            // 4. Pasăm canvas-ul către fiecare particulă nouă
            for (let i = 0; i < 50; i++) particles.push(new Particle(canvas));
        };

        const drawLines = () => {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 130) {
                        ctx.beginPath();
                        // Liniile forțate să fie și ele aurii, la o opacitate foarte mică
                        ctx.strokeStyle = "rgba(205, 133, 63, 0.15)";
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }
        };

        const animate = () => {
            // Curățăm canvas-ul cu transparență totală
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });
            drawLines();
            animationFrameId = requestAnimationFrame(animate);
        };

        resize();
        init();
        animate();
        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="relative w-full h-[400px] bg-transparent flex items-center justify-center overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 pointer-events-none"
            />

            <div className="relative z-10 flex flex-col items-center">
                <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-foreground to-transparent" />

                <div className="my-10 text-center px-6">
                    <span className="text-[10px] md:text-[12px] uppercase tracking-[0.9em] font-black text-primary-foreground/80 block mb-4 animate-pulse">
                        Spre Viitorul Circular
                    </span>
                    <h3 className="font-serif text-4xl md:text-6xl text-foreground font-bold tracking-tighter">
                        De la deșeu, la <span className="italic text-secondary-foreground drop-shadow-sm">resursă.</span>
                    </h3>
                </div>

                <div className="w-[1px] h-20 bg-gradient-to-t from-transparent via-foreground to-transparent" />
            </div>
        </div>
    );
}