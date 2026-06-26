import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { montserrat } from "@/utils/fonts";
import Footer from "@/components/Footer";
import BackgroundLayer from "@/components/BackgroundLayer";
import { Analytics } from "@vercel/analytics/next";
import React from "react";

const siteUrl = "https://ecoelite.ro";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        template: "%s | Eco Elite",
        default: "Eco Elite | Colectare și Reciclare Deșeuri Metalice București",
    },
    description:
        "Eco Elite S.R.L. oferă servicii profesionale de colectare și reciclare deșeuri metalice (fier, cupru, aluminiu, inox) în București. Prețuri zilnice actualizate, transport inclus.",
    keywords: [
        "reciclare metale bucurești",
        "fier vechi",
        "cupru reciclare",
        "aluminiu reciclare",
        "colectare deșeuri metalice",
        "DEEE reciclare",
        "centru reciclare bucurești",
    ],
    authors: [{ name: "Eco Elite S.R.L.", url: siteUrl }],
    creator: "Eco Elite S.R.L.",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
    },
    alternates: {
        canonical: siteUrl,
    },
    openGraph: {
        type: "website",
        locale: "ro_RO",
        url: siteUrl,
        siteName: "Eco Elite",
        title: "Eco Elite | Colectare și Reciclare Deșeuri Metalice București",
        description:
            "Servicii profesionale de colectare și reciclare deșeuri metalice în bucurești. Prețuri zilnice, transport inclus.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Eco Elite | Colectare și Reciclare Deșeuri Metalice",
        description:
            "Servicii profesionale de colectare și reciclare deșeuri metalice în bucurești.",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RecyclingCenter",
    name: "Eco Elite S.R.L.",
    url: siteUrl,
    telephone: "+40784079513",
    email: "office@ecoelite.ro",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Strada Andronache, Nr 254",
        addressLocality: "București",
        addressRegion: "Sector 2",
        postalCode: "022529",
        addressCountry: "RO",
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "17:00",
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "08:00",
            closes: "13:00",
        },
    ],
    priceRange: "$$",
    description:
        "Eco Elite S.R.L. oferă servicii profesionale de colectare și reciclare deșeuri metalice în bucurești.",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ro" className={`${montserrat.className} h-full antialiased`}>
        <body className="min-h-full flex flex-col relative">
        <Header />
        <BackgroundLayer />
        {children}
        <Footer />
        <Analytics />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
                    if (document.readyState === 'complete') {
                        setTimeout(initObserver, 100);
                    } else {
                        window.addEventListener('load', () => setTimeout(initObserver, 100));
                    }
                    const mutationObserver = new MutationObserver((mutations) => {
                        mutations.forEach(() => { initObserver(); });
                    });
                    mutationObserver.observe(document.body, { childList: true, subtree: true });
                `,
            }}
        />
        </body>
        </html>
    );
}