import HeroSection from "@/components/HeroSection";
import TargetAudience from "@/components/TargetAudienceSection";
import PricesSection from "@/components/PricesSection";
import MissionSection from "@/components/OurMission";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import StatsRibbon from "@/components/StatsRibbon";

export default function Home() {
  return (
      <main>
          <HeroSection/>
          <TargetAudience/>
          <StatsRibbon/>
          <PricesSection/>
          <MissionSection/>
          <FAQSection/>
          <div className={'mb-24'}>
              <ContactForm/>
          </div>
      </main>
  );
}
