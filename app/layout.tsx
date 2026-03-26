import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { montserrat } from "@/utils/fonts";
import Footer from "@/components/Footer";
import BackgroundLayer from "@/components/BackgroundLayer";
import React from "react";

export const metadata: Metadata = {
    title: 'Eco Elite | Colectare și Reciclare Deșeuri',
    description: 'Eco Elite oferă servicii profesionale de colectare și reciclare deșeuri...',
    // ... restul metadatelor
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html
            lang="ro"
            className={`${montserrat.className} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col relative">
        <Header />
        <BackgroundLayer />

        {children}

        <Footer />

        {/* --- SCRIPTUL PENTRU ANIMAȚII (SEO SAFE) --- */}
        <script
            dangerouslySetInnerHTML={{
                __html: `
                            const initObserver = () => {
                                const observerOptions = {
                                    threshold: 0.1,
                                    rootMargin: '0px 0px -50px 0px'
                                };
                        
                                const observer = new IntersectionObserver((entries) => {
                                    entries.forEach(entry => {
                                        if (entry.isIntersecting) {
                                            entry.target.classList.add('is-visible');
                                            observer.unobserve(entry.target);
                                        }
                                    });
                                }, observerOptions);
                        
                                document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
                                    observer.observe(el);
                                });
                            };
                        
                            // Folosim un mic delay pentru a lăsa React să hidrateze componentele
                            // înainte ca scriptul nostru să modifice clasele din DOM.
                            if (document.readyState === 'complete') {
                                setTimeout(initObserver, 100);
                            } else {
                                window.addEventListener('load', () => setTimeout(initObserver, 100));
                            }
                        
                            // Pentru navigările Next.js (SPA transitions)
                            const mutationObserver = new MutationObserver((mutations) => {
                                mutations.forEach(() => {
                                    initObserver();
                                });
                            });
                        
                            mutationObserver.observe(document.body, { childList: true, subtree: true });
                            `,
            }}
        />
        </body>
        </html>
    );
}