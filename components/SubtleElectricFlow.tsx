"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Trail = {
    id: string; x: number; y: number; w: number; h: number;
    timestamp: number; direction: 'up' | 'down' | 'left' | 'right'
};
type PulseState = { x: number; y: number; dx: number; dy: number; steps: number };

export default function SubtleElectricFlow() {
    const [activeCell, setActiveCell] = useState({ x: -100, y: -100 });
    const [pulses, setPulses] = useState<PulseState[]>([]);
    const [trails, setTrails] = useState<Trail[]>([]);
    const pulsesRef = useRef<PulseState[]>([]);

    const GRID_SIZE = 40;
    const BRAND_COLOR = "#5ea500";
    const SPEED = 0.25;
    const NUM_PULSES = 3;

    useEffect(() => {
        const initial = Array.from({ length: NUM_PULSES }).map((_, i) => ({
            x: Math.floor((200 + i * 280) / GRID_SIZE) * GRID_SIZE,
            y: Math.floor((200 + i * 280) / GRID_SIZE) * GRID_SIZE,
            dx: GRID_SIZE, dy: 0, steps: 0
        }));
        pulsesRef.current = initial;
        setPulses(initial);

        const handleMouseMove = (e: MouseEvent) => {
            setActiveCell({
                x: Math.floor(e.clientX / GRID_SIZE) * GRID_SIZE,
                y: Math.floor(e.clientY / GRID_SIZE) * GRID_SIZE
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const moveAll = () => {
            const newSegments: Trail[] = [];

            const nextPulses = pulsesRef.current.map((p) => {
                let { x, y, dx, dy, steps } = p;

                if (steps > Math.random() * 8 + 4) {
                    const turn = Math.random() > 0.5 ? { dx: dy, dy: -dx } : { dx: -dy, dy: dx };
                    dx = turn.dx; dy = turn.dy; steps = 0;
                }

                let nextX = x + dx;
                let nextY = y + dy;

                if (nextX < 40 || nextX > window.innerWidth - 40 || nextY < 40 || nextY > window.innerHeight - 40) {
                    dx = -dx; dy = -dy;
                    nextX = x + dx; nextY = y + dy; steps = 0;
                }

                let direction: Trail['direction'] = 'right';
                if (dx > 0) direction = 'right';
                else if (dx < 0) direction = 'left';
                else if (dy > 0) direction = 'down';
                else if (dy < 0) direction = 'up';

                newSegments.push({
                    id: Math.random().toString(36).substr(2, 9),
                    x: dx !== 0 ? Math.min(x, nextX) : x,
                    y: dy !== 0 ? Math.min(y, nextY) : y,
                    w: dx !== 0 ? GRID_SIZE : 2,
                    h: dy !== 0 ? GRID_SIZE : 2,
                    timestamp: Date.now(),
                    direction
                });

                return { x: nextX, y: nextY, dx, dy, steps: steps + 1 };
            });

            pulsesRef.current = nextPulses;
            setPulses(nextPulses);
            setTrails(prev => [...prev, ...newSegments].filter(t => Date.now() - t.timestamp < 3500));
        };

        const interval = setInterval(moveAll, SPEED * 1000);
        return () => clearInterval(interval);
    }, []);

    const getClipPath = (dir: Trail['direction'], progress: number) => {
        if (dir === 'right') return `inset(0 ${100 - progress}% 0 0)`;
        if (dir === 'left') return `inset(0 0 0 ${100 - progress}%)`;
        if (dir === 'down') return `inset(0 0 ${100 - progress}% 0)`;
        if (dir === 'up') return `inset(${100 - progress}% 0 0 0)`;
        return `inset(0)`;
    };

    return (
        <div className="fixed inset-0 z-[-1] bg-white overflow-hidden">
            {/* Grid-ul de fundal - și mai discret */}
            <div className="absolute inset-0 opacity-[0.03]"
                 style={{
                     backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
                     backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`
                 }}
            />

            {/* Trail-uri Transparente */}
            <AnimatePresence>
                {trails.map((t) => (
                    <motion.div
                        key={t.id}
                        initial={{ clipPath: getClipPath(t.direction, 0), opacity: 0.3 }}
                        animate={{
                            clipPath: getClipPath(t.direction, 100),
                            opacity: [0.3, 0.3, 0]
                        }}
                        transition={{
                            clipPath: { duration: SPEED, ease: "linear" },
                            opacity: { duration: 3, times: [0, 0.4, 1], ease: "linear" }
                        }}
                        className="absolute pointer-events-none"
                        style={{
                            left: t.x,
                            top: t.y,
                            width: t.w,
                            height: t.h,
                            backgroundColor: BRAND_COLOR,
                            // Aura mult mai fină
                            boxShadow: `0 0 4px ${BRAND_COLOR}40`,
                            transform: (t.direction === 'up' || t.direction === 'down') ? 'translateX(-1px)' : 'translateY(-1px)'
                        }}
                    />
                ))}
            </AnimatePresence>

            {/* Bilele - Mai discrete */}
            {pulses.map((p, i) => (
                <motion.div
                    key={i}
                    animate={{ left: p.x, top: p.y }}
                    transition={{ duration: SPEED, ease: "linear" }}
                    className="absolute z-10 w-2 h-2 rounded-full pointer-events-none"
                    style={{
                        backgroundColor: "#fff",
                        border: `1.5px solid ${BRAND_COLOR}80`, // Border semi-transparent
                        boxShadow: `0 0 10px ${BRAND_COLOR}40`,
                        transform: "translate(-50%, -50%)",
                        opacity: 0.7 // Opacitate redusă pe bilă
                    }}
                />
            ))}

            {/* Mouse Tracker - Transparent */}
            <motion.div
                className="absolute pointer-events-none z-20"
                animate={{ x: activeCell.x, y: activeCell.y }}
                transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
                style={{
                    width: GRID_SIZE,
                    height: GRID_SIZE,
                    border: `1px solid ${BRAND_COLOR}30`,
                    backgroundColor: `${BRAND_COLOR}03`,
                }}
            />
        </div>
    );
}