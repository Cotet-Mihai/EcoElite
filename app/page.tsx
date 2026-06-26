import type { Metadata } from "next";
import HomeHeroSection from "@/components/HomeHeroSection";
import HomeWhyRecycleSection from "@/components/HomeWhyRecycleSection";
import HomeTargetAudienceSection from "@/components/HomeTargetAudienceSection";
import HomeOurMissionSection from "@/components/HomeOurMissionSection";
import HomeFAQSection from "@/components/HomeFAQSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: { absolute: "Eco Elite | Colectare și Reciclare Deșeuri Metalice București" },
    description:
        "Eco Elite S.R.L. cumpără metale feroase și neferoase: fier vechi, cupru, aluminiu, inox, alamă, plumb. Prețuri zilnice actualizate. Colectare la domiciliu disponibilă în București.",
    alternates: {
        canonical: "https://ecoelite.ro",
    },
    openGraph: {
        title: "Eco Elite | Colectare și Reciclare Deșeuri Metalice București",
        description:
            "Cumpărăm metale feroase și neferoase. Prețuri zilnice, transport inclus, autorizați legal.",
        url: "https://ecoelite.ro",
    },
};

export default function Home() {
    return (
        <main className="overflow-x-hidden">
            <HomeHeroSection />

            <section className="reveal-on-scroll">
                <HomeWhyRecycleSection />
            </section>

            <section className="reveal-on-scroll">
                <HomeTargetAudienceSection />
            </section>

            <section className="reveal-on-scroll">
                <HomeOurMissionSection />
            </section>

            <section className="reveal-on-scroll">
                <HomeFAQSection />
            </section>

            <section className="reveal-on-scroll">
                <ContactForm />
            </section>
        </main>
    );
}