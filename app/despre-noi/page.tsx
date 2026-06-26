import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import StructuralTransition from "@/components/StructuralTransition";
import DecorativeText from "@/components/DecorativeText";
import AboutHeroSection from "@/components/AboutHeroSection";
import AboutGallerySection from "@/components/AboutGallerySection";
import AboutManifestoSection from "@/components/AboutManifestoSection";
import AboutValuesSection from "@/components/AboutValuesSection";
import AboutServiceSection from "@/components/AboutServiceSection";

export const metadata: Metadata = {
    title: "Despre Noi",
    description:
        "Descoperă echipa Eco Elite S.R.L. — misiunea noastră de reciclare responsabilă, valorile care ne ghidează și serviciile de colectare deșeuri metalice din București.",
    alternates: {
        canonical: "https://ecoelite.ro/despre-noi",
    },
    openGraph: {
        title: "Despre Noi | Eco Elite",
        description:
            "Misiunea, valorile și serviciile Eco Elite — firma de reciclare metale din București.",
        url: "https://ecoelite.ro/despre-noi",
    },
};

export default function AboutPage() {
    return (
        <main className="w-full overflow-x-hidden bg-transparent min-h-screen text-secondary-foreground mt-10">

            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 right-0 -translate-y-10 translate-x-1/3 hero-image-reveal">
                    {/* Changed from h1 to p — decorative only, real h1 is inside AboutHeroSection */}
                    <p className="font-serif text-[22vw] font-black text-white/[0.02] leading-none uppercase tracking-tighter whitespace-nowrap">
                        Despre
                    </p>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-0">
                <AboutHeroSection/>
                <AboutGallerySection/>
                <AboutManifestoSection/>
                <AboutValuesSection/>
                <AboutServiceSection/>
            </div>

            <StructuralTransition />

            <div className="max-w-7xl mx-auto px-4 md:px-0 reveal-on-scroll">
                <ContactForm />
            </div>
        </main>
    );
}
