import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import React from "react";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import GroundedNatureBackground from "@/NatureHarmoniousBackground";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: 'Eco Elite | Colectare și Reciclare Deșeuri',
    description: 'Eco Elite oferă servicii profesionale de colectare și reciclare deșeuri pentru persoane fizice și companii. Colectăm metale feroase, neferoase și echipamente electrice. Transport gratuit!',
    keywords: ['reciclare', 'colectare deșeuri', 'metale feroase', 'metale neferoase', 'DEEE', 'echipamente electrice', 'reciclare București', 'transport gratuit'],
    openGraph: {
        title: 'Eco Elite | Colectare și Reciclare Deșeuri',
        description: 'Servicii profesionale de colectare și reciclare pentru un viitor mai verde. Transport gratuit!',
        type: 'website',
    },
}

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="ro">
            <body className={`${montserrat.className} antialiased`}>
                <Header/>
                <GroundedNatureBackground/>
                {children}
                <Footer/>
            </body>
        </html>
    );
}
