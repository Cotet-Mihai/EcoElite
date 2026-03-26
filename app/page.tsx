import HomeHeroSection from "@/components/HomeHeroSection";
import HomeWhyRecycleSection from "@/components/HomeWhyRecycleSection";
import HomeTargetAudienceSection from "@/components/HomeTargetAudienceSection";
import HomeOurMissionSection from "@/components/HomeOurMissionSection";
import HomeFAQSection from "@/components/HomeFAQSection";
import ContactForm from "@/components/ContactForm";

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