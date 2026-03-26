import ContactForm from "@/components/ContactForm";
import StructuralTransition from "@/components/StructuralTransition";
import DecorativeText from "@/components/DecorativeText";
import AboutHeroSection from "@/components/AboutHeroSection";
import AboutGallerySection from "@/components/AboutGallerySection";
import AboutManifestoSection from "@/components/AboutManifestoSection";
import AboutValuesSection from "@/components/AboutValuesSection";
import AboutServiceSection from "@/components/AboutServiceSection";

export default function AboutPage() {
    return (
        /* Containerul de siguranță: ocupă tot ecranul și TAIE tot ce iese în lateral */
        <main className=" w-full overflow-x-hidden bg-transparent min-h-screen text-secondary-foreground mt-10">

            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 right-0 -translate-y-10 translate-x-1/3 hero-image-reveal">
                    <h1 className="font-serif text-[22vw] font-black text-white/[0.02] leading-none uppercase tracking-tighter whitespace-nowrap">
                        Despre
                    </h1>
                </div>
            </div>

            {/* Containerul de conținut: centrează totul la 1280px */}
            <div className="relative max-w-7xl mx-auto px-4 md:px-0">
                {/* 1. HERO SECTION */}
                <AboutHeroSection/>

                {/* 2. ZONA DE IMAGINI */}
                <AboutGallerySection/>

                {/* 3. MANIFESTO */}
                <AboutManifestoSection/>

                {/* 4. VALORI CENTRALE */}
                <AboutValuesSection/>

                {/* 5. CE COLECTĂM */}
                <AboutServiceSection/>
            </div>

            {/* Tranzitia și Formularul de obicei dau bine Full Width,
                le scoatem din max-w dacă vrei să atingă marginile ecranului */}
            <StructuralTransition />

            <div className="max-w-7xl mx-auto px-4 md:px-0 reveal-on-scroll">
                <ContactForm />
            </div>
        </main>
    );
}