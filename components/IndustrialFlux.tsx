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
            canvas.width = window.innerWidth;
            canvas.height = 400;
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor() {
                
                // @ts-expect-error it will never been null
                this.x = Math.random() * canvas.width;
                // @ts-expect-error it will never been null
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.size = 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // @ts-expect-error it will never been null
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                // @ts-expect-error it will never been null
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = "rgb(94, 165, 0)"; // Puncte aproape invizibile
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < 40; i++) particles.push(new Particle());
        };

        const drawLines = () => {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 200) { // Conectăm doar punctele apropiate
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(34, 197, 94, ${0.08 })`; // Verdele brandului, foarte șters
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
        <div className="relative w-full h-[400px] bg-white flex items-center justify-center overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 z-0" />

            <div className="relative z-10 flex flex-col items-center">
                {/* Gradient care folosește culoarea Primary */}
                <div className="w-[2px] h-20 bg-gradient-to-b from-transparent to-primary" />

                <div className="my-10 text-center px-6">
                    <span className="text-[12px] uppercase tracking-[0.8em] font-black text-foreground block mb-3 animate-pulse">
                        Spre Viitorul Circular
                    </span>
                    <h3 className="font-serif text-3xl md:text-5xl text-foreground font-bold tracking-tighter">
                        De la deșeu, la <span className="italic text-primary">resursă.</span>
                    </h3>
                </div>

                <div className="w-[2px] h-20 bg-gradient-to-t from-transparent to-primary" />
            </div>
        </div>
    );
}